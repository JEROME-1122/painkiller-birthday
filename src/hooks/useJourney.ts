import { useNavigate, useLocation } from "react-router-dom";
import { journey } from "../data/journey";

const useJourney = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const currentIndex = journey.indexOf(location.pathname);

  const nextPage = () => {
    if (currentIndex < journey.length - 1) {
      navigate(journey[currentIndex + 1]);
    }
  };

  const previousPage = () => {
    if (currentIndex > 0) {
      navigate(journey[currentIndex - 1]);
    }
  };

  return {
    nextPage,
    previousPage,
    currentIndex,
  };
};

export default useJourney;
