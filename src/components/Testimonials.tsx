import { Quote } from 'lucide-react';

const testimonialPlaceholders = Array.from({ length: 4 }, (_, index) => ({
  id: index + 1,
}));

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28">
      <div className="section-shell">
        <div className="mb-14">
          <p className="eyebrow text-[#b65128]">Word On The Street</p>
          <h2 className="display-title mt-4 max-w-4xl text-5xl text-[#111114] md:text-7xl">
            The work sticks. So do the reviews.
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 md:text-xl">
            The client requested a full testimonial swap. These cards are now held as placeholders
            until the updated review copy and reviewer names are shared.
          </p>
        </div>

        <div className="grid gap-x-8 gap-y-10 border-t border-black/10 pt-10 md:grid-cols-2">
          {testimonialPlaceholders.map((testimonial) => (
            <div key={testimonial.id} className="relative border-l border-black/10 pl-6">
              <div className="flex items-center justify-between">
                <Quote className="h-12 w-12 text-[#ff6a1f]" />
                <span className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-300">
                  {testimonial.id.toString().padStart(2, '0')}
                </span>
              </div>
              <p className="mt-6 max-w-[30rem] text-xl leading-9 text-slate-700">
                Updated testimonial copy will be placed here as soon as the client provides the
                approved review text.
              </p>
              <p className="mt-6 text-base font-semibold uppercase tracking-[0.18em] text-[#7a1f00]">
                Reviewer name pending
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
