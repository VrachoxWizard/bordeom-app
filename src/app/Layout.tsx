import { Link, NavLink, Outlet } from 'react-router-dom';
import { useSessionStore } from '../features/session/sessionStore';
import Logo from '../components/ui/Logo';

export default function Layout() {
  const isFocusMode = useSessionStore((state) => state.isFocusMode);

  if (isFocusMode) {
    return (
      <main className="min-h-screen bg-white">
        <Outlet />
      </main>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-primary)] selection:bg-zinc-100">
      <nav className="glass-panel sticky top-0 z-50 px-6">
        <div className="max-w-4xl mx-auto h-16 flex items-center justify-between">
          <Link to="/" className="hover:opacity-60 transition-opacity">
            <Logo />
          </Link>
          
          <div className="flex gap-1">
            {[
              { to: '/session', label: 'Session' },
              { to: '/urge', label: 'Urges' },
              { to: '/reflection', label: 'Reflection' },
              { to: '/insights', label: 'Insights' },
              { to: '/settings', label: 'Settings' }
            ].map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) => `
                  px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-500
                  ${isActive 
                    ? 'bg-zinc-900 text-white shadow-md' 
                    : 'text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100/50'}
                `}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>

      <main className="flex-1 px-6 py-12 md:py-20 page-enter">
        <Outlet />
      </main>

      <footer className="border-t border-zinc-100/50 py-12 px-6 bg-zinc-50/30">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="space-y-1">
            <Logo />
            <p className="text-[10px] text-zinc-400 font-bold tracking-[0.2em] uppercase">Private Stillness training</p>
          </div>
          <div className="flex gap-8 text-[11px] font-semibold uppercase tracking-widest text-zinc-400">
            <Link to="/about" className="hover:text-zinc-900 transition-colors">Philosophy</Link>
            <a href="https://github.com/mvuku/bordeom-app" target="_blank" rel="noreferrer" className="hover:text-zinc-900 transition-colors">Source</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
