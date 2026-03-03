const clients = [
  { name: 'Anandaa Foods', color: '#8B3148' },
  { name: 'HydrateMax', color: '#FFB800' },
  { name: 'Locks & Beyond', color: '#2C2C2C' },
  { name: "Sushma's Tutorials", color: '#0052CC' },
  { name: 'Gourmet Mafia', color: '#C94D3F' },
  { name: "Flip N' Fold", color: '#F5A623' },
  { name: 'We City Motors', color: '#1A1A1A' },
  { name: 'Gaufre de Liege', color: '#003D7A' },
  { name: 'Maria Plaza', color: '#1F5E3A' },
  { name: 'Ministry of Shawarma', color: '#D95F4F' },
];

export default function Clients() {
  return (
    <section className="px-4 py-20 md:px-10 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#ff5f1f]">Brands In The Mix</p>
            <h2 className="mt-4 text-5xl font-extrabold leading-[0.92] text-[#111114] md:text-7xl">
              Names we have helped look sharper online.
            </h2>
          </div>
          <p className="max-w-xl text-lg leading-8 text-slate-600 md:text-xl">
            Different categories, same brief: stop looking forgettable and start feeling current.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {clients.map((client, index) => (
            <div
              key={index}
              className="group rounded-3xl border border-black/10 bg-white/80 p-5 shadow-[0_14px_30px_rgba(17,17,20,0.05)] transition-colors duration-300 hover:bg-[#111114]"
            >
              <div
                className="h-10 w-10 rounded-2xl transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: client.color }}
              />
              <p className="mt-4 text-sm font-semibold leading-6 text-[#111114] transition-colors duration-300 group-hover:text-white">
                {client.name}
              </p>
              <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.26em] text-slate-400 transition-colors duration-300 group-hover:text-white/40">
                0{index + 1}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
