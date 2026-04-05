import { FormEvent, useState } from 'react';
import { Mail, Phone, ArrowRight } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const body = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      '',
      formData.message,
    ].join('\n');

    window.location.href = `mailto:makeithappen2k24@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="section-shell">
        <div className="relative overflow-hidden rounded-[2.4rem] bg-[linear-gradient(135deg,_#ff6a1f_0%,_#6b2207_56%,_#111017_100%)] p-8 text-white md:p-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(238,203,130,0.24),_transparent_18%),radial-gradient(circle_at_16%_24%,_rgba(255,255,255,0.1),_transparent_22%)]" />

          <div className="relative grid gap-10 lg:grid-cols-2 lg:items-start">
            
            {/* LEFT SIDE */}
            <div className="flex flex-col justify-between h-full">
              <div>
                <h2 className="display-title mt-4 text-5xl md:text-7xl">
                  If your brand needs a bigger pulse, call us before your competitor does.
                </h2>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82 md:text-xl">
                  Bring the brief, the chaos, the launch deadline. We will shape the angle, the assets,
                  and the rollout.
                </p>
              </div>

              {/* EMAIL CARD */}
              <a
                href="mailto:makeithappen2k24@gmail.com"
                className="hover-rise mt-10 block rounded-[1.75rem] border border-white/15 bg-white/10 p-6 backdrop-blur-sm transition-colors duration-300 hover:bg-white/15"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-white/15">
                  <Mail className="h-7 w-7" />
                </div>
                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.28em] text-white/65">
                  Email
                </p>
                <p className="mt-2 break-all text-lg font-semibold underline">
                  makeithappen2k24@gmail.com
                </p>
              </a>
            </div>

            {/* RIGHT SIDE */}
            <div className="grid gap-4 border-t border-white/15 pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
              
              {/* FORM */}
              <form
                onSubmit={handleSubmit}
                className="rounded-[1.75rem] border border-white/15 bg-white/10 p-6 backdrop-blur-sm"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/65">
                  Contact Form
                </p>

                <div className="mt-5 grid gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(event) =>
                      setFormData((current) => ({ ...current, name: event.target.value }))
                    }
                    required
                    className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-base text-white placeholder:text-white/55 outline-none transition-colors duration-300 focus:border-white/45"
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    value={formData.email}
                    onChange={(event) =>
                      setFormData((current) => ({ ...current, email: event.target.value }))
                    }
                    required
                    className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-base text-white placeholder:text-white/55 outline-none transition-colors duration-300 focus:border-white/45"
                  />

                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={(event) =>
                      setFormData((current) => ({ ...current, subject: event.target.value }))
                    }
                    required
                    className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-base text-white placeholder:text-white/55 outline-none transition-colors duration-300 focus:border-white/45"
                  />

                  <textarea
                    name="message"
                    placeholder="Tell us about your project"
                    value={formData.message}
                    onChange={(event) =>
                      setFormData((current) => ({ ...current, message: event.target.value }))
                    }
                    required
                    rows={5}
                    className="resize-none rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-base text-white placeholder:text-white/55 outline-none transition-colors duration-300 focus:border-white/45"
                  />
                </div>

                <button
                  type="submit"
                  className="group mt-5 inline-flex w-full items-center justify-center gap-3 rounded-full bg-white px-6 py-3.5 font-semibold text-[#111114] transition-transform duration-300 hover:scale-[1.02]"
                >
                  Send Message
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </button>
              </form>

              {/* PHONE CARD */}
              <a
                href="tel:+919892635748"
                className="hover-rise rounded-[1.75rem] border border-white/15 bg-white/10 p-6 backdrop-blur-sm transition-colors duration-300 hover:bg-white/15"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-white/15">
                  <Phone className="h-7 w-7" />
                </div>
                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.28em] text-white/65">
                  Phone
                </p>
                <p className="mt-2 text-lg font-semibold">
                  +91 9892635748
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}