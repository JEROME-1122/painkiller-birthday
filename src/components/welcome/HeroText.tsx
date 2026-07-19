import { motion } from "framer-motion";

interface HeroTextProps {
  name: string;
}

const HeroText = ({ name }: HeroTextProps) => {
  return (
    <div className="space-y-6 text-center">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="font-['Great_Vibes'] text-6xl md:text-8xl text-white"
      >
        Happy Birthday
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          delay: 0.5,
          duration: 0.8,
        }}
        className="text-4xl md:text-6xl font-bold
        bg-gradient-to-r from-pink-400 via-fuchsia-400 to-purple-400
        bg-clip-text text-transparent"
      >
        {name} ❤️
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1,
          duration: 1,
        }}
        className="text-lg text-gray-300 max-w-xl mx-auto leading-8"
      >
        I made something beautiful just for you. Every click will reveal another
        surprise.
      </motion.p>
    </div>
  );
};

export default HeroText;
