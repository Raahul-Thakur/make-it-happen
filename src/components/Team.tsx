import { User } from 'lucide-react';

const team = [
  {
    name: 'Francis Dmello',
    color: 'from-[#C94D3F] to-[#A63929]',
  },
  {
    name: 'Shubham Panchal',
    color: 'from-[#A63929] to-[#8B3428]',
  },
];

export default function Team() {
  return (
    <section className="py-20 md:py-24">
      <div className="section-shell">
        <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow text-[#b65128]">Crew</p>
            <h2 className="display-title mt-4 text-5xl text-[#111114] md:text-7xl">
              Small team. Loud output.
            </h2>
          </div>
        </div>

        <div className="grid gap-10 border-t border-black/10 pt-8 md:grid-cols-2">
          {team.map((member, index) => (
            <div
              key={member.name}
              className="group grid gap-6 md:grid-cols-[12rem_minmax(0,1fr)] md:items-center"
            >
              <div
                className={`flex h-40 w-full items-center justify-center rounded-[1.9rem] bg-gradient-to-br ${member.color} p-1`}
              >
                <div className="flex h-full w-full items-center justify-center rounded-[1.75rem] bg-[#111114]">
                  <User className="h-16 w-16 text-white" />
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#b65128]">
                  0{index + 1}
                </p>
                <h3 className="mt-3 text-3xl font-bold text-[#111114] md:text-4xl">{member.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
