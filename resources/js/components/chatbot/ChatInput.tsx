import { useRef, useCallback, useEffect, memo } from "react";

interface ChatInputProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  isLoading?: boolean;
  autoFocus?: boolean;
}

const ChatInput = memo(function ChatInput({ value, onChange, onSubmit, isLoading = false, autoFocus }: ChatInputProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (autoFocus && textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [autoFocus]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      onSubmit();
      if (textareaRef.current) {
        textareaRef.current.style.height = '52px';
      }
    }
  }, [onSubmit]);

  const handleTextareaChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const textarea = e.target;
    onChange(textarea.value);

    textarea.style.height = 'auto';
    const newHeight = Math.max(52, Math.min(textarea.scrollHeight, 200));
    textarea.style.height = `${newHeight}px`;
  }, [onChange]);

  const handleSubmitClick = useCallback(() => {
    onSubmit();
    if (textareaRef.current) {
      textareaRef.current.style.height = '52px';
    }
  }, [onSubmit]);

  return (
    <div className="w-full px-4">
      <div className="max-w-3xl mx-auto">
        <div className="relative bg-[#2f2f2f] rounded-3xl border border-[#424242] focus-within:border-[#555] transition-colors">
          <textarea
            ref={textareaRef}
            value={value}
            onChange={handleTextareaChange}
            onKeyDown={handleKeyDown}
            placeholder="Message RamaDBK..."
            className="w-full bg-transparent text-white text-[15px] placeholder:text-gray-500 resize-none outline-none px-5 pt-3.5 pb-3.5 pr-14 leading-6 overflow-y-auto rounded-3xl"
            rows={1}
            style={{ height: '52px', maxHeight: '200px' }}
          />

          {/* Send button - positioned inside the input */}
          <button
            onClick={handleSubmitClick}
            disabled={!value.trim() || isLoading}
            className="absolute right-2.5 bottom-2.5 w-8 h-8 rounded-full bg-white disabled:bg-gray-600 disabled:cursor-not-allowed text-black disabled:text-gray-400 flex items-center justify-center transition-all hover:bg-gray-200"
            aria-label="Send message"
          >
            {isLoading ? (
              <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={4} />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            )}
          </button>
        </div>

        <p className="mt-2 text-[11px] text-gray-500 text-center">
          <span className="text-red-500 font-semibold">Rama</span>DBK can make mistakes. Please double-check responses.
        </p>
      </div>
    </div>
  );
});

export default ChatInput;
