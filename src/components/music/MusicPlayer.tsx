import { useRef, useState } from "react";
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";

const MusicPlayer = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  const toggleMusic = async () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      try {
        await audioRef.current.play();
        setPlaying(true);
      } catch (err) {
        console.error("Audio play failed:", err);
      }
    }
  };

  return (
    <>
      <audio ref={audioRef} loop preload="auto" src="/birthday-bg.mp3" />

      <button
        onClick={toggleMusic}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white shadow-lg backdrop-blur-md transition hover:scale-110 hover:bg-white/20"
      >
        {playing ? <FaVolumeUp size={20} /> : <FaVolumeMute size={20} />}
      </button>
    </>
  );
};

export default MusicPlayer;
