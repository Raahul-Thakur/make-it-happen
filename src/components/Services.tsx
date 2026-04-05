import { Bot, Camera, Share2, TrendingUp } from 'lucide-react';

const services = [
  {
    icon: Camera,
    title: 'Videography & Photography',
    description: 'We paint with light and capture moments that move.',
    details:
      "Our team creates sharp visuals that showcase your brand's energy and make your story feel impossible to ignore.",
    gradient: 'from-[#A63929] to-[#8B3428]',
  },
  {
    icon: Share2,
    title: 'Social Media Management',
    description: "We don't just post. We build momentum.",
    details:
      "From content planning to execution, we shape a social presence that feels current, consistent, and worth following.",
    gradient: 'from-[#C94D3F] to-[#A63929]',
  },
  {
    icon: TrendingUp,
    title: 'SEO & PPC',
    description: 'Visibility with intent, not empty reach.',
    details:
      'We combine search strategy and targeted paid campaigns to put your brand in front of the right people at the right time.',
    gradient: 'from-[#D95F4F] to-[#C94D3F]',
  },
  {
    icon: Bot,
    title: 'Websites & AI Automations',
    description: 'Systems that work while you sleep.',
    details:
      'We design high-performance websites and intelligent automations that streamline operations, capture leads, and turn your digital presence into a scalable growth engine.',
    gradient: 'from-[#FF8A3D] to-[#D95F4F]',
  },
];

export default function Services() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="section-shell">
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

        <div className="grid gap-6">
          {services.map((service, index) => {
            const accent = index % 2 === 0;

            return (
              <article
                key={service.title}
                className={`group relative overflow-hidden rounded-[2.2rem] border shadow-[0_22px_60px_rgba(17,17,20,0.08)] transition-all duration-300 hover:-translate-y-1 ${
                  accent
                    ? 'border-black/10 bg-[linear-gradient(135deg,_rgba(255,255,255,0.86),_rgba(244,236,227,0.96))]'
                    : 'border-[#111114]/10 bg-[#111017] text-white'
                }`}
              >
                <div
                  className={`absolute inset-0 ${
                    accent
                      ? 'bg-[radial-gradient(circle_at_top_right,_rgba(255,106,31,0.14),_transparent_24%)]'
                      : 'bg-[radial-gradient(circle_at_top_left,_rgba(255,106,31,0.22),_transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(238,203,130,0.12),_transparent_22%)]'
                  }`}
                />

                <div
                  className={`relative grid gap-8 p-6 md:p-8 lg:grid-cols-[auto_minmax(0,0.85fr)_minmax(0,1fr)] lg:items-end ${
                    accent ? '' : 'lg:grid-cols-[auto_minmax(0,0.78fr)_minmax(0,1.08fr)]'
                  }`}
                >
                  <div className={`h-20 w-20 rounded-[1.8rem] bg-gradient-to-br ${service.gradient} p-[1px]`}>
                    <div
                      className={`flex h-full w-full items-center justify-center rounded-[1.75rem] ${
                        accent ? 'bg-[#111114] text-white' : 'bg-white text-[#111114]'
                      }`}
                    >
                      <service.icon className="h-9 w-9" />
                    </div>
                  </div>

                  <div>
                    <p
                      className={`text-xs font-semibold uppercase tracking-[0.3em] ${
                        accent ? 'text-[#b65128]' : 'text-[#eecb82]'
                      }`}
                    >
                      0{index + 1}
                    </p>
                    <h3 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">{service.title}</h3>
                    <p
                      className={`mt-4 max-w-[18ch] text-xl font-semibold leading-8 ${
                        accent ? 'text-slate-800' : 'text-white/88'
                      }`}
                    >
                      {service.description}
                    </p>
                  </div>

                  <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
                    <p
                      className={`max-w-2xl text-base leading-8 md:text-lg ${
                        accent ? 'text-slate-600' : 'text-white/68'
                      }`}
                    >
                      {service.details}
                    </p>
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
