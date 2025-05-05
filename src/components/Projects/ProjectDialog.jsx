import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Expand } from "lucide-react";
import { GithubIcon } from "../icons/GithubIcon";
import { TechnologyBadge } from "./TechnologyBadge";

export function ProjectDialog({ project }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Expand className="" size={16} />
      </DialogTrigger>
      <DialogContent className="w-screen max-w-none rounded-none sm:rounded-lg sm:w-[90vw] sm:max-w-[425px] md:max-w-[700px] bg-warning text-warning-foreground">
        <div className="p-4 sm:p-6">
          <div className="p-2 flex flex-col items-center justify-center">
            <Carousel className="w-full">
              <CarouselContent>
                {project.gallery.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className=" w-full flex items-center justify-center">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={800}
                        height={400}
                        className="rounded-sm h-[400px] object-cover object-top-left bacgkground-cover background-center"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="border-none" />
              <CarouselNext className="border-none" />
            </Carousel>
          </div>
          <DialogHeader className="text-left pt-4">
            <DialogTitle className="text-xl sm:text-2xl">
              <div className="flex flex-row items-center justify-between">
                <p className="text-3xl font-extrabold"> {project.title}</p>
                <div>
                  <a href={project.github_link} target="_blank">
                    <GithubIcon />
                  </a>
                </div>
              </div>
            </DialogTitle>
            <DialogDescription className="text-sm sm:text-base">
              {project.long_description}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="flex flex-col gap-2">
              <h1 className="text-lg font-bold">Technologies Used</h1>
              <div className="flex flex-row flex-wrap gap-2">
                {project.all_tags.map((tag) => (
                  <TechnologyBadge key={tag.id} tag={tag}>
                    {tag.name}
                  </TechnologyBadge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
