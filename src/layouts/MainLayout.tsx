import type { ReactNode } from "react";

import Background from "../components/background/Background";
import MusicPlayer from "../components/music/MusicPlayer";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Background />

      <main className="relative min-h-screen">{children}</main>

      <MusicPlayer />
    </>
  );
};

export default MainLayout;
