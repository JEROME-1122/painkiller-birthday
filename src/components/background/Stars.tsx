import { useMemo } from "react";
import { motion } from "framer-motion";

type Star = {
  id: number;
  top: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
};

const Stars = () => {
  const stars = useMemo<Star[]>(
    () =>
      Array.from({ length: 150 }, (_, i) => ({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() * 3 + 1,
        duration: Math.random() * 2 + 2,
        delay: Math.random() * 3,
        opacity: Math.random() * 0.5 + 0.3,
      })),
    [],
  );

  return (
    <>
      {stars.map((star) => (
        <motion.span
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: star.size,
            height: star.size,
            opacity: star.opacity,
          }}
          animate={{
            opacity: [star.opacity, 1, star.opacity],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
          }}
        />
      ))}
    </>
  );
};

export default Stars;
