import HomeWelcome from '../features/home/components/HomeWelcome';
import TodayOverview from '../features/home/components/TodayOverview';
import QuickActions from '../features/home/components/QuickActions';
import RecentActivityFeed from '../features/home/components/RecentActivityFeed';

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto space-y-16 py-8 animate-in fade-in duration-1000">
      <HomeWelcome />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <TodayOverview />
            <div className="hidden lg:block p-4 border border-zinc-50 rounded-2xl bg-zinc-50/20 text-[10px] uppercase font-bold tracking-[0.2em] text-zinc-300 vertical-lr rotate-180 h-fit">
              Privacy Secured locally
            </div>
          </div>
          <QuickActions />
        </div>
        
        <div className="space-y-8">
          <RecentActivityFeed />
          
          <div className="p-6 bg-zinc-50/50 rounded-3xl border border-zinc-100 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-zinc-400">Gym Tip</h4>
            <p className="text-xs text-zinc-500 leading-relaxed font-light">
              Boredom is the space between impulses. Don't fill it. Just watch it.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
