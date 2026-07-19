import { useState } from "react";

import MainLayout from "../layouts/MainLayout";
import PageTransition from "../components/transition/PageTransition";

import PasswordCard from "../components/password/PasswordCard";
import PasswordInput from "../components/password/PasswordInput";
import LockAnimation from "../components/password/LockAnimation";
import HintButton from "../components/password/HintButton";

import { siteData } from "../data/site";
import useJourney from "../hooks/useJourney";

const Password = () => {
  const [answer, setAnswer] = useState("");

  const [error, setError] = useState("");

  const { nextPage } = useJourney();

  const unlock = () => {
    const entered = answer.replace(/\D/g, "");

    if (entered === siteData.password) {
      nextPage();
      return;
    }

    setError("🥺 That's not it... Try remembering our special day ❤️");
  };

  return (
    <MainLayout>
      <PageTransition>
        <section className="flex min-h-screen items-center justify-center px-6">
          <PasswordCard>
            <LockAnimation />

            <h2 className="text-center text-3xl font-bold text-white">
              Before entering...
            </h2>

            <p className="mt-3 text-center text-pink-200">
              {siteData.question}
            </p>

            <PasswordInput
              value={answer}
              onChange={(value) => {
                setAnswer(value);
                setError("");
              }}
            />

            {error && <p className="mt-5 text-center text-red-300">{error}</p>}

            <button
              onClick={unlock}
              className="
                mt-8
                w-full
                rounded-full
                bg-gradient-to-r
                from-pink-500
                to-purple-600
                py-4
                text-lg
                font-semibold
                text-white
                transition
                hover:scale-105
              "
            >
              Unlock Journey ❤️
            </button>

            <div className="flex justify-center">
              <HintButton hint={siteData.hint} />
            </div>
          </PasswordCard>
        </section>
      </PageTransition>
    </MainLayout>
  );
};

export default Password;
