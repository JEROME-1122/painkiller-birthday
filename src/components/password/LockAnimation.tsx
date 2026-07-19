import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";
import { HiMiniLockClosed } from "react-icons/hi2";

const LockAnimation = () => {
  return (
    <motion.div
      animate={{
        scale: [1, 1.1, 1],
      }}
      transition={{
        repeat: Infinity,
        duration: 1.2,
      }}
      className="relative mx-auto mb-8 w-fit"
    >
      <FaHeart className="text-pink-500" size={90} />

      <HiMiniLockClosed
        size={40}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white"
      />
    </motion.div>
  );
};

export default LockAnimation;
