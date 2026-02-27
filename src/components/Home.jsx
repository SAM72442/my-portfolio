import myFace from "../assets/me-edited-cropped-removebg.png";
import linkedIn from "../assets/linkedin.svg";
import github from "../assets/github.svg";
import instagram from "../assets/instagram.svg";
import youtube from "../assets/youtube.svg";
import artPage from "../assets/art-site.svg";
import { motion } from "framer-motion";
//import CV from "./public/resume_Sayan_Das.pdf";
import { Cog, DownloadIcon, Mail } from "lucide-react";

const Home = () => {
  const socialIcons = [
    { icon: linkedIn.src, alt: "LinkedIn" },
    { icon: github.src, alt: "GitHub" },
    { icon: instagram.src, alt: "Instagram" },
    { icon: youtube.src, alt: "Youtube" },
    { icon: artPage.src, alt: "My Artist Page" },
  ];

  return (
    <section
      id="home"
      className="flex flex-col gap-4 justify-evenly md:min-h-full"
    >
      <div className="flex flex-col sm:flex-row justify-evenly">
        <div className="flex flex-col justify-center text-gray-700 text-3xl sm:text-[min(5vw,80px)]">
          <h1>Hi!</h1>
          <div>
            I'm{" "}
            <span className="font-atomicage text-red-500 text-4xl sm:text-[min(6vw,90px)]">
              Sam
            </span>
          </div>
          <div className="text-lg sm:text-[min(2vw,40px)] text-gray-400 -mt-2 lg:-mt-[7%]">
            Sayan Das
          </div>
        </div>
        <div>
          <img
            src={myFace.src}
            className="w-full max-w-87.5 mask-b-from-75% mask-b-to-92%"
          />
        </div>
      </div>
      <span className="font-atomicage text-2xl md:text-3xl text-center -mt-4">
        Software Engineer | Web Developer
      </span>
      <p className="text-sm sm:text-lg leading-5 font-normal text-gray-500">
        {"\u2003".repeat(4)} I am a recent graduate with hands-on experience in
        AI/ML development, front-end development, and scalable applications. My
        drive? To build intelligent, impactful systems with precision and
        creativity.
      </p>
      <motion.div className="w-full md:w-3/4 flex flex-row justify-center flex-wrap gap-2 md:gap-4">
        <a href="/resume_Sayan_Das.pdf">
          <button className="inline-flex flex-col items-center justify-center text-white bg-linear-to-r from-gray-900 to-purple-900 py-1 px-2 h-full rounded-md text-xs sm:text-sm font-semibold transition-all duration-200 transform">
            <DownloadIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-0.5" />
            CV
          </button>
        </a>
        <a href="#projects" className="flex-1">
          <button className="w-full h-full inline-flex items-center justify-center text-white bg-linear-to-r from-orange-500 to-amber-500 py-2 px-6 sm:px-8 hover:shadow-[0_0_40px_rgb(255,165,0,0.7)] rounded-full text-base sm:text-lg font-semibold transition-all duration-200 transform">
            <Cog className="w-4 h-4 sm:w-5 sm:h-5 mr-0.5" />
            Projects
          </button>
        </a>
        <a href="#contact" className="flex-1">
          <button className="w-full h-full inline-flex items-center justify-center border-amber-500 border-2 py-2 px-6 sm:px-8 hover:shadow-[0_0_40px_rgb(255,165,0,0.7)] rounded-full text-base sm:text-lg font-semibold transition-all duration-200 transform">
            <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-0.5" />
            Contact Me
          </button>
        </a>
      </motion.div>
      <div className="flex flex-row justify-evenly flex-wrap gap-2 my-4">
        {socialIcons.map((social, index) => (
          <motion.a
            key={index}
            href="#"
            target="_blank"
            initial={{ x: 200, opacity: 0, scale: 0.3 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{
              ease: "easeOut",
              duration: 0.3,
              delay: (1000 + index * 75) / 1000,
            }}
            className="transform hover:scale-110 transition-transform duration-200"
          >
            <img
              src={social.icon}
              alt={social.alt}
              className="w-8 h-8 sm:w-11 sm:h-11 object-contain filter brightness-75"
            />
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Home;
