import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative scroll-mt-24 overflow-hidden bg-[#f8efe2] text-[#111114]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.78),_transparent_30%),linear-gradient(180deg,_rgba(250,242,233,0.96)_0%,_rgba(243,232,219,0.96)_100%)]" />
      <div className="absolute right-[8%] top-[16%] h-40 w-40 rounded-[56%_44%_38%_62%/41%_56%_44%_59%] bg-[#111114]/7 md:h-52 md:w-52" />
      <div className="absolute bottom-[10%] right-[-4%] h-72 w-72 rounded-[58%_42%_61%_39%/36%_60%_40%_64%] bg-[#eecb82]/55 blur-sm md:h-96 md:w-96" />
      <div className="absolute bottom-[22%] left-[24%] h-28 w-28 rounded-[58%_42%_61%_39%/36%_60%_40%_64%] bg-white/45 blur-sm md:h-36 md:w-36" />

      <div className="section-shell relative min-h-[calc(100svh-4.75rem)] py-8 md:py-10">
        <div className="relative grid gap-8 pb-8 pt-2 md:gap-10 md:pb-12 md:pt-4 lg:grid-cols-[minmax(0,1.02fr)_minmax(20rem,0.98fr)] lg:items-start xl:gap-12 xl:pb-10">
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

            <div className="float-slow relative p-1 sm:p-2 lg:max-h-[calc(100svh-9rem)] xl:max-h-none">
              <div className="relative grid gap-5 sm:grid-cols-2 lg:gap-4 xl:gap-5">
                <div className="hover-rise relative min-h-[9rem] rotate-[-2deg] rounded-[0.35rem] bg-[#ffe77a] p-5 text-[#111114] shadow-[0_14px_28px_rgba(0,0,0,0.18)] transition-transform duration-300 hover:rotate-0 lg:min-h-[8rem] lg:p-4">
                  <div className="absolute -top-2 left-1/2 h-5 w-16 -translate-x-1/2 rotate-[3deg] rounded-sm bg-white/45" />

                  <p className="text-4xl font-black tracking-tight sm:text-5xl lg:text-[2.4rem]">
                    IRL
                  </p>

                  <p className="mt-6 max-w-[17ch] text-sm font-medium leading-5 text-slate-700 lg:text-[0.82rem] lg:leading-[1.15rem]">
                    Online visibility that turns into real-world momentum.
                  </p>
                </div>

                <div className="hover-rise relative min-h-[9rem] rotate-[1.5deg] rounded-[0.35rem] bg-[#c7f3d4] p-5 text-[#111114] shadow-[0_14px_28px_rgba(0,0,0,0.16)] transition-transform duration-300 hover:rotate-0 lg:min-h-[8rem] lg:p-4">
                  <div className="absolute -top-2 right-8 h-5 w-16 rotate-[-5deg] rounded-sm bg-white/45" />

                  <p className="eyebrow text-[#2f6b43]">Brand stack</p>

                  <p className="mt-5 max-w-[22ch] text-lg font-black leading-7 tracking-tight lg:text-[1rem] lg:leading-6">
                    Branding, websites, social systems, automations, and paid growth.
                  </p>
                </div>

                <div className="hover-rise relative rotate-[2deg] rounded-[0.45rem] bg-[#ffb6c8] p-5 text-[#111114] shadow-[0_16px_30px_rgba(0,0,0,0.18)] transition-transform duration-300 hover:rotate-0 lg:p-4">
                  <div className="absolute -top-2 left-7 h-5 w-14 rotate-[-8deg] rounded-sm bg-white/40" />

                  <p className="eyebrow text-[#8a2540]">Brand energy</p>

                  <p className="mt-5 max-w-[14ch] text-[1.6rem] font-black leading-tight sm:text-[1.75rem] lg:mt-4 lg:text-[1.3rem] lg:leading-[1.1]">
                    Creative systems built to feel current, useful, and unmistakably yours.
                  </p>
                </div>

                <div className="hover-rise relative rotate-[-2deg] rounded-[0.45rem] bg-[#b8e7ff] p-5 text-[#111114] shadow-[0_16px_30px_rgba(0,0,0,0.18)] transition-transform duration-300 hover:rotate-0 lg:p-4">
                  <div className="absolute -top-2 right-7 h-5 w-14 rotate-[7deg] rounded-sm bg-white/40" />

                  <p className="eyebrow text-[#14546e]">Growth loop</p>

                  <p className="mt-5 max-w-[14ch] text-[1.6rem] font-black leading-tight sm:text-[1.75rem] lg:mt-4 lg:text-[1.3rem] lg:leading-[1.1]">
                    Stay visible online, make the experience convert offline.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="reveal-fade lg:col-span-2">
            <div className="border-t border-white/10 pt-5 md:pt-6">
              <div className="grid gap-8 lg:grid-cols-[minmax(0,520px)_minmax(460px,1fr)] lg:items-start lg:gap-12">
                <div>
                  <p className="text-[0.98rem] leading-7 text-black/68 md:text-lg md:leading-8">
                    Not a corporate deck. Not a sleepy agency. We build launch energy,
                    social heat, and performance loops that make people stop, stare,
                    click, and share.
                  </p>

                  <div className="mt-6">
                    <button
                      onClick={scrollToContact}
                      className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#ff6a1f] px-6 py-3.5 font-semibold text-white transition-transform duration-300 hover:scale-[1.03]"
                    >
                      Build the next drop
                      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2 lg:ml-auto lg:w-[560px]">
                  {[
                    'Start loud',
                    'Built for the moment',
                    'Stop the scroll',
                    'Speed to screen',
                    'Where culture becomes narrative',
                  ].map((tag, index) => (
                    <span
                      key={tag}
                      className={`rounded-full border border-black/10 bg-white/55 px-4 py-3 text-center text-[11px] font-semibold uppercase tracking-[0.28em] text-black/55 backdrop-blur-sm transition-colors duration-300 hover:border-black/18 hover:bg-white/78 hover:text-black/72 ${
                        index === 4 ? 'sm:col-span-2' : ''
                      }`}
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
    </section>
  );
}
