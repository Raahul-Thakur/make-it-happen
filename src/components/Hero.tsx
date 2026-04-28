import { ArrowRight } from 'lucide-react';
import shortLogo from '../../content/SHORT WHITE LOGO+.png';

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-[#f8efe2] text-[#111114]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.78),_transparent_30%),linear-gradient(180deg,_rgba(250,242,233,0.96)_0%,_rgba(243,232,219,0.96)_100%)]" />
      <div className="absolute right-[8%] top-[16%] h-40 w-40 rounded-[56%_44%_38%_62%/41%_56%_44%_59%] bg-[#111114]/7 md:h-52 md:w-52" />
      <div className="absolute bottom-[10%] right-[-4%] h-72 w-72 rounded-[58%_42%_61%_39%/36%_60%_40%_64%] bg-[#eecb82]/55 blur-sm md:h-96 md:w-96" />
      <div className="absolute bottom-[22%] left-[24%] h-28 w-28 rounded-[58%_42%_61%_39%/36%_60%_40%_64%] bg-white/45 blur-sm md:h-36 md:w-36" />

      <div className="section-shell relative min-h-screen py-4 md:py-6">
        <div className="reveal-up flex items-center justify-between border-b border-black/10 pb-4 md:pb-5">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-[1.35rem] border border-black/10 bg-white/70 shadow-[0_10px_30px_rgba(17,17,20,0.08)]">
              <img
                src={shortLogo}
                alt="Make It Happen logo"
                className="h-full w-full object-contain p-1.5"
              />
            </div>
            <div>
              <p className="eyebrow text-black/55">Make It Happen</p>
              <p className="mt-1 text-sm text-black/65">Stay online. Grow IRL.</p>
            </div>
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <span className="rounded-full border border-black/10 bg-white/55 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-black/65 backdrop-blur-sm">
              Estd 2024
            </span>
          </div>
        </div>

        <div className="relative grid gap-8 pb-8 pt-7 md:gap-10 md:pb-12 md:pt-9 lg:grid-cols-[minmax(0,1.02fr)_minmax(20rem,0.98fr)] lg:items-start xl:gap-12 xl:pb-10">
          <div className="max-w-[48rem]">
            <div className="mt-2 reveal-up md:mt-4">
              <p className="eyebrow text-[#b65128]">Digital Marketing Agency</p>
              <h1 className="display-title mt-3 max-w-5xl text-[3.15rem] sm:text-[4.15rem] md:text-[5.1rem] lg:max-w-[11ch] lg:text-[6.1rem] xl:text-[7rem]">
                We make brands feel louder than the algorithm.
              </h1>
            </div>
          </div>

          <div className="reveal-up relative lg:self-stretch lg:pt-2">
            <div className="absolute right-10 top-2 hidden h-20 w-20 rounded-full border border-black/10 bg-white/45 lg:block xl:h-24 xl:w-24" />
            <div className="absolute bottom-8 left-1 hidden h-24 w-24 rounded-full bg-[#ff6a1f]/18 blur-3xl lg:block xl:h-28 xl:w-28" />

            <div className="float-slow relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,_rgba(255,255,255,0.14),_rgba(255,255,255,0.05))] p-4 shadow-[0_30px_90px_rgba(0,0,0,0.26)] backdrop-blur-xl sm:p-5 lg:max-h-[calc(100svh-9rem)] lg:p-4 xl:max-h-none xl:p-5">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_transparent_34%)]" />
              <div className="relative grid gap-3 lg:gap-2.5 xl:gap-3.5">
                <div className="glass-panel rounded-[1.75rem] p-5 text-[#111114] sm:p-6 lg:p-4 xl:p-6">
                  <p className="eyebrow text-[#7a1f00]">Brand Pulse</p>
                  <div className="mt-4 grid gap-3 sm:grid-cols-[0.88fr_1.12fr] lg:mt-3 lg:gap-2.5">
                    <div className="flex min-h-[8.5rem] flex-col justify-between rounded-[1.35rem] bg-[#f0e7db] p-4 lg:min-h-[7.25rem] lg:p-3.5">
                      <p className="text-3xl font-extrabold sm:text-4xl lg:text-[1.9rem]">IRL</p>
                      <p className="max-w-[16ch] text-sm leading-5 text-slate-600 lg:text-[0.8rem] lg:leading-[1.15rem]">
                        Online visibility that translates into real-world momentum.
                      </p>
                    </div>
                    <div className="flex min-h-[8.5rem] flex-col justify-between rounded-[1.35rem] bg-[#121218] p-4 text-white lg:min-h-[7.25rem] lg:p-3.5">
                      <p className="eyebrow text-white/40">Current stack</p>
                      <p className="max-w-[20ch] text-lg font-semibold leading-7 lg:text-[0.95rem] lg:leading-6">
                        Branding, websites, social systems, automations, and paid growth.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:gap-3">
                  <div className="hover-rise rounded-[1.6rem] bg-[#cf6643] p-5 text-[#111114] lg:p-4">
                    <p className="eyebrow text-[#f7dfb1]">Brand energy</p>
                    <p className="mt-4 max-w-[13ch] text-[1.6rem] font-bold leading-tight sm:text-[1.75rem] lg:mt-3 lg:text-[1.3rem] lg:leading-[1.1]">
                      Creative systems built to feel current, useful, and unmistakably yours.
                    </p>
                  </div>
                  <div className="hover-rise rounded-[1.6rem] bg-[#eecb82] p-5 text-[#111114] lg:p-4">
                    <p className="eyebrow text-[#7a1f00]">Growth loop</p>
                    <p className="mt-4 max-w-[13ch] text-[1.6rem] font-bold leading-tight sm:text-[1.75rem] lg:mt-3 lg:text-[1.3rem] lg:leading-[1.1]">
                      Stay visible online, make the experience convert offline.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="reveal-fade lg:col-span-2">
            <div className="grid gap-7 border-t border-white/10 pt-5 md:gap-8 md:pt-6 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:gap-10">
              <div className="max-w-xl">
                <p className="text-[0.98rem] leading-7 text-black/68 md:text-lg md:leading-8">
                  Not a corporate deck. Not a sleepy agency. We build launch energy, social heat, and
                  performance loops that make people stop, stare, click, and share.
                </p>

                <div className="mt-6 flex flex-col gap-4">
                  <button
                    onClick={scrollToContact}
                    className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#ff6a1f] px-6 py-3.5 font-semibold text-white transition-transform duration-300 hover:scale-[1.03]"
                  >
                    Build the next drop
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </button>
                  <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/10 pt-6 text-xs font-semibold uppercase tracking-[0.34em] text-white/46">
                    {[
                      'Start loud',
                      'Built for the moment',
                      'Stop the scroll',
                      'Speed to screen',
                      'Where culture becomes narrative',
                    ].map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-black/10 bg-white/55 px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-black/55 backdrop-blur-sm transition-colors duration-300 hover:border-black/18 hover:bg-white/78 hover:text-black/72"
                      >
                        {tag}
                      </span>
                    ))}
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
