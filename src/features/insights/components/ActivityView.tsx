import { useInsightsData } from '../../../lib/queries';

export default function ActivityView() {
  const data = useInsightsData();

  if (!data) return null;

  return (
    <div className="card-premium space-y-12 bg-white">
      <div className="space-y-1">
        <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-300">Last 7 Days</h3>
        <p className="text-xl font-light text-zinc-900">Consistency over intensity.</p>
      </div>

      <div className="grid grid-cols-7 gap-3">
        {data.activity.map((day) => (
          <div key={day.key} className="space-y-3 flex flex-col items-center">
            <div className="space-y-1 flex flex-col gap-1 w-full">
              {/* Session Dots */}
              <div className="flex flex-wrap gap-1 items-end justify-center min-h-[16px]">
                {[...Array(Math.min(day.sessions, 3))].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-zinc-900" />
                ))}
                {day.sessions > 3 && <span className="text-[8px] text-zinc-400">+</span>}
              </div>
              
              {/* Base Tile */}
              <div 
                className={`w-full aspect-square rounded-lg border transition-colors ${
                  day.sessions > 0 
                    ? 'bg-zinc-50 border-zinc-100' 
                    : 'bg-transparent border-zinc-50'
                } flex items-center justify-center relative`}
              >
                 {day.hasReflection && (
                   <div className="absolute top-1 right-1 w-1 h-1 rounded-full bg-zinc-400" />
                 )}
                 <span className={`text-[10px] ${day.sessions > 0 ? 'text-zinc-600 font-medium' : 'text-zinc-300'}`}>
                   {day.date.getDate()}
                 </span>
              </div>

              {/* Urge Bar */}
              <div className="w-full h-1 bg-zinc-50 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-zinc-200 transition-all" 
                  style={{ width: `${Math.min(day.urges * 20, 100)}%` }} 
                />
              </div>
            </div>
            <span className="text-[10px] uppercase tracking-tighter text-zinc-300">
              {day.date.toLocaleDateString(undefined, { weekday: 'short' })}
            </span>
          </div>
        ))}
      </div>

      <div className="flex gap-4 text-[10px] text-zinc-400 uppercase tracking-widest pt-4 border-t border-zinc-50">
        <div className="flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-zinc-900" />
          <span>Sessions</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-1 bg-zinc-200 rounded-full" />
          <span>Urge Volume</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-1 h-1 rounded-full bg-zinc-400" />
          <span>Reflected</span>
        </div>
      </div>
    </div>
  );
}
