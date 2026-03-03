import { Quote } from 'lucide-react';

const testimonials = [
  {
    text: "These guys are fantastic. They listen to the client's expectations and deliver the work accordingly. They are young, sharp, and they know how to do their job really well.",
    author: 'Prof. Prathamessh Maankarr',
  },
  {
    text: 'Francis and Harshal have assisted me with multiple shoots for my agency. I really appreciate the dedication and effort they put into every assignment.',
    author: 'Agency Partner',
  },
  {
    text: 'The videos turned out really well and the overall execution felt professional. Very happy with how the assignment was handled from start to finish.',
    author: 'Satisfied Client',
  },
  {
    text: 'Really liked the content and the communication with the team. Clear process, strong output, and easy to work with.',
    author: 'Client Review',
  },
];

export default function Testimonials() {
  return (
    <section className="px-4 py-20 md:px-10 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#ff5f1f]">Word On The Street</p>
          <h2 className="mt-4 max-w-4xl text-5xl font-extrabold leading-[0.92] text-[#111114] md:text-7xl">
            The work sticks. So do the reviews.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-[2rem] border border-black/10 bg-white/[0.85] p-8 shadow-[0_16px_36px_rgba(17,17,20,0.06)]"
            >
              <div className="flex items-center justify-between">
                <Quote className="h-12 w-12 text-[#ff5f1f]" />
                <span className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-300">
                  0{index + 1}
                </span>
              </div>
              <p className="mt-6 text-lg leading-8 text-slate-700">{testimonial.text}</p>
              <p className="mt-6 text-base font-semibold uppercase tracking-[0.18em] text-[#7a1f00]">
                {testimonial.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
