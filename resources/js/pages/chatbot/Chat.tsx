import { router } from '@inertiajs/react';
import { useState, useCallback } from 'react';
import MainArea from '@/components/chatbot/MainArea';
import { Message } from './types';

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);

  const handleBack = useCallback(() => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      router.visit('/');
    }
  }, []);

  const handleNewChat = useCallback(() => {
    setMessages([]);
  }, []);

  return (
    <div className="fixed inset-0 z-[99999] bg-[#212121] flex flex-col">
      {/* Top bar */}
      <div className="flex items-center justify-between px-3 py-2 bg-[#212121]">
        <button
          onClick={handleBack}
          className="w-9 h-9 rounded-lg hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
          aria-label="Go back"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </button>

        <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg hover:bg-white/10 transition-colors">
          <span className="text-white text-base font-medium">
            <span className="text-red-500 font-bold">Rama</span>DBK
          </span>
          <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        <button
          onClick={handleNewChat}
          className="w-9 h-9 rounded-lg hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
          aria-label="New chat"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
          </svg>
        </button>
      </div>

      {/* Chat content */}
      <div className="flex-1 overflow-hidden">
        <MainArea messages={messages} onMessagesChange={setMessages} />
      </div>
    </div>
  );
}
