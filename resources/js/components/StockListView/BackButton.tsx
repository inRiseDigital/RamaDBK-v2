import { Link } from '@inertiajs/react';

export default function BackButton() {
  return (
    <Link
      href="/stock-list"
      className="flex items-center gap-2 px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors border border-white/20 text-white font-medium"
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
      <span>Back to Stock List</span>
    </Link>
  );
}
