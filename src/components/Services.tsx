import { Bot, Camera, Share2, TrendingUp } from 'lucide-react';

const services = [
  {
    icon: Camera,
    title: 'Videography & Photography',
    description: 'We paint with light and capture moments that move.',
    details:
      "Our team creates sharp visuals that showcase your brand's energy and make your story feel impossible to ignore.",
  },
  {
    icon: Share2,
    title: 'Social Media Management',
    description: "We don't just post. We build momentum.",
    details:
      "From content planning to execution, we shape a social presence that feels current, consistent, and worth following.",
  },
  {
    icon: TrendingUp,
    title: 'SEO & PPC',
    description: 'Visibility with intent, not empty reach.',
    details:
      'We combine search strategy and targeted paid campaigns to put your brand in front of the right people at the right time.',
  },
  {
    icon: Bot,
    title: 'Websites & AI Automations',
    description: 'Systems that work while you sleep.',
    details:
      'We design high-performance websites and intelligent automations that streamline operations, capture leads, and turn your digital presence into a scalable growth engine.',
  },
];

export default function Services() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.82),_transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(255,106,31,0.12),_transparent_28%)]" />

      <div className="section-shell relative">
        <div className="mb-16 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="eyebrow text-[#b65128]">What We Do</p>
            <h2 className="display-title mt-4 max-w-4xl text-5xl text-[#111114] md:text-7xl">
              We build the look, the hook, and the push behind it.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
            Each service is designed to feel less like outsourced marketing and more like an in-house
            creative team with taste, speed, and range.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, index) => {
            const accent = index === 1 || index === 2;

            return (
              <article
                key={service.title}
                className={`group relative min-h-[25rem] overflow-hidden rounded-[2rem] border transition-all duration-500 hover:-translate-y-1 ${
                  accent
                    ? 'border-[#111114]/10 bg-[#111017] text-white shadow-[0_28px_80px_rgba(17,17,20,0.16)]'
                    : 'border-black/10 bg-[linear-gradient(180deg,_rgba(255,255,255,0.96),_rgba(244,236,227,0.94))] shadow-[0_24px_60px_rgba(17,17,20,0.08)]'
                }`}
              >
                <div
                  className={`absolute inset-0 ${
                    accent
                      ? 'bg-[radial-gradient(circle_at_top_left,_rgba(255,106,31,0.28),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(238,203,130,0.14),_transparent_24%)]'
                      : 'bg-[radial-gradient(circle_at_top_right,_rgba(255,106,31,0.16),_transparent_26%),radial-gradient(circle_at_bottom_left,_rgba(255,255,255,0.75),_transparent_30%)]'
                  }`}
                />
                <div
                  className={`absolute inset-x-0 top-0 h-px ${
                    accent ? 'bg-white/14' : 'bg-black/8'
                  }`}
                />
                <div
                  className={`absolute right-5 top-5 h-24 w-24 rounded-full blur-2xl transition-transform duration-500 group-hover:scale-110 ${
                    accent ? 'bg-[#ff6a1f]/20' : 'bg-[#eecb82]/55'
                  }`}
                />
                <div
                  className={`absolute bottom-0 left-0 h-40 w-40 rounded-full blur-3xl ${
                    accent ? 'bg-white/6' : 'bg-[#ff6a1f]/12'
                  }`}
                />

                <div className="relative flex h-full flex-col p-6 md:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div
                      className={`flex h-16 w-16 items-center justify-center rounded-[1.45rem] border ${
                        accent
                          ? 'border-white/10 bg-white/6 text-white'
                          : 'border-black/10 bg-[#111114] text-white'
                      }`}
                    >
                      <service.icon className="h-7 w-7" />
                    </div>

                    <div
                      className={`rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] ${
                        accent
                          ? 'border border-white/10 bg-white/6 text-white/62'
                          : 'border border-black/10 bg-white/75 text-black/45'
                      }`}
                    >
                      0{index + 1}
                    </div>
                  </div>

                  <div className="mt-12">
                    <p className={`eyebrow ${accent ? 'text-[#eecb82]' : 'text-[#b65128]'}`}>Service</p>
                    <h3 className="mt-4 max-w-[11ch] text-3xl font-bold leading-tight md:text-[2.15rem]">
                      {service.title}
                    </h3>
                  </div>

                  <div className="mt-auto">
                    <p
                      className={`max-w-[18ch] text-lg font-semibold leading-7 md:text-xl ${
                        accent ? 'text-white/90' : 'text-slate-800'
                      }`}
                    >
                      {service.description}
                    </p>

                    <div
                      className={`mt-6 rounded-[1.4rem] border p-4 ${
                        accent
                          ? 'border-white/10 bg-white/[0.04]'
                          : 'border-black/8 bg-white/58 backdrop-blur-sm'
                      }`}
                    >
                      <p
                        className={`text-sm leading-7 md:text-[0.98rem] ${
                          accent ? 'text-white/68' : 'text-slate-600'
                        }`}
                      >
                        {service.details}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
