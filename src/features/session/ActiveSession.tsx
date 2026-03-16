import { useEffect, useRef } from 'react';
import { useSessionStore } from './sessionStore';
import { motion, AnimatePresence } from 'framer-motion';

export default function ActiveSession() {
  const { 
    timeLeft, 
    status, 
    tick, 
    pauseSession, 
    resumeSession, 
    cancelSession,
    prompts,
    currentPromptIndex 
  } = useSessionStore();
  
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (status === 'running') {
      timerRef.current = window.setInterval(() => {
        tick();
      }, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [status, tick]);

  const formatTime = (ms: number) => {
    const totalSeconds = Math.ceil(ms / 1000);
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const isFocusMode = useSessionStore(state => state.isFocusMode);
  const setFocusMode = useSessionStore(state => state.setFocusMode);
  const isPaused = status === 'paused';

  return (
    <div className={`flex flex-col items-center justify-center min-h-[60vh] space-y-24 py-12 transition-all duration-[1500ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${isFocusMode ? 'scale-110' : ''}`}>
      <div className="text-center space-y-12">
        <div className="h-20 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={currentPromptIndex}
              initial={{ opacity: 0, scale: 0.95, filter: 'blur(8px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, scale: 1.05, filter: 'blur(8px)' }}
              transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
              className="text-2xl text-zinc-400 font-extralight italic tracking-wide"
            >
              {prompts[currentPromptIndex]}
            </motion.p>
          </AnimatePresence>
        </div>

        <motion.div 
          animate={{ 
            opacity: isPaused ? 0.2 : 1,
            scale: isPaused ? 0.95 : 1,
            filter: isPaused ? 'blur(4px)' : 'blur(0px)'
          }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-[12rem] md:text-[20rem] font-extralight tracking-[-0.07em] tabular-nums text-zinc-900 leading-none select-none"
        >
          {formatTime(timeLeft)}
        </motion.div>
      </div>

      <div className="flex items-center gap-16">
        <button
          onClick={cancelSession}
          className="text-[10px] font-bold text-zinc-300 hover:text-red-400 transition-all uppercase tracking-[0.2em]"
        >
          Abandon
        </button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={isPaused ? resumeSession : pauseSession}
          aria-label={isPaused ? 'Resume Session' : 'Pause Session'}
          className="w-20 h-20 flex items-center justify-center rounded-full surface-elevated border border-zinc-100 hover:border-zinc-300 transition-all duration-700"
        >
          {isPaused ? (
            <svg className="w-8 h-8 fill-zinc-900" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          ) : (
            <svg className="w-8 h-8 fill-zinc-900" viewBox="0 0 24 24">
              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
            </svg>
          )}
        </motion.button>

        <button
          onClick={() => setFocusMode(!isFocusMode)}
          className={`text-[10px] font-bold transition-all uppercase tracking-[0.2em] ${isFocusMode ? 'text-zinc-900 underline underline-offset-[12px]' : 'text-zinc-300 hover:text-zinc-500'}`}
        >
          Focus
        </button>
      </div>
    </div>
  );
}
