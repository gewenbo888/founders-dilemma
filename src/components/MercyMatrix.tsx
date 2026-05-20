"use client";

import { useState } from "react";
import { FOUNDERS } from "./data";

/**
 * 2D scatter: x = mercy toward officials/generals, y = mercy toward kin/rival heirs.
 * Reveals the orthogonality the chat surfaced — Li Shimin (kind to ministers, lethal to brothers)
 * sits opposite Zhu Yuanzhang (kind to sons, lethal to ministers).
 */
export default function MercyMatrix() {
  const [active, setActive] = useState<string | null>(null);

  // viewBox 0..600 x, 0..520 y. Plot area inset.
  const PX0 = 70, PX1 = 560, PY0 = 40, PY1 = 440;
  const sx = (v: number) => PX0 + (v / 100) * (PX1 - PX0);
  const sy = (v: number) => PY1 - (v / 100) * (PY1 - PY0);

  return (
    <div className="rounded-lg border border-ink-500 bg-ink-800/60 p-5 md:p-7">
      <svg viewBox="0 0 600 520" className="block w-full">
        {/* quadrant wash */}
        <rect x={PX0} y={PY0} width={(PX1 - PX0) / 2} height={(PY1 - PY0) / 2} fill="rgba(106,140,118,0.05)" />
        <rect x={PX0 + (PX1 - PX0) / 2} y={PY0} width={(PX1 - PX0) / 2} height={(PY1 - PY0) / 2} fill="rgba(106,140,118,0.09)" />
        <rect x={PX0} y={PY0 + (PY1 - PY0) / 2} width={(PX1 - PX0) / 2} height={(PY1 - PY0) / 2} fill="rgba(156,49,34,0.10)" />
        <rect x={PX0 + (PX1 - PX0) / 2} y={PY0 + (PY1 - PY0) / 2} width={(PX1 - PX0) / 2} height={(PY1 - PY0) / 2} fill="rgba(168,137,78,0.06)" />

        {/* axes */}
        <line x1={PX0} y1={PY1} x2={PX1} y2={PY1} stroke="#473c2e" strokeWidth="1" />
        <line x1={PX0} y1={PY0} x2={PX0} y2={PY1} stroke="#473c2e" strokeWidth="1" />
        {/* mid crosshair */}
        <line x1={sx(50)} y1={PY0} x2={sx(50)} y2={PY1} stroke="#332b21" strokeDasharray="3 5" />
        <line x1={PX0} y1={sy(50)} x2={PX1} y2={sy(50)} stroke="#332b21" strokeDasharray="3 5" />

        {/* axis labels */}
        <text x={(PX0 + PX1) / 2} y={485} textAnchor="middle" fill="#a8894e" fontFamily="JetBrains Mono" fontSize="11" letterSpacing="2">
          MERCY TOWARD OFFICIALS  →  宽待功臣
        </text>
        <text x={26} y={(PY0 + PY1) / 2} textAnchor="middle" fill="#a8894e" fontFamily="JetBrains Mono" fontSize="11" letterSpacing="2" transform={`rotate(-90 26 ${(PY0 + PY1) / 2})`}>
          MERCY TOWARD KIN  →  宽待骨肉
        </text>

        {/* quadrant captions */}
        <text x={PX0 + 12} y={PY0 + 22} fill="#6a8c76" fontFamily="JetBrains Mono" fontSize="9" opacity="0.8">spares family, purges ministers</text>
        <text x={PX1 - 12} y={PY0 + 22} textAnchor="end" fill="#8aa896" fontFamily="JetBrains Mono" fontSize="9" opacity="0.9">spares everyone</text>
        <text x={PX0 + 12} y={PY1 - 12} fill="#cf4a32" fontFamily="JetBrains Mono" fontSize="9" opacity="0.85">spares no one</text>
        <text x={PX1 - 12} y={PY1 - 12} textAnchor="end" fill="#c2a466" fontFamily="JetBrains Mono" fontSize="9" opacity="0.85">spares ministers, sheds blood at home</text>

        {/* points */}
        {FOUNDERS.map((f) => {
          const cx = sx(f.mercyOfficials);
          const cy = sy(f.mercyKin);
          const on = active === f.key;
          return (
            <g
              key={f.key}
              onMouseEnter={() => setActive(f.key)}
              onMouseLeave={() => setActive(null)}
              style={{ cursor: "pointer" }}
            >
              <circle cx={cx} cy={cy} r={on ? 26 : 20} fill={f.accent} opacity={on ? 0.95 : 0.82} stroke="#0e0c0a" strokeWidth="2" />
              <text x={cx} y={cy + 5} textAnchor="middle" fill="#f5efe2" fontFamily="Noto Serif SC, serif" fontSize="15" fontWeight="700">
                {f.emblem}
              </text>
              <text x={cx} y={cy - 30} textAnchor="middle" fill="#e9e1d0" fontFamily="JetBrains Mono" fontSize="10" opacity={on ? 1 : 0.7}>
                {f.nameZh}
              </text>
            </g>
          );
        })}
      </svg>

      <div className="mt-4 min-h-[3.5rem] border-t border-ink-500 pt-4">
        {active ? (
          (() => {
            const f = FOUNDERS.find((x) => x.key === active)!;
            return (
              <p className="text-sm text-bone-200">
                <span className="display text-lg" style={{ color: f.accent }}>
                  {f.nameEn} · {f.nameZh}
                </span>
                <span className="mx-2 text-ink-400">—</span>
                {f.verdictEn} · <span className="zh text-bone-300">{f.verdictZh}</span>
              </p>
            );
          })()
        ) : (
          <p className="text-sm text-bone-400">
            Hover a founder. The vertical axis is the one history usually forgets — how a ruler treated his own blood.
            <span className="zh ml-2 text-bone-500">悬停查看。纵轴，正是史书常常略过的那一维——帝王如何对待自己的骨肉。</span>
          </p>
        )}
      </div>
    </div>
  );
}
