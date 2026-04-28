export default function About() {
  return (
    <section id="about" data-nav-theme="dark" className="relative scroll-mt-24 overflow-hidden bg-[#0e0d12] py-20 text-white md:py-28">
      <div className="absolute inset-0 mesh-bg opacity-90" />
      <div className="absolute inset-0 grid-lines opacity-[0.08]" />
      <div className="absolute -left-16 top-24 h-56 w-56 rounded-full bg-[#ff6a1f]/20 blur-3xl md:h-72 md:w-72" />
      <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-[#eecb82]/10 blur-3xl" />

      <div className="section-shell relative">
        <div className="grid gap-10 lg:grid-cols-[0.22fr_1.78fr] lg:gap-12">
          <div className="flex items-start lg:pt-2">
            <div className="rounded-full border border-white/10 px-4 py-2">
              <p className="eyebrow text-[#eecb82]">Why MIH</p>
            </div>
          </div>

          <div>
            <h2 className="display-title max-w-5xl text-5xl md:text-7xl">
              For brands that would rather be reposted than politely ignored.
            </h2>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70 md:text-xl md:leading-9">
              We shape the strategy, visuals, edits, and distribution together, so your brand does
              not feel like a set of disconnected assets. It feels like a live thing people want in
              their feed.
            </p>

            <div className="mt-12 grid gap-4 md:grid-cols-3 md:gap-5">
              <article className="rounded-[1.9rem] border border-black/10 bg-[#b65128] p-5 text-white shadow-[0_18px_40px_rgba(17,17,20,0.1)] md:min-h-[16.5rem] md:p-6">
                <div className="flex h-full flex-col">
                  <p className="eyebrow text-[#eecb82]">Creative</p>
                  <p className="mt-6 max-w-[12ch] text-[1.65rem] font-bold leading-tight sm:text-[1.8rem] md:text-[1.9rem]">
                    Visual-first ideas with zero template energy.
                  </p>
                </div>
              </article>

              <article className="rounded-[1.9rem] border border-white/10 bg-white/88 p-5 text-[#eecb82] shadow-[0_14px_34px_rgba(17,17,20,0.07)] md:min-h-[16.5rem] md:p-6">
                <div className="flex h-full flex-col">
                  <p className="eyebrow text-[#b65128]">Strategy</p>
                  <p className="mt-6 max-w-[12ch] text-[1.65rem] font-bold leading-tight sm:text-[1.8rem] md:text-[1.9rem]">
                    Positioning tuned for short attention spans and high competition.
                  </p>
                </div>
              </article>

              <article className="rounded-[1.9rem] border border-[#eecb82]/30 bg-[#eecb82] p-5 text-[#111114] shadow-[0_14px_34px_rgba(238,203,130,0.16)] md:min-h-[16.5rem] md:p-6">
                <div className="flex h-full flex-col">
                  <p className="eyebrow text-[#7a1f00]">Execution</p>
                  <p className="mt-6 max-w-[12ch] text-[1.65rem] font-bold leading-tight sm:text-[1.8rem] md:text-[1.9rem]">
                    Fast turnarounds, sharp edits, cleaner outcomes.
                  </p>
                </div>
              </article>
            </div>

            <div className="mt-12 rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-[0_18px_44px_rgba(0,0,0,0.16)] backdrop-blur-xl md:p-7">
              <div className="grid gap-8 md:grid-cols-[0.78fr_1.22fr] md:gap-10">
                <div className="border-b border-white/10 pb-6 md:border-b-0 md:border-r md:pb-0 md:pr-8">
                  <p className="eyebrow text-[#eecb82]">Vision</p>
                  <p className="mt-4 max-w-[13ch] text-3xl font-bold leading-tight md:text-4xl">
                    Create online brands with real personality and energy.
                  </p>
                </div>

                <div>
                  <p className="eyebrow text-[#eecb82]">Mission</p>
                  <p className="mt-4 max-w-3xl text-xl font-semibold leading-9 text-white/78 md:text-2xl md:leading-10">
                    Cut through generic marketing. Creating content systems and paid campaigns that feel
                    current, and convert attention into growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
