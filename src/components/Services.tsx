import { useState } from 'react';
import { Bot, Camera, ChevronLeft, ChevronRight, Share2, TrendingUp } from 'lucide-react';

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
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = services[activeIndex];

  const previousService = () => {
    setActiveIndex((current) => (current === 0 ? services.length - 1 : current - 1));
  };

  const nextService = () => {
    setActiveIndex((current) => (current === services.length - 1 ? 0 : current + 1));
  };

  return (
    <section id="services" className="relative scroll-mt-24 overflow-hidden py-20 md:py-28">
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

        <div className="relative">
          <div className="mb-7 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-3 py-2 shadow-[0_10px_28px_rgba(17,17,20,0.08)] backdrop-blur-md">
              {services.map((service, index) => (
                <button
                  key={service.title}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Show ${service.title}`}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    activeIndex === index
                      ? 'w-9 bg-[#ff6a1f] shadow-[0_0_0_3px_rgba(255,106,31,0.18)]'
                      : 'w-2.5 bg-[#111114]/32 hover:bg-[#111114]/55'
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={previousService}
                aria-label="Previous service"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white/70 text-[#111114] shadow-[0_16px_36px_rgba(17,17,20,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <button
                type="button"
                onClick={nextService}
                aria-label="Next service"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-[#111114] text-white shadow-[0_16px_36px_rgba(17,17,20,0.16)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ff6a1f]"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.35fr)_minmax(18rem,0.65fr)] lg:items-stretch">
            <div className="h-full overflow-hidden">
              <div
                className="flex h-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {services.map((service, index) => {
                  return (
                    <div key={service.title} className="flex min-w-full">
                      <article
                        className="group relative min-h-[25rem] w-full overflow-hidden rounded-[2rem] border border-black/10 bg-transparent transition-all duration-500 hover:-translate-y-1 md:min-h-[28rem]"
                      >
                        <div className="absolute inset-x-0 top-0 h-px bg-black/8" />

                        <div className="relative flex h-full flex-col p-6 md:p-8 lg:p-10">
                          <div className="flex items-start justify-between gap-4">
                            <div
                              className="flex h-16 w-16 items-center justify-center rounded-[1.45rem] border border-black/10 bg-[#111114] text-white"
                            >
                              <service.icon className="h-7 w-7" />
                            </div>

                            <div className="rounded-full border border-black/10 bg-white/75 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-black/45">
                              0{index + 1}
                            </div>
                          </div>

                          <div className="mt-12 md:mt-16">
                            <p className="eyebrow text-[#b65128]">Service</p>
                            <h3 className="mt-4 max-w-[12ch] text-3xl font-bold leading-tight md:text-5xl">
                              {service.title}
                            </h3>
                          </div>

                          <div className="mt-auto grid gap-5 pt-10 md:gap-6 xl:grid-cols-[minmax(0,0.72fr)_minmax(18rem,0.9fr)] xl:items-end">
                            <p className="max-w-[20ch] text-lg font-semibold leading-7 text-slate-800 md:text-2xl md:leading-9">
                              {service.description}
                            </p>

                            <div className="rounded-[1.4rem] border border-black/8 bg-transparent p-4 md:p-5">
                              <p className="text-sm leading-7 text-slate-600 md:text-[0.98rem]">
                                {service.details}
                              </p>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                  );
                })}
              </div>
            </div>

            <aside className="relative overflow-hidden rounded-[2rem] border border-black/10 bg-white/62 p-4 shadow-[0_24px_60px_rgba(17,17,20,0.07)] backdrop-blur-md md:p-5 lg:min-h-[28rem]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,106,31,0.12),_transparent_34%),radial-gradient(circle_at_bottom_left,_rgba(238,203,130,0.24),_transparent_30%)]" />
              <div className="relative flex h-full flex-col">
                <div className="mb-5 flex items-center justify-between gap-4 px-1">
                  <p className="eyebrow text-[#b65128]">All Services</p>
                  <span className="text-sm font-semibold text-black/40">0{activeIndex + 1}/04</span>
                </div>

                <div className="grid gap-3">
                  {services.map((service, index) => {
                    const Icon = service.icon;
                    const selected = activeIndex === index;

                    return (
                      <button
                        key={service.title}
                        type="button"
                        onClick={() => setActiveIndex(index)}
                        aria-current={selected ? 'true' : undefined}
                        className={`group flex min-h-[5.5rem] items-center gap-4 rounded-[1.35rem] border p-4 text-left transition-all duration-300 ${
                          selected
                            ? 'border-[#111114] bg-[#111114] text-white shadow-[0_18px_38px_rgba(17,17,20,0.16)]'
                            : 'border-black/8 bg-white/54 text-[#111114] hover:-translate-y-0.5 hover:border-[#ff6a1f]/35 hover:bg-white/86'
                        }`}
                      >
                        <span
                          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border transition-colors duration-300 ${
                            selected
                              ? 'border-white/10 bg-white/8 text-[#eecb82]'
                              : 'border-black/8 bg-[#111114] text-white group-hover:bg-[#ff6a1f]'
                          }`}
                        >
                          <Icon className="h-5 w-5" />
                        </span>

                        <span className="min-w-0">
                          <span
                            className={`block text-[11px] font-semibold uppercase tracking-[0.24em] ${
                              selected ? 'text-white/48' : 'text-black/35'
                            }`}
                          >
                            0{index + 1}
                          </span>
                          <span className="mt-1 block text-base font-bold leading-tight md:text-lg">
                            {service.title}
                          </span>
                        </span>
                      </button>
                    );
                  })}
                </div>

                <p className="mt-auto hidden px-1 pt-6 text-sm leading-6 text-slate-600 lg:block">
                  {activeService.description}
                </p>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
