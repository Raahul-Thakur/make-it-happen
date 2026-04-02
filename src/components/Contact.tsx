import { Mail, Phone, ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="section-shell">
        <div className="relative overflow-hidden rounded-[2.4rem] bg-[linear-gradient(135deg,_#ff6a1f_0%,_#6b2207_56%,_#111017_100%)] p-8 text-white md:p-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(238,203,130,0.24),_transparent_18%),radial-gradient(circle_at_16%_24%,_rgba(255,255,255,0.1),_transparent_22%)]" />
          <div className="relative grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
            <div>
              <p className="eyebrow text-white/68">Start Here</p>
              <h2 className="display-title mt-4 text-5xl md:text-7xl">
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
                Ready? Let's Begin
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            <div className="grid gap-4 border-t border-white/15 pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
              <a
                href="mailto:makeithappen2k24@gmail.com"
                className="hover-rise rounded-[1.75rem] border border-white/15 bg-white/10 p-6 backdrop-blur-sm transition-colors duration-300 hover:bg-white/15"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-white/15">
                  <Mail className="h-7 w-7" />
                </div>
                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.28em] text-white/65">Email</p>
                <p className="mt-2 break-all text-lg font-semibold">makeithappen2k24@gmail.com</p>
              </a>

              <a
                href="tel:+919892635748"
                className="hover-rise rounded-[1.75rem] border border-white/15 bg-white/10 p-6 backdrop-blur-sm transition-colors duration-300 hover:bg-white/15"
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
      </div>
    </section>
  );
}
