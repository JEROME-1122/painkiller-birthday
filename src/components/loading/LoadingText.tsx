import { motion } from "framer-motion";

interface LoadingTextProps {
  message: string;
}

const LoadingText = ({ message }: LoadingTextProps) => {
  return (
    <motion.h2
      key={message}
      initial={{
        opacity: 0,
        y: 10,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
      }}
      className="text-white text-2xl font-semibold"
    >
      {message}
    </motion.h2>
  );
};

export default LoadingText;
