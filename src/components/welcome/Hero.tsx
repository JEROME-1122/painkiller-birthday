import HeroButton from "./HeroButton";
import HeroText from "./HeroText";
import FloatingHearts from "./FloatingHearts";

const Hero = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      <FloatingHearts />

      <div className="relative z-10">
        <HeroText name="Indhu" />

        <div className="flex justify-center">
          <HeroButton />
        </div>
      </div>
    </section>
  );
};

export default Hero;
