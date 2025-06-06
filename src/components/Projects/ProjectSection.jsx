"use client";
import * as React from "react";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { projects } from "./projects";
import { ProjectDialog } from "./ProjectDialog";
import { TechnologyBadge } from "./TechnologyBadge";

export default function ProjectSection() {
  return (
    <div
      id="projects"
      className="flex flex-col justify-center w-full h-full mt-10 px-4 sm:px-0"
    >
      <h1 className="capitalize text-xl font-bold pb-5">Projects</h1>
      <div className="w-full">
        <Carousel className="w-full ">
          <CarouselContent className="-ml-1">
            {projects.map((project) => (
              <CarouselItem
                className="pl-1 md:basis-1/2 lg:basis-1/3"
                key={project.id}
              >
                <div className="p-1">
                  <Card className="w-full h-full rounded-sm gap-2 py-0 px-0">
                    <div className="flex flex-col items-center justify-center">
                      <Image
                        src={project.banner}
                        width={300}
                        height={150}
                        alt="Project Image"
                        className="rounded-t-sm md:h-[150px] h-[200px] w-full object-cover object-top-left bacgkground-cover background-center"
                      />
                    </div>
                    <div className="flex flex-col justify-center h-full p-2">
                      <div className="flex md:flex-row justify-between items-center gap-y-2">
                        <h1 className="text-sm font-bold capitalize">
                          {project.title}
                        </h1>
                        <div>
                          {/* <GithubIcon /> */}
                          <button className="cursor-pointer">
                            <ProjectDialog project={project} key={project.id} />
                          </button>
                        </div>
                      </div>
                      <p className="text-xs font-light pt-2">
                        {project.short_description}
                      </p>
                    </div>
                    <div className="px-2 pb-2 flex flex-row flex-wrap gap-2">
                      {project.short_tags.map((tag) => (
                        <TechnologyBadge tag={tag} key={tag.id} />
                      ))}
                    </div>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </div>
  );
}
