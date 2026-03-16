import { useState } from 'react';
import { useSessionStore } from './sessionStore';
import { db } from '../../lib/db';

const MOODS = [
  { value: 'very restless', label: 'Very Restless' },
  { value: 'restless', label: 'Restless' },
  { value: 'neutral', label: 'Neutral' },
  { value: 'calm', label: 'Calm' },
  { value: 'very calm', label: 'Very Calm' }
] as const;

const URGES = ['0', '1', '2', '3', '4+'] as const;

export default function SessionCompletion() {
  const { duration, startTime, reset } = useSessionStore();
  const [mood, setMood] = useState<typeof MOODS[number]['value']>('neutral');
  const [urgeCount, setUrgeCount] = useState(0);
  const [note, setNote] = useState('');
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = async () => {
    setIsSaving(true);
    try {
      await db.sessions.add({
        startedAt: new Date(startTime!),
        completedAt: new Date(),
        durationMinutes: Math.floor(duration / 60000),
        mood,
        urgeCount,
        note,
        status: 'completed'
      });
      reset();
    } catch (error) {
      console.error('Failed to save session:', error);
      setIsSaving(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-12 animate-in fade-in duration-1000">
      <div className="space-y-10 bg-white border border-zinc-100 p-8 rounded-3xl shadow-sm">
        <div className="space-y-2 text-center pb-4">
          <h2 className="text-2xl font-medium tracking-tight text-zinc-900">Session Complete</h2>
          <p className="text-sm text-zinc-400">Take a moment to reflect on your experience.</p>
        </div>

        <div className="space-y-8">
          {/* Mood Selection */}
          <div className="space-y-4">
            <label className="text-xs font-medium uppercase tracking-widest text-zinc-400">How did you feel?</label>
            <div className="flex flex-wrap gap-2">
              {MOODS.map((m) => (
                <button
                  key={m.value}
                  onClick={() => setMood(m.value)}
                  className={`px-4 py-2 rounded-xl border text-sm transition-all capitalize ${
                    mood === m.value 
                      ? 'bg-zinc-900 border-zinc-900 text-white' 
                      : 'bg-white border-zinc-100 text-zinc-500 hover:border-zinc-200'
                  }`}
                >
                  {m.label}
                </button>
              ))}
            </div>
          </div>

          {/* Urge Selection */}
          <div className="space-y-4">
            <label className="text-xs font-medium uppercase tracking-widest text-zinc-400">Noticed Urges</label>
            <div className="flex gap-2">
              {URGES.map((u, i) => (
                <button
                  key={u}
                  onClick={() => setUrgeCount(i)}
                  className={`flex-1 h-12 rounded-xl border text-sm transition-all ${
                    urgeCount === i 
                      ? 'bg-zinc-900 border-zinc-900 text-white' 
                      : 'bg-white border-zinc-100 text-zinc-500 hover:border-zinc-200'
                  }`}
                >
                  {u}
                </button>
              ))}
            </div>
          </div>

          {/* Note */}
          <div className="space-y-4">
            <label className="text-xs font-medium uppercase tracking-widest text-zinc-400">Note (Optional)</label>
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="What did you notice during the stillness?"
              className="w-full p-4 border border-zinc-100 rounded-xl focus:outline-none focus:border-zinc-300 min-h-[100px] text-sm resize-none font-light"
            />
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-4 border-t border-zinc-50">
          <button
            onClick={handleSave}
            disabled={isSaving}
            className="w-full py-4 bg-zinc-900 text-white rounded-xl font-medium hover:bg-zinc-800 transition-colors shadow-lg shadow-zinc-100/50 disabled:opacity-50"
          >
            {isSaving ? 'Saving...' : 'Save & Finish'}
          </button>
          <button
            onClick={reset}
            className="w-full py-3 text-zinc-400 text-sm hover:text-zinc-600 transition-colors"
          >
            Discard Session
          </button>
        </div>
      </div>
    </div>
  );
}
