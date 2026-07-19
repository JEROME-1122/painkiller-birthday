import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface PasswordCardProps {
  children: ReactNode;
}

const PasswordCard = ({ children }: PasswordCardProps) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 50,
        scale: 0.9,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      transition={{
        duration: 0.8,
      }}
      className="
        w-full
        max-w-xl
        rounded-[30px]
        border
        border-pink-500/30
        bg-white/10
        backdrop-blur-xl
        p-10
        shadow-[0_0_60px_rgba(255,0,120,.18)]
      "
    >
      {children}
    </motion.div>
  );
};

export default PasswordCard;
