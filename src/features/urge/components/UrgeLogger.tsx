import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { db } from '../../../lib/db';
import type { UrgeType, Intensity, Trigger } from '../types';

const URGE_TYPES: UrgeType[] = [
  'phone', 'youtube', 'social media', 'random browsing', 
  'food', 'porn', 'escape / avoidance', 'other'
];

const TRIGGERS: Trigger[] = [
  'boredom', 'anxiety', 'stress', 'loneliness', 
  'confusion', 'fatigue', 'procrastination', 'discomfort', 'other'
];

const INTENSITIES: Intensity[] = [1, 2, 3, 4, 5];

export default function UrgeLogger() {
  const [step, setStep] = useState<1 | 2>(1);
  const [urgeType, setUrgeType] = useState<UrgeType | null>(null);
  const [intensity, setIntensity] = useState<Intensity>(3);
  const [trigger, setTrigger] = useState<Trigger>('boredom');
  const [note, setNote] = useState('');
  const [isSaving, setIsSaving] = useState(false);

  const resetForm = () => {
    setStep(1);
    setUrgeType(null);
    setIntensity(3);
    setTrigger('boredom');
    setNote('');
    setIsSaving(false);
  };

  const handleSave = async () => {
    if (!urgeType) return;
    setIsSaving(true);
    try {
      await db.urges.add({
        createdAt: new Date(),
        urgeType,
        intensity,
        trigger,
        note: note.trim() || undefined
      });
      resetForm();
    } catch (error) {
      console.error('Failed to save urge:', error);
      setIsSaving(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-12 surface-elevated rounded-[40px] overflow-hidden min-h-[500px]">
      <AnimatePresence mode="wait">
        {step === 1 ? (
          <motion.div
            key="step1"
            initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -10, filter: 'blur(4px)' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-10"
          >
            <div className="space-y-3">
              <h2 className="text-2xl font-light tracking-tight text-zinc-900">What are you feeling?</h2>
              <p className="text-sm text-zinc-400 font-light italic">Identify the impulse. Do not obey it.</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {URGE_TYPES.map((type) => (
                <button
                  key={type}
                  onClick={() => {
                    setUrgeType(type);
                    setStep(2);
                  }}
                  className="px-4 py-4 text-[13px] font-medium border border-zinc-100 rounded-2xl hover:border-zinc-300 hover:bg-zinc-50 transition-all duration-500 text-zinc-600 capitalize text-center"
                >
                  {type}
                </button>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="step2"
            initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -10, filter: 'blur(4px)' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-10"
          >
            <button 
              onClick={() => setStep(1)}
              className="text-[10px] font-bold text-zinc-300 hover:text-zinc-600 uppercase tracking-[0.2em] transition-all mb-4"
            >
              ← Back to Categories
            </button>

            <div className="space-y-8">
              <div className="space-y-4">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 flex justify-between">
                  <span>Intensity</span>
                  <span className="text-zinc-900 tracking-normal italic">{intensity}/5</span>
                </label>
                <div className="flex gap-3">
                  {INTENSITIES.map((val) => (
                    <button
                      key={val}
                      onClick={() => setIntensity(val)}
                      className={`flex-1 h-14 rounded-2xl border transition-all duration-500 font-light text-lg ${
                        intensity === val 
                          ? 'bg-zinc-900 border-zinc-900 text-white shadow-lg translate-y-[-2px]' 
                          : 'bg-white border-zinc-100 text-zinc-400 hover:border-zinc-300'
                      }`}
                    >
                      {val}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">Primary Trigger</label>
                <div className="flex flex-wrap gap-2.5">
                  {TRIGGERS.map((t) => (
                    <button
                      key={t}
                      onClick={() => setTrigger(t)}
                      className={`px-4 py-2 rounded-full border text-xs transition-all duration-500 font-medium ${
                        trigger === t 
                          ? 'bg-zinc-100 border-zinc-200 text-zinc-900' 
                          : 'bg-white border-zinc-100 text-zinc-400 hover:border-zinc-300'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">Observation</label>
                <input
                  type="text"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="Notes on the mental itch..."
                  className="w-full h-14 px-6 bg-zinc-50/50 border border-zinc-100 rounded-2xl focus:outline-none focus:border-zinc-300 focus:bg-white transition-all text-sm font-light"
                />
              </div>
            </div>

            <button
              onClick={handleSave}
              disabled={isSaving}
              className="w-full h-16 bg-zinc-900 text-white rounded-2xl font-medium hover:bg-black hover:shadow-xl transition-all duration-500 disabled:opacity-50 mt-6 tracking-wide"
            >
              {isSaving ? 'Logging Impulse...' : 'Save Observation'}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
