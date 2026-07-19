import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const HeroButton = () => {
  const navigate = useNavigate();

  return (
    <motion.button
      whileHover={{
        scale: 1.08,
      }}
      whileTap={{
        scale: 0.96,
      }}
      onClick={() => navigate("/password")}
      className="
      mt-10
      inline-flex
      items-center
      gap-3
      rounded-full
      px-8
      py-4
      text-lg
      font-semibold
      text-white
      bg-gradient-to-r
      from-pink-500
      to-purple-600
      shadow-[0_0_40px_rgba(255,70,140,.45)]"
    >
      Begin Journey
      <FaArrowRight />
    </motion.button>
  );
};

export default HeroButton;
