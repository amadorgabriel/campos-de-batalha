export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-600 via-red-700 to-gray-900">
      <div className="text-center space-y-6">
        <div className="inline-block bg-red-600 text-white font-bold text-2xl px-6 py-2 mb-4 animate-pulse">
          MARVEL
        </div>
        <h2
          className="text-5xl font-black text-yellow-400 animate-pulse"
          style={{
            textShadow: '4px 4px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000',
            WebkitTextStroke: '2px white',
          }}
        >
          CARREGANDO...
        </h2>
        <div className="flex justify-center gap-2 mt-8">
          <div
            className="w-4 h-4 bg-yellow-400 rounded-full animate-bounce"
            style={{ animationDelay: '0ms' }}
          ></div>
          <div
            className="w-4 h-4 bg-yellow-400 rounded-full animate-bounce"
            style={{ animationDelay: '150ms' }}
          ></div>
          <div
            className="w-4 h-4 bg-yellow-400 rounded-full animate-bounce"
            style={{ animationDelay: '300ms' }}
          ></div>
        </div>
      </div>
    </div>
  );
}
