import MainLayout from "../layouts/MainLayout";
import Hero from "../components/welcome/Hero";
import PageTransition from "../components/transition/PageTransition";

const Welcome = () => {
  return (
    <MainLayout>
      <PageTransition>
        <Hero />
      </PageTransition>
    </MainLayout>
  );
};

export default Welcome;
