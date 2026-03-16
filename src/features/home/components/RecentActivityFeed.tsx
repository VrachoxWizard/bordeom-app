import { useLatestActivity } from '../../../lib/queries';

interface ActivityItem {
  type: 'session' | 'urge' | 'reflection';
  date: Date;
  durationMinutes?: number;
  mood?: string;
}

export default function RecentActivityFeed() {
  const activity = useLatestActivity(3) as unknown as ActivityItem[];

  if (!activity || activity.length === 0) return (
    <div className="p-8 border border-zinc-100 border-dashed rounded-3xl text-center bg-zinc-50/20">
      <p className="text-sm text-zinc-400 italic font-light">No recent activity yet. Take a moment for yourself.</p>
    </div>
  );

  return (
    <div className="space-y-4">
      <h3 className="px-2 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-300">Recent History</h3>
      <div className="space-y-2">
        {activity.map((item, i) => (
          <div 
            key={i} 
            className="flex items-center justify-between p-5 bg-white border border-zinc-100/50 rounded-2xl shadow-sm hover:border-zinc-200 transition-colors"
          >
            <div className="flex items-center gap-4">
              <div className="text-xl grayscale opacity-80">
                {item.type === 'session' ? '⏱️' : item.type === 'urge' ? '⚡' : '✍️'}
              </div>
              <div>
                <p className="text-sm font-medium text-zinc-900 capitalize">
                  {item.type === 'session' ? `${item.durationMinutes}m Session` : item.type}
                </p>
                <p className="text-[10px] text-zinc-400 font-medium">
                  {new Date(item.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
            {item.mood && (
              <span className="text-[10px] px-2.5 py-1 bg-zinc-50 border border-zinc-100 rounded-full text-zinc-400 font-medium capitalize">
                {item.mood}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
