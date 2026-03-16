import { useInsightsData } from '../../../lib/queries';

export default function OverviewCards() {
  const data = useInsightsData();

  if (!data) return null;

  const stats = [
    { label: 'Stillness Sessions', value: data.totals.sessions },
    { label: 'Minutes Rested', value: data.totals.minutes },
    { label: 'Urges Noticed', value: data.totals.urges },
    { label: 'Reflections', value: data.totals.reflections },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {stats.map((s) => (
        <div 
          key={s.label}
          className="card-premium space-y-2 !p-6"
        >
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-300">{s.label}</p>
          <p className="text-3xl font-extralight text-zinc-900 tracking-tight">{s.value}</p>
        </div>
      ))}
    </div>
  );
}
