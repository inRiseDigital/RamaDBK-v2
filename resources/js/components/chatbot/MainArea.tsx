import { useState, useRef, useCallback, useMemo } from "react";
import { Message } from "../../pages/chatbot/types";
import MessageList from "./MessageList";
import ChatInput from "./ChatInput";

const INFOBOT_URL = import.meta.env.VITE_LIA_BASE_URL || "https://xapi.liabots.ai/webhooks/rmdbk-infobot";

function generateSessionId(): string {
  return "sess_" + Math.random().toString(36).substring(2, 15) + Date.now().toString(36);
}

interface MainAreaProps {
  messages: Message[];
  onMessagesChange: (messages: Message[]) => void;
}

export default function MainArea({ messages, onMessagesChange }: MainAreaProps) {
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const sessionId = useMemo(() => generateSessionId(), []);

  const handleSubmit = useCallback(async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: inputValue,
    };

    const updatedMessages = [...messages, userMessage];
    onMessagesChange(updatedMessages);
    setInputValue("");

    // Call Liabots infobot webhook with streaming
    setIsLoading(true);
    const assistantMessage: Message = {
      id: (Date.now() + 1).toString(),
      role: "assistant",
      content: "",
    };

    try {
      const response = await fetch(INFOBOT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user_query: inputValue,
          session_id: sessionId,
        }),
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      if (!response.body) {
        const text = await response.text();
        let content = "";
        for (const line of text.split("\n")) {
          if (!line.trim()) continue;
          try {
            const parsed = JSON.parse(line);
            if (parsed.type === "item" && parsed.content) {
              content += parsed.content;
            }
          } catch {
            content += line;
          }
        }
        assistantMessage.content = content || text;
        onMessagesChange([...updatedMessages, assistantMessage]);
        setIsLoading(false);
        return;
      }

      // Handle streaming NDJSON response
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let accumulated = "";
      let buffer = "";
      onMessagesChange([...updatedMessages, assistantMessage]);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n");
        buffer = lines.pop() || "";

        for (const line of lines) {
          if (!line.trim()) continue;
          try {
            const parsed = JSON.parse(line);
            if (parsed.type === "item" && parsed.content) {
              accumulated += parsed.content;
              assistantMessage.content = accumulated;
              onMessagesChange([...updatedMessages, { ...assistantMessage }]);
            }
          } catch {
            // Skip unparseable lines
          }
        }
      }

      if (buffer.trim()) {
        try {
          const parsed = JSON.parse(buffer);
          if (parsed.type === "item" && parsed.content) {
            accumulated += parsed.content;
            assistantMessage.content = accumulated;
            onMessagesChange([...updatedMessages, { ...assistantMessage }]);
          }
        } catch {
          // Skip
        }
      }
    } catch (error) {
      console.error("Infobot API error:", error);
      assistantMessage.content = "Sorry, I'm having trouble connecting right now. Please try again later.";
      onMessagesChange([...updatedMessages, assistantMessage]);
    } finally {
      setIsLoading(false);
    }
  }, [inputValue, isLoading, messages, onMessagesChange, sessionId]);

  const hasMessages = messages.length > 0;

  return (
    <main className="flex-1 flex flex-col bg-[#212121] h-full overflow-hidden">
      {!hasMessages ? (
        /* Empty state - centered greeting */
        <div className="flex-1 flex flex-col items-center justify-center px-4">
          <div className="max-w-2xl w-full flex flex-col items-center">
            <h1 className="text-3xl font-semibold text-white mb-10">
              What can I help with?
            </h1>

            <div className="w-full">
              <ChatInput
                value={inputValue}
                onChange={setInputValue}
                onSubmit={handleSubmit}
                isLoading={isLoading}
                autoFocus
              />
            </div>
          </div>
        </div>
      ) : (
        /* Messages view */
        <>
          <MessageList messages={messages} isLoading={isLoading} />
          <div className="pb-4">
            <ChatInput
              value={inputValue}
              onChange={setInputValue}
              onSubmit={handleSubmit}
              isLoading={isLoading}
            />
          </div>
        </>
      )}
    </main>
  );
}
