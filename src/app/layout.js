import { Atomic_Age, Open_Sans } from "next/font/google";
import './globals.css'

const atomicAge = Atomic_Age({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-atomic",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

export const metadata = {
  title: "my-portfolio-website",
  description:
    "Hi! I am Sayan Das. Software Engineer, Web Developer. This portfolio is highlight of my latest works and to share a contact point to recruiters to hire me.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${atomicAge.variable} ${openSans.variable}`}>
      <body className="font-opensans font-semibold overflow-hidden">
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
