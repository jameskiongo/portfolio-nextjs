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
      <div className="flex items-center justify-between p-4 ">
        <div>
          <h1 className={`${rajdhani.className} text-2xl font-normal`}>
            James Kiongo
          </h1>
        </div>
        <div className="flex items-center space-x-4">
          <NavbarToggle />
        </div>
      </div>
    </div>
  );
}
