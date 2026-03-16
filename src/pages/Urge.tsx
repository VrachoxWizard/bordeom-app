import UrgeLogger from '../features/urge/components/UrgeLogger';
import RecentUrges from '../features/urge/components/RecentUrges';

export default function Urge() {
  return (
    <div className="max-w-4xl mx-auto space-y-16 py-8">
      <header className="text-center space-y-4">
        <h1 className="text-3xl font-medium tracking-tight">Urge Tracker</h1>
        <p className="text-zinc-500 mx-auto max-w-sm">
          A non-judgmental space to notice your impulses. 
          Record the craving, then return to the present.
        </p>
      </header>

      <div className="space-y-20">
        <UrgeLogger />
        <RecentUrges />
      </div>
    </div>
  );
}
