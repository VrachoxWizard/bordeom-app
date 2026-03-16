import { useSessionStore } from '../features/session/sessionStore';
import SessionSetup from '../features/session/SessionSetup';
import ActiveSession from '../features/session/ActiveSession';
import SessionCompletion from '../features/session/SessionCompletion';

export default function Session() {
  const status = useSessionStore((state) => state.status);

  return (
    <div className="max-w-4xl mx-auto backdrop-blur-sm">
      <h1 className="sr-only">Stillness Session</h1>
      {status === 'idle' && <SessionSetup />}
      {(status === 'running' || status === 'paused') && <ActiveSession />}
      {status === 'completed' && <SessionCompletion />}
      {status === 'cancelled' && (
        <div className="flex flex-col items-center justify-center min-h-[50vh] space-y-6">
          <p className="text-zinc-500 italic">Session abandoned.</p>
          <button 
            onClick={() => useSessionStore.getState().reset()}
            className="text-sm font-medium hover:underline"
          >
            Return
          </button>
        </div>
      )}
    </div>
  );
}
