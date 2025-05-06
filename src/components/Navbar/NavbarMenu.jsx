import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export default function NavbarMenu() {
  return (
    <div className="">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger />
            <NavigationMenuContent className="bg-warning text-warning-foreground">
              <div className="w-[150px] p-5 gap-y-2 flex flex-col items-center justify-center">
                <a href="#projects" className="">
                  Projects
                </a>
                <a href="#techstack" className="">
                  Tech Stack
                </a>
                <a href="#contact" className="">
                  Contact
                </a>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
