import { useState, useCallback, memo } from "react";
import { Message } from "../../pages/chatbot/types";
import CarCard from "./CarCard";
import MapLocation from "./MapLocation";
import VehicleImageDisplay from "./VehicleImageDisplay";

interface MessageBubbleProps {
  message: Message;
}

const MessageBubble = memo(function MessageBubble({ message }: MessageBubbleProps) {
  const isAssistant = message.role === "assistant";
  const isCardType = message.type === "card" && message.cardData;
  const isMapType = message.type === "map" && message.locationData;
  const isImageType = message.type === "image" && message.imageData;

  const [currentCardIndex, setCurrentCardIndex] = useState(message.currentCardIndex || 0);
  const [copied, setCopied] = useState(false);

  const handleCardChange = useCallback((newIndex: number) => {
    setCurrentCardIndex(newIndex);
  }, []);

  const currentCardData = message.allCards ? message.allCards[currentCardIndex] : message.cardData;

  const handleCopy = useCallback(() => {
    if (message.content) {
      navigator.clipboard.writeText(message.content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [message.content]);

  if (!isAssistant) {
    // User message - right-aligned bubble
    return (
      <div className="flex justify-end mb-4">
        <div className="max-w-[85%] md:max-w-[70%] bg-[#2f2f2f] text-white rounded-3xl px-5 py-3 text-[15px] leading-relaxed whitespace-pre-wrap">
          {message.content}
        </div>
      </div>
    );
  }

  // Assistant message - left-aligned with avatar
  return (
    <div className="mb-4 group">
      <div className="flex gap-3">
        {/* Avatar */}
        <div className="w-7 h-7 rounded-full bg-red-600 flex-shrink-0 flex items-center justify-center mt-0.5">
          <span className="text-white text-xs font-bold">R</span>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          {isCardType ? (
            <CarCard
              data={currentCardData!}
              allCards={message.allCards}
              currentCardIndex={currentCardIndex}
              onCardChange={handleCardChange}
            />
          ) : isMapType ? (
            <MapLocation location={message.locationData!} />
          ) : isImageType ? (
            <VehicleImageDisplay
              images={message.imageData!.images}
              vehicleName={message.imageData!.vehicleName}
              aspectRatio={message.imageData!.aspectRatio || "auto"}
              showThumbnails={true}
            />
          ) : (
            <div className="text-[15px] leading-7 text-gray-200 whitespace-pre-wrap">
              {message.content}
            </div>
          )}

          {/* Action buttons - visible on hover */}
          {message.content && (
            <div className="flex items-center gap-0.5 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <button
                onClick={handleCopy}
                className="p-1.5 rounded-md hover:bg-white/10 transition-colors text-gray-500 hover:text-gray-300"
                aria-label="Copy message"
              >
                {copied ? (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                )}
              </button>
              <button
                className="p-1.5 rounded-md hover:bg-white/10 transition-colors text-gray-500 hover:text-gray-300"
                aria-label="Good response"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
              </button>
              <button
                className="p-1.5 rounded-md hover:bg-white/10 transition-colors text-gray-500 hover:text-gray-300"
                aria-label="Bad response"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
});

export default MessageBubble;
