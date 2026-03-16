import { motion } from 'framer-motion';

export default function HomeWelcome() {
  return (
    <div className="space-y-16">
      <header className="space-y-8 max-w-2xl">
        <motion.h1 
          initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl font-extralight tracking-tight leading-[1.1] text-zinc-900"
        >
          Train your capacity <br />
          <span className="text-zinc-300">for stillness.</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="text-xl text-zinc-400 font-light leading-relaxed max-w-lg"
        >
          A private, local-first gym for your attention. <br />
          Learn to sit. Notice the urge. Regain agency.
        </motion.p>
      </header>

      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-16 border-y border-zinc-100/50 py-16"
      >
        <div className="space-y-4">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-300">Phase 01</span>
          <h3 className="text-xl font-light text-zinc-900 tracking-tight">Sit.</h3>
          <p className="text-sm text-zinc-400 leading-relaxed font-light italic">Timed stillness sessions to build tolerance for low-stimulation environments.</p>
        </div>
        <div className="space-y-4">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-300">Phase 02</span>
          <h3 className="text-xl font-light text-zinc-900 tracking-tight">Notice.</h3>
          <p className="text-sm text-zinc-400 leading-relaxed font-light italic">Log the impulsive urge to check your phone or find stimulation.</p>
        </div>
        <div className="space-y-4">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-300">Phase 03</span>
          <h3 className="text-xl font-light text-zinc-900 tracking-tight">Reflect.</h3>
          <p className="text-sm text-zinc-400 leading-relaxed font-light italic">Review patterns of restlessness and presence to understand your habits.</p>
        </div>
      </motion.div>
    </div>
  );
}
