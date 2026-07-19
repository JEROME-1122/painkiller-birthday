import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import HeartLoader from "../components/loading/HeartLoader";
import ProgressBar from "../components/loading/ProgressBar";
import LoadingText from "../components/loading/LoadingText";

const messages = [
  "Preparing Something Special...",
  "Collecting Beautiful Memories...",
  "Wrapping Your Surprise...",
  "Adding a Little Magic...",
];

const Loading = () => {
  const navigate = useNavigate();

  const [progress, setProgress] = useState(0);

  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressTimer);

          setTimeout(() => {
            navigate("/welcome");
          }, 600);

          return 100;
        }

        return prev + 1;
      });
    }, 45);

    return () => clearInterval(progressTimer);
  }, [navigate]);

  useEffect(() => {
    const messageTimer = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % messages.length);
    }, 1500);

    return () => clearInterval(messageTimer);
  }, []);

  return (
    <MainLayout>
      <section className="min-h-screen flex flex-col items-center justify-center gap-8">
        <HeartLoader />

        <LoadingText message={messages[messageIndex]} />

        <ProgressBar progress={progress} />

        <span className="text-pink-300 text-xl font-semibold">{progress}%</span>
      </section>
    </MainLayout>
  );
};

export default Loading;
