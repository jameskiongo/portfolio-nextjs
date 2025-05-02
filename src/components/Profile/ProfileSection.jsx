import { GithubIcon } from "../icons/GithubIcon";
import { IBM_Plex_Sans } from "next/font/google";

const ibm_plex_sans = IBM_Plex_Sans({
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
});
export default function ProfileSection() {
  return (
    <div className="mt-10">
      <div className="flex flex-row gap-x-6">
        <div className="basis-1/5">
          <div className="flex flex-col items-center justify-center h-full">
            <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" />
          </div>
        </div>
        <div className="basis-4/5">
          <div className="flex flex-col gap-y-2 h-full justify-center ">
            <h1 className="font-bold text-3xl">Hi, I'm James Kiongo,</h1>
            <p className={`${ibm_plex_sans.className} text-sm font-light`}>
              a full stack engineer using Django or Flask for backend
              development, MongoDB or MySQL for databases, and React for the
              frontend.
            </p>
            <div className="flex flex-row justify-between gap-y-1 mt-2">
              <p className="text-xs">Nairobi, Kenya</p>
              <div>
                <GithubIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
