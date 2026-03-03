import { Camera, Share2, TrendingUp } from 'lucide-react';

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
];

export default function Services() {
  return (
    <section className="px-4 py-20 md:px-10 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#ff5f1f]">What We Do</p>
            <h2 className="mt-4 max-w-4xl text-5xl font-extrabold leading-[0.92] text-[#111114] md:text-7xl">
              We build the look, the hook, and the push behind it.
            </h2>
          </div>
          <p className="max-w-xl text-lg leading-8 text-slate-600 md:text-xl">
            Each service is designed to feel less like outsourced marketing and more like an in-house
            creative team with taste, speed, and range.
          </p>
        </div>

        <div className="grid gap-5">
          {services.map((service, index) => (
            <div
              key={index}
              className="group grid gap-6 overflow-hidden rounded-[2rem] border border-black/10 bg-white/[0.85] p-6 shadow-[0_18px_40px_rgba(17,17,20,0.06)] backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 md:grid-cols-[auto_1fr_auto] md:items-center md:p-8"
            >
              <div className={`h-20 w-20 rounded-[1.75rem] bg-gradient-to-br ${service.gradient} p-1`}>
                <div className="flex h-full w-full items-center justify-center rounded-[1.4rem] bg-[#111114] text-white">
                  <service.icon className="h-9 w-9" />
                </div>
              </div>

              <div>
                <div className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#ff5f1f]">
                  0{index + 1}
                </div>
                <h3 className="text-3xl font-bold text-[#111114] md:text-4xl">
                  {service.title}
                </h3>
                <p className="mt-3 text-lg font-semibold text-slate-800">
                  {service.description}
                </p>
                <p className="mt-3 max-w-3xl leading-8 text-slate-600">
                  {service.details}
                </p>
              </div>

              <div className="w-fit rounded-full bg-[#111114] px-5 py-3 text-xs font-semibold uppercase tracking-[0.28em] text-white transition-colors duration-300 group-hover:bg-[#ff5f1f]">
                Built to hit
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
