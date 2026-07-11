export default function PageLoader() {
  return (
    <div className="fixed inset-0 z-[9998] flex flex-col items-center justify-center bg-white dark:bg-slate-950">
      {/* Animated video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-48 h-48 sm:w-64 sm:h-64 object-contain"
      >
        <source
          src="https://cdnl.iconscout.com/lottie/premium/thumb/neighborhood-animation-gif-download-10872020.mp4"
          type="video/mp4"
        />
      </video>

      {/* Brand */}
      <p className="mt-3 text-base font-extrabold tracking-widest text-slate-800 dark:text-white uppercase">
        Rudra Group
      </p>
      <p className="text-xs text-slate-400 tracking-wider mt-1">Loading…</p>

      {/* Bouncing dots */}
      <div className="flex items-center space-x-1.5 mt-4">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="w-2 h-2 rounded-full bg-amber-500"
            style={{ animation: `bounce 0.9s ${i * 0.2}s ease-in-out infinite` }}
          />
        ))}
      </div>

      {/* Gold bottom bar */}
      <div
        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-amber-400 to-yellow-500"
        style={{ animation: 'loadbar 1.5s ease-in-out infinite alternate' }}
      />

      <style>{`
        @keyframes loadbar {
          from { width: 20%; }
          to   { width: 90%; }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); opacity: 0.4; }
          50%       { transform: translateY(-8px); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
