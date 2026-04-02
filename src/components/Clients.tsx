import azLogo from '../../content/client_logos/AZ.jpg';
import cafeSouthSoulLogo from '../../content/client_logos/cafe south soul.jpg';
import cravishLogo from '../../content/client_logos/cravish.jpg';
import kube9Logo from '../../content/client_logos/kube 9 .jpg';
import locksAndBeyondLogo from '../../content/client_logos/locks and beyond.jpg';
import lucknowiFlavourLogo from '../../content/client_logos/lucknowi flavour.jpg';
import mariaPlazaLogo from '../../content/client_logos/maria plaza.jpg';
import ministryOfShawarmaLogo from '../../content/client_logos/ministry of shawarma .jpg';
import waffleBingeLogo from '../../content/client_logos/waffle binge.jpg';
import wecityLogo from '../../content/client_logos/wecity.jpg';
import whiteFrameLogo from '../../content/client_logos/white frame.jpg';

const clients = [
  { name: 'AZ', logo: azLogo },
  { name: 'Cafe South Soul', logo: cafeSouthSoulLogo },
  { name: 'Cravish', logo: cravishLogo },
  { name: 'Kube 9', logo: kube9Logo },
  { name: 'Locks And Beyond', logo: locksAndBeyondLogo },
  { name: 'Lucknowi Flavour', logo: lucknowiFlavourLogo },
  { name: 'Maria Plaza', logo: mariaPlazaLogo },
  { name: 'Ministry Of Shawarma', logo: ministryOfShawarmaLogo },
  { name: 'Waffle Binge', logo: waffleBingeLogo },
  { name: 'Wecity', logo: wecityLogo },
  { name: 'White Frame', logo: whiteFrameLogo },
];

const featuredClients = new Set(['AZ', 'Cafe South Soul', 'Ministry Of Shawarma']);

export default function Clients() {
  return (
    <section className="py-20 md:py-28">
      <div className="section-shell">
        <div className="mb-12 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="eyebrow text-[#b65128]">Brands In The Mix</p>
            <h2 className="display-title mt-4 max-w-5xl text-5xl text-[#111114] md:text-7xl">
              Names we have helped look sharper online.
            </h2>
          </div>
          <p className="max-w-xl text-lg leading-8 text-slate-600 md:text-xl">
            Different categories, same brief: stop looking forgettable and start feeling current.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-[2.5rem] border border-black/10 bg-[linear-gradient(180deg,_rgba(255,255,255,0.74),_rgba(255,249,241,0.92))] p-5 shadow-[0_24px_70px_rgba(17,17,20,0.08)] backdrop-blur-sm md:p-7">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,106,31,0.08),_transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(238,203,130,0.18),_transparent_22%)]" />

          <div className="relative mb-8 flex flex-col gap-5 border-b border-black/10 pb-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow text-[#b65128]">Client Wall</p>
              <p className="mt-3 max-w-2xl text-lg font-medium leading-8 text-slate-700">
                A growing mix of food, retail, hospitality, and local brands we have helped show up
                better online.
              </p>
            </div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
              11 current brands
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {clients.map((client, index) => {
              const featured = featuredClients.has(client.name);

              return (
                <article
                  key={client.name}
                  className={`group relative overflow-hidden rounded-[1.9rem] border border-black/10 bg-white/80 p-5 shadow-[0_14px_32px_rgba(17,17,20,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#ff6a1f]/40 hover:shadow-[0_24px_48px_rgba(17,17,20,0.12)] ${
                    featured ? 'sm:col-span-2' : ''
                  }`}
                >
                  <div className="absolute inset-x-0 top-0 h-20 bg-[linear-gradient(180deg,_rgba(255,106,31,0.08),_transparent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="relative flex h-full flex-col justify-between">
                    <div className="flex items-start justify-between gap-3">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.26em] text-slate-300">
                        {(index + 1).toString().padStart(2, '0')}
                      </span>
                      <span className="rounded-full border border-black/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-500">
                        {featured ? 'Featured' : 'Client'}
                      </span>
                    </div>

                    <div
                      className={`mt-6 flex items-center rounded-[1.5rem] border border-black/6 bg-[linear-gradient(180deg,_rgba(252,249,245,0.95),_rgba(244,236,227,0.92))] px-5 transition-transform duration-300 group-hover:scale-[1.01] ${
                        featured ? 'min-h-[9rem] justify-center' : 'min-h-[7.5rem] justify-start'
                      }`}
                    >
                      <img
                        src={client.logo}
                        alt={`${client.name} logo`}
                        className={`w-auto max-w-full object-contain ${
                          featured ? 'max-h-16 md:max-h-20' : 'max-h-12'
                        }`}
                        loading="lazy"
                      />
                    </div>

                    <div className="mt-5 flex items-end justify-between gap-4">
                      <div>
                        <p className="text-base font-semibold leading-6 text-[#111114] md:text-lg">
                          {client.name}
                        </p>
                      </div>
                      <div className="h-2.5 w-2.5 rounded-full bg-[#ff6a1f] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
