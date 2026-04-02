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
    <section className="py-20 md:py-28">
      <div className="section-shell">
        <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="eyebrow text-[#b65128]">What We Do</p>
            <h2 className="display-title mt-4 max-w-4xl text-5xl text-[#111114] md:text-7xl">
              We build the look, the hook, and the push behind it.
            </h2>
          </div>
          <p className="max-w-xl text-lg leading-8 text-slate-600 md:text-xl">
            Each service is designed to feel less like outsourced marketing and more like an in-house
            creative team with taste, speed, and range.
          </p>
        </div>

        <div className="grid gap-0 border-t border-black/10">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group hover-rise grid gap-6 border-b border-black/10 py-8 md:grid-cols-[7rem_minmax(0,1fr)_auto] md:items-start md:gap-8 md:py-10"
            >
              <div className={`h-20 w-20 rounded-[1.65rem] bg-gradient-to-br ${service.gradient} p-[1px]`}>
                <div className="flex h-full w-full items-center justify-center rounded-[1.6rem] bg-[#111114] text-white">
                  <service.icon className="h-9 w-9" />
                </div>
              </div>

              <div>
                <div className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#b65128]">
                  0{index + 1}
                </div>
                <div className="grid gap-4 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1fr)] lg:items-start">
                  <div>
                    <h3 className="text-3xl font-bold text-[#111114] md:text-5xl">{service.title}</h3>
                    <p className="mt-3 text-lg font-semibold text-slate-800">{service.description}</p>
                  </div>
                  <p className="max-w-2xl leading-8 text-slate-600 md:pt-2">{service.details}</p>
                </div>
              </div>

              <div className="w-fit self-start rounded-full border border-black/10 px-5 py-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#111114] transition-colors duration-300 group-hover:border-[#ff6a1f] group-hover:bg-[#ff6a1f] group-hover:text-white">
                Built to hit
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
