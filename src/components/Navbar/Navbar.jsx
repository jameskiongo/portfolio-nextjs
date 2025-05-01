import { NavbarToggle } from "./NavbarToggle";
import { Switch } from "@/components/ui/switch";
import { Moon, Sun } from "lucide-react";
import { Label } from "@/components/ui/label";

export default function Navbar() {
  return (
    <div>
      <div className="flex items-center justify-between p-4 ">
        <div>Logo</div>
        <div className="flex items-center space-x-4">
          <NavbarToggle />
        </div>
      </div>
    </div>
  );
}
