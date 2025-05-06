import { Twitter } from "lucide-react";
import { LinkedinIcon } from "../icons/LinkedinIcon";
import { MailIcon } from "../icons/MailIcon";
import { GithubIcon } from "../icons/GithubIcon";

export default function ContactSection() {
  return (
    <div className="mt-10 px-4 sm:px-0">
      <h1 className="capitalize text-xl font-bold pb-5">Contact</h1>
      <div className="flex md:flex-row flex-col justify-between md:items-center items-start gap-4">
        <div className="hover:cursor-pointer hover:underline">
          <a
            href="mailto:njihiakiongo@gmail.com"
            target="_blank"
            className="flex flex-row items-center gap-2"
          >
            <MailIcon />
            <h1 className="text-lg">Email Address </h1>
          </a>
        </div>
        <div className="hover:cursor-pointer hover:underline">
          <a
            href="https://www.linkedin.com/in/jameskiongo/"
            target="_blank"
            className="flex flex-row items-center gap-2"
          >
            <LinkedinIcon />
            <h1 className="text-lg">LinkedIn</h1>
          </a>
        </div>
        <div className="hover:cursor-pointer hover:underline">
          <a
            href="https://x.com/JamesNj33424546"
            target="_blank"
            className="flex flex-row items-center gap-2"
          >
            <Twitter className="size-5" />
            <h1 className="text-lg">Twitter</h1>
          </a>
        </div>
        <div className="hover:cursor-pointer hover:underline">
          <a
            href="https://github.com/jameskiongo"
            target="_blank"
            className="flex flex-row items-center gap-2"
          >
            <GithubIcon />
            <h1 className="text-lg">Github</h1>
          </a>
        </div>
      </div>
    </div>
  );
}
