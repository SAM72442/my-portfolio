import java from "../assets/java.svg";
import C from "../assets/C_Programming_Language.svg";
import python from "../assets/python.svg";
import reactjs from "../assets/react.svg";
import html5 from "../assets/html.svg";
import css from "../assets/css.svg";
import javascript from "../assets/javascript.svg";
import tensorflow from "../assets/tensorflow.svg";
import opencv from "../assets/OpenCV_Logo_with_text.png";
import Rating from "./Rating";

const Skills = () => {
  const skills = [
    {
      name: "Java",
      icon: java.src,
      rating: 4.8,
      color: "from-orange-500 to-amber-500",
    },
    {
      name: "C",
      icon: C.src,
      rating: 4.8,
      color: "from-orange-500 to-amber-500",
    },
    {
      name: "Python",
      icon: python.src,
      rating: 4.8,
      color: "from-orange-500 to-amber-500",
    },
    {
      name: "React.js",
      icon: reactjs.src,
      rating: 4.8,
      color: "from-orange-500 to-amber-500",
    },
    {
      name: "HTML5",
      icon: html5.src,
      rating: 4.8,
      color: "from-orange-500 to-amber-500",
    },
    {
      name: "CSS",
      icon: css.src,
      rating: 4.8,
      color: "from-orange-500 to-amber-500",
    },
    {
      name: "Javascript",
      icon: javascript.src,
      rating: 4.8,
      color: "from-orange-500 to-amber-500",
    },
    {
      name: "Tensorflow",
      icon: tensorflow.src,
      rating: 4.5,
      color: "from-orange-500 to-amber-500",
    },
    {
      name: "OpenCV",
      icon: opencv.src,
      rating: 4.5,
      color: "from-orange-500 to-amber-500",
    },
  ];
  return (
    <section
      id="skills"
      className="w-full flex items-center flex-col gap-5 justify-center"
    >
      <div className="text-2xl font-bold underline">My Skills:</div>
      <p className="text-center px-4 text-sm">
        A curated overview of my skills across multiple domains. While
        proficiency levels are indicated, I believe true mastery extends beyond
        ratings—there is always more to explore, refine, and learn.
      </p>
      <div className="w-full grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4 m-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="h-full w-full p-4 rounded-2xl outline outline-gray-300 hover:outline-orange-500 transition-all duration-200 hover:-translate-y-2 group  hover:outline-3 hover:shadow-[0_0_30px_rgb(255,165,0,0,0.15)] bg-linear-to-br from-transparent to-gray-500/50"
          >
            <div className="flex flex-col sm:flex-row items-center mb-2 sm:mb-4">
              <div className="w-16 h-16 rounded-xl p-3 mb-2 flex items-center justify-center group-hover:scale-110 transition-transform duration-200 bg-linear-to-br from-[#f3f4f6] to-[#e5e7eb] shadow-xl">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-md sm:text-xl font-bold sm:ml-4">
                {skill.name}
              </h3>
            </div>
            <Rating rating={skill.rating} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
