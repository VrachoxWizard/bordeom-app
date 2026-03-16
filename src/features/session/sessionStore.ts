import { create } from 'zustand';

export type SessionStatus = 'idle' | 'running' | 'paused' | 'completed' | 'cancelled';

interface SessionState {
  status: SessionStatus;
  duration: number; // in milliseconds
  timeLeft: number; // in milliseconds
  startTime: number | null;
  currentPromptIndex: number;
  prompts: string[];
  
  // Actions
  isFocusMode: boolean;
  setFocusMode: (active: boolean) => void;
  startSession: (minutes: number) => void;
  pauseSession: () => void;
  resumeSession: () => void;
  cancelSession: () => void;
  completeSession: () => void;
  tick: () => void;
  reset: () => void;
}

const SESSION_PROMPTS = [
  "Just sit.",
  "Notice the urge. Do not obey it.",
  "Let boredom exist.",
  "Return to stillness.",
  "Be here now.",
  "Observe without judgement."
];

export const useSessionStore = create<SessionState>((set, get) => ({
  status: 'idle',
  duration: 0,
  timeLeft: 0,
  startTime: null,
  currentPromptIndex: 0,
  prompts: SESSION_PROMPTS,
  isFocusMode: false,

  setFocusMode: (active) => set({ isFocusMode: active }),

  startSession: (minutes: number) => {
    const durationMs = minutes * 60 * 1000;
    set({
      status: 'running',
      duration: durationMs,
      timeLeft: durationMs,
      startTime: Date.now(),
      currentPromptIndex: 0,
      isFocusMode: true // Auto-enter focus mode on start
    });
  },

  pauseSession: () => set({ status: 'paused' }),
  
  resumeSession: () => set({ status: 'running' }),

  cancelSession: () => set({ status: 'cancelled', isFocusMode: false }),

  completeSession: () => set({ status: 'completed', isFocusMode: false }),

  tick: () => {
    const { status, timeLeft, currentPromptIndex } = get();
    if (status !== 'running') return;

    if (timeLeft <= 0) {
      set({ status: 'completed', timeLeft: 0, isFocusMode: false });
      return;
    }

    const nextTimeLeft = Math.max(0, timeLeft - 1000);
    
    // Change prompt every 30 seconds
    const shouldChangePrompt = nextTimeLeft > 0 && (nextTimeLeft / 1000) % 30 === 0;
    
    set({ 
      timeLeft: nextTimeLeft,
      currentPromptIndex: shouldChangePrompt 
        ? (currentPromptIndex + 1) % SESSION_PROMPTS.length 
        : currentPromptIndex
    });
  },

  reset: () => set({
    status: 'idle',
    duration: 0,
    timeLeft: 0,
    startTime: null,
    currentPromptIndex: 0,
    isFocusMode: false
  }),
}));
