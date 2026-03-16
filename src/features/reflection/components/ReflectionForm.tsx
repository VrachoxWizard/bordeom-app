import { useState, useEffect } from 'react';
import { db } from '../../../lib/db';
import { useTodayData } from '../../../lib/queries';
import type { 
  Restlessness, 
  Presence, 
  ReflectionDifficulty, 
  StimulatedAvoidance 
} from '../types';

const RESTLESSNESS_OPTIONS: { val: Restlessness }[] = [
  { val: 'very restless' }, { val: 'restless' }, { val: 'neutral' }, { val: 'calm' }, { val: 'very calm' }
];

const PRESENCE_OPTIONS: { val: Presence }[] = [
  { val: 'very disconnected' }, { val: 'disconnected' }, { val: 'mixed' }, { val: 'present' }, { val: 'deeply present' }
];

const DIFFICULTIES: ReflectionDifficulty[] = [
  'boredom', 'anxiety', 'stress', 'fatigue', 'loneliness', 'confusion', 'procrastination', 'discomfort', 'none', 'other'
];

export default function ReflectionForm() {
  const todayData = useTodayData();
  const [restlessness, setRestlessness] = useState<Restlessness>('neutral');
  const [presence, setPresence] = useState<Presence>('mixed');
  const [difficulty, setDifficulty] = useState<ReflectionDifficulty>('none');
  const [avoided, setAvoided] = useState<StimulatedAvoidance>('no');
  const [note, setNote] = useState('');
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (todayData?.reflection) {
      const r = todayData.reflection;
      setRestlessness(r.restlessness);
      setPresence(r.presence);
      setDifficulty(r.mainDifficulty);
      setAvoided(r.didAvoidWithStimulation);
      setNote(r.note || '');
    }
  }, [todayData?.reflection]);

  const handleSave = async () => {
    setIsSaving(true);
    const dateKey = new Date().toISOString().split('T')[0];
    const data = {
      dateKey,
      updatedAt: new Date(),
      restlessness,
      presence,
      mainDifficulty: difficulty,
      didAvoidWithStimulation: avoided,
      note: note.trim() || undefined
    };

    try {
      if (todayData?.reflection?.id) {
        await db.reflections.update(todayData.reflection.id, data);
      } else {
        await db.reflections.add({ ...data, createdAt: new Date() });
      }
    } catch (e) {
      console.error('Failed to save reflection:', e);
    } finally {
      setIsSaving(false);
    }
  };

  if (!todayData) return null;

  return (
    <div className="max-w-2xl mx-auto space-y-16 page-enter">
      {/* Context info */}
      <div className="flex gap-6 items-center justify-center text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-zinc-200 rounded-full" />
          <span>{todayData.sessions.length} Stillness Sessions</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-zinc-200 rounded-full" />
          <span>{todayData.urges.length} Urges Noticed</span>
        </div>
      </div>

      <div className="space-y-12 surface-elevated p-12 rounded-[48px]">
        <div className="space-y-6">
          <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">Level of Restlessness</h3>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {RESTLESSNESS_OPTIONS.map(o => (
              <button
                key={o.val}
                onClick={() => setRestlessness(o.val)}
                className={`px-3 py-3 rounded-2xl border text-[11px] font-medium transition-all duration-500 capitalize ${
                  restlessness === o.val 
                    ? 'bg-zinc-900 border-zinc-900 text-white shadow-lg translate-y-[-1px]' 
                    : 'bg-white border-zinc-100 text-zinc-400 hover:border-zinc-300'
                }`}
              >
                {o.val}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">Presence Observation</h3>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {PRESENCE_OPTIONS.map(o => (
              <button
                key={o.val}
                onClick={() => setPresence(o.val)}
                className={`px-3 py-3 rounded-2xl border text-[11px] font-medium transition-all duration-500 capitalize ${
                  presence === o.val 
                    ? 'bg-zinc-900 border-zinc-900 text-white shadow-lg translate-y-[-1px]' 
                    : 'bg-white border-zinc-100 text-zinc-400 hover:border-zinc-300'
                }`}
              >
                {o.val}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">Primary Friction</h3>
          <div className="flex flex-wrap gap-2.5">
            {DIFFICULTIES.map(d => (
              <button
                key={d}
                onClick={() => setDifficulty(d)}
                className={`px-4 py-2 rounded-full border text-[11px] font-medium transition-all duration-500 capitalize ${
                  difficulty === d 
                    ? 'bg-zinc-100 border-zinc-200 text-zinc-900' 
                    : 'bg-white border-zinc-100 text-zinc-400 hover:border-zinc-300'
                }`}
              >
                {d}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">Did you seek escape?</h3>
          <div className="flex gap-4">
            {(['yes', 'partly', 'no'] as StimulatedAvoidance[]).map(o => (
              <button
                key={o}
                onClick={() => setAvoided(o)}
                className={`flex-1 py-4 rounded-2xl border text-xs font-semibold transition-all duration-500 capitalize tracking-wide ${
                  avoided === o 
                    ? 'bg-zinc-900 border-zinc-900 text-white shadow-md' 
                    : 'bg-white border-zinc-100 text-zinc-400 hover:border-zinc-300'
                }`}
              >
                {o}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">Journal Note</h3>
          <textarea
            value={note}
            onChange={e => setNote(e.target.value)}
            placeholder="A short note on today's stillness..."
            className="w-full p-6 bg-zinc-50/50 border border-zinc-100 rounded-[24px] focus:outline-none focus:border-zinc-300 focus:bg-white transition-all text-sm font-light min-h-[140px] resize-none"
          />
        </div>

        <button
          onClick={handleSave}
          disabled={isSaving}
          className="w-full py-5 bg-zinc-900 text-white rounded-2xl font-medium hover:bg-black hover:shadow-2xl transition-all duration-500 disabled:opacity-50 tracking-wide"
        >
          {isSaving ? 'Preserving...' : (todayData.reflection ? 'Update Reflection' : 'Archive Day')}
        </button>
      </div>
    </div>
  );
}
