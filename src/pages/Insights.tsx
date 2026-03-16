import OverviewCards from '../features/insights/components/OverviewCards';
import ActivityView from '../features/insights/components/ActivityView';
import CommonPatterns from '../features/insights/components/CommonPatterns';

export default function Insights() {
  return (
    <div className="max-w-4xl mx-auto space-y-24 py-16">
      <header className="text-center space-y-6">
        <h1 className="text-4xl text-5xl md:text-6xl font-extralight tracking-tight text-zinc-900">Calm Insights</h1>
        <p className="text-xl text-zinc-400 font-light mx-auto max-w-lg italic">
          Understanding the patterns of your journey. <br />
          Awareness is the first step toward lasting change.
        </p>
      </header>

      <div className="space-y-12">
        <OverviewCards />
        <ActivityView />
        <CommonPatterns />
      </div>
    </div>
  );
}
