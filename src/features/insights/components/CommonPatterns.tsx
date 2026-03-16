import { useInsightsData } from '../../../lib/queries';

export default function CommonPatterns() {
  const data = useInsightsData();

  if (!data || data.totals.sessions === 0) return null;

  const patterns = [
    { label: 'Most Common Trigger', value: data.patterns.topTrigger, icon: '🎯' },
    { label: 'Primary Urge Type', value: data.patterns.topType, icon: '📱' },
    { label: 'Main Difficulty', value: data.patterns.topDifficulty, icon: '🌊' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {patterns.map((p) => (
        <div 
          key={p.label}
          className="glass-panel p-8 rounded-3xl flex items-center gap-6 transition-all hover:bg-white/80"
        >
          <div className="text-3xl grayscale opacity-60 group-hover:grayscale-0 transition-all">{p.icon}</div>
          <div className="space-y-1">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">{p.label}</p>
            <p className="text-lg font-light text-zinc-900 capitalize tracking-tight">
              {p.value || 'None yet'}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
