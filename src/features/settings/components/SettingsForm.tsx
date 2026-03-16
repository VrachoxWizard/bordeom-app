import { db } from '../../../lib/db';
import { useAppSettings } from '../../../lib/queries';

export default function SettingsForm() {
  const settings = useAppSettings();

  if (!settings) return null;

  const updateSetting = async (key: string, value: any) => {
    await db.settings.put({ ...settings, [key]: value });
  };

  return (
    <div className="bg-white border border-zinc-50 rounded-2xl p-8 space-y-10 shadow-sm">
      <div className="space-y-4">
        <label className="text-xs font-medium uppercase tracking-widest text-zinc-400">Default Session Duration</label>
        <div className="flex gap-2">
          {[2, 5, 10, 20].map(d => (
            <button
              key={d}
              onClick={() => updateSetting('defaultDuration', d)}
              className={`flex-1 py-3 rounded-xl border text-sm transition-all ${
                settings.defaultDuration === d 
                  ? 'bg-zinc-900 border-zinc-900 text-white' 
                  : 'bg-white border-zinc-100 text-zinc-500 hover:border-zinc-200'
              }`}
            >
              {d}m
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-sm font-medium text-zinc-800">Show Session Prompts</p>
            <p className="text-xs text-zinc-400">Display rotating calm thoughts during stillness.</p>
          </div>
          <button 
            onClick={() => updateSetting('showPrompts', !settings.showPrompts)}
            className={`w-12 h-6 rounded-full transition-colors relative ${settings.showPrompts ? 'bg-zinc-900' : 'bg-zinc-200'}`}
          >
            <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${settings.showPrompts ? 'right-1' : 'left-1'}`} />
          </button>
        </div>

        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-sm font-medium text-zinc-800">Reduced Motion</p>
            <p className="text-xs text-zinc-400">Minimize animations throughout the app.</p>
          </div>
          <button 
            onClick={() => updateSetting('reducedMotion', !settings.reducedMotion)}
            className={`w-12 h-6 rounded-full transition-colors relative ${settings.reducedMotion ? 'bg-zinc-900' : 'bg-zinc-200'}`}
          >
            <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${settings.reducedMotion ? 'right-1' : 'left-1'}`} />
          </button>
        </div>
      </div>
    </div>
  );
}
