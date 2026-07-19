import type { ReactNode } from "react";

import Background from "../components/background/Background";
import MusicPlayer from "../components/music/MusicPlayer";
import PageTransition from "../components/transition/PageTransition";
interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <PageTransition>
        <Background />

        <main className="relative min-h-screen">{children}</main>

        <MusicPlayer />
      </PageTransition>
    </>
  );
};

export default MainLayout;
