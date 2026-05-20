"use client";

/**
 * The thesis diagram. Two timelines:
 *  - Liu Xiu: rival brother removed EARLY by an external hand → virtue never tested.
 *  - Li Shimin: rival brothers alive at the decisive moment → he chooses the blade.
 * The point: succession order, not character, often decides what we call virtue.
 */

const Track = ({
  who,
  whoZh,
  events,
  verdictEn,
  verdictZh,
  accent,
}: {
  who: string;
  whoZh: string;
  events: { t: number; en: string; zh: string; kill?: boolean; external?: boolean }[];
  verdictEn: string;
  verdictZh: string;
  accent: string;
}) => (
  <div className="rounded-lg border border-ink-500 bg-ink-800/60 p-6">
    <div className="flex items-baseline justify-between">
      <h4 className="display text-2xl text-bone-50">{who}</h4>
      <span className="zh text-bone-300">{whoZh}</span>
    </div>
    <div className="relative mt-7 pl-1">
      <div className="absolute left-[7px] top-1 h-[calc(100%-1.5rem)] w-px" style={{ background: `${accent}55` }} />
      <div className="space-y-5">
        {events.map((e, i) => (
          <div key={i} className="relative flex gap-4">
            <div
              className="relative z-10 mt-1 h-3.5 w-3.5 shrink-0 rounded-full border-2"
              style={{
                borderColor: accent,
                background: e.kill ? "#cf4a32" : e.external ? "#6a8c76" : "#0e0c0a",
              }}
            />
            <div>
              <p className="text-sm leading-snug text-bone-100">
                {e.en}
                {e.external && <span className="ml-2 rounded bg-jade-600/30 px-1.5 py-0.5 font-mono text-[0.6rem] text-jade-400">EXTERNAL HAND</span>}
                {e.kill && <span className="ml-2 rounded bg-cinnabar-700/40 px-1.5 py-0.5 font-mono text-[0.6rem] text-cinnabar-300">HIS HAND</span>}
              </p>
              <p className="zh text-xs text-bone-400">{e.zh}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="mt-6 border-t border-ink-500 pt-4">
      <p className="text-sm italic text-bone-200">{verdictEn}</p>
      <p className="zh mt-1 text-xs text-bone-400">{verdictZh}</p>
    </div>
  </div>
);

export default function WhoDiesFirst() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      <Track
        who="Liu Xiu"
        whoZh="刘秀 · 东汉光武帝"
        accent="#6a8c76"
        events={[
          { t: 0, en: "Brothers raise an army together against Wang Mang.", zh: "兄弟共举兵，反新莽。" },
          { t: 1, en: "Elder brother Liu Yan — the natural heir — is executed by the Gengshi Emperor.", zh: "兄长刘縯——天然继承者——被更始帝所杀。", external: true },
          { t: 2, en: "Liu Xiu survives by feigning submission, mourns in silence.", zh: "刘秀佯装恭顺以自保，隐忍服丧。" },
          { t: 3, en: "Rises alone, founds Eastern Han. No rival brother left to kill.", zh: "独力崛起，建东汉。已无兄弟之敌可杀。" },
          { t: 4, en: "Reigns generously. Generals retire rich. Peaceful succession.", zh: "宽厚临朝，功臣富贵善终，和平传位。" },
        ]}
        verdictEn="His restraint is real — but it was never forced. The one decision that breaks lesser men was made for him, by someone else."
        verdictZh="他的克制是真的——却从未被逼到墙角。那个击垮凡人的抉择，已由他人替他做出。"
      />
      <Track
        who="Li Shimin"
        whoZh="李世民 · 唐太宗"
        accent="#cf4a32"
        events={[
          { t: 0, en: "Brothers win the empire together for their father.", zh: "兄弟同为父打天下。" },
          { t: 1, en: "Crown prince Li Jiancheng & brother Li Yuanji remain alive — rivals for the throne.", zh: "太子李建成与弟李元吉俱在——皆为皇位之敌。" },
          { t: 2, en: "At Xuanwu Gate, Li Shimin kills both brothers himself.", zh: "玄武门之变，李世民亲手射杀二兄弟。", kill: true },
          { t: 3, en: "All ten nephews are exterminated; the father is forced to abdicate.", zh: "诛尽十侄；逼父退位。", kill: true },
          { t: 4, en: "Then reigns as one of history's great, merciful sovereigns.", zh: "此后却成为史上仁明之君的典范。" },
        ]}
        verdictEn="Same talent, same ambition — but his rivals were still breathing when the moment came. So we remember both the massacre and the golden age."
        verdictZh="同样的才能与野心——只是当那一刻到来时，他的对手还活着。于是我们记住了屠杀，也记住了盛世。"
      />
    </div>
  );
}
