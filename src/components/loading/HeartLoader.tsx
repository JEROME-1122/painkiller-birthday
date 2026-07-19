import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";

const HeartLoader = () => {
  return (
    <motion.div
      animate={{
        scale: [1, 1.25, 1],
      }}
      transition={{
        duration: 1,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="drop-shadow-[0_0_35px_rgba(255,80,120,0.8)]"
    >
      <FaHeart size={90} className="text-pink-500" />
    </motion.div>
  );
};

export default HeartLoader;
