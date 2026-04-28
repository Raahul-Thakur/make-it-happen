import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import ministryOfShawarmaLogo from '../../content/client_logos/ministry of shawarma .jpg';
import wecityMotorsLogo from '../../content/client_logos/wecity.jpg';
import bunmanIraniCafeLogo from '../../content/client_logos/bunman.jpg';
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
      "Make It Happen has been an incredible partner in our growth journey. Their digital marketing expertise, creative storytelling, and outstanding cinematography have consistently elevated how we showcase our work. From day one, their team has supported us wholeheartedly, helping our brand connect better with customers and grow stronger.",
  },
  {
    company: 'Cravish',
    photo: cravishLogo,
    review:
      "Working with Make It Happen has been a seamless and rewarding experience. Their team understands brand vision deeply, executes creative campaigns flawlessly, and always delivers fresh ideas. From planning to posting, their professionalism and dedication have made every collaboration impactful, helping us strengthen our brand presence significantly.",
  },
  {
    company: 'Ministry of Shawarma',
    photo: ministryOfShawarmaLogo,
    review:
      "Make It Happen transformed our digital presence by truly understanding our brand and audience. Their engaging content, strategic marketing, and consistent execution have boosted customer engagement and strengthened brand recall. What stands out most is their genuine commitment to our growth, success, and long-term brand building.",
  },
  {
    company: 'Bunman Irani Cafe',
    photo: bunmanIraniCafeLogo,
    review:
      "Make It Happen beautifully captured the essence of our café and turned our story into meaningful content. Their creativity, dedication, and thoughtful marketing have helped us connect deeply with our audience and grow our brand. Their positive energy and passion make them exceptional partners to work with.",
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
