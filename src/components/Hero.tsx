import { ArrowRight } from 'lucide-react';
import shortLogo from '../../content/SHORT WHITE LOGO+.png';

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-[#0e0d12] text-white">
      <div className="absolute inset-0 mesh-bg opacity-90" />
      <div className="absolute inset-0 grid-lines opacity-[0.08]" />
      <div className="absolute -left-16 top-24 h-56 w-56 rounded-full bg-[#ff6a1f]/20 blur-3xl md:h-72 md:w-72" />
      <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-[#eecb82]/10 blur-3xl" />

      <div className="section-shell relative min-h-screen py-6 md:py-8">
        <div className="reveal-up flex items-center justify-between border-b border-white/10 pb-5">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-[1.35rem] border border-white/10 bg-white/10">
              <img
                src={shortLogo}
                alt="Make It Happen logo"
                className="h-full w-full object-contain p-1.5"
              />
            </div>
            <div>
              <p className="eyebrow text-white/60">Make It Happen</p>
              <p className="mt-1 text-sm text-white/72">Stay online. Grow IRL.</p>
            </div>
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <span className="rounded-full border border-white/12 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/70">
              Estd 2024
            </span>
          </div>
        </div>

        <div className="relative grid gap-14 pb-16 pt-12 md:pb-20 md:pt-16 lg:grid-cols-[minmax(0,1.08fr)_minmax(22rem,0.92fr)] lg:items-end">
          <div>
            <div className="mt-8 reveal-up">
              <p className="eyebrow text-[#eecb82]">Digital Marketing Agency</p>
              <h1 className="display-title mt-4 max-w-5xl text-[3.7rem] sm:text-[5rem] md:text-[6.5rem] lg:text-[8.4rem]">
                We make brands feel louder than the algorithm.
              </h1>
            </div>

            <p className="reveal-fade mt-7 max-w-xl text-base leading-8 text-white/74 md:text-xl md:leading-9">
              Not a corporate deck. Not a sleepy agency. We build launch energy, social heat, and
              performance loops that make people stop, stare, click, and share.
            </p>

            <div className="reveal-fade mt-10 flex flex-col gap-5 sm:flex-row sm:items-center">
              <button
                onClick={scrollToContact}
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#ff6a1f] px-7 py-4 font-semibold text-white transition-transform duration-300 hover:scale-[1.03]"
              >
                Build the next drop
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
              <p className="text-sm uppercase tracking-[0.32em] text-white/48">
                Strategy. Content. Paid. Hype.
              </p>
            </div>

            <div className="mt-12 grid gap-6 border-t border-white/10 pt-6 sm:grid-cols-3">
              {[
                ['5M+', 'Views banked'],
                ['24/7', 'Campaign mode'],
                ['Fast', 'Speed'],
              ].map(([value, label]) => (
                <div key={label} className="border-l border-white/10 pl-4 first:border-l-0 first:pl-0">
                  <p className="text-xs uppercase tracking-[0.28em] text-white/42">{label}</p>
                  <p className="mt-2 text-3xl font-extrabold md:text-4xl">{value}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/10 pt-6 text-xs font-semibold uppercase tracking-[0.34em] text-white/46">
              <span>Start loud</span>
              <span>Built for the moment</span>
              <span>Stop the scroll</span>
              <span>Speed to screen</span>
              <span>Where culture becomes narrative</span>
            </div>
          </div>

          <div className="reveal-up relative lg:pb-4">
            <div className="absolute right-12 top-4 hidden h-24 w-24 rounded-full border border-white/10 bg-white/5 lg:block" />
            <div className="absolute bottom-10 left-0 hidden h-28 w-28 rounded-full bg-[#ff6a1f]/15 blur-3xl lg:block" />

            <div className="float-slow relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-[linear-gradient(180deg,_rgba(255,255,255,0.14),_rgba(255,255,255,0.05))] p-5 shadow-[0_30px_90px_rgba(0,0,0,0.26)] backdrop-blur-xl sm:p-6">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_transparent_34%)]" />
              <div className="relative grid gap-4">
                <div className="glass-panel rounded-[1.9rem] p-6 text-[#111114] sm:p-7">
                  <p className="eyebrow text-[#7a1f00]">Brand Pulse</p>
                  <div className="mt-5 grid gap-4 sm:grid-cols-[0.88fr_1.12fr]">
                    <div className="flex min-h-[10rem] flex-col justify-between rounded-[1.5rem] bg-[#f0e7db] p-5">
                      <p className="text-4xl font-extrabold sm:text-5xl">IRL</p>
                      <p className="max-w-[16ch] text-sm leading-6 text-slate-600">
                        Online visibility that translates into real-world momentum.
                      </p>
                    </div>
                    <div className="flex min-h-[10rem] flex-col justify-between rounded-[1.5rem] bg-[#121218] p-5 text-white">
                      <p className="eyebrow text-white/40">Current stack</p>
                      <p className="max-w-[20ch] text-xl font-semibold leading-8">
                        Branding, websites, social systems, automations, and paid growth.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="hover-rise rounded-[1.8rem] bg-[#cf6643] p-6 text-[#111114]">
                    <p className="eyebrow text-[#f7dfb1]">Brand energy</p>
                    <p className="mt-5 max-w-[12ch] text-[1.95rem] font-bold leading-tight">
                      Creative systems built to feel current, useful, and unmistakably yours.
                    </p>
                  </div>
                  <div className="hover-rise rounded-[1.8rem] bg-[#eecb82] p-6 text-[#111114]">
                    <p className="eyebrow text-[#7a1f00]">Growth loop</p>
                    <p className="mt-5 max-w-[12ch] text-[1.95rem] font-bold leading-tight">
                      Stay visible online, make the experience convert offline.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
