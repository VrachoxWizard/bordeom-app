import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function QuickActions() {
  const navigate = useNavigate();

  const actions = [
    { label: 'Enter Stillness', path: '/session', icon: '⏱️' },
    { label: 'Notice Urge', path: '/urge', icon: '⚡' },
    { label: 'Deep Reflect', path: '/reflection', icon: '✍️' },
    { label: 'View Insights', path: '/insights', icon: '📈' },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
      {actions.map((a, i) => (
        <motion.button
          key={a.label}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 + 0.3, duration: 0.8 }}
          whileHover={{ y: -4, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => navigate(a.path)}
          className="p-8 glass-panel rounded-[28px] flex flex-col items-center gap-4 transition-all group text-center"
        >
          <div className="w-12 h-12 rounded-2xl bg-zinc-50 flex items-center justify-center group-hover:bg-white transition-colors duration-500 shadow-sm border border-zinc-100/50">
            <span className="text-2xl opacity-80 group-hover:opacity-100 transition-opacity">{a.icon}</span>
          </div>
          <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-zinc-500 group-hover:text-zinc-900 transition-colors">
            {a.label}
          </span>
        </motion.button>
      ))}
    </div>
  );
}
