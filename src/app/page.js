export const dynamic = "force-dynamic";

import Navbar2 from "../components/Navbar2";
import Home from "../components/Home";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Page () {
//  TODO: darkmode toggle (maybe: based on theme)
//  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className= "flex h-screen md:px-[4vw] 2xl:px-[10vw] md:py-15 bg-linear-170 from-gray-900 via-[#381264] to-violet-500">
      <div className="rounded-2xl bg-white flex items-center w-full m-5 p-5 flex-col lg:flex-row gap-5">
        <Navbar2 />
        <span className="hidden lg:inline bg-gray-100 w-1 h-9/10 rounded-full"></span>
        <div className="w-full lg:w-2/3 h-full p-4 flex flex-col items-center gap-30 overflow-x-hidden scrollbar-thumb-only scroll-smooth">
          <Home />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </div>
        {/*<Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />*/}
      </div>
    </div>
  );
};
