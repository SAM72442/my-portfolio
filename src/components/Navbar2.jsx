import { motion } from "framer-motion";
import { useState } from "react";
import { X, Menu } from "lucide-react";

const Navbar2 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState("false");
  const navItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];
  return (
    <>
      <div className="w-full lg:w-1/3 p-4 mix-blend-darken hidden lg:inline">
        <div className="mb-10">
          <img
            src={"/me-half-bg-removed.png"}
            className="m-auto w-3/5 rounded-full"
          />
        </div>
        <div>
          {navItems.map((item) => (
            <div
              key={item.name}
              className="w-full flex justify-end font-atomicage text-blue-900"
            >
              <a href={item.link} className="w-4/5 hover:w-9/10 duration-200">
                <div
                  className={`text-center p-2 outline-2 outline-gray-300 my-2 rounded-sm hover:outline-none hover:rounded-s-full hover:rounded-e-none w-full hover:bg-linear-to-r hover:from-sky-200 hover:from-60% hover:to-blue-400 hover:to-100%`}
                >
                  {item.name}
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
      {/*Mobile Nav*/}
      <div className="flex lg:hidden fixed top-7 right-5 items-center space-x-4 px-2 z-999">
        <motion.button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 rounded-lg bg-gray-700"
        >
          {!isMenuOpen ? (
            <X className="w-5 h-5 text-white" />
          ) : (
            <Menu className="w-5 h-5 text-white" />
          )}
        </motion.button>
        {!isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            duration={{ duration: 0.3 }}
            className="absolute top-full right-0 mt-2 lg:hidden bg-gray-700 rounded-xl shadow-lg border border-gray-500 text-white"
          >
            <div className="px-4 py-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  onClick={() => setIsMenuOpen(false)}
                  className="block"
                >
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="py-3 px-4 rounded-lg text-center hover:bg-white/15"
                  >
                    <span className="text-medium">{item.name}</span>
                  </motion.div>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </>
  );
};

export default Navbar2;
