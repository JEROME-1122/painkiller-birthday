import { motion } from "framer-motion";

interface ProgressBarProps {
  progress: number;
}

const ProgressBar = ({ progress }: ProgressBarProps) => {
  return (
    <div className="w-[340px] h-3 rounded-full bg-white/10 overflow-hidden backdrop-blur">
      <motion.div
        className="h-full rounded-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500"
        animate={{
          width: `${progress}%`,
        }}
        transition={{
          duration: 0.25,
        }}
      />
    </div>
  );
};

export default ProgressBar;
