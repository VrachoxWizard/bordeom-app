import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-2xl mx-auto space-y-24 py-16"
    >
      <header className="space-y-8">
        <h1 className="text-5xl md:text-6xl font-extralight tracking-tight text-zinc-900">Philosophy</h1>
        <p className="text-2xl text-zinc-400 font-light leading-relaxed italic">
          We live in an age of infinite, frictionless stimulation. <br />
          Boredom has become an endangered state.
        </p>
      </header>

      <section className="space-y-20">
        <div className="space-y-6">
          <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-300">The Problem</h2>
          <p className="text-lg text-zinc-600 leading-relaxed font-light">
            The compulsive urge to check a screen at the slightest hint of boredom is not just a bad habit—it&apos;s a physiological response to a world designed to harvest our attention. Over time, we lose the capacity to simply exist without external input.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-300">The Practice</h2>
          <p className="text-lg text-zinc-600 leading-relaxed font-light">
            Stillness is a muscle. Boredom Gym provides a space to train it. By setting a timer and deciding to do nothing, we encounter the &quot;wall of restlessness.&quot; This app doesn&apos;t tell you to meditate—it just asks you to sit.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-300">The Urge Trap</h2>
          <p className="text-lg text-zinc-600 leading-relaxed font-light">
            When we feel the itch to check a notification, we usually obey it instantly. Tracking these urges creates a &quot;gap&quot; between the impulse and the action. In that gap lies our freedom.
          </p>
        </div>

        <div className="space-y-4 text-center py-12 border-t border-zinc-50">
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-zinc-400 mb-6">Built for Autonomy</h2>
          <p className="text-sm text-zinc-400 leading-relaxed italic">
            This app is intentionally local-first. There are no accounts, no clouds, and no notifications. Your data lives and dies on your device. It is a tool for you, not a product for us.
          </p>
        </div>
      </section>
    </motion.div>
  );
}
