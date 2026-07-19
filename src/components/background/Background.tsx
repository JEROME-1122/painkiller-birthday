import Aurora from "./Aurora";
import Glow from "./Glow";
import Stars from "./Stars";

const Background = () => {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-[#050816]">
      <Aurora />
      <Glow />
      <Stars />
    </div>
  );
};

export default Background;
