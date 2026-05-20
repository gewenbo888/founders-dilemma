import dynamic from "next/dynamic";
import { FOUNDERS, SITUATIONAL } from "@/components/data";
import FounderCard from "@/components/FounderCard";
import MercyMatrix from "@/components/MercyMatrix";
import WhoDiesFirst from "@/components/WhoDiesFirst";

const AshField = dynamic(() => import("@/components/AshField"), { ssr: false });

export default function Page() {
  return (
    <main className="relative overflow-x-hidden">
      {/* ============================ TOP BAR ============================ */}
      <header className="fixed left-0 right-0 top-0 z-40 flex items-center justify-between border-b border-ink-600/70 bg-ink-900/80 px-6 py-3 backdrop-blur md:px-10">
        <div className="flex items-center gap-3">
          <div className="seal flex h-7 w-7 items-center justify-center">
            <span className="zh text-sm font-bold text-bone-50">功</span>
          </div>
          <div className="leading-tight">
            <div className="display text-base text-bone-50">The Founder&rsquo;s Dilemma</div>
            <div className="zh text-[0.62rem] text-bone-400">开国者的两难 · 帝王如何对待功臣</div>
          </div>
        </div>
        <nav className="hidden gap-6 font-mono text-[0.62rem] uppercase tracking-[0.2em] text-bone-400 md:flex">
          <a href="#proverb" className="hover:text-cinnabar-400">Proverb</a>
          <a href="#cases" className="hover:text-cinnabar-400">Six Founders</a>
          <a href="#matrix" className="hover:text-cinnabar-400">The Matrix</a>
          <a href="#thesis" className="hover:text-cinnabar-400">Who Dies First</a>
          <a href="#situational" className="hover:text-cinnabar-400">Loyalty</a>
        </nav>
        <a href="https://psyverse.fun" className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-bronze-500 hover:text-cinnabar-400">
          ← Psyverse
        </a>
      </header>

      {/* ============================ HERO ============================ */}
      <section className="grain relative flex min-h-screen items-center overflow-hidden pt-24">
        <div className="absolute inset-0 z-0">
          <AshField />
        </div>
        {/* giant ghost hanzi */}
        <div className="pointer-events-none absolute -right-10 top-1/2 z-0 -translate-y-1/2 select-none">
          <span className="zh block text-[44vw] leading-none text-cinnabar-900/30 md:text-[30rem]">烹</span>
        </div>

        <div className="relative z-20 mx-auto w-full max-w-6xl px-6 md:px-12">
          <div className="label-mono">Psyverse · Historiography</div>
          <div className="mt-2 font-mono text-[0.6rem] uppercase tracking-[0.35em] text-bone-500">
            EN · 中文 · comparative dynastic study
          </div>

          <h1 className="display mt-6 text-6xl leading-[0.92] text-bone-50 md:text-8xl">
            The Founder&rsquo;s
            <br />
            <span className="text-cinnabar-500 ink-glow">Dilemma</span>
          </h1>
          <h2 className="zh mt-4 text-3xl text-bone-200 md:text-4xl">开国者的两难</h2>

          <p className="mt-9 max-w-2xl font-serif text-lg leading-relaxed text-bone-200 md:text-xl">
            The empire is won. The generals who won it now stand in the throne room — armed,
            beloved, and dangerous. Across two thousand years, six founders answered the same
            question in six different ways. The question never changed.
          </p>
          <p className="zh mt-4 max-w-2xl text-base leading-relaxed text-bone-400">
            江山已定。替他打下江山的功臣，如今立于殿上——手握重兵，深得人望，亦因此危险。
            两千年间，六位开国之君，对同一道难题给出了六种不同的答案。而那道难题，从未改变。
          </p>

          {/* the proverb plate */}
          <div className="mt-12 max-w-2xl rounded-md border border-ink-500 bg-ink-800/70 p-6">
            <div className="label-mono">The proverb · 古谚</div>
            <p className="zh mt-3 text-xl leading-relaxed text-bone-100 md:text-2xl">
              鸟尽弓藏，兔死狗烹。
            </p>
            <p className="mt-2 font-serif italic text-bone-300">
              When the birds are gone, the good bow is stored away.
              <br />
              When the cunning rabbit is dead, the hunting hound goes into the pot.
            </p>
            <p className="mt-3 font-mono text-[0.65rem] text-bone-500">
              — Han Xin, on being bound for execution · 韩信被缚临刑语
            </p>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-6 left-1/2 z-20 -translate-x-1/2 font-mono text-[0.6rem] uppercase tracking-[0.3em] text-bronze-500">
          ↓ scroll · 下卷
        </div>
      </section>

      {/* ============================ PROVERB / FRAME ============================ */}
      <section id="proverb" className="relative border-t border-ink-600 px-6 py-28 md:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="label-mono">The frame · 题解</div>
          <h2 className="display mt-4 text-4xl text-bone-50 md:text-5xl">
            Why the men who win the throne so often kill the men who won it for them
          </h2>
          <h3 className="zh mt-3 text-xl text-bone-300">为何登上王座的人，总要诛杀替他赢得王座的人</h3>

          <div className="mt-10 space-y-6 font-serif text-lg leading-relaxed text-bone-200">
            <p>
              A founding general is, by definition, a man who has already proven he can topple a
              regime. He commands soldiers&rsquo; loyalty, not the throne&rsquo;s. In peacetime that
              talent has no outlet and every danger. The founder&rsquo;s dilemma is not cruelty for
              its own sake — it is the cold arithmetic of consolidation: every sword that raised you
              up can lower you down.
            </p>
            <p className="zh text-base text-bone-400">
              开国之将，按定义，便是已经证明自己能够倾覆一个政权的人。他所凝聚的是士卒之心，而非王座之威。
              太平之世，这份才能无处施展，却处处是险。开国者的两难，并非为残忍而残忍——
              而是集权的冷酷算术：每一柄扶你登顶的剑，也能将你斩落。
            </p>
            <p>
              This site holds six answers side by side, then asks a harder question that the
              source conversation kept circling back to:
              <span className="text-cinnabar-400"> how much of what we call virtue is simply circumstance that never tested it?</span>
            </p>
            <p className="zh text-base text-bone-400">
              本站将六种答案并置，再追问一个更尖锐、也是原始对话反复回到的问题：
              <span className="text-cinnabar-400">我们所谓的「仁德」，有多少只是从未被考验过的境遇？</span>
            </p>
          </div>
        </div>
      </section>

      {/* ============================ SIX FOUNDERS ============================ */}
      <section id="cases" className="relative border-t border-ink-600 px-6 py-28 md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="label-mono">The cases · 六案</div>
              <h2 className="display mt-3 text-5xl text-bone-50 md:text-6xl">Six Founders</h2>
              <h3 className="zh mt-1 text-2xl text-bone-300">六位开国之君</h3>
            </div>
            <p className="max-w-sm text-sm text-bone-400">
              Ordered by chronology, not judgment. Read each as a separate solution to the same
              equation — and watch how differently the two kinds of mercy move.
              <span className="zh mt-1 block text-bone-500">按时序排列，非按褒贬。每一位都是同一方程的不同解法——留意那两种「仁慈」如何各行其道。</span>
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {FOUNDERS.map((f, i) => (
              <FounderCard key={f.key} f={f} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ============================ MATRIX ============================ */}
      <section id="matrix" className="relative border-t border-ink-600 px-6 py-28 md:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="label-mono">The two axes · 两轴</div>
          <h2 className="display mt-3 text-5xl text-bone-50 md:text-6xl">
            Two kinds of mercy
          </h2>
          <h3 className="zh mt-1 text-2xl text-bone-300">两种仁慈</h3>
          <p className="mt-6 max-w-2xl font-serif text-lg leading-relaxed text-bone-200">
            History grades founders on one axis — were they kind to their ministers? But the
            chat surfaced a second axis the chronicles bury: how they treated their own blood.
            Plot both, and the moral map fractures. Li Shimin and Zhu Yuanzhang sit in opposite
            corners, each monstrous on the axis the other mastered.
          </p>
          <p className="zh mt-3 max-w-2xl text-base leading-relaxed text-bone-400">
            史书只用一条轴评判开国者——他可曾善待臣下？而那场对话揭出了第二条、被史册掩埋的轴：
            他如何对待自己的骨肉。两轴并绘，道德地图便碎裂开来。李世民与朱元璋分踞对角，
            各自在对方所擅长的那条轴上，显出狰狞。
          </p>

          <div className="mt-10">
            <MercyMatrix />
          </div>
        </div>
      </section>

      {/* ============================ THESIS ============================ */}
      <section
        id="thesis"
        className="relative border-t border-ink-600 px-6 py-28 md:px-12"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 50% 0%, rgba(156,49,34,0.14), transparent 55%)",
        }}
      >
        <div className="mx-auto max-w-6xl">
          <div className="label-mono">The thesis · 论断</div>
          <h2 className="display mt-3 text-5xl text-bone-50 md:text-7xl">Who dies first</h2>
          <h3 className="zh mt-1 text-2xl text-bone-300">谁先死</h3>

          <div className="mt-8 max-w-3xl">
            <p className="font-serif text-xl leading-relaxed text-bone-100 md:text-2xl">
              The cleanest record on the matrix belongs to Liu Xiu. But look at <em>why</em>. The one
              rival who could have forced him to choose — his own elder brother — was killed early,
              by another man&rsquo;s order. Liu Xiu never had to decide. Li Shimin did, and chose the blade.
            </p>
            <p className="zh mt-4 text-base leading-relaxed text-bone-400">
              矩阵上最干净的记录属于刘秀。但要看清「为何」。那个本可逼他抉择的对手——他的亲兄长——
              早早被人下令杀掉了。刘秀从不必抉择。李世民必须，于是他选了刀。
            </p>
          </div>

          <div className="mt-12">
            <WhoDiesFirst />
          </div>

          <blockquote className="mx-auto mt-16 max-w-3xl rounded-lg border border-cinnabar-800/50 bg-ink-800/70 p-10 text-center">
            <p className="display text-3xl leading-snug text-bone-50 md:text-4xl">
              “Untested virtue is not the same thing as demonstrated restraint.”
            </p>
            <p className="zh mt-4 text-lg text-bone-300">
              「未经考验的德行，与被证明过的克制，不是同一回事。」
            </p>
            <p className="mt-6 font-serif italic text-bone-300">
              The order of deaths writes the moral record as much as the character of the living.
            </p>
            <p className="zh mt-1 text-sm text-bone-500">
              死亡的次序，与生者的品性一样，书写着那份道德的记录。
            </p>
          </blockquote>
        </div>
      </section>

      {/* ============================ SITUATIONAL LOYALTY ============================ */}
      <section id="situational" className="relative border-t border-ink-600 px-6 py-28 md:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="label-mono">The traitors who weren&rsquo;t · 所谓的叛臣</div>
          <h2 className="display mt-3 text-5xl text-bone-50 md:text-6xl">
            Loyalty is a situation, not a trait
          </h2>
          <h3 className="zh mt-1 text-2xl text-bone-300">忠诚是一种处境，而非一种本性</h3>

          <p className="mt-6 max-w-3xl font-serif text-lg leading-relaxed text-bone-200">
            The chronicles file them under &ldquo;rebels.&rdquo; But read the lives and the label
            dissolves. These were not men of treacherous temperament — they were men whom imperial
            suspicion left no safe move. The paranoia that hunts traitors is also the kiln that fires them.
          </p>
          <p className="zh mt-3 max-w-3xl text-base leading-relaxed text-bone-400">
            史册将他们归入「叛臣」。可一读其生平，标签便消融了。他们并非天性奸佞——
            而是被帝王的猜忌逼到无路可走。那猎杀叛徒的偏执，本身正是烧制叛徒的窑炉。
          </p>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {SITUATIONAL.map((c) => (
              <div key={c.nameEn} className="rounded-lg border border-ink-500 bg-ink-800/60 p-6">
                <div className="flex items-baseline justify-between">
                  <h4 className="display text-2xl text-bone-50">{c.nameEn}</h4>
                  <span className="zh text-xl text-cinnabar-400">{c.nameZh}</span>
                </div>
                <div className="mt-4 h-px rule-bronze opacity-40" />
                <p className="mt-4 text-sm leading-relaxed text-bone-200">{c.lineEn}</p>
                <p className="zh mt-3 text-xs leading-relaxed text-bone-400">{c.lineZh}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================ CLOSING ============================ */}
      <section className="relative border-t border-ink-600 px-6 py-32 md:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <span className="zh block text-7xl text-cinnabar-700/60 md:text-8xl">藏</span>
          <h2 className="display mt-8 text-4xl leading-snug text-bone-50 md:text-6xl">
            The bow is not stored because it failed.
            <br />
            It is stored because it worked.
          </h2>
          <p className="zh mt-5 text-xl text-bone-300">
            良弓被藏，不因它无用，恰因它太有用。
          </p>
          <p className="mx-auto mt-10 max-w-2xl font-serif text-lg leading-relaxed text-bone-300">
            That is the cruelty at the center of the founder&rsquo;s dilemma: the more indispensable a
            general was to the rise, the more intolerable he becomes to the rest. Merit is the
            evidence of danger. Six founders knew it. They only disagreed about the mercy.
          </p>
          <p className="zh mx-auto mt-4 max-w-2xl text-base leading-relaxed text-bone-500">
            这正是开国两难核心处的残酷：一位将领对崛起越是不可或缺，他对此后的安稳便越是不可容忍。
            功勋，即是危险的证据。六位开国者都明白这一点。他们分歧的，只是仁慈的多寡。
          </p>

          <div className="mx-auto mt-12 h-px w-40 rule-bronze" />
          <p className="mt-6 font-mono text-[0.62rem] uppercase tracking-[0.4em] text-bronze-500">
            The Founder&rsquo;s Dilemma · 开国者的两难 · Psyverse · 2026
          </p>
        </div>
      </section>

      {/* ============================ FOOTER ============================ */}
      <footer className="border-t border-ink-600 bg-ink-900 px-6 py-16 md:px-12">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-3">
          <div>
            <div className="display text-xl text-bone-50">The Founder&rsquo;s Dilemma</div>
            <div className="zh mt-1 text-sm text-bone-300">开国者的两难</div>
            <p className="mt-4 max-w-sm font-serif text-sm leading-relaxed text-bone-500">
              A comparative study of how China&rsquo;s founding rulers treated the generals who won
              them the empire — and a darker lens on the circumstance hidden inside virtue.
            </p>
          </div>
          <div>
            <div className="label-mono">Reading order</div>
            <ul className="mt-4 space-y-2 font-mono text-xs uppercase tracking-[0.2em] text-bone-500">
              <li><a href="#proverb" className="hover:text-cinnabar-400">I · The frame</a></li>
              <li><a href="#cases" className="hover:text-cinnabar-400">II · Six founders</a></li>
              <li><a href="#matrix" className="hover:text-cinnabar-400">III · Two kinds of mercy</a></li>
              <li><a href="#thesis" className="hover:text-cinnabar-400">IV · Who dies first</a></li>
              <li><a href="#situational" className="hover:text-cinnabar-400">V · Loyalty as situation</a></li>
            </ul>
          </div>
          <div>
            <div className="label-mono">Companion archives</div>
            <ul className="mt-4 space-y-2 font-serif text-sm text-bone-300">
              <li><a href="https://sinosphere.psyverse.fun" className="hover:text-cinnabar-300">Sinosphere · 华夏圈</a></li>
              <li><a href="https://steppe-empire.psyverse.fun" className="hover:text-cinnabar-300">Steppe Empire · 草原帝国</a></li>
              <li><a href="https://north-rules-south.psyverse.fun" className="hover:text-cinnabar-300">North Rules South · 北制南</a></li>
              <li className="pt-3"><a href="https://psyverse.fun" className="text-cinnabar-500 hover:text-cinnabar-400">↩ All Psyverse archives</a></li>
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-12 h-px max-w-7xl rule-bronze" />
        <div className="mx-auto mt-6 flex max-w-7xl items-center justify-between text-[0.6rem] uppercase tracking-[0.3em] text-bone-600">
          <div>© 2026 Gewenbo · Psyverse</div>
          <div>EN · 中文 · historiography</div>
        </div>
      </footer>
    </main>
  );
}
