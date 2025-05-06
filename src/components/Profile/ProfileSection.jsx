import { GithubIcon } from "../icons/GithubIcon";
import { IBM_Plex_Sans } from "next/font/google";
import { LinkedinIcon } from "../icons/LinkedinIcon";
import { MailIcon } from "../icons/MailIcon";
import my_photo from "@/assets/images/my_photo.jpeg";
import Image from "next/image";
import { CloudDownload, Download } from "lucide-react";

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
            <div className="flex md:flex-row flex-col items-center justify-between gap-y-2">
              <h1 className="font-bold text-3xl md:text-start text-center">
                Hi, I'm James Kiongo,
              </h1>
              <div className="hidden md:flex flex-row items-center gap-10 px-2">
                <a
                  href="https://drive.google.com/file/d/1v0q2g3r7x4X5z6f8e5f8e5f8e5f8e5f/view?usp=sharing"
                  target="_blank"
                  className="text-xs italic font-extralight hover:underline"
                >
                  <div className="flex flex-row items-center gap-1">
                    Resume
                    <Download className="ml-1 size-5" />
                  </div>
                </a>
              </div>
            </div>

            <p
              className={`${ibm_plex_sans.className} text-sm font-light text-center md:text-start`}
            >
              a full stack developer using Django for backend development,
              MongoDB or MySQL for databases, and React for the frontend.
            </p>
            <div className="flex flex-row items-center justify-between gap-y-1 mt-2">
              <p className="text-xs">Nairobi, Kenya</p>
              <div className="flex flex-row gap-x-4">
                <a href="https://github.com/jameskiongo">
                  <GithubIcon />
                </a>
                <a href="https://www.linkedin.com/in/jameskiongo/">
                  <LinkedinIcon />
                </a>
                <a href="mailto:njihiakiongo@gmail.com">
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
