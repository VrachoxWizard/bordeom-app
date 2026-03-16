import { motion } from 'framer-motion';

export default function Logo() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex items-center gap-3 select-none"
    >
      <div className="w-6 h-6 bg-zinc-900 rounded-full flex items-center justify-center">
        <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
      </div>
      <span className="font-semibold tracking-tighter text-lg text-zinc-900">
        Boredom Gym
      </span>
    </motion.div>
  );
}
