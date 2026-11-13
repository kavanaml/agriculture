import React, { useEffect, useRef, useState } from 'react';
import { Bell, Check, RefreshCw, TrendingUp, X } from 'lucide-react';
import { getLocText, t } from '../data/translations.js';

export function PriceAlertCenter({
  language,
  alerts,
  activeToast,
  browserNotifyEnabled,
  onDismissToast,
  onMarkAllRead,
  onTriggerLiveCheck,
  onRequestBrowserNotify,
  onSelectProduceFromAlert,
}) {
  const [open, setOpen] = useState(false);
  const panelRef = useRef(null);

  const unreadCount = alerts.filter((a) => !a.read).length;

  useEffect(() => {
    const handleClickOutside = (ev) => {
      if (panelRef.current && !panelRef.current.contains(ev.target)) {
        setOpen(false);
      }
    };
    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open]);

  return (
    <>
      {/* Header Notification Bell & Popover */}
      <div className="relative" ref={panelRef}>
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-label={t(language, 'priceAlertsTitle')}
          className={`relative inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-semibold transition-colors whitespace-nowrap shrink-0 ${
            unreadCount > 0
              ? 'bg-amber-50 border-amber-400 text-amber-950 hover:bg-amber-100'
              : 'bg-white border-emerald-900/15 text-emerald-900 hover:bg-emerald-50'
          }`}
        >
          <Bell className={`w-3.5 h-3.5 ${unreadCount > 0 ? 'text-amber-600' : 'text-emerald-700'}`} />
          <span className="hidden md:inline">{t(language, 'priceAlertBtnLabel')}</span>
          {unreadCount > 0 && (
            <span className="font-mono tabular-nums font-bold text-[11px] bg-amber-600 text-white rounded px-1.5 py-0.2">
              {unreadCount}
            </span>
          )}
        </button>

        {open && (
          <div className="absolute right-0 mt-2 w-[calc(100vw-2rem)] sm:w-96 bg-white border border-emerald-900/15 rounded-2xl shadow-xl z-50 overflow-hidden">
            <div className="px-4 py-3 border-b border-emerald-900/10 flex items-center justify-between gap-2 bg-emerald-50/50">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-emerald-700" />
                <h3 className="text-sm font-display font-bold text-emerald-950">
                  {t(language, 'priceAlertsTitle')}
                </h3>
              </div>

              {unreadCount > 0 && (
                <button
                  type="button"
                  onClick={onMarkAllRead}
                  className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 hover:text-emerald-900"
                >
                  <Check className="w-3.5 h-3.5" />
                  <span>{t(language, 'priceAlertMarkRead')}</span>
                </button>
              )}
            </div>

            {/* Action Toolbar */}
            <div className="px-4 py-2.5 border-b border-emerald-900/8 flex flex-wrap items-center justify-between gap-2 bg-white">
              <button
                type="button"
                onClick={onTriggerLiveCheck}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold transition-colors"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>{t(language, 'priceAlertCheckBtn')}</span>
              </button>

              <button
                type="button"
                onClick={onRequestBrowserNotify}
                className={`text-xs font-semibold px-2.5 py-1.5 rounded-lg border transition-colors ${
                  browserNotifyEnabled
                    ? 'bg-emerald-50 border-emerald-300 text-emerald-800'
                    : 'bg-white border-emerald-900/15 text-emerald-900 hover:bg-emerald-50'
                }`}
              >
                {browserNotifyEnabled
                  ? t(language, 'priceAlertBrowserOn')
                  : t(language, 'priceAlertEnableBrowser')}
              </button>
            </div>

            {/* Alerts List */}
            <div className="max-h-80 overflow-y-auto divide-y divide-emerald-900/8">
              {alerts.length === 0 ? (
                <div className="p-6 text-center text-xs text-emerald-800/75 leading-relaxed">
                  {t(language, 'priceAlertEmpty')}
                </div>
              ) : (
                alerts.map((alert) => (
                  <div
                    key={alert.id}
                    className={`p-3.5 transition-colors ${
                      alert.read ? 'bg-white' : 'bg-emerald-50/50'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="space-y-1">
                        <div className="flex flex-wrap items-center gap-1.5 text-xs">
                          <span className="font-bold text-emerald-950">
                            {getLocText(alert.produceName, language)}
                          </span>
                          <span className="text-emerald-900/40" aria-hidden="true">·</span>
                          <span className="font-semibold text-emerald-700">
                            +₹{alert.deltaAmount}/Qtl (+{alert.deltaPct}%)
                          </span>
                          {alert.targetCrossed && (
                            <>
                              <span className="text-emerald-900/40" aria-hidden="true">·</span>
                              <span className="font-semibold text-amber-700">
                                {t(language, 'priceAlertTargetReached')}
                              </span>
                            </>
                          )}
                        </div>

                        <div className="text-xs text-emerald-900/80">
                          {getLocText(alert.mandiName, language)}
                        </div>

                        <div className="text-[11px] font-mono tabular-nums text-emerald-800/75">
                          ₹{alert.oldPrice.toLocaleString('en-IN')} →{' '}
                          <strong className="text-emerald-900">
                            ₹{alert.newPrice.toLocaleString('en-IN')}/Qtl
                          </strong>
                          {' · '}
                          {alert.timestamp}
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => {
                          onSelectProduceFromAlert(alert.produceId);
                          setOpen(false);
                        }}
                        className="text-[11px] font-semibold text-emerald-700 hover:text-emerald-900 underline underline-offset-2 shrink-0"
                      >
                        {t(language, 'priceAlertViewMandi')}
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        )}
      </div>

      {/* Live Price Increase Toast Banner */}
      {activeToast && (
        <div
          role="status"
          aria-live="polite"
          className="fixed top-20 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-96 bg-white border border-emerald-600/40 rounded-xl shadow-lg p-4 flex items-start gap-3"
        >
          <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
            <TrendingUp className="w-5 h-5" />
          </div>

          <div className="flex-1 min-w-0 space-y-1">
            <div className="flex items-center justify-between gap-2">
              <span className="text-xs font-bold text-emerald-800">
                {t(language, 'priceAlertSurgeTag')} · +{activeToast.deltaPct}%
              </span>
              <button
                type="button"
                onClick={onDismissToast}
                aria-label={t(language, 'closeArticle')}
                className="p-0.5 rounded text-emerald-800/70 hover:text-emerald-950"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="text-sm font-display font-bold text-emerald-950 truncate">
              {getLocText(activeToast.produceName, language)} —{' '}
              <span className="text-emerald-700 font-mono tabular-nums">
                ₹{activeToast.newPrice.toLocaleString('en-IN')}/Qtl
              </span>
            </div>

            <div className="text-xs text-emerald-800/80 flex items-center justify-between gap-2">
              <span className="truncate">{getLocText(activeToast.mandiName, language)}</span>
              <span className="font-mono tabular-nums font-semibold text-emerald-700 shrink-0">
                +₹{activeToast.deltaAmount}
              </span>
            </div>

            <div className="pt-1">
              <button
                type="button"
                onClick={() => {
                  onSelectProduceFromAlert(activeToast.produceId);
                  onDismissToast();
                }}
                className="text-xs font-semibold text-emerald-700 hover:text-emerald-900 underline underline-offset-4"
              >
                {t(language, 'priceAlertViewMandi')}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
