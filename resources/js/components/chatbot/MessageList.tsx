import { Message } from "../../pages/chatbot/types";
import MessageBubble from "./MessageBubble";
import { useEffect, useRef, useState } from "react";

interface MessageListProps {
  messages: Message[];
  isLoading?: boolean;
}

function ThinkingIndicator() {
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setElapsed(s => s + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (s: number) => s < 10 ? `${s}s` : `${s}s`;

  return (
    <div className="flex gap-3 py-4">
      <div className="w-7 h-7 rounded-full bg-red-600 flex-shrink-0 flex items-center justify-center">
        <span className="text-white text-xs font-bold">R</span>
      </div>
      <div className="flex flex-col gap-1.5 pt-0.5">
        {/* Thinking label with timer */}
        <button className="flex items-center gap-2 text-sm text-gray-400 hover:text-gray-300 transition-colors">
          <span className="relative flex items-center gap-2">
            {/* Animated sparkle icon */}
            <svg className="w-4 h-4 animate-spin-slow" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L13.09 8.26L18 4L14.74 9.91L21 10L15.64 12.64L21 16L14.74 14.09L18 20L13.09 15.74L12 22L10.91 15.74L6 20L9.26 14.09L3 16L8.36 12.64L3 10L9.26 9.91L6 4L10.91 8.26L12 2Z" fill="currentColor" opacity="0.6" />
            </svg>
            <span>Thinking</span>
            {elapsed > 0 && <span className="text-gray-500 text-xs">{formatTime(elapsed)}</span>}
          </span>
        </button>

        {/* Shimmer lines */}
        <div className="flex flex-col gap-2 w-64">
          <div className="h-3 rounded-full bg-gradient-to-r from-[#2a2a2a] via-[#3a3a3a] to-[#2a2a2a] animate-shimmer" style={{ backgroundSize: '200% 100%' }} />
          <div className="h-3 rounded-full bg-gradient-to-r from-[#2a2a2a] via-[#3a3a3a] to-[#2a2a2a] animate-shimmer w-3/4" style={{ backgroundSize: '200% 100%', animationDelay: '150ms' }} />
          <div className="h-3 rounded-full bg-gradient-to-r from-[#2a2a2a] via-[#3a3a3a] to-[#2a2a2a] animate-shimmer w-1/2" style={{ backgroundSize: '200% 100%', animationDelay: '300ms' }} />
        </div>
      </div>
    </div>
  );
}

export default function MessageList({ messages, isLoading }: MessageListProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  // Show thinking when loading and last assistant message is empty
  const lastMsg = messages[messages.length - 1];
  const showThinking = isLoading && lastMsg?.role === "assistant" && lastMsg.content === "";

  return (
    <div ref={scrollContainerRef} className="flex-1 overflow-y-auto">
      <div className="max-w-3xl mx-auto px-4 py-4">
        {messages.map((message) => {
          // Hide the empty assistant placeholder while thinking indicator is showing
          if (showThinking && message.id === lastMsg.id) return null;
          return <MessageBubble key={message.id} message={message} />;
        })}

        {showThinking && <ThinkingIndicator />}

        <div ref={messagesEndRef} />
      </div>
    </div>
  );
}
