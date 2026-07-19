const Background = () => {
  return (
    <div className="absolute inset-0 -z-0 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050816] via-[#0b1026] to-[#050816]" />

      {/* Pink glow */}
      <div className="absolute top-0 left-1/4 h-[500px] w-[500px] rounded-full bg-pink-500/20 blur-[120px] animate-pulse" />

      {/* Purple glow */}
      <div className="absolute bottom-0 right-1/4 h-[450px] w-[450px] rounded-full bg-purple-500/20 blur-[120px] animate-pulse" />

      {/* Stars */}
      {Array.from({ length: 50 }).map((_, i) => (
        <span
          key={i}
          className="absolute h-1 w-1 rounded-full bg-white opacity-70 animate-ping"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${2 + Math.random() * 3}s`,
          }}
        />
      ))}
    </div>
  );
};

export default Background;
