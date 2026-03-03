import { Mail, Phone, ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="px-4 py-20 md:px-10 md:py-24">
      <div className="mx-auto max-w-7xl rounded-[2.25rem] bg-[radial-gradient(circle_at_top_right,_rgba(255,209,102,0.22),_transparent_20%),radial-gradient(circle_at_18%_20%,_rgba(255,95,31,0.32),_transparent_26%),linear-gradient(135deg,_#ff5f1f_0%,_#7a1f00_62%,_#111114_100%)] p-8 text-white shadow-[0_26px_65px_rgba(126,39,28,0.28)] md:p-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-white/65">Start Here</p>
            <h2 className="mt-4 text-5xl font-extrabold leading-[0.92] md:text-7xl">
              If your brand needs a bigger pulse, call us before your competitor does.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82 md:text-xl">
              Bring the brief, the chaos, the launch deadline. We will shape the angle, the assets,
              and the rollout.
            </p>
            <a
              href="mailto:makeithappen2k24@gmail.com"
              className="group mt-10 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 font-semibold text-[#111114] transition-transform duration-300 hover:scale-[1.03]"
            >
              Start the conversation
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <div className="grid gap-4">
            <a
              href="mailto:makeithappen2k24@gmail.com"
              className="rounded-[1.75rem] border border-white/15 bg-white/10 p-6 backdrop-blur-sm transition-colors duration-300 hover:bg-white/15"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-white/15">
                <Mail className="h-7 w-7" />
              </div>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.28em] text-white/65">Email</p>
              <p className="mt-2 text-lg font-semibold break-all">makeithappen2k24@gmail.com</p>
            </a>

            <a
              href="tel:+919892635748"
              className="rounded-[1.75rem] border border-white/15 bg-white/10 p-6 backdrop-blur-sm transition-colors duration-300 hover:bg-white/15"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-white/15">
                <Phone className="h-7 w-7" />
              </div>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.28em] text-white/65">Phone</p>
              <p className="mt-2 text-lg font-semibold">+91 9892635748</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
