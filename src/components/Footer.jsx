import linkedIn from "../assets/linkedin.svg";
import github from "../assets/github.svg";
import instagram from "../assets/instagram.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full border-t-2 -mt-30 border-[#e1e4ea] bg-linear-to-b from-[#f9fafb] to-[#e5e7eb]">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:font-left">
            <h3 className="text-2xl font-bold mb-2 text-orange-500">
              Portfolio
            </h3>
            <p className="text-sm text-[#6b7280]">Software & Web Developer</p>
          </div>
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-all hover:linear-to-r hover:from-orange-500 hover:to-amber-500 hover:text-white bg-[#374151] text-white group"
            >
              <img
                src={github.src}
                alt="Github"
                className="w-8 scale-75 invert group-hover:invert-75"
              />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-all hover:linear-to-r hover:from-orange-500 hover:to-amber-500 hover:text-white bg-[#374151] text-white group"
            >
              <img
                src={linkedIn.src}
                alt="LinkedIn"
                className="w-8 scale-75 invert group-hover:invert-75"
              />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-all hover:linear-to-r hover:from-orange-500 hover:to-amber-500 hover:text-white bg-[#374151] text-white group"
            >
              <img
                src={instagram.src}
                alt="Instagram"
                className="w-8 scale-75 invert group-hover:invert-75"
              />
            </a>
          </div>
          <div className="text-center md:text-right">
            <p className="text-sm flex items-center justify-end gap-1 text-[#6b7280] ">
              @{currentYear} Sayan Das
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
