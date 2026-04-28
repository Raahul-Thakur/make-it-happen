import ministryOfShawarmaLogo from '../../content/client_logos/ministry of shawarma .jpg';
import wecityMotorsLogo from '../../content/client_logos/wecity.jpg';
import bunmanIraniCafeLogo from '../../content/client_logos/bunman.jpg';
import waffleBingeLogo from '../../content/client_logos/waffle binge.jpg';
import cravishLogo from '../../content/client_logos/cravish.jpg';
import whiteFrameInteriorsLogo from '../../content/client_logos/white frame.jpg';

type Client = {
  name: string;
  logo: string;
};

const clients: Client[] = [
  { name: 'Ministry of Shawarma', logo: ministryOfShawarmaLogo },
  { name: 'Wecity Motors', logo: wecityMotorsLogo },
  { name: 'Bunman Irani Cafe', logo: bunmanIraniCafeLogo },
  { name: 'Waffle Binge', logo: waffleBingeLogo },
  { name: 'Cravish', logo: cravishLogo },
  { name: 'White Frame Interiors', logo: whiteFrameInteriorsLogo },
];

type LogoRailProps = {
  items: Client[];
  reverse?: boolean;
};

function LogoRail({ items, reverse = false }: LogoRailProps) {
  const loop = [...items, ...items, ...items];

  return (
    <div className="logo-rail">
      <div className={`logo-rail__track ${reverse ? 'logo-rail__track--reverse' : ''}`}>
        {loop.map((client, index) => (
          <article
            key={`${client.name}-${index}`}
            className="group flex min-w-[230px] items-center justify-center rounded-[1.75rem] border border-black/10 bg-white/88 px-8 py-6 shadow-[0_16px_40px_rgba(17,17,20,0.06)] backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="flex h-16 w-full items-center justify-center rounded-2xl bg-[linear-gradient(180deg,_rgba(255,251,246,1),_rgba(245,237,227,1))] px-4 py-3">
              <img
                src={client.logo}
                alt={`${client.name} logo`}
                className="max-h-full w-auto max-w-full object-contain mix-blend-multiply"
                loading="lazy"
              />
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default function Clients() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="section-shell">
        <div className="overflow-hidden rounded-[2.5rem] border border-black/10 bg-[linear-gradient(180deg,_rgba(255,255,255,0.72),_rgba(249,242,234,0.95))] px-5 py-10 shadow-[0_30px_80px_rgba(17,17,20,0.08)] md:px-8 md:py-14">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,106,31,0.1),_transparent_22%),radial-gradient(circle_at_bottom_right,_rgba(238,203,130,0.18),_transparent_26%)]" />

          <div className="relative text-center">
            <p className="eyebrow text-[#b65128]">Trusted By</p>
            <h2 className="display-title mt-4 text-5xl text-[#111114] md:text-7xl">Brands we helped stay seen</h2>
          </div>

          <div className="relative mt-12">
            <LogoRail items={clients} />
          </div>
        </div>
      </div>
    </section>
  );
}
