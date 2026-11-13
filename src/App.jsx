import React, { useCallback, useEffect, useState } from 'react';
import { Globe, LogOut, MapPin, Phone, User } from 'lucide-react';
import { MandimithraLogo } from './components/MandimithraLogo.jsx';
import { LoginView } from './components/LoginView.jsx';
import { ProduceDashboard } from './components/ProduceDashboard.jsx';
import { YojanaMithraTab } from './components/YojanaMithraTab.jsx';
import { MandihutTab } from './components/MandihutTab.jsx';
import { FarmerChatbot } from './components/FarmerChatbot.jsx';
import { PriceAlertCenter } from './components/PriceAlertCenter.jsx';
import { analyzeProduce, findProduce, PRODUCE_CATALOG } from './data/produceData.js';
import { getLocText, t } from './data/translations.js';

const STORAGE_KEY = 'mandimithra_farmer_profile_v1';

const LANGUAGE_SWITCH = [
  { code: 'en', label: 'EN' },
  { code: 'kn', label: 'ಕನ್ನಡ' },
  { code: 'hi', label: 'हिन्दी' },
];

export default function App() {
  const [profile, setProfile] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });
  const [activeTab, setActiveTab] = useState('dashboard');
  const [activeProduceId, setActiveProduceId] = useState('onion');
  const [activeProduceName, setActiveProduceName] = useState('Onion');

  // Price Increase Notification State
  const [priceBoosts, setPriceBoosts] = useState({});
  const [targetPrices, setTargetPrices] = useState({});
  const [watchEnabled, setWatchEnabled] = useState(true);
  const [alerts, setAlerts] = useState([]);
  const [activeToast, setActiveToast] = useState(null);
  const [browserNotifyEnabled, setBrowserNotifyEnabled] = useState(() => {
    if (typeof window !== 'undefined' && 'Notification' in window) {
      return window.Notification.permission === 'granted';
    }
    return false;
  });

  useEffect(() => {
    try {
      if (profile) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
      } else {
        localStorage.removeItem(STORAGE_KEY);
      }
    } catch {
      // Ignore storage quota errors
    }
  }, [profile]);

  const triggerPriceIncreaseCheck = useCallback(
    (preferredProduceId) => {
      if (!profile || !watchEnabled) return;

      const targetProduce =
        PRODUCE_CATALOG.find((p) => p.id === (preferredProduceId || activeProduceId)) ||
        findProduce(activeProduceName || 'Onion');

      const defaultSizeId = targetProduce.sizes[1]?.id || targetProduce.sizes[0]?.id;
      const snapshot = analyzeProduce({
        produce: targetProduce,
        sizeId: defaultSizeId,
        quantityQtl: 25,
        requiredQtl: 20,
        locality: profile.locality,
        priceBoosts,
      });

      // Pick one of top 2 nearby mandis to experience an authentic upward bid tick
      const mandiPick = snapshot.mandisRanked[Math.floor(Math.random() * Math.min(2, snapshot.mandisRanked.length))];
      const oldPrice = mandiPick.grossPricePerQtl;
      const pctBump = 0.03 + Math.random() * 0.035; // +3.0% to +6.5%
      const deltaAmount = Math.max(45, Math.round((oldPrice * pctBump) / 5) * 5);
      const newPrice = oldPrice + deltaAmount;
      const deltaPct = Number(((deltaAmount / oldPrice) * 100).toFixed(1));

      const boostKey = `${targetProduce.id}:${mandiPick.id}`;
      setPriceBoosts((prev) => ({
        ...prev,
        [boostKey]: (prev[boostKey] || 0) + deltaAmount,
      }));

      const userTarget = targetPrices[targetProduce.id];
      const targetCrossed = typeof userTarget === 'number' && userTarget > 0 && newPrice >= userTarget;

      const newAlert = {
        id: `pa-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
        produceId: targetProduce.id,
        produceName: targetProduce.name,
        mandiName: mandiPick.name,
        oldPrice,
        newPrice,
        deltaAmount,
        deltaPct,
        targetCrossed,
        read: false,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setAlerts((prev) => [newAlert, ...prev].slice(0, 20));
      setActiveToast(newAlert);

      if (
        browserNotifyEnabled &&
        typeof window !== 'undefined' &&
        'Notification' in window &&
        window.Notification.permission === 'granted'
      ) {
        try {
          new window.Notification(
            `${t(profile.language, 'priceAlertSurgeTag')}: ${getLocText(targetProduce.name, profile.language)}`,
            {
              body: `${getLocText(mandiPick.name, profile.language)} — ₹${newPrice.toLocaleString('en-IN')}/Qtl (+₹${deltaAmount})`,
            }
          );
        } catch {
          // Ignore browser notification restrictions inside sandboxed frames
        }
      }
    },
    [profile, watchEnabled, activeProduceId, activeProduceName, priceBoosts, targetPrices, browserNotifyEnabled]
  );

  // Auto-dismiss toast after 7 seconds
  useEffect(() => {
    if (!activeToast) return undefined;
    const timer = setTimeout(() => {
      setActiveToast(null);
    }, 7000);
    return () => clearTimeout(timer);
  }, [activeToast]);

  // Periodic live mandi price increase monitor (first check at 10s, then every 28s)
  useEffect(() => {
    if (!profile || !watchEnabled) return undefined;
    const initialTimer = setTimeout(() => {
      triggerPriceIncreaseCheck(activeProduceId);
    }, 10000);
    const interval = setInterval(() => {
      triggerPriceIncreaseCheck(activeProduceId);
    }, 28000);
    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, [profile, watchEnabled, activeProduceId, triggerPriceIncreaseCheck]);

  const handleRequestBrowserNotify = async () => {
    if (typeof window === 'undefined' || !('Notification' in window)) return;
    try {
      const permission = await window.Notification.requestPermission();
      setBrowserNotifyEnabled(permission === 'granted');
    } catch {
      setBrowserNotifyEnabled(false);
    }
  };

  if (!profile) {
    return (
      <LoginView
        initialLanguage="en"
        onLogin={(farmerProfile) => {
          setProfile(farmerProfile);
          setActiveTab('dashboard');
        }}
      />
    );
  }

  const language = profile.language;

  const handleLanguageChange = (newLang) => {
    setProfile((prev) => (prev ? { ...prev, language: newLang } : prev));
  };

  const tabs = [
    { id: 'dashboard', label: t(language, 'tabDashboard') },
    { id: 'yojana', label: t(language, 'tabYojana') },
    { id: 'mandihut', label: t(language, 'tabMandihut') },
  ];

  return (
    <div className="min-h-screen bg-[#F7FAF6] text-emerald-950 flex flex-col">
      {/* Top Bar: Brand + Farmer Profile + Price Alerts */}
      <header className="bg-white border-b border-emerald-900/10">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-4">
          <MandimithraLogo variant="header" />

          {/* Farmer Profile Strip */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-4">
            <div className="flex flex-wrap items-center gap-3 text-xs text-emerald-900">
              <span className="inline-flex items-center gap-1.5 font-semibold text-emerald-950">
                <User className="w-3.5 h-3.5 text-emerald-700" />
                <span>{profile.name}</span>
              </span>
              <span className="text-emerald-900/30" aria-hidden="true">·</span>
              <span className="inline-flex items-center gap-1 text-emerald-800/85">
                <MapPin className="w-3.5 h-3.5 text-emerald-700" />
                <span>{profile.locality}</span>
              </span>
              <span className="hidden sm:inline text-emerald-900/30" aria-hidden="true">·</span>
              <span className="hidden sm:inline-flex items-center gap-1 font-mono tabular-nums text-emerald-800/80">
                <Phone className="w-3.5 h-3.5 text-emerald-700" />
                <span>{profile.phone}</span>
              </span>
            </div>

            {/* Price Increase Notification Center */}
            <PriceAlertCenter
              language={language}
              alerts={alerts}
              activeToast={activeToast}
              browserNotifyEnabled={browserNotifyEnabled}
              onDismissToast={() => setActiveToast(null)}
              onMarkAllRead={() =>
                setAlerts((prev) => prev.map((item) => ({ ...item, read: true })))
              }
              onTriggerLiveCheck={() => triggerPriceIncreaseCheck(activeProduceId)}
              onRequestBrowserNotify={handleRequestBrowserNotify}
              onSelectProduceFromAlert={(produceId) => {
                const found = PRODUCE_CATALOG.find((p) => p.id === produceId);
                if (found) {
                  setActiveProduceId(found.id);
                  setActiveProduceName(getLocText(found.name, language));
                  setActiveTab('dashboard');
                }
              }}
            />

            {/* Quick Language Switcher */}
            <div className="inline-flex items-center gap-1 p-0.5 bg-emerald-50 border border-emerald-900/10 rounded-lg">
              <Globe className="w-3.5 h-3.5 text-emerald-700 ml-1.5 mr-0.5" aria-hidden="true" />
              {LANGUAGE_SWITCH.map((lang) => (
                <button
                  key={lang.code}
                  type="button"
                  onClick={() => handleLanguageChange(lang.code)}
                  className={`px-2 py-1 rounded-md text-xs font-semibold transition-colors whitespace-nowrap ${
                    language === lang.code
                      ? 'bg-emerald-700 text-white'
                      : 'text-emerald-900 hover:bg-white'
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setProfile(null)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-emerald-900/15 text-xs font-semibold text-emerald-900 hover:bg-emerald-50 transition-colors whitespace-nowrap shrink-0"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>{t(language, 'signOut')}</span>
            </button>
          </div>
        </div>

        {/* Horizontal Navigation Tabs Placed Directly Below the Profile */}
        <nav
          aria-label="Primary sections"
          className="bg-emerald-50/45 border-t border-emerald-900/8"
        >
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 flex items-center gap-2 overflow-x-auto">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative py-3 px-4 text-sm font-display font-bold transition-colors whitespace-nowrap shrink-0 border-b-2 ${
                    isActive
                      ? 'border-emerald-700 text-emerald-900 bg-white/80'
                      : 'border-transparent text-emerald-800/75 hover:text-emerald-950 hover:bg-white/40'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-[1280px] w-full mx-auto px-4 sm:px-6 py-6 pb-28">
        {activeTab === 'dashboard' && (
          <ProduceDashboard
            profile={profile}
            activeProduceId={activeProduceId}
            activeProduceName={activeProduceName}
            priceBoosts={priceBoosts}
            watchEnabled={watchEnabled}
            targetPrices={targetPrices}
            onToggleWatch={() => setWatchEnabled((w) => !w)}
            onSetTargetPrice={(produceId, price) =>
              setTargetPrices((prev) => ({ ...prev, [produceId]: price }))
            }
            onTriggerPriceCheck={() => triggerPriceIncreaseCheck(activeProduceId)}
            onProduceChange={(id, name) => {
              setActiveProduceId(id);
              setActiveProduceName(name);
            }}
          />
        )}
        {activeTab === 'yojana' && <YojanaMithraTab profile={profile} />}
        {activeTab === 'mandihut' && <MandihutTab profile={profile} />}
      </main>

      {/* Bottom-Right Animated Cute Farmer Chatbot */}
      <FarmerChatbot profile={profile} activeProduceName={activeProduceName} />
    </div>
  );
}
