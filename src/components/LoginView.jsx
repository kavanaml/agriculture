import React, { useEffect, useState } from 'react';
import { ArrowRight, Globe, MapPin, Phone, User } from 'lucide-react';
import { MandimithraLogo } from './MandimithraLogo.jsx';
import { t } from '../data/translations.js';
import { POPULAR_LOCALITIES } from '../data/produceData.js';

const LANGUAGE_OPTIONS = [
  { code: 'en', label: 'English' },
  { code: 'kn', label: 'ಕನ್ನಡ' },
  { code: 'hi', label: 'हिन्दी' },
];

export function LoginView({ initialLanguage = 'en', onLogin }) {
  const [showSplash, setShowSplash] = useState(true);
  const [language, setLanguage] = useState(initialLanguage);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [locality, setLocality] = useState('Hubballi, Karnataka');
  const [error, setError] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 1350);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const cleanName = name.trim();
    const cleanPhone = phone.replace(/\D/g, '');
    const cleanLocality = locality.trim();

    if (!cleanName || cleanPhone.length < 10 || !cleanLocality) {
      setError(t(language, 'validationError'));
      return;
    }

    setError('');
    onLogin({
      name: cleanName,
      phone: cleanPhone.slice(0, 10),
      locality: cleanLocality,
      language,
    });
  };

  if (showSplash) {
    return (
      <div
        onClick={() => setShowSplash(false)}
        className="min-h-screen w-full bg-gradient-to-br from-emerald-50 via-[#F7FAF6] to-amber-50/60 flex flex-col items-center justify-center px-6 cursor-pointer select-none"
      >
        <div className="flex flex-col items-center gap-6">
          <MandimithraLogo variant="splash" animate />
          <p className="text-sm sm:text-base font-medium text-emerald-900/80 text-center max-w-md">
            {t(language, 'splashWelcome')}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-[#F7FAF6] flex flex-col items-center justify-center px-4 py-8 sm:px-6">
      <div className="w-full max-w-lg space-y-6">
        {/* Prominent Logo Directly Above Login Credentials */}
        <div className="flex justify-center">
          <MandimithraLogo variant="login" animate />
        </div>

        {/* Clean Single-Elevation Login Card */}
        <div className="bg-white border border-emerald-900/10 rounded-2xl shadow-sm p-6 sm:p-8">
          <div className="space-y-1.5 mb-6">
            <h1 className="text-2xl font-display font-bold text-emerald-950">
              {t(language, 'loginTitle')}
            </h1>
            <p className="text-sm text-emerald-800/75 leading-relaxed">
              {t(language, 'loginSubtitle')}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Language Selection */}
            <div>
              <label className="flex items-center gap-1.5 text-xs font-semibold text-emerald-900 mb-2">
                <Globe className="w-3.5 h-3.5 text-emerald-700" />
                <span>{t(language, 'labelLanguage')}</span>
              </label>
              <div className="grid grid-cols-3 gap-2 p-1 bg-emerald-50/80 border border-emerald-900/10 rounded-xl">
                {LANGUAGE_OPTIONS.map((opt) => (
                  <button
                    key={opt.code}
                    type="button"
                    onClick={() => {
                      setLanguage(opt.code);
                      setError('');
                    }}
                    className={`py-2.5 px-3 rounded-lg text-sm font-semibold transition-colors whitespace-nowrap ${
                      language === opt.code
                        ? 'bg-emerald-700 text-white shadow-sm'
                        : 'text-emerald-900 hover:bg-white/80'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Farmer Name */}
            <div>
              <label htmlFor="farmer-name" className="block text-xs font-semibold text-emerald-900 mb-1.5">
                {t(language, 'labelName')}
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-emerald-700/70 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  id="farmer-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t(language, 'placeholderName')}
                  className="w-full pl-10 pr-4 py-2.5 text-sm bg-white border border-emerald-900/15 rounded-xl text-emerald-950 placeholder:text-emerald-800/45 focus:outline-none focus:ring-2 focus:ring-emerald-600/30 focus:border-emerald-600"
                />
              </div>
            </div>

            {/* Mobile Number */}
            <div>
              <label htmlFor="farmer-phone" className="block text-xs font-semibold text-emerald-900 mb-1.5">
                {t(language, 'labelPhone')}
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 text-emerald-700/70 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  id="farmer-phone"
                  type="tel"
                  maxLength={10}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                  placeholder={t(language, 'placeholderPhone')}
                  className="w-full pl-10 pr-4 py-2.5 text-sm tabular-nums bg-white border border-emerald-900/15 rounded-xl text-emerald-950 placeholder:text-emerald-800/45 focus:outline-none focus:ring-2 focus:ring-emerald-600/30 focus:border-emerald-600"
                />
              </div>
            </div>

            {/* Locality */}
            <div>
              <label htmlFor="farmer-locality" className="block text-xs font-semibold text-emerald-900 mb-1.5">
                {t(language, 'labelLocality')}
              </label>
              <div className="relative">
                <MapPin className="w-4 h-4 text-emerald-700/70 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  id="farmer-locality"
                  type="text"
                  value={locality}
                  onChange={(e) => setLocality(e.target.value)}
                  placeholder={t(language, 'placeholderLocality')}
                  className="w-full pl-10 pr-4 py-2.5 text-sm bg-white border border-emerald-900/15 rounded-xl text-emerald-950 placeholder:text-emerald-800/45 focus:outline-none focus:ring-2 focus:ring-emerald-600/30 focus:border-emerald-600"
                />
              </div>
              <div className="mt-2.5">
                <span className="text-[11px] font-medium text-emerald-800/70 block mb-1.5">
                  {t(language, 'popularLocalities')}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {POPULAR_LOCALITIES.slice(0, 6).map((loc) => (
                    <button
                      key={loc}
                      type="button"
                      onClick={() => setLocality(loc)}
                      className={`text-xs px-2.5 py-1 rounded-md border transition-colors whitespace-nowrap ${
                        locality === loc
                          ? 'bg-emerald-700 text-white border-emerald-700'
                          : 'bg-emerald-50/70 text-emerald-900 border-emerald-900/10 hover:bg-emerald-100/70'
                      }`}
                    >
                      {loc.split(',')[0]}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {error && (
              <div className="text-xs font-medium text-red-700 bg-red-50 border border-red-200 rounded-lg px-3.5 py-2.5">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-sm transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2"
            >
              <span>{t(language, 'loginButton')}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
