import React from 'react';

export function MandimithraLogo({ variant = 'header', animate = false }) {
  const isSplash = variant === 'splash';
  const isLogin = variant === 'login';

  const iconSize = isSplash ? 88 : isLogin ? 68 : 38;

  return (
    <div
      className={`inline-flex items-center ${
        isSplash || isLogin ? 'flex-col text-center gap-3' : 'flex-row gap-2.5'
      } ${animate ? 'animate-logo-pop' : ''}`}
    >
      <div
        className="relative flex items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-700 via-emerald-600 to-green-700 shadow-md ring-1 ring-emerald-900/15"
        style={{ width: iconSize, height: iconSize }}
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 64 64"
          className="w-[74%] h-[74%]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Golden sunrise / mandi horizon arc */}
          <path
            d="M12 44C17.5 34.5 24.5 30 32 30C39.5 30 46.5 34.5 52 44"
            stroke="#FBBF24"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
          {/* Rising profit bar / grain stalks */}
          <rect x="19" y="34" width="4.5" height="14" rx="2.2" fill="#ECFDF5" fillOpacity="0.88" />
          <rect x="29.75" y="25" width="4.5" height="23" rx="2.2" fill="#FDE68A" />
          <rect x="40.5" y="18" width="4.5" height="30" rx="2.2" fill="#FFFFFF" />
          {/* Sprout leaf crown */}
          <path
            d="M32 10C26.5 11.5 23 16 23 21.5C27.8 21.5 31.5 18.2 32 10Z"
            fill="#FBBF24"
          />
          <path
            d="M32 10C37.5 11.5 41 16 41 21.5C36.2 21.5 32.5 18.2 32 10Z"
            fill="#A7F3D0"
          />
          {/* Ground curve */}
          <path
            d="M14 51.5H50"
            stroke="#A7F3D0"
            strokeWidth="2.8"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className={isSplash || isLogin ? 'space-y-0.5' : 'leading-none'}>
        <div
          className={`font-display font-extrabold tracking-tight text-emerald-950 whitespace-nowrap ${
            isSplash
              ? 'text-3xl sm:text-4xl'
              : isLogin
              ? 'text-2xl sm:text-3xl'
              : 'text-lg'
          }`}
        >
          MANDI<span className="text-amber-600">MITHRA</span>
        </div>
        {(isSplash || isLogin) && (
          <p className="text-xs sm:text-sm font-medium text-emerald-800/80 max-w-xs mx-auto">
            Agri-Market Intelligence · Zero-Wastage Growth
          </p>
        )}
      </div>
    </div>
  );
}
