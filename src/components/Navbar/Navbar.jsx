import NavbarMenu from "./NavbarMenu";
import { NavbarToggle } from "./NavbarToggle";
import { Rajdhani } from "next/font/google";

const rajdhani = Rajdhani({
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

export default function Navbar() {
  return (
    <div>
      <div className="flex items-center justify-between py-4">
        <div>
          <h1 className={`${rajdhani.className} text-2xl font-normal`}>
            James Kiongo
          </h1>
        </div>
        <div className="flex flex-row items-center justify-center">
          <div className="flex md:hidden flex-row items-center gap-10 px-2">
            <a
              href="/documents/james-cv-main.pdf"
              target="_blank"
              className="text-[20px] font-normal hover:underline"
            >
              CV
            </a>
          </div>
          <NavbarToggle />
          <NavbarMenu />
        </div>
      </div>
    </div>
  );
}
