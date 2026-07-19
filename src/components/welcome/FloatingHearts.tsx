import { useMemo } from "react";
import { FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";

const FloatingHearts = () => {
  const hearts = useMemo(
    () =>
      Array.from({ length: 18 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 8,
        duration: Math.random() * 8 + 8,
        size: Math.random() * 16 + 12,
      })),
    [],
  );

  return (
    <>
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          initial={{
            y: "110vh",
            opacity: 0,
          }}
          animate={{
            y: "-20vh",
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute"
          style={{
            left: `${heart.left}%`,
          }}
        >
          <FaHeart
            style={{
              fontSize: heart.size,
            }}
            className="text-pink-400/70"
          />
        </motion.div>
      ))}
    </>
  );
};

export default FloatingHearts;
