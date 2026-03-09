import { Link } from '@inertiajs/react';
import { useState, useEffect } from 'react';

export default function ChatBar() {
  const [isChatPage, setIsChatPage] = useState(false);

  useEffect(() => {
    const check = () => setIsChatPage(window.location.pathname === '/chat');
    check();
    // Listen for Inertia navigations
    const onNavigate = () => requestAnimationFrame(check);
    document.addEventListener('inertia:navigate', onNavigate);
    window.addEventListener('popstate', onNavigate);
    return () => {
      document.removeEventListener('inertia:navigate', onNavigate);
      window.removeEventListener('popstate', onNavigate);
    };
  }, []);

  if (isChatPage) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9998]">
      {/* Gradient fade above the bar */}
      <div className="h-6 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />

      <div className="bg-[#1a1a1a]/95 backdrop-blur-xl border-t border-white/10">
        <div className="w-full px-4 py-3">
          <Link
            href="/chat"
            prefetch
            className="w-full flex items-center gap-3 bg-white/10 hover:bg-white/15 border border-white/20 hover:border-white/30 rounded-full px-5 py-3 transition-all duration-200 group cursor-text"
          >
            {/* AI Icon */}
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center shadow-lg">
              <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
              </svg>
            </div>

            {/* Placeholder text */}
            <span className="flex-1 text-left text-white/50 text-sm md:text-base group-hover:text-white/70 transition-colors">
              Ask <span className="text-red-500 font-semibold">Rama</span>DBK AI anything...
            </span>

            {/* Arrow icon */}
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-600 group-hover:bg-red-500 flex items-center justify-center transition-colors">
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
