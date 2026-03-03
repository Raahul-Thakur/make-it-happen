import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-4 md:px-10 md:pb-24 md:pt-6">
      <div className="noise-overlay relative mx-auto max-w-7xl overflow-hidden rounded-[2.25rem] border border-black/10 bg-[#0f1016] text-white shadow-[0_40px_120px_rgba(17,17,20,0.28)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,_rgba(255,95,31,0.45),_transparent_24%),radial-gradient(circle_at_82%_18%,_rgba(255,209,102,0.22),_transparent_18%),radial-gradient(circle_at_72%_62%,_rgba(255,61,127,0.24),_transparent_24%),linear-gradient(135deg,_#0f1016_10%,_#181925_38%,_#311308_72%,_#120d18_100%)]" />

        <div className="relative border-b border-white/10 px-5 py-5 md:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ff5f1f] text-2xl font-extrabold text-[#111114]">
                m
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.38em] text-white/55">Make It Happen</p>
                <p className="text-sm text-white/72">Campaign chaos, controlled.</p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em]">
              <span className="rounded-full border border-white/15 px-4 py-2 text-white/72">Estd 2024</span>
            </div>
          </div>
        </div>

        <div className="relative grid gap-10 px-5 py-10 md:px-8 md:py-14 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <div className="mb-6 flex flex-wrap gap-3 text-[11px] font-semibold uppercase tracking-[0.26em] text-white/80">
              <span className="-rotate-3 rounded-full bg-[#ffd166] px-4 py-2 text-[#111114]">
                Scroll-stoppers only
              </span>
              <span className="rotate-2 rounded-full border border-white/15 px-4 py-2 text-white/60">
                No safe campaigns
              </span>
            </div>

            <h1 className="max-w-4xl text-[3.5rem] font-extrabold leading-[0.88] sm:text-[4.75rem] md:text-[6.4rem] lg:text-[8rem]">
              We make brands feel louder than the algorithm.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/72 md:text-xl md:leading-9">
              Not a corporate deck. Not a sleepy agency. We build launch energy, social heat, and
              performance loops that make people stop, stare, click, and share.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <button
                onClick={scrollToContact}
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#ff5f1f] px-7 py-4 font-semibold text-white transition-transform duration-300 hover:scale-[1.03]"
              >
                Build the next drop
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
              <p className="text-sm uppercase tracking-[0.28em] text-white/45">
                Strategy. Content. Paid. Hype.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                <p className="text-xs uppercase tracking-[0.24em] text-white/45">Views banked</p>
                <p className="mt-3 text-4xl font-extrabold">3M+</p>
              </div>
              <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                <p className="text-xs uppercase tracking-[0.24em] text-white/45">Campaign mode</p>
                <p className="mt-3 text-4xl font-extrabold">24/7</p>
              </div>
              <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                <p className="text-xs uppercase tracking-[0.24em] text-white/45">Speed</p>
                <p className="mt-3 text-4xl font-extrabold">Fast</p>
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rotate-[-2deg] rounded-[2rem] bg-white p-6 text-[#111114] shadow-[0_25px_70px_rgba(0,0,0,0.22)]">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#7a1f00]">Campaign Pulse</p>
              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <div>
                  <p className="text-5xl font-extrabold">86%</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">Clients come to us to stop blending in.</p>
                </div>
                <div className="rounded-3xl bg-[#111114] p-4 text-white">
                  <p className="text-xs uppercase tracking-[0.24em] text-white/45">Current asks</p>
                  <p className="mt-3 text-lg font-semibold">Launch films, social systems, paid bursts.</p>
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rotate-[2deg] rounded-[1.75rem] bg-[#ffd166] p-5 text-[#111114]">
                <p className="text-xs uppercase tracking-[0.24em] text-[#ffd166]">What hits</p>
                <p className="mt-4 text-2xl font-bold">Culture-aware creative with a hard CTA.</p>
              </div>
              <div className="rounded-[1.75rem] bg-[#ffd166] p-5 text-[#111114]">
                <p className="text-xs uppercase tracking-[0.24em] text-[#7a1f00]">No fluff</p>
                <p className="mt-4 text-2xl font-bold">We build attention that converts, not just pretty posts.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative border-t border-white/10 bg-black/20 px-5 py-4 md:px-8">
          <div className="flex flex-wrap gap-x-8 gap-y-3 text-xs font-semibold uppercase tracking-[0.34em] text-white/52">
            <span>Launch energy</span>
            <span>Trend-aware content</span>
            <span>Performance hooks</span>
            <span>Fast edits</span>
            <span>Culture-first storytelling</span>
          </div>
        </div>
      </div>
    </section>
  );
}
