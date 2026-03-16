import { useRecentUrges } from '../../../lib/queries';

export default function RecentUrges() {
  const urges = useRecentUrges(10);

  if (!urges) return null;

  const formatDistance = (date: Date) => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const mins = Math.floor(diff / 60000);
    
    if (mins < 1) return 'just now';
    if (mins < 60) return `${mins}m ago`;
    const hours = Math.floor(mins / 60);
    if (hours < 24) return `${hours}h ago`;
    return date.toLocaleDateString();
  };

  if (urges.length === 0) {
    return (
      <div className="text-center py-12 space-y-3">
        <p className="text-zinc-400 italic">No urges logged yet.</p>
        <p className="text-xs text-zinc-300">Your history will appear here as you notice it.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center px-2">
        <h3 className="text-sm font-medium uppercase tracking-widest text-zinc-400">Recent Notices</h3>
        <span className="text-xs text-zinc-300">{urges.length} entries</span>
      </div>

      <div className="grid gap-3">
        {urges.map((urge) => (
          <div 
            key={urge.id}
            className="p-5 border border-zinc-50 rounded-xl bg-white flex justify-between items-start group hover:border-zinc-100 transition-all shadow-sm"
          >
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium capitalize text-zinc-800">{urge.urgeType}</span>
                <span className="text-[10px] bg-zinc-50 text-zinc-400 px-1.5 py-0.5 rounded capitalize">
                  {urge.trigger}
                </span>
              </div>
              {urge.note && (
                <p className="text-xs text-zinc-500 font-light">{urge.note}</p>
              )}
              <p className="text-[10px] text-zinc-300">{formatDistance(urge.createdAt)}</p>
            </div>

            <div className="flex items-center gap-1.5">
              {[...Array(5)].map((_, i) => (
                <div 
                  key={i}
                  className={`w-1 h-3 rounded-full ${
                    i < urge.intensity 
                      ? 'bg-zinc-900 group-hover:bg-zinc-700' 
                      : 'bg-zinc-100'
                  }`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
