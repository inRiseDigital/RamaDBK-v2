export default function BackButton() {
  return (
    <button
      onClick={() => window.history.back()}
      className="rounded-lg bg-black px-6 py-2 text-white transition hover:bg-gray-800"
    >
      Explore →
    </button>
  );
}
