import type { ReactNode } from "react";
import Background from "../components/common/Background";
import MusicPlayer from "../components/music/MusicPlayer";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050816] text-white">
      {/* Global animated background */}
      <Background />

      {/* Page content */}
      <main className="relative z-10">{children}</main>

      {/* Global music control */}
      <MusicPlayer />
    </div>
  );
};

export default MainLayout;
