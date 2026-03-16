import { useSessionStore } from './sessionStore';

const DURATIONS = [2, 5, 10, 20];

export default function SessionSetup() {
  const startSession = useSessionStore((state) => state.startSession);

  return (
    <div className="max-w-2xl mx-auto space-y-12 py-8 animate-in fade-in duration-1000">
      <div className="space-y-10 bg-white border border-zinc-100 p-8 rounded-3xl shadow-sm">
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-xl font-medium tracking-tight text-zinc-900">Choose Duration</h2>
            <p className="text-sm text-zinc-400">How long will you commit to stillness?</p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {DURATIONS.map((mins) => (
              <button
                key={mins}
                onClick={() => startSession(mins)}
                className="p-8 border border-zinc-50 rounded-2xl hover:border-zinc-200 hover:bg-zinc-50 transition-all text-center group"
              >
                <span className="block text-3xl font-medium group-hover:scale-105 transition-transform text-zinc-800">
                  {mins}
                </span>
                <span className="text-[10px] text-zinc-400 uppercase tracking-widest font-semibold">Minutes</span>
              </button>
            ))}
          </div>
        </div>

        <div className="p-6 bg-zinc-50/30 rounded-2xl border border-zinc-50">
          <h3 className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-2">Before you begin</h3>
          <p className="text-sm text-zinc-500 leading-relaxed font-light">
            Find a comfortable position. Minimize distractions. Set your phone aside. 
            The goal is not to "do" anything, but to notice the urge to do.
          </p>
        </div>
      </div>
    </div>
  );
}
