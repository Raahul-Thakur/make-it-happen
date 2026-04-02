import { TrendingUp, Users, Eye, MousePointerClick } from 'lucide-react';

const stats = [
  {
    icon: Eye,
    value: '750K+',
    label: 'Accounts Reached',
    subtext: 'Organic Growth',
  },
  {
    icon: Users,
    value: '5M+',
    label: 'Total Views Across Campaigns',
    subtext: 'Cross-platform performance',
  },
  {
    icon: MousePointerClick,
    value: '35+',
    label: 'Campaigns Managed Across Industries',
    subtext: 'Client Results',
  },
  {
    icon: TrendingUp,
    value: '4.8x',
    label: 'Average ROAS',
    subtext: 'Ad Spend Efficiency',
  },
];

export default function Results() {
  return (
    <section className="py-20 md:py-28">
      <div className="section-shell">
        <div className="overflow-hidden rounded-[2.4rem] bg-[#111017] text-white">
          <div className="grid gap-12 p-8 md:p-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <h2 className="display-title mt-4 text-5xl md:text-7xl">
                Attention is the product. We help you own more of it.
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/72 md:text-xl">
                We treat performance and creative like one system, so the numbers move because the
                work actually feels alive.
              </p>
              <div className="mt-12 border-t border-white/10 pt-6">
                <h3 className="text-2xl font-bold">What this means</h3>
                <p className="mt-4 max-w-md text-base leading-8 text-white/72">
                  Reach is not random. The brands that feel current, consistent, and visually sharp
                  collect more clicks, more saves, and more repeat attention.
                </p>
              </div>
            </div>

            <div>
              <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2">
                {stats.map((stat, index) => (
                  <div key={stat.label} className="border-t border-white/10 pt-5">
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ff6a1f]">
                        <stat.icon className="h-7 w-7" />
                      </div>
                      <span className="text-xs uppercase tracking-[0.28em] text-white/35">
                        0{index + 1}
                      </span>
                    </div>
                    <div className="mt-6 text-5xl font-bold md:text-6xl">{stat.value}</div>
                    <div className="mt-3 max-w-[14ch] text-xl font-semibold leading-8">
                      {stat.label}
                    </div>
                    <div className="mt-2 text-sm uppercase tracking-[0.2em] text-white/45">
                      {stat.subtext}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 border-t border-white/10 pt-6">
                <p className="eyebrow text-[#eecb82]">Why it matters</p>
                <p className="mt-4 max-w-2xl text-2xl font-semibold leading-10">
                  Strong creative is not decoration. It is leverage for discovery, trust, and demand.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
