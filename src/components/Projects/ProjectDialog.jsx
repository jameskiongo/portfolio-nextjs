import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Expand } from "lucide-react";

export function ProjectDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Expand className="" size={16} />
      </DialogTrigger>
      <DialogContent className="w-screen max-w-none rounded-none sm:rounded-lg sm:w-[90vw] sm:max-w-[425px] md:max-w-[500px] bg-warning text-warning-foreground">
        <div className="p-4 sm:p-6">
          <DialogHeader className="text-left">
            <DialogTitle className="text-xl sm:text-2xl">
              Register to tapaScript
            </DialogTitle>
            <DialogDescription className="text-sm sm:text-base">
              Register to tapaScript to get all the content FREE forever!
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm sm:text-base">
                Name
              </Label>
              <Input
                id="name"
                className="w-full text-sm sm:text-base p-3"
                placeholder="Enter your full name"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm sm:text-base">
                Email
              </Label>
              <Input
                type="email"
                id="email"
                className="w-full text-sm sm:text-base p-3"
                placeholder="Enter your email address"
              />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
