import React, { useState } from 'react';
import { t } from '../data/translations.js';

export function PriceForecastChart({ points, language }) {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  if (!points || points.length === 0) return null;

  const width = 760;
  const height = 260;
  const padLeft = 58;
  const padRight = 24;
  const padTop = 24;
  const padBottom = 34;
  const innerW = width - padLeft - padRight;
  const innerH = height - padTop - padBottom;

  const allValues = points.flatMap((p) =>
    [p.price, p.lowBand, p.highBand].filter((v) => typeof v === 'number')
  );
  const rawMin = Math.min(...allValues);
  const rawMax = Math.max(...allValues);
  const padding = Math.max(40, Math.round((rawMax - rawMin) * 0.18));
  const minY = Math.max(0, rawMin - padding);
  const maxY = rawMax + padding;
  const rangeY = Math.max(1, maxY - minY);

  const getX = (idx) => padLeft + (idx / Math.max(1, points.length - 1)) * innerW;
  const getY = (val) => padTop + innerH - ((val - minY) / rangeY) * innerH;

  const historyEndIdx = points.findIndex((p) => p.isForecast) - 1;
  const splitIdx = historyEndIdx >= 0 ? historyEndIdx : points.length - 1;

  const historyPath = points
    .slice(0, splitIdx + 1)
    .map((p, i) => `${i === 0 ? 'M' : 'L'} ${getX(i).toFixed(1)} ${getY(p.price).toFixed(1)}`)
    .join(' ');

  const historyArea = `${historyPath} L ${getX(splitIdx).toFixed(1)} ${(padTop + innerH).toFixed(1)} L ${getX(0).toFixed(1)} ${(padTop + innerH).toFixed(1)} Z`;

  const forecastPoints = points.slice(splitIdx);
  const forecastPath = forecastPoints
    .map((p, i) => `${i === 0 ? 'M' : 'L'} ${getX(splitIdx + i).toFixed(1)} ${getY(p.price).toFixed(1)}`)
    .join(' ');

  // Confidence band polygon
  const bandPoints = points.slice(splitIdx);
  const upperBand = bandPoints.map((p, i) => {
    const val = p.highBand ?? p.price;
    return `${getX(splitIdx + i).toFixed(1)},${getY(val).toFixed(1)}`;
  });
  const lowerBand = [...bandPoints]
    .reverse()
    .map((p, i) => {
      const origIdx = bandPoints.length - 1 - i;
      const val = p.lowBand ?? p.price;
      return `${getX(splitIdx + origIdx).toFixed(1)},${getY(val).toFixed(1)}`;
    });
  const bandPolygon = [...upperBand, ...lowerBand].join(' ');

  const yTicks = [0, 0.25, 0.5, 0.75, 1].map((ratio) => {
    const val = Math.round(minY + ratio * rangeY);
    return { val, y: getY(val) };
  });

  const activePoint = hoveredIdx !== null ? points[hoveredIdx] : null;

  return (
    <div className="bg-white border border-emerald-900/10 rounded-xl p-5">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
        <div>
          <h3 className="text-base font-display font-bold text-emerald-950">
            {t(language, 'chartTitle')}
          </h3>
          <p className="text-xs text-emerald-800/70">{t(language, 'chartSubtitle')}</p>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-xs text-emerald-900">
          <span className="inline-flex items-center gap-1.5">
            <span className="w-3.5 h-0.5 bg-emerald-700 inline-block rounded" />
            <span>{t(language, 'legendHistory')}</span>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="w-3.5 h-0.5 border-t-2 border-dashed border-amber-600 inline-block" />
            <span>{t(language, 'legendForecast')}</span>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="w-3 h-2.5 bg-amber-400/25 border border-amber-500/40 inline-block rounded-sm" />
            <span>{t(language, 'legendBand')}</span>
          </span>
        </div>
      </div>

      <div className="relative w-full overflow-x-auto">
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="w-full min-w-[540px] h-auto select-none"
          role="img"
          aria-label={t(language, 'chartTitle')}
        >
          <defs>
            <linearGradient id="historyFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#15803D" stopOpacity="0.16" />
              <stop offset="100%" stopColor="#15803D" stopOpacity="0.01" />
            </linearGradient>
          </defs>

          {/* Horizontal Grid Lines & Y-Axis Labels */}
          {yTicks.map((tick, idx) => (
            <g key={idx}>
              <line
                x1={padLeft}
                y1={tick.y}
                x2={width - padRight}
                y2={tick.y}
                stroke="#E4ECE2"
                strokeWidth="1"
              />
              <text
                x={padLeft - 8}
                y={tick.y + 4}
                textAnchor="end"
                className="fill-emerald-900/65 text-[11px] font-mono tabular-nums"
              >
                ₹{tick.val.toLocaleString('en-IN')}
              </text>
            </g>
          ))}

          {/* Confidence Band */}
          {bandPolygon && (
            <polygon points={bandPolygon} fill="#F59E0B" fillOpacity="0.14" />
          )}

          {/* History Area & Path */}
          <path d={historyArea} fill="url(#historyFill)" />
          <path
            d={historyPath}
            fill="none"
            stroke="#15803D"
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Forecast Path */}
          <path
            d={forecastPath}
            fill="none"
            stroke="#D97706"
            strokeWidth="2.6"
            strokeDasharray="6 5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Today Divider Line */}
          <line
            x1={getX(splitIdx)}
            y1={padTop}
            x2={getX(splitIdx)}
            y2={padTop + innerH}
            stroke="#0F2419"
            strokeOpacity="0.22"
            strokeDasharray="3 3"
          />
          <text
            x={getX(splitIdx)}
            y={padTop - 8}
            textAnchor="middle"
            className="fill-emerald-950 text-[11px] font-semibold"
          >
            {t(language, 'todayMarker')}
          </text>

          {/* X-Axis Labels (spaced cleanly) */}
          {points.map((p, i) => {
            const showLabel = i === 0 || i === 4 || i === 9 || i === splitIdx || i === points.length - 1 || i === splitIdx + 2;
            if (!showLabel) return null;
            return (
              <text
                key={p.dayLabel}
                x={getX(i)}
                y={height - 10}
                textAnchor="middle"
                className={`text-[11px] font-mono ${
                  p.isForecast ? 'fill-amber-700 font-semibold' : 'fill-emerald-900/65'
                }`}
              >
                {p.dayLabel === 'Today' ? t(language, 'todayMarker') : p.dayLabel}
              </text>
            );
          })}

          {/* Data Points & Interactive Hit Targets */}
          {points.map((p, i) => {
            const cx = getX(i);
            const cy = getY(p.price);
            const isHovered = hoveredIdx === i;
            return (
              <g key={p.dayLabel}>
                <circle
                  cx={cx}
                  cy={cy}
                  r={isHovered ? 5.5 : i === splitIdx ? 4.5 : 3}
                  fill={p.isForecast ? '#D97706' : '#15803D'}
                  stroke="#FFFFFF"
                  strokeWidth="1.5"
                />
                <rect
                  x={cx - innerW / (points.length * 2)}
                  y={padTop}
                  width={innerW / points.length}
                  height={innerH}
                  fill="transparent"
                  className="cursor-pointer"
                  onMouseEnter={() => setHoveredIdx(i)}
                  onMouseLeave={() => setHoveredIdx(null)}
                />
              </g>
            );
          })}
        </svg>

        {/* Clean Tooltip Bar Below or Above Hover */}
        {activePoint && (
          <div className="mt-2 flex flex-wrap items-center justify-between gap-2 px-3 py-2 rounded-lg bg-emerald-50/80 border border-emerald-900/10 text-xs">
            <span className="font-semibold text-emerald-950">
              {activePoint.dayLabel === 'Today' ? t(language, 'todayMarker') : activePoint.dayLabel}
              {' · '}
              {activePoint.isForecast ? t(language, 'legendForecast') : t(language, 'legendHistory')}
            </span>
            <span className="font-mono font-bold tabular-nums text-emerald-900">
              ₹{activePoint.price.toLocaleString('en-IN')}{t(language, 'perQtl')}
              {activePoint.lowBand && activePoint.highBand
                ? ` (₹${activePoint.lowBand.toLocaleString('en-IN')} – ₹${activePoint.highBand.toLocaleString('en-IN')})`
                : ''}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
