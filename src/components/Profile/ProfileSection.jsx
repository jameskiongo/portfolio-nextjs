import { GithubIcon } from "../icons/GithubIcon";
import { IBM_Plex_Sans } from "next/font/google";
import { LinkedinIcon } from "../icons/LinkedinIcon";
import { MailIcon } from "../icons/MailIcon";
import my_photo from "@/assets/images/my_photo.jpeg";
import Image from "next/image";

const ibm_plex_sans = IBM_Plex_Sans({
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
});
export default function ProfileSection() {
  return (
    <div className="mt-10">
      <div className="flex md:flex-row-reverse flex-col gap-x-6">
        <div className="md:basis-1/5 basis-2/5">
          <div className="flex flex-col items-center justify-center h-full">
            <Image
              src={my_photo}
              alt="James Kiongo Photo"
              width={200}
              height={200}
              className="rounded-full object-cover"
            />
          </div>
        </div>
        <div className="basis-4/5">
          <div className="flex flex-col gap-y-2 h-full justify-center ">
            <h1 className="font-bold text-3xl md:text-start text-center">
              Hi, I'm James Kiongo,
            </h1>
            <p
              className={`${ibm_plex_sans.className} text-sm font-light text-center md:text-start`}
            >
              a full stack engineer using Django or Flask for backend
              development, MongoDB or MySQL for databases, and React for the
              frontend.
            </p>
            <div className="flex flex-row items-center justify-between gap-y-1 mt-2">
              <p className="text-xs">Nairobi, Kenya</p>
              <div className="flex flex-row gap-x-4">
                <a href="">
                  <GithubIcon />
                </a>
                <a href="">
                  <LinkedinIcon />
                </a>
                <a href="">
                  <MailIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
