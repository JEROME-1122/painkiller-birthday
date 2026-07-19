import { BrowserRouter, Routes, Route } from "react-router-dom";

import Loading from "../pages/Loading";
import Welcome from "../pages/Welcome";
import Password from "../pages/Password";
import Story from "../pages/Story";
import Gallery from "../pages/Gallery";
import Video from "../pages/Video";
import Letters from "../pages/Letters";
import Roses from "../pages/Roses";
import Gift from "../pages/Gift";
import Wheel from "../pages/Wheel";
import Balloons from "../pages/Balloons";
import Cake from "../pages/Cake";
import Fireworks from "../pages/Fireworks";
import Finale from "../pages/Finale";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Loading />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/password" element={<Password />} />
        <Route path="/story" element={<Story />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/video" element={<Video />} />
        <Route path="/letters" element={<Letters />} />
        <Route path="/roses" element={<Roses />} />
        <Route path="/gift" element={<Gift />} />
        <Route path="/wheel" element={<Wheel />} />
        <Route path="/balloons" element={<Balloons />} />
        <Route path="/cake" element={<Cake />} />
        <Route path="/fireworks" element={<Fireworks />} />
        <Route path="/finale" element={<Finale />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
