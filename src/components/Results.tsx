import { TrendingUp, Users, Eye, MousePointerClick } from 'lucide-react';

const stats = [
  {
    icon: Eye,
    value: '250K+',
    label: 'Accounts Reached',
    subtext: 'Organic Growth',
  },
  {
    icon: Users,
    value: '3M+',
    label: 'Total Views',
    subtext: 'Across Campaigns',
  },
  {
    icon: MousePointerClick,
    value: '62K+',
    label: 'PPC Impressions',
    subtext: 'Targeted Reach',
  },
  {
    icon: TrendingUp,
    value: '142',
    label: 'New Followers',
    subtext: 'Monthly Growth',
  },
];

export default function Results() {
  return (
    <section className="px-4 py-20 md:px-10 md:py-24">
      <div className="mx-auto max-w-7xl rounded-[2.25rem] bg-[#111114] p-8 text-white shadow-[0_30px_80px_rgba(17,17,20,0.2)] md:p-10">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#ffd166]">Receipts</p>
            <h2 className="mt-4 text-5xl font-extrabold leading-[0.92] md:text-7xl">
              Attention is the product. We help you own more of it.
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/72 md:text-xl">
              We treat performance and creative like one system, so the numbers move because the
              work actually feels alive.
            </p>
            <div className="mt-10 rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
              <h3 className="text-2xl font-bold">What this means</h3>
              <p className="mt-4 text-base leading-8 text-white/72">
                Reach is not random. The brands that feel current, consistent, and visually sharp
                collect more clicks, more saves, and more repeat attention.
              </p>
            </div>
          </div>

          <div>
            <div className="grid gap-5 sm:grid-cols-2">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 hover:bg-white/10"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-[#ff5f1f]">
                      <stat.icon className="h-7 w-7" />
                    </div>
                    <span className="text-xs uppercase tracking-[0.28em] text-white/35">0{index + 1}</span>
                  </div>
                  <div className="mt-6 text-4xl font-bold">{stat.value}</div>
                  <div className="mt-2 text-lg font-semibold">{stat.label}</div>
                  <div className="mt-1 text-sm text-white/55">{stat.subtext}</div>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-[1.75rem] bg-[#ffd166] p-6 text-[#111114]">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#7a1f00]">Why it matters</p>
              <p className="mt-4 text-xl font-semibold leading-9">
                Strong creative is not decoration. It is leverage for discovery, trust, and demand.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
