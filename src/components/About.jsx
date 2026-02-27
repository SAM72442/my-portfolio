import aboutPageBG from "../assets/programmer-coding.jpg";
import AnimatedCounterCard from "./AnimatedCounterCard";
const About = () => {
  return (
    <section
      id="about"
      className="relative w-full z-0 flex flex-col items-center justify-evenly md:min-h-full py-4"
    >
      <div className="absolute w-screen  inset-0 -z-1 -mx-4">
        <img
          src={aboutPageBG.src}
          alt="Coding and About me"
          className="h-full w-full object-cover items-center"
        />
      </div>
      <header className="text-center font-bold text-white underline text-2xl md:text-4xl py-3">
        About Me
      </header>
      <p className="text-sm sm:text-base md:text-lg text-gray-300 mx-3 sm:mx-8 leading-relaxed bg-linear-to-b from-orange-300/30 to-transparent p-4 sm:p-6 rounded-xl sm: rounded-2x1 backdrop-blur-sm">
        I’m a problem solver driven by curiosity, critical thinking and
        productivity. I hold a degree in Artificial Intelligence and Computer
        Science Engineering, with a specialization in AI and Machine Learning.
        Along the way, I expanded my expertise into web development, focusing on
        designing and building scalable, high-performance applications. I’m
        currently open to opportunities as a Software Engineer or Web Designer.
        Let’s connect.
      </p>
      <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8">
        <AnimatedCounterCard
          elementValue={4}
          textMessage={"Years Experience"}
        />
        <AnimatedCounterCard
          elementValue={10}
          textMessage={"Projects Completed"}
        />
      </div>
      <a href="#projects">
        <button className="w-full h-full inline-flex items-center justify-center border-orange-500 border-2 py-2 px-4 sm:px-6 hover:shadow-[0_0_40px_rgb(255,165,0,0.7)] rounded-full text-base sm:text-lg font-semibold transition-all duration-200 transform text-white hover:scale-[1.05] active:scale-[0.95] active:bg-orange-500/40">
          Learn More &gt;&gt;
        </button>
      </a>
    </section>
  );
};

export default About;
