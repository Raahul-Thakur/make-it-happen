export default function About() {
  return (
    <section className="px-4 py-20 md:px-10 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#ff5f1f]">Why MIH</p>
            <h2 className="mt-4 max-w-4xl text-5xl font-extrabold leading-[0.92] text-[#111114] md:text-7xl">
              For brands that would rather be reposted than politely ignored.
            </h2>
          </div>
          <div className="flex items-end">
            <p className="text-lg leading-8 text-slate-700 md:text-xl md:leading-9">
              We shape the strategy, visuals, edits, and distribution together, so your brand does
              not feel like a set of disconnected assets. It feels like a live thing people want in
              their feed.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          <div className="rounded-[2rem] bg-[#111114] p-7 text-white shadow-[0_24px_60px_rgba(17,17,20,0.14)]">
            <p className="text-xs uppercase tracking-[0.28em] text-white/45">Creative</p>
            <p className="mt-4 text-3xl font-bold leading-tight">Visual-first ideas with zero template energy.</p>
          </div>
          <div className="rotate-[-2deg] rounded-[2rem] border border-black/10 bg-white p-7 shadow-[0_24px_60px_rgba(17,17,20,0.08)]">
            <p className="text-xs uppercase tracking-[0.28em] text-[#7a1f00]">Strategy</p>
            <p className="mt-4 text-3xl font-bold leading-tight text-[#111114]">
              Positioning tuned for short attention spans and high competition.
            </p>
          </div>
          <div className="rotate-[2deg] rounded-[2rem] bg-[#ffd166] p-7 text-[#111114] shadow-[0_24px_60px_rgba(255,209,102,0.28)]">
            <p className="text-xs uppercase tracking-[0.28em] text-[#7a1f00]">Execution</p>
            <p className="mt-4 text-3xl font-bold leading-tight">Fast turnarounds, sharp edits, cleaner outcomes.</p>
          </div>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] bg-[linear-gradient(135deg,_#ff5f1f_0%,_#7a1f00_100%)] p-8 text-white shadow-[0_28px_70px_rgba(122,31,0,0.24)]">
            <p className="text-xs uppercase tracking-[0.28em] text-white/55">Vision</p>
            <p className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
              Build internet-facing brands with actual temperature.
            </p>
          </div>
          <div className="rounded-[2rem] border border-black/10 bg-white/80 p-8 backdrop-blur-sm">
            <p className="text-xs uppercase tracking-[0.28em] text-[#ff5f1f]">Mission</p>
            <p className="mt-4 text-2xl font-semibold leading-10 text-slate-800 md:text-3xl md:leading-[3.25rem]">
              Cut through the beige marketing. Create content systems and paid pushes that look
              current, sound confident, and turn attention into momentum.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
