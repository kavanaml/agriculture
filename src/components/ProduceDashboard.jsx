import React, { useEffect, useMemo, useState } from 'react';
import {
  AlertTriangle,
  ArrowUpRight,
  Bell,
  CheckCircle2,
  Clock,
  Info,
  RefreshCw,
  Search,
  Send,
  ShieldCheck,
  Sprout,
  TrendingUp,
} from 'lucide-react';
import { analyzeProduce, findProduce, PRODUCE_CATALOG } from '../data/produceData.js';
import { getLocText, t } from '../data/translations.js';
import { PriceForecastChart } from './PriceForecastChart.jsx';

export function ProduceDashboard({
  profile,
  activeProduceId,
  activeProduceName,
  priceBoosts = {},
  watchEnabled = true,
  targetPrices = {},
  onToggleWatch,
  onSetTargetPrice,
  onTriggerPriceCheck,
  onProduceChange,
}) {
  const language = profile.language;
  const [searchInput, setSearchInput] = useState(activeProduceName || 'Onion');
  const [selectedProduce, setSelectedProduce] = useState(() =>
    PRODUCE_CATALOG.find((p) => p.id === activeProduceId) || findProduce(activeProduceName || 'Onion')
  );
  const [sizeId, setSizeId] = useState(() => selectedProduce.sizes[1]?.id || selectedProduce.sizes[0]?.id);
  const [quantityQtl, setQuantityQtl] = useState(30);
  const [requiredQtl, setRequiredQtl] = useState(20);

  // AI Advisor state
  const [advisorQuery, setAdvisorQuery] = useState('');
  const [advisorAnswer, setAdvisorAnswer] = useState('');
  const [advisorLoading, setAdvisorLoading] = useState(false);
  const [advisorError, setAdvisorError] = useState('');

  // Sync if user selects produce from a Price Increase Notification
  useEffect(() => {
    if (activeProduceId && activeProduceId !== selectedProduce.id) {
      const matched = PRODUCE_CATALOG.find((p) => p.id === activeProduceId);
      if (matched) {
        setSelectedProduce(matched);
        setSearchInput(getLocText(matched.name, language));
      }
    }
  }, [activeProduceId, language]);

  // Keep sizeId valid when produce changes
  useEffect(() => {
    const valid = selectedProduce.sizes.some((s) => s.id === sizeId);
    if (!valid) {
      setSizeId(selectedProduce.sizes[1]?.id || selectedProduce.sizes[0]?.id);
    }
    onProduceChange?.(selectedProduce.id, getLocText(selectedProduce.name, language));
  }, [selectedProduce, language]);

  const analysis = useMemo(() => {
    return analyzeProduce({
      produce: selectedProduce,
      sizeId,
      quantityQtl,
      requiredQtl,
      locality: profile.locality,
      priceBoosts,
    });
  }, [selectedProduce, sizeId, quantityQtl, requiredQtl, profile.locality, priceBoosts]);

  const currentTopPrice = analysis.mandisRanked[0]?.grossPricePerQtl || 2500;
  const configuredTarget =
    targetPrices[selectedProduce.id] ?? Math.round((currentTopPrice * 1.04) / 10) * 10;

  const handleAnalyzeSubmit = (e) => {
    e.preventDefault();
    const matched = findProduce(searchInput);
    setSelectedProduce(matched);
    setAdvisorAnswer('');
    setAdvisorError('');
  };

  const handleQuickPick = (produceItem) => {
    setSearchInput(getLocText(produceItem.name, language));
    setSelectedProduce(produceItem);
    setAdvisorAnswer('');
    setAdvisorError('');
  };

  const askAdvisor = async (customQuestion) => {
    const q = (customQuestion ?? advisorQuery).trim();
    if (!q) return;

    setAdvisorQuery(q);
    setAdvisorLoading(true);
    setAdvisorError('');

    try {
      const response = await fetch('/api/advisor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          language,
          produceName: getLocText(analysis.produce.name, language),
          sizeLabel: getLocText(analysis.selectedSize.label, language),
          quantityQtl: analysis.quantityQtl,
          locality: profile.locality,
          topMandi: `${getLocText(analysis.bestNetMandi.name, language)} (₹${analysis.bestNetMandi.netPricePerQtl}/Qtl net)`,
          sellRecommendation: getLocText(analysis.recommendation.headline, language),
          question: q,
        }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Advisor request failed');
      }
      setAdvisorAnswer(data.answer);
    } catch (err) {
      setAdvisorError(err instanceof Error ? err.message : 'Unable to reach AI Advisor');
    } finally {
      setAdvisorLoading(false);
    }
  };

  const maxNetTotal = Math.max(...analysis.mandisRanked.map((m) => m.grossPricePerQtl * analysis.quantityQtl), 1);

  return (
    <div className="space-y-6">
      {/* 1. Compact Produce Search & Inputs Bar */}
      <section className="bg-white border border-emerald-900/10 rounded-xl p-5">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
          <div className="space-y-1">
            <h2 className="text-lg font-display font-bold text-emerald-950">
              {t(language, 'queryTitle')}
            </h2>
            <p className="text-xs text-emerald-800/75">{t(language, 'querySubtitle')}</p>
          </div>

          <form onSubmit={handleAnalyzeSubmit} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 flex-1 lg:max-w-xl">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-emerald-700/70 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder={t(language, 'producePlaceholder')}
                aria-label={t(language, 'produceInputLabel')}
                className="w-full pl-10 pr-3.5 py-2.5 text-sm bg-emerald-50/40 border border-emerald-900/15 rounded-lg text-emerald-950 placeholder:text-emerald-800/45 focus:outline-none focus:ring-2 focus:ring-emerald-600/30 focus:border-emerald-600"
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2.5 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white text-sm font-semibold transition-colors whitespace-nowrap shrink-0"
            >
              {t(language, 'analyzeBtn')}
            </button>
          </form>
        </div>

        {/* Quick-Pick Produce Chips */}
        <div className="mt-4 pt-4 border-t border-emerald-900/8 flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold text-emerald-900/70 mr-1">
            {t(language, 'quickPicksLabel')}
          </span>
          {PRODUCE_CATALOG.map((item) => {
            const isSelected = selectedProduce.id === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleQuickPick(item)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-colors whitespace-nowrap ${
                  isSelected
                    ? 'bg-emerald-700 text-white border-emerald-700'
                    : 'bg-emerald-50/60 text-emerald-900 border-emerald-900/10 hover:bg-emerald-100/70'
                }`}
              >
                {getLocText(item.name, language)}
              </button>
            );
          })}
        </div>

        {/* Size Selector + Harvest Qty & Required Qty Controls */}
        <div className="mt-4 pt-4 border-t border-emerald-900/8 grid grid-cols-1 lg:grid-cols-12 gap-4 items-end">
          <div className="lg:col-span-6">
            <label className="block text-xs font-semibold text-emerald-900 mb-2">
              {t(language, 'sizeSelectLabel')} —{' '}
              <span className="text-emerald-700">{getLocText(selectedProduce.name, language)}</span>
            </label>
            <div className="flex flex-wrap gap-2">
              {selectedProduce.sizes.map((sz) => {
                const active = sz.id === analysis.selectedSize.id;
                return (
                  <button
                    key={sz.id}
                    type="button"
                    onClick={() => setSizeId(sz.id)}
                    className={`px-3 py-2 rounded-lg text-xs font-semibold border transition-colors text-left ${
                      active
                        ? 'bg-amber-50 text-amber-950 border-amber-500 ring-1 ring-amber-500/40'
                        : 'bg-white text-emerald-900 border-emerald-900/15 hover:bg-emerald-50/50'
                    }`}
                  >
                    <div>{getLocText(sz.label, language)}</div>
                    <div className="text-[11px] font-normal text-emerald-800/70 mt-0.5">
                      {getLocText(sz.demandNote, language)}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-3">
            <label htmlFor="harvest-qty" className="block text-xs font-semibold text-emerald-900 mb-1.5">
              {t(language, 'availableQtyLabel')}
            </label>
            <input
              id="harvest-qty"
              type="number"
              min={1}
              max={5000}
              value={quantityQtl}
              onChange={(e) => setQuantityQtl(Math.max(1, Number(e.target.value) || 1))}
              className="w-full px-3.5 py-2 text-sm font-mono tabular-nums bg-white border border-emerald-900/15 rounded-lg text-emerald-950 focus:outline-none focus:ring-2 focus:ring-emerald-600/30"
            />
          </div>

          <div className="lg:col-span-3">
            <label htmlFor="required-qty" className="block text-xs font-semibold text-emerald-900 mb-1.5">
              {t(language, 'requiredQtyLabel')}
            </label>
            <input
              id="required-qty"
              type="number"
              min={1}
              max={5000}
              value={requiredQtl}
              onChange={(e) => setRequiredQtl(Math.max(1, Number(e.target.value) || 1))}
              className="w-full px-3.5 py-2 text-sm font-mono tabular-nums bg-white border border-emerald-900/15 rounded-lg text-emerald-950 focus:outline-none focus:ring-2 focus:ring-emerald-600/30"
            />
          </div>
        </div>

        {/* Live Price Increase Alert Watcher Bar */}
        <div className="mt-4 pt-4 border-t border-emerald-900/8 flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={onToggleWatch}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-colors ${
                watchEnabled
                  ? 'bg-emerald-50 border-emerald-300 text-emerald-900'
                  : 'bg-white border-emerald-900/15 text-emerald-800/70'
              }`}
            >
              <Bell className={`w-3.5 h-3.5 ${watchEnabled ? 'text-emerald-700' : 'text-emerald-700/50'}`} />
              <span>{watchEnabled ? t(language, 'priceAlertActive') : t(language, 'priceAlertPaused')}</span>
            </button>

            <label className="inline-flex items-center gap-2 text-xs text-emerald-900">
              <span className="font-medium">{t(language, 'priceAlertWatchLabel')}:</span>
              <input
                type="number"
                min={100}
                step={50}
                value={configuredTarget}
                onChange={(e) =>
                  onSetTargetPrice?.(selectedProduce.id, Math.max(100, Number(e.target.value) || 0))
                }
                className="w-24 px-2.5 py-1 text-xs font-mono tabular-nums bg-white border border-emerald-900/20 rounded-md text-emerald-950 focus:outline-none focus:ring-2 focus:ring-emerald-600/30"
              />
            </label>
          </div>

          <button
            type="button"
            onClick={onTriggerPriceCheck}
            className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-lg bg-amber-600 hover:bg-amber-700 text-white text-xs font-semibold transition-colors whitespace-nowrap shrink-0"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>{t(language, 'priceAlertCheckBtn')}</span>
          </button>
        </div>

        {selectedProduce.isCustom && (
          <p className="mt-3 text-xs text-amber-800 flex items-center gap-1.5">
            <Info className="w-3.5 h-3.5 shrink-0" />
            <span>{t(language, 'customProduceNote')}: {getLocText(selectedProduce.name, language)}</span>
          </p>
        )}
      </section>

      {/* 2. Quantity Requirement / Surplus Alert */}
      <section
        role="status"
        className={`rounded-xl border p-4 flex items-start gap-3 ${
          analysis.quantityAlert.status === 'EXCEEDS_DEMAND'
            ? 'bg-amber-50/90 border-amber-300 text-amber-950'
            : analysis.quantityAlert.status === 'MEETS_EXACT'
            ? 'bg-emerald-50 border-emerald-300 text-emerald-950'
            : 'bg-white border-emerald-900/15 text-emerald-950'
        }`}
      >
        <div className="mt-0.5 shrink-0">
          {analysis.quantityAlert.status === 'EXCEEDS_DEMAND' ? (
            <AlertTriangle className="w-5 h-5 text-amber-600" />
          ) : analysis.quantityAlert.status === 'MEETS_EXACT' ? (
            <CheckCircle2 className="w-5 h-5 text-emerald-700" />
          ) : (
            <Info className="w-5 h-5 text-emerald-700" />
          )}
        </div>
        <div className="space-y-1">
          <div className="text-sm font-bold">
            {getLocText(analysis.quantityAlert.title, language)}
          </div>
          <p className="text-xs leading-relaxed opacity-85">
            {getLocText(analysis.quantityAlert.detail, language)}
          </p>
        </div>
      </section>

      {/* 3. KPI Summary Strip + Sell vs. Wait Recommendation */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white border border-emerald-900/10 rounded-xl p-4">
          <div className="text-xs font-medium text-emerald-800/70">{t(language, 'topRateLabel')}</div>
          <div className="mt-1.5 text-2xl font-display font-bold tabular-nums text-emerald-950">
            ₹{analysis.mandisRanked[0].grossPricePerQtl.toLocaleString('en-IN')}
            <span className="text-xs font-normal text-emerald-800/70">{t(language, 'perQtl')}</span>
          </div>
          <div className="mt-1 text-xs text-emerald-700 truncate">
            {getLocText(analysis.mandisRanked[0].name, language)}
            {analysis.mandisRanked[0].boostAmount > 0 && (
              <span className="ml-1.5 font-mono font-semibold text-emerald-800">
                (+₹{analysis.mandisRanked[0].boostAmount})
              </span>
            )}
          </div>
        </div>

        <div className="bg-white border border-emerald-900/10 rounded-xl p-4">
          <div className="text-xs font-medium text-emerald-800/70">{t(language, 'bestMandiLabel')}</div>
          <div className="mt-1.5 text-2xl font-display font-bold tabular-nums text-emerald-700">
            ₹{analysis.bestNetMandi.totalNetProfit.toLocaleString('en-IN')}
          </div>
          <div className="mt-1 text-xs text-emerald-900/80 truncate">
            {getLocText(analysis.bestNetMandi.name, language)} · {analysis.bestNetMandi.distanceKm} km
          </div>
        </div>

        <div className="bg-white border border-emerald-900/10 rounded-xl p-4">
          <div className="text-xs font-medium text-emerald-800/70">{t(language, 'shelfLifeLabel')}</div>
          <div className="mt-1.5 text-2xl font-display font-bold tabular-nums text-emerald-950">
            {analysis.produce.shelfLifeDays}{' '}
            <span className="text-sm font-semibold">{t(language, 'daysUnit')}</span>
          </div>
          <div className="mt-1 text-xs text-emerald-800/75 truncate">
            {analysis.produce.optimalStorageTemp}
          </div>
        </div>

        <div
          className={`rounded-xl border p-4 ${
            analysis.recommendation.action === 'WAIT_DAYS'
              ? 'bg-emerald-700 border-emerald-800 text-white'
              : 'bg-amber-600 border-amber-700 text-white'
          }`}
        >
          <div className="text-xs font-semibold uppercase tracking-wide opacity-90">
            {t(language, 'recommendedActionTitle')}
          </div>
          <div className="mt-1.5 text-xl font-display font-bold flex items-center gap-2">
            {analysis.recommendation.action === 'WAIT_DAYS' ? (
              <>
                <Clock className="w-5 h-5 shrink-0" />
                <span>{t(language, 'waitDaysBadge')} ({analysis.recommendation.waitDays}d)</span>
              </>
            ) : (
              <>
                <TrendingUp className="w-5 h-5 shrink-0" />
                <span>{t(language, 'sellNowBadge')}</span>
              </>
            )}
          </div>
          <div className="mt-1 text-xs opacity-90 tabular-nums">
            {analysis.recommendation.bestDayProfitPct >= 0 ? '+' : ''}
            {analysis.recommendation.bestDayProfitPct}% {t(language, 'netGainLabel')}
          </div>
        </div>
      </section>

      {/* Recommendation Detail Strip */}
      <section className="bg-white border border-emerald-900/10 rounded-xl p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-sm font-bold text-emerald-950">
            <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
            <span>{getLocText(analysis.recommendation.headline, language)}</span>
          </div>
          <p className="text-xs text-emerald-800/80 leading-relaxed">
            {getLocText(analysis.recommendation.reason, language)}
          </p>
        </div>
        <div className="text-xs bg-emerald-50/80 border border-emerald-900/10 rounded-lg px-3.5 py-2.5 text-emerald-900 md:max-w-md shrink-0">
          <span className="font-semibold block mb-0.5">{t(language, 'storageTempLabel')}:</span>
          {getLocText(analysis.produce.storageTip, language)}
        </div>
      </section>

      {/* 4. 14-Day History & 5-Day Forecast Chart + Shelf-Life Profit/Loss Table */}
      <section className="grid grid-cols-1 xl:grid-cols-12 gap-6">
        <div className="xl:col-span-7">
          <PriceForecastChart points={analysis.chartPoints} language={language} />
        </div>

        <div className="xl:col-span-5 bg-white border border-emerald-900/10 rounded-xl p-5 flex flex-col">
          <div className="mb-3">
            <h3 className="text-base font-display font-bold text-emerald-950">
              {t(language, 'shelfTitle')}
            </h3>
            <p className="text-xs text-emerald-800/70">{t(language, 'shelfSubtitle')}</p>
          </div>

          <div className="overflow-x-auto flex-1">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-emerald-900/10 text-[11px] font-semibold text-emerald-800/75">
                  <th className="py-2 pr-2">{t(language, 'colDay')}</th>
                  <th className="py-2 px-2 text-right">{t(language, 'colProjectedRate')}</th>
                  <th className="py-2 px-2 text-right">{t(language, 'colPriceMove')}</th>
                  <th className="py-2 px-2 text-right">{t(language, 'colShrinkage')}</th>
                  <th className="py-2 pl-2 text-right">{t(language, 'colNetProfitPct')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-emerald-900/8 text-xs tabular-nums">
                {analysis.shelfProjections.map((row) => {
                  const isPositive = row.netProfitPct >= 0;
                  const isBestDay =
                    analysis.recommendation.action === 'WAIT_DAYS' &&
                    row.dayOffset === analysis.recommendation.waitDays;
                  return (
                    <tr
                      key={row.dayOffset}
                      className={isBestDay ? 'bg-emerald-50/90 font-semibold' : 'hover:bg-emerald-50/40'}
                    >
                      <td className="py-2.5 pr-2 font-medium text-emerald-950 whitespace-nowrap">
                        {row.label}
                      </td>
                      <td className="py-2.5 px-2 text-right font-mono text-emerald-950">
                        ₹{row.projectedGrossPrice.toLocaleString('en-IN')}
                      </td>
                      <td className="py-2.5 px-2 text-right font-mono text-emerald-700">
                        +{row.priceChangePct}%
                      </td>
                      <td className="py-2.5 px-2 text-right font-mono text-amber-700">
                        -{row.wastageShrinkagePct}%
                      </td>
                      <td
                        className={`py-2.5 pl-2 text-right font-mono font-bold ${
                          isPositive ? 'text-emerald-700' : 'text-red-600'
                        }`}
                      >
                        {isPositive ? `+${row.netProfitPct}%` : `${row.netProfitPct}%`}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. Real-Time Nearby Mandis (Decreasing Order) + Mandi Profit Comparison */}
      <section className="grid grid-cols-1 xl:grid-cols-12 gap-6">
        <div className="xl:col-span-7 bg-white border border-emerald-900/10 rounded-xl p-5">
          <div className="mb-4">
            <h3 className="text-base font-display font-bold text-emerald-950">
              {t(language, 'mandisTitle')}
            </h3>
            <p className="text-xs text-emerald-800/70">{t(language, 'mandisSubtitle')}</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-emerald-900/10 text-[11px] font-semibold text-emerald-800/75">
                  <th className="py-2.5 pr-2">{t(language, 'colRank')}</th>
                  <th className="py-2.5 px-2">{t(language, 'colMandi')}</th>
                  <th className="py-2.5 px-2 text-right">{t(language, 'colGrossRate')}</th>
                  <th className="py-2.5 px-2 text-right">{t(language, 'colTransportFee')}</th>
                  <th className="py-2.5 px-2 text-right">{t(language, 'colNetRate')}</th>
                  <th className="py-2.5 pl-2 text-right">{t(language, 'colTotalRevenue')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-emerald-900/8 text-xs tabular-nums">
                {analysis.mandisRanked.map((m, idx) => {
                  const isBestNet = m.id === analysis.bestNetMandi.id;
                  return (
                    <tr
                      key={m.id}
                      className={isBestNet ? 'bg-emerald-50/75' : 'hover:bg-emerald-50/35'}
                    >
                      <td className="py-3 pr-2 font-mono font-bold text-emerald-900">
                        #{idx + 1}
                      </td>
                      <td className="py-3 px-2">
                        <div className="font-semibold text-emerald-950 flex items-center gap-1.5">
                          <span>{getLocText(m.name, language)}</span>
                          {isBestNet && (
                            <ArrowUpRight className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                          )}
                        </div>
                        <div className="text-[11px] text-emerald-800/70">
                          {getLocText(m.district, language)} · {m.distanceKm} {t(language, 'kmAway')}
                        </div>
                      </td>
                      <td className="py-3 px-2 text-right font-mono font-semibold text-emerald-950">
                        ₹{m.grossPricePerQtl.toLocaleString('en-IN')}
                        {m.boostAmount > 0 && (
                          <span className="block text-[10px] text-emerald-700 font-semibold">
                            ↑ +₹{m.boostAmount}
                          </span>
                        )}
                      </td>
                      <td className="py-3 px-2 text-right font-mono text-amber-700">
                        -₹{(m.transportCostPerQtl + m.mandiFeePerQtl).toLocaleString('en-IN')}
                      </td>
                      <td className="py-3 px-2 text-right font-mono font-bold text-emerald-800">
                        ₹{m.netPricePerQtl.toLocaleString('en-IN')}
                      </td>
                      <td className="py-3 pl-2 text-right font-mono font-bold text-emerald-950">
                        ₹{m.totalNetProfit.toLocaleString('en-IN')}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mandi Profit Comparison */}
        <div className="xl:col-span-5 bg-white border border-emerald-900/10 rounded-xl p-5">
          <div className="mb-4">
            <h3 className="text-base font-display font-bold text-emerald-950">
              {t(language, 'comparisonTitle')}
            </h3>
            <p className="text-xs text-emerald-800/70">{t(language, 'comparisonSubtitle')}</p>
          </div>

          <div className="space-y-4">
            {analysis.mandisRanked.map((m) => {
              const grossTotal = m.grossPricePerQtl * analysis.quantityQtl;
              const deductionTotal = (m.transportCostPerQtl + m.mandiFeePerQtl) * analysis.quantityQtl;
              const netPct = Math.round((m.totalNetProfit / maxNetTotal) * 100);
              const dedPct = Math.round((deductionTotal / maxNetTotal) * 100);
              const isBestNet = m.id === analysis.bestNetMandi.id;

              return (
                <div key={m.id} className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className={`font-semibold truncate pr-2 ${isBestNet ? 'text-emerald-800' : 'text-emerald-950'}`}>
                      {getLocText(m.name, language)}
                    </span>
                    <span className="font-mono font-bold tabular-nums text-emerald-950 shrink-0">
                      ₹{m.totalNetProfit.toLocaleString('en-IN')}
                    </span>
                  </div>

                  <div className="w-full h-3 bg-emerald-50 rounded-md overflow-hidden flex">
                    <div
                      className={`h-full ${isBestNet ? 'bg-emerald-600' : 'bg-emerald-500/80'}`}
                      style={{ width: `${Math.max(8, netPct)}%` }}
                      title={`${t(language, 'netProfitLabel')}: ₹${m.totalNetProfit.toLocaleString('en-IN')}`}
                    />
                    <div
                      className="h-full bg-amber-400/85"
                      style={{ width: `${Math.max(2, dedPct)}%` }}
                      title={`${t(language, 'deductionLabel')}: ₹${deductionTotal.toLocaleString('en-IN')}`}
                    />
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-emerald-800/70 font-mono tabular-nums">
                    <span>
                      {t(language, 'grossLabel')}: ₹{grossTotal.toLocaleString('en-IN')}
                    </span>
                    <span>
                      {t(language, 'deductionLabel')}: -₹{deductionTotal.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Contextual AI Produce Advisor */}
      <section className="bg-white border border-emerald-900/10 rounded-xl p-5">
        <div className="flex items-start gap-3 mb-4">
          <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
            <Sprout className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-display font-bold text-emerald-950">
              {t(language, 'advisorTitle')}
            </h3>
            <p className="text-xs text-emerald-800/75">
              {t(language, 'advisorSubtitle')}{' '}
              <strong className="text-emerald-950">
                {getLocText(analysis.produce.name, language)} ({getLocText(analysis.selectedSize.label, language)})
              </strong>
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-3">
          {[t(language, 'advisorQuick1'), t(language, 'advisorQuick2'), t(language, 'advisorQuick3')].map(
            (q, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => askAdvisor(q)}
                className="text-xs px-3 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-900/10 transition-colors text-left"
              >
                {q}
              </button>
            )
          )}
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            askAdvisor();
          }}
          className="flex flex-col sm:flex-row gap-2.5"
        >
          <input
            type="text"
            value={advisorQuery}
            onChange={(e) => setAdvisorQuery(e.target.value)}
            placeholder={t(language, 'advisorPlaceholder')}
            className="flex-1 px-3.5 py-2.5 text-sm bg-emerald-50/40 border border-emerald-900/15 rounded-lg text-emerald-950 placeholder:text-emerald-800/45 focus:outline-none focus:ring-2 focus:ring-emerald-600/30"
          />
          <button
            type="submit"
            disabled={advisorLoading}
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-700 hover:bg-emerald-800 disabled:opacity-60 text-white text-sm font-semibold transition-colors whitespace-nowrap shrink-0"
          >
            <Send className="w-4 h-4" />
            <span>{t(language, 'advisorAskBtn')}</span>
          </button>
        </form>

        {advisorLoading && (
          <div className="mt-4 text-xs font-medium text-emerald-800 bg-emerald-50/70 border border-emerald-900/10 rounded-lg p-3.5">
            {t(language, 'advisorThinking')}
          </div>
        )}

        {advisorError && (
          <div className="mt-4 text-xs font-medium text-red-700 bg-red-50 border border-red-200 rounded-lg p-3.5">
            {advisorError}
          </div>
        )}

        {advisorAnswer && !advisorLoading && (
          <div className="mt-4 bg-emerald-50/60 border border-emerald-900/12 rounded-xl p-4 text-sm text-emerald-950 whitespace-pre-line leading-relaxed">
            {advisorAnswer}
          </div>
        )}
      </section>
    </div>
  );
}
