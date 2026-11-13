import React, { useMemo, useState } from 'react';
import { Newspaper, RefreshCw, Sprout, X } from 'lucide-react';
import { NEWS_DATA } from '../data/schemesAndNews.js';
import { getLocText, t } from '../data/translations.js';

export function MandihutTab({ profile }) {
  const language = profile.language;
  const [category, setCategory] = useState('all');
  const [activeArticle, setActiveArticle] = useState(null);
  const [briefing, setBriefing] = useState('');
  const [briefingLoading, setBriefingLoading] = useState(false);
  const [briefingError, setBriefingError] = useState('');
  const [failedImages, setFailedImages] = useState({});

  const filteredArticles = useMemo(() => {
    if (category === 'all') return NEWS_DATA;
    return NEWS_DATA.filter((item) => item.category === category);
  }, [category]);

  const categories = [
    { id: 'all', label: t(language, 'newsCatAll') },
    { id: 'market', label: t(language, 'newsCatMarket') },
    { id: 'weather', label: t(language, 'newsCatWeather') },
    { id: 'tech', label: t(language, 'newsCatTech') },
    { id: 'policy', label: t(language, 'newsCatPolicy') },
  ];

  const handleGenerateBriefing = async () => {
    setBriefingLoading(true);
    setBriefingError('');
    try {
      const response = await fetch('/api/mandihut-briefing', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          language,
          locality: profile.locality,
        }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Failed to generate briefing');
      }
      setBriefing(data.briefing);
    } catch (err) {
      setBriefingError(err instanceof Error ? err.message : 'Unable to fetch briefing');
    } finally {
      setBriefingLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header & Category Bar */}
      <section className="bg-white border border-emerald-900/10 rounded-xl p-5">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="space-y-1">
            <h2 className="text-xl font-display font-bold text-emerald-950">
              {t(language, 'mandihutTitle')}
            </h2>
            <p className="text-xs text-emerald-800/75 max-w-2xl">
              {t(language, 'mandihutSubtitle')}
            </p>
          </div>

          <button
            type="button"
            onClick={handleGenerateBriefing}
            disabled={briefingLoading}
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-700 hover:bg-emerald-800 disabled:opacity-60 text-white text-xs font-semibold transition-colors whitespace-nowrap shrink-0"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${briefingLoading ? 'animate-spin' : ''}`} />
            <span>{t(language, 'briefingBtn')}</span>
          </button>
        </div>

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

        {briefingError && (
          <div className="mt-4 text-xs text-red-700 bg-red-50 border border-red-200 rounded-lg p-3">
            {briefingError}
          </div>
        )}

        {briefing && (
          <div className="mt-4 bg-amber-50/70 border border-amber-300/70 rounded-xl p-4 space-y-1.5">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-950">
              <Newspaper className="w-4 h-4 text-amber-700" />
              <span>{t(language, 'briefingTitle')}</span>
            </div>
            <p className="text-sm text-emerald-950 whitespace-pre-line leading-relaxed">
              {briefing}
            </p>
          </div>
        )}
      </section>

      {/* News Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredArticles.map((article) => {
          const hasImage = article.imageUrl && !failedImages[article.id];
          return (
            <article
              key={article.id}
              className="bg-white border border-emerald-900/10 rounded-xl overflow-hidden flex flex-col justify-between hover:border-emerald-700/35 transition-colors"
            >
              <div>
                <div className="aspect-[4/3] w-full bg-gradient-to-br from-emerald-50 to-amber-50/60 overflow-hidden relative">
                  {hasImage ? (
                    <img
                      src={article.imageUrl}
                      alt={getLocText(article.title, language)}
                      referrerPolicy="no-referrer"
                      onError={() =>
                        setFailedImages((prev) => ({ ...prev, [article.id]: true }))
                      }
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center text-emerald-800/75">
                      <Sprout className="w-10 h-10 mb-2 text-emerald-700/70" />
                      <span className="text-xs font-semibold">
                        {getLocText(article.source, language)}
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-5 space-y-2.5">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-emerald-800/70">
                    <span className="font-semibold text-emerald-800">
                      {getLocText(article.source, language)}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono tabular-nums">{article.publishedDate}</span>
                    <span aria-hidden="true">·</span>
                    <span>
                      {article.readTimeMin} {t(language, 'minRead')}
                    </span>
                  </div>

                  <h3 className="text-base font-display font-bold text-emerald-950 leading-snug">
                    {getLocText(article.title, language)}
                  </h3>

                  <p className="text-xs text-emerald-900/80 leading-relaxed">
                    {getLocText(article.summary, language)}
                  </p>
                </div>
              </div>

              <div className="px-5 pb-5 pt-2">
                <button
                  type="button"
                  onClick={() => setActiveArticle(article)}
                  className="text-xs font-semibold text-emerald-700 hover:text-emerald-900 underline underline-offset-4"
                >
                  {t(language, 'readFullStory')}
                </button>
              </div>
            </article>
          );
        })}
      </section>

      {/* Full Article Modal */}
      {activeArticle && (
        <div
          className="fixed inset-0 z-50 bg-emerald-950/45 backdrop-blur-[2px] flex items-center justify-center p-4"
          onClick={() => setActiveArticle(null)}
        >
          <div
            className="bg-white border border-emerald-900/15 rounded-2xl max-w-2xl w-full max-h-[88vh] overflow-y-auto shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            {activeArticle.imageUrl && !failedImages[activeArticle.id] && (
              <div className="aspect-[16/9] w-full bg-emerald-50 overflow-hidden">
                <img
                  src={activeArticle.imageUrl}
                  alt={getLocText(activeArticle.title, language)}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            <div className="p-6 space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-xs text-emerald-800/75">
                    <span className="font-semibold text-emerald-800">
                      {getLocText(activeArticle.source, language)}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono">{activeArticle.publishedDate}</span>
                  </div>
                  <h3 className="text-xl font-display font-bold text-emerald-950 leading-snug">
                    {getLocText(activeArticle.title, language)}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveArticle(null)}
                  aria-label={t(language, 'closeArticle')}
                  className="p-2 rounded-lg text-emerald-900 hover:bg-emerald-50 shrink-0"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <p className="text-sm font-medium text-emerald-900 bg-emerald-50/70 border border-emerald-900/10 rounded-xl p-3.5 leading-relaxed">
                {getLocText(activeArticle.summary, language)}
              </p>

              <div className="space-y-3 text-sm text-emerald-950/90 leading-relaxed">
                {activeArticle.body.map((para, i) => (
                  <p key={i}>{getLocText(para, language)}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
