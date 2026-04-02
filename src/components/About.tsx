export default function About() {
  return (
    <section className="py-20 md:py-28">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
          <div>
            <p className="eyebrow text-[#b65128]">Why MIH</p>
            <h2 className="display-title mt-5 max-w-4xl text-5xl text-[#111114] md:text-7xl">
              For brands that would rather be reposted than politely ignored.
            </h2>
          </div>
          <div className="border-l border-black/10 pl-0 lg:pl-8">
            <p className="max-w-xl text-lg leading-8 text-slate-700 md:text-xl md:leading-9">
              We shape the strategy, visuals, edits, and distribution together, so your brand does
              not feel like a set of disconnected assets. It feels like a live thing people want in
              their feed.
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="relative overflow-hidden rounded-[2.3rem] bg-[#15131a] p-8 text-white md:p-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,106,31,0.28),_transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(238,203,130,0.14),_transparent_28%)]" />
            <div className="relative">
              <p className="eyebrow text-[#eecb82]">Creative</p>
              <p className="mt-5 max-w-[12ch] text-4xl font-bold leading-[1.02] md:text-5xl">
                Visual-first ideas with zero template energy.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="border-t border-black/10 pt-6">
              <p className="eyebrow text-[#b65128]">Strategy</p>
              <p className="mt-4 text-3xl font-bold leading-tight text-[#111114]">
                Positioning tuned for short attention spans and high competition.
              </p>
            </div>
            <div className="border-t border-black/10 pt-6">
              <p className="eyebrow text-[#b65128]">Execution</p>
              <p className="mt-4 text-3xl font-bold leading-tight text-[#111114]">
                Fast turnarounds, sharp edits, cleaner outcomes.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-10 border-t border-black/10 pt-10 lg:grid-cols-2">
          <div>
            <p className="eyebrow text-[#b65128]">Vision</p>
            <p className="mt-4 max-w-[14ch] text-4xl font-bold leading-tight text-[#111114] md:text-5xl">
              Create online brands with real personality and energy.
            </p>
          </div>
          <div>
            <p className="eyebrow text-[#b65128]">Mission</p>
            <p className="mt-4 max-w-3xl text-2xl font-semibold leading-10 text-slate-800 md:text-3xl md:leading-[3.25rem]">
              Cut through generic marketing. Creating content systems and paid campaigns that feel
              current, and convert attention into growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
