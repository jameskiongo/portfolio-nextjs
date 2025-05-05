"use client";
import * as React from "react";
import { Card } from "@/components/ui/card";
import landing from "@/assets/images/client-care/landing.png";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Expand } from "lucide-react";
import { useState } from "react";
import { ProjectDialog } from "./ProjectDialog";

export default function ProjectSection() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col justify-center w-full h-full mt-10">
      <h1 className="capitalize text-xl font-bold pb-5">Projects</h1>
      <div className="w-full">
        <Carousel className="w-full ">
          <CarouselContent className="-ml-1">
            <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card className="w-full h-full rounded-sm gap-2 py-0 px-0">
                  <div className="flex flex-col items-center justify-center">
                    <Image
                      src={landing}
                      width={300}
                      height={50}
                      alt="Project Image"
                      className="rounded-t-sm"
                    />
                  </div>
                  <div className="flex flex-col justify-center h-full p-2">
                    <div className="flex md:flex-row justify-between items-center gap-y-2">
                      <h1 className="text-sm font-bold">Client Care</h1>
                      <div>
                        {/* <GithubIcon /> */}
                        <button className="cursor-pointer">
                          <ProjectDialog />
                        </button>
                      </div>
                    </div>
                    <p className="text-xs font-light pt-2">
                      Digital platform for patient health care management.
                    </p>
                  </div>
                  <div className="px-2 pb-2 flex flex-row flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs">
                      Django
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      ReactJs
                    </Badge>
                  </div>
                </Card>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
