import { User } from 'lucide-react';

const team = [
  {
    name: 'Francis Dmello',
    role: 'Marketing Head',
    color: 'from-[#C94D3F] to-[#A63929]',
  },
  {
    name: 'Shubham Panchal',
    role: 'SEO/PPC Specialist',
    color: 'from-[#A63929] to-[#8B3428]',
  },
  {
    name: 'Vikram Kumbhar',
    role: 'Content Head',
    color: 'from-[#D95F4F] to-[#C94D3F]',
  },
];

export default function Team() {
  return (
    <section className="px-4 py-20 md:px-10 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#ff5f1f]">Crew</p>
            <h2 className="mt-4 text-5xl font-extrabold leading-[0.92] text-[#111114] md:text-7xl">
              Small team. Loud output.
            </h2>
          </div>
          <p className="max-w-xl text-lg leading-8 text-slate-600 md:text-xl">
            Tight feedback loops, direct collaboration, fast approvals, and no layered agency bloat.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {team.map((member, index) => (
            <div
              key={index}
              className="group rounded-[2rem] border border-black/10 bg-white/80 p-8 shadow-[0_16px_36px_rgba(17,17,20,0.06)] transition-transform duration-300 hover:-translate-y-2"
            >
              <div
                className={`flex h-40 w-full items-center justify-center rounded-[1.75rem] bg-gradient-to-br ${member.color} p-1`}
              >
                <div className="flex h-full w-full items-center justify-center rounded-[1.5rem] bg-[#111114]">
                  <User className="h-16 w-16 text-white" />
                </div>
              </div>

              <div className="mt-6">
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#ff5f1f]">
                  0{index + 1}
                </p>
                <h3 className="mt-3 text-2xl font-bold text-[#111114]">{member.name}</h3>
                <p className="mt-2 text-lg font-medium text-slate-600">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
