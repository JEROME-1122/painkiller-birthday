const stars = Array.from({ length: 120 });

const Stars = () => {
  return (
    <>
      {stars.map((_, index) => (
        <span
          key={index}
          className="absolute h-[2px] w-[2px] rounded-full bg-white opacity-80 animate-pulse"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
          }}
        />
      ))}
    </>
  );
};

export default Stars;
