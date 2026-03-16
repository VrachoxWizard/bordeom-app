import { useTodayData } from '../../../lib/queries';

export default function TodayOverview() {
  const data = useTodayData();

  if (!data) return null;

  const stats = [
    { label: 'Sessions', value: data.totals.sessionCount },
    { label: 'Minutes Active', value: data.totals.minutesCount },
    { label: 'Urges Noticed', value: data.totals.urgeCount },
  ];

  return (
    <div className="surface-elevated rounded-[32px] p-10 space-y-8 animate-in fade-in duration-1000">
      <div className="flex justify-between items-end">
        <div className="space-y-1.5">
          <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">Inventory of Presence</h3>
          <p className="text-sm text-zinc-500 font-light italic">
            {data.totals.isReflected ? 'The day has been observed.' : 'The day awaits your reflection.'}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-8">
        {stats.map(s => (
          <div key={s.label} className="space-y-1 group">
            <p className="text-3xl font-light tracking-tighter text-zinc-900 group-hover:translate-y-[-2px] transition-transform duration-500">{s.value}</p>
            <p className="text-[9px] uppercase font-bold text-zinc-400 tracking-widest leading-none">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
