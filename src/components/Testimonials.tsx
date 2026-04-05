import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import ministryOfShawarmaLogo from '../../content/client_logos/ministry of shawarma .jpg';
import wecityMotorsLogo from '../../content/client_logos/wecity.jpg';
import bunmanIraniCafeLogo from '../../content/client_logos/cafe south soul.jpg';
import cravishLogo from '../../content/client_logos/cravish.jpg';

type Testimonial = {
  company: string;
  review: string;
  photo: string;
};

const testimonials: Testimonial[] = [
  {
    company: 'WeCity Motors',
    photo: wecityMotorsLogo,
    review:
      "Make It Happen is one of the most well-suited digital marketing consultancies for any business. Huge shoutout to their team for consistently supporting and amplifying small-scale businesses through their expertise and exceptional cinematography.\n\nThey've been part of our journey since day one, helping us showcase our work better with each step. We truly appreciate the team for always making it happen!",
  },
  {
    company: 'Cravish',
    photo: cravishLogo,
    review:
      "At Cravish, we truly value working with teams that understand a brand's vision, and Make It Happen has been exactly that. From creative concepts and shoot planning to editing and timely posting, their execution has been seamless.\n\nThe team is professional, cooperative, and always brings fresh ideas. It's been a pleasure collaborating, and we look forward to creating more impactful content together.",
  },
  {
    company: 'Ministry of Shawarma',
    photo: ministryOfShawarmaLogo,
    review:
      "Working with Make It Happen has been a game-changer for us. They understood our brand from the start and brought it to life through engaging content and consistent digital presence.\n\nWe've seen a noticeable boost in customer engagement and brand recall. Their team truly cares about your growth, and that reflects in everything they do.",
  },
  {
    company: 'Bunman Irani Cafe',
    photo: bunmanIraniCafeLogo,
    review:
      "Make It Happen didn't just market our cafe - they told our story beautifully. From capturing the essence of our space to creating content that connects with people, they've helped us build a stronger bond with our audience.\n\nTheir creativity, dedication, and positive energy make them a joy to work with. We've grown so much with them by our side!",
  },
];

const AUTOPLAY_MS = 5200;

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setDirection(1);
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, AUTOPLAY_MS);

    return () => window.clearInterval(timer);
  }, [isPaused]);

  const showPrevious = () => {
    setDirection(-1);
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  };

  const showNext = () => {
    setDirection(1);
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  const current = testimonials[activeIndex];

  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,106,31,0.12),_transparent_26%),radial-gradient(circle_at_78%_20%,_rgba(238,203,130,0.18),_transparent_22%),linear-gradient(180deg,_rgba(255,250,246,0.98),_rgba(247,239,230,0.95))]" />

      <div className="section-shell relative">
        <div className="mb-12 max-w-3xl">
          <p className="eyebrow text-[#b65128]">Client Stories</p>
          <h2 className="display-title mt-4 max-w-4xl text-5xl text-[#111114] md:text-7xl">
            Trusted by brands that needed the work to feel real.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
            An animated testimonial section inspired by Aceternity&apos;s image-and-quote layout,
            adapted here so each company logo becomes the featured visual.
          </p>
        </div>

        <div
          className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
        >
          <div className="relative flex min-h-[25rem] items-center justify-center px-4 py-8 sm:min-h-[30rem]">
            <div className="absolute inset-x-0 top-1/2 h-64 -translate-y-1/2 rounded-[2.5rem] bg-[radial-gradient(circle,_rgba(255,106,31,0.18),_transparent_62%)] blur-3xl" />

            {testimonials.map((item, index) => {
              const offset = index - activeIndex;
              const normalizedOffset =
                offset < 0 ? offset + testimonials.length : offset;
              const isActive = index === activeIndex;
              const isVisible = normalizedOffset <= 2 || isActive;

              return (
                <motion.button
                  key={item.company}
                  type="button"
                  onClick={() => {
                    setDirection(index > activeIndex ? 1 : -1);
                    setActiveIndex(index);
                  }}
                  aria-label={`Show testimonial from ${item.company}`}
                  className="absolute w-[min(100%,25rem)] cursor-pointer focus:outline-none"
                  initial={false}
                  animate={{
                    x: normalizedOffset === 0 ? 0 : normalizedOffset * 22,
                    y: normalizedOffset === 0 ? 0 : normalizedOffset * 20,
                    rotate: normalizedOffset === 0 ? 0 : normalizedOffset * 5,
                    scale: normalizedOffset === 0 ? 1 : 1 - normalizedOffset * 0.06,
                    opacity: isVisible ? 1 - normalizedOffset * 0.18 : 0,
                    zIndex: testimonials.length - normalizedOffset,
                  }}
                  transition={{
                    duration: 0.45,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <div
                    className={`overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-[0_26px_80px_rgba(17,17,20,0.12)] transition-shadow duration-300 ${
                      isActive ? 'shadow-[0_34px_90px_rgba(255,106,31,0.22)]' : ''
                    }`}
                  >
                    <div className="relative aspect-[4/3] bg-[linear-gradient(180deg,_rgba(255,247,239,0.9),_rgba(250,240,230,0.98))] p-8 sm:p-10">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.95),_transparent_50%)]" />
                      <div className="relative flex h-full items-center justify-center rounded-[1.5rem] border border-black/6 bg-white/80 p-8">
                        <img
                          src={item.photo}
                          alt={`${item.company} logo`}
                          className="h-full max-h-44 w-full object-contain sm:max-h-52"
                        />
                      </div>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>

          <div className="relative rounded-[2rem] border border-black/10 bg-white/76 p-6 shadow-[0_24px_80px_rgba(17,17,20,0.08)] backdrop-blur-sm md:p-8 lg:p-10">
            <div className="absolute inset-x-0 top-0 h-32 rounded-t-[2rem] bg-[linear-gradient(180deg,_rgba(255,106,31,0.08),_transparent)]" />
            <div className="relative">
              <div className="mb-8 flex items-center justify-between gap-4">
                <div>
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-[#b65128]">
                    Testimonial
                  </p>
                  <p className="mt-3 text-2xl font-extrabold tracking-[-0.05em] text-[#111114] md:text-[2.2rem]">
                    {current.company}
                  </p>
                </div>

                <div className="rounded-full border border-[#ff6a1f]/12 bg-[#fff3ea] p-3 text-[#ff6a1f] shadow-[0_10px_30px_rgba(255,106,31,0.12)]">
                  <Quote className="h-6 w-6" />
                </div>
              </div>

              <div className="relative min-h-[17rem] overflow-hidden md:min-h-[16rem]">
                <AnimatePresence custom={direction} mode="wait">
                  <motion.article
                    key={current.company}
                    initial={{
                      opacity: 0,
                      y: 18,
                      x: direction > 0 ? 18 : -18,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      x: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: -18,
                      x: direction > 0 ? -18 : 18,
                    }}
                    transition={{
                      duration: 0.42,
                      ease: [0.22, 1, 0.36, 1] as const,
                    }}
                    className="absolute inset-0"
                  >
                    <div className="space-y-4 text-base leading-8 text-slate-700 md:text-lg md:leading-9">
                      {current.review.split('\n\n').map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </motion.article>
                </AnimatePresence>
              </div>

              <div className="mt-8 flex flex-col gap-5 border-t border-black/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-2">
                  {testimonials.map((item, index) => (
                    <button
                      key={item.company}
                      type="button"
                      onClick={() => {
                        setDirection(index > activeIndex ? 1 : -1);
                        setActiveIndex(index);
                      }}
                      aria-label={`Jump to testimonial from ${item.company}`}
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        index === activeIndex ? 'w-10 bg-[#ff6a1f]' : 'w-2.5 bg-slate-300'
                      }`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-slate-400">
                    {(activeIndex + 1).toString().padStart(2, '0')} /{' '}
                    {testimonials.length.toString().padStart(2, '0')}
                  </p>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={showPrevious}
                      aria-label="Show previous testimonial"
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white text-[#111114] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#ff6a1f]/30 hover:text-[#ff6a1f]"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      type="button"
                      onClick={showNext}
                      aria-label="Show next testimonial"
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white text-[#111114] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#ff6a1f]/30 hover:text-[#ff6a1f]"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {testimonials.map((item, index) => {
            const isActive = index === activeIndex;

            return (
              <button
                key={item.company}
                type="button"
                onClick={() => {
                  setDirection(index > activeIndex ? 1 : -1);
                  setActiveIndex(index);
                }}
                className={`rounded-[1.4rem] border px-4 py-4 text-left transition-all duration-300 ${
                  isActive
                    ? 'border-[#ff6a1f]/25 bg-[#fff3ea] shadow-[0_14px_34px_rgba(255,106,31,0.12)]'
                    : 'border-black/8 bg-white/60 hover:-translate-y-0.5 hover:border-black/12 hover:bg-white/90'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[0.95rem] border border-black/6 bg-white p-2">
                    <img
                      src={item.photo}
                      alt={`${item.company} logo`}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-[#111114]">{item.company}</p>
                    <p className="mt-0.5 text-xs uppercase tracking-[0.22em] text-slate-400">
                      Review
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
