import React, { useMemo, useState } from 'react';
import { ChevronDown, ChevronUp, ExternalLink, Landmark, Search } from 'lucide-react';
import { SCHEMES_DATA } from '../data/schemesAndNews.js';
import { getLocText, t } from '../data/translations.js';

export function YojanaMithraTab({ profile }) {
  const language = profile.language;
  const [category, setCategory] = useState('all');
  const [search, setSearch] = useState('');
  const [expandedId, setExpandedId] = useState(SCHEMES_DATA[0].id);

  // AI Scheme Helper
  const [landAcres, setLandAcres] = useState('3');
  const [mainCrop, setMainCrop] = useState('Onion & Vegetables');
  const [need, setNeed] = useState('Low-interest crop loan & storage subsidy');
  const [aiResult, setAiResult] = useState('');
  const [aiLoading, setAiLoading] = useState(false);
  const [aiError, setAiError] = useState('');

  const filteredSchemes = useMemo(() => {
    const q = search.trim().toLowerCase();
    return SCHEMES_DATA.filter((item) => {
      const catMatch = category === 'all' || item.category === category;
      if (!catMatch) return false;
      if (!q) return true;
      return (
        getLocText(item.title, language).toLowerCase().includes(q) ||
        getLocText(item.summary, language).toLowerCase().includes(q) ||
        item.title.en.toLowerCase().includes(q)
      );
    });
  }, [category, search, language]);

  const categories = [
    { id: 'all', label: t(language, 'catAll') },
    { id: 'loan', label: t(language, 'catLoan') },
    { id: 'subsidy', label: t(language, 'catSubsidy') },
    { id: 'insurance', label: t(language, 'catInsurance') },
    { id: 'infrastructure', label: t(language, 'catInfra') },
  ];

  const handleMatchSchemes = async (e) => {
    e.preventDefault();
    setAiLoading(true);
    setAiError('');
    try {
      const response = await fetch('/api/schemes-helper', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          language,
          locality: profile.locality,
          landAcres,
          crop: mainCrop,
          need,
        }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Failed to match schemes');
      }
      setAiResult(data.recommendation);
    } catch (err) {
      setAiError(err instanceof Error ? err.message : 'Unable to reach Scheme Advisor');
    } finally {
      setAiLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header & Search */}
      <section className="bg-white border border-emerald-900/10 rounded-xl p-5">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="space-y-1">
            <h2 className="text-xl font-display font-bold text-emerald-950">
              {t(language, 'yojanaTitle')}
            </h2>
            <p className="text-xs text-emerald-800/75 max-w-2xl">
              {t(language, 'yojanaSubtitle')}
            </p>
          </div>

          <div className="relative w-full lg:w-80">
            <Search className="w-4 h-4 text-emerald-700/70 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={t(language, 'yojanaSearchPlaceholder')}
              className="w-full pl-10 pr-3.5 py-2.5 text-sm bg-emerald-50/40 border border-emerald-900/15 rounded-lg text-emerald-950 placeholder:text-emerald-800/45 focus:outline-none focus:ring-2 focus:ring-emerald-600/30"
            />
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="mt-4 pt-4 border-t border-emerald-900/8 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setCategory(cat.id)}
              className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap ${
                category === cat.id
                  ? 'bg-emerald-700 text-white shadow-sm'
                  : 'bg-emerald-50/70 text-emerald-900 hover:bg-emerald-100/80 border border-emerald-900/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Personalized Scheme & Loan Matcher */}
      <section className="bg-white border border-emerald-900/10 rounded-xl p-5">
        <div className="flex items-center gap-2.5 mb-3">
          <Landmark className="w-5 h-5 text-amber-600 shrink-0" />
          <h3 className="text-base font-display font-bold text-emerald-950">
            {t(language, 'schemeHelperTitle')}
          </h3>
        </div>

        <form onSubmit={handleMatchSchemes} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 items-end">
          <div>
            <label className="block text-xs font-semibold text-emerald-900 mb-1">
              {t(language, 'landAcresLabel')}
            </label>
            <input
              type="text"
              value={landAcres}
              onChange={(e) => setLandAcres(e.target.value)}
              className="w-full px-3 py-2 text-sm bg-emerald-50/35 border border-emerald-900/15 rounded-lg text-emerald-950"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-emerald-900 mb-1">
              {t(language, 'mainCropLabel')}
            </label>
            <input
              type="text"
              value={mainCrop}
              onChange={(e) => setMainCrop(e.target.value)}
              className="w-full px-3 py-2 text-sm bg-emerald-50/35 border border-emerald-900/15 rounded-lg text-emerald-950"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-emerald-900 mb-1">
              {t(language, 'needLabel')}
            </label>
            <input
              type="text"
              value={need}
              onChange={(e) => setNeed(e.target.value)}
              className="w-full px-3 py-2 text-sm bg-emerald-50/35 border border-emerald-900/15 rounded-lg text-emerald-950"
            />
          </div>
          <button
            type="submit"
            disabled={aiLoading}
            className="py-2.5 px-4 rounded-lg bg-amber-600 hover:bg-amber-700 disabled:opacity-60 text-white text-sm font-semibold transition-colors whitespace-nowrap"
          >
            {t(language, 'schemeHelperBtn')}
          </button>
        </form>

        {aiError && (
          <div className="mt-3 text-xs text-red-700 bg-red-50 border border-red-200 rounded-lg p-3">
            {aiError}
          </div>
        )}
        {aiResult && (
          <div className="mt-4 bg-emerald-50/70 border border-emerald-900/10 rounded-xl p-4 text-sm text-emerald-950 whitespace-pre-line leading-relaxed">
            {aiResult}
          </div>
        )}
      </section>

      {/* Schemes & Loans List */}
      <section className="space-y-4">
        {filteredSchemes.map((scheme) => {
          const isOpen = expandedId === scheme.id;
          return (
            <article
              key={scheme.id}
              className="bg-white border border-emerald-900/10 rounded-xl overflow-hidden transition-colors"
            >
              <button
                type="button"
                onClick={() => setExpandedId(isOpen ? null : scheme.id)}
                className="w-full text-left p-5 flex items-start justify-between gap-4 hover:bg-emerald-50/30 transition-colors"
              >
                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-emerald-800/75">
                    <span className="font-semibold text-emerald-800">
                      {getLocText(scheme.ministry, language)}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="font-semibold text-amber-700">
                      {getLocText(scheme.benefitHighlight, language)}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-display font-bold text-emerald-950">
                    {getLocText(scheme.title, language)}
                  </h3>
                  <p className="text-xs sm:text-sm text-emerald-900/80 leading-relaxed max-w-3xl">
                    {getLocText(scheme.summary, language)}
                  </p>
                </div>

                <div className="shrink-0 mt-1 text-emerald-800">
                  {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </div>
              </button>

              {isOpen && (
                <div className="px-5 pb-5 pt-3 border-t border-emerald-900/10 bg-emerald-50/25 grid grid-cols-1 md:grid-cols-3 gap-5">
                  <div>
                    <h4 className="text-xs font-bold text-emerald-950 mb-2">
                      {t(language, 'eligibilityLabel')}
                    </h4>
                    <ul className="space-y-1.5 text-xs text-emerald-900/85 list-disc pl-4">
                      {scheme.eligibility.map((el, i) => (
                        <li key={i}>{getLocText(el, language)}</li>
                      ))}
                    </ul>
                    <div className="mt-3 text-xs font-semibold text-emerald-800">
                      {getLocText(scheme.interestOrSupport, language)}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold text-emerald-950 mb-2">
                      {t(language, 'documentsLabel')}
                    </h4>
                    <ul className="space-y-1.5 text-xs text-emerald-900/85 list-disc pl-4">
                      {scheme.documents.map((doc, i) => (
                        <li key={i}>{getLocText(doc, language)}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col justify-between gap-3">
                    <div>
                      <h4 className="text-xs font-bold text-emerald-950 mb-2">
                        {t(language, 'applyStepsLabel')}
                      </h4>
                      <p className="text-xs text-emerald-900/85 leading-relaxed">
                        {getLocText(scheme.applySteps, language)}
                      </p>
                    </div>
                    <div>
                      <a
                        href={scheme.portalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 hover:text-emerald-900 underline underline-offset-4"
                      >
                        <span>{t(language, 'visitPortal')}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </article>
          );
        })}
      </section>
    </div>
  );
}
