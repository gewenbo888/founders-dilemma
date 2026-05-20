"use client";

import { Founder } from "./data";

function Meter({ label, zh, value, accent }: { label: string; zh: string; value: number; accent: string }) {
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <span className="label-mono">{label}</span>
        <span className="zh text-[0.7rem] text-bone-400">{zh}</span>
      </div>
      <div className="mt-1.5 h-2 rounded-full bg-ink-600">
        <div
          className="h-2 rounded-full"
          style={{
            width: `${value}%`,
            background: `linear-gradient(90deg, ${accent}66, ${accent})`,
          }}
        />
      </div>
    </div>
  );
}

export default function FounderCard({ f, index }: { f: Founder; index: number }) {
  return (
    <article className="lift relative overflow-hidden rounded-lg border border-ink-500 bg-ink-800/70 p-7 shadow-leaf">
      {/* index + seal */}
      <div className="flex items-start justify-between">
        <div>
          <div className="label-mono">№ {String(index + 1).padStart(2, "0")} · {f.dynastyEn} · {f.founded}</div>
          <h3 className="display mt-2 text-4xl leading-none text-bone-50">{f.nameEn}</h3>
          <div className="zh mt-1 text-2xl text-bone-200">
            {f.nameZh}
            <span className="ml-3 text-base text-bone-400">{f.styleZh}</span>
          </div>
        </div>
        <div
          className="seal flex h-14 w-14 shrink-0 items-center justify-center text-2xl"
          style={{ background: `linear-gradient(160deg, ${f.accent}, #5e1b13)` }}
        >
          <span className="zh font-bold text-bone-50">{f.emblem}</span>
        </div>
      </div>

      {/* verdict */}
      <div className="mt-5 border-l-2 pl-4" style={{ borderColor: f.accent }}>
        <p className="display text-xl italic text-bone-100">“{f.verdictEn}”</p>
        <p className="zh text-sm text-bone-300">「{f.verdictZh}」</p>
      </div>

      {/* meters */}
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Meter label="Mercy · officials" zh="宽待功臣" value={f.mercyOfficials} accent={f.accent} />
        <Meter label="Mercy · kin" zh="宽待骨肉" value={f.mercyKin} accent={f.accent} />
      </div>
      <div className="mt-3 flex items-baseline gap-2">
        <span className="label-mono">Purged</span>
        <span className="font-mono text-sm text-cinnabar-400">{f.bodyCount}</span>
        <span className="zh text-xs text-bone-500">· 株连规模</span>
      </div>

      {/* prose */}
      <div className="mt-6 space-y-4">
        <p className="text-[0.95rem] leading-relaxed text-bone-200">{f.patternEn}</p>
        <p className="zh text-sm leading-relaxed text-bone-400">{f.patternZh}</p>
        <div className="h-px rule-bronze opacity-40" />
        <p className="text-[0.95rem] leading-relaxed text-bone-200">{f.detailEn}</p>
        <p className="zh text-sm leading-relaxed text-bone-400">{f.detailZh}</p>
      </div>
    </article>
  );
}
