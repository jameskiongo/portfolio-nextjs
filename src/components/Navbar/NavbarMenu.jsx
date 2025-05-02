import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

// BUG: transparency of navigation menu content

export default function NavbarMenu() {
  return (
    <div className="">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger />
            <NavigationMenuContent>
              <div className="w-[150px] p-5 gap-y-2 flex flex-col items-center justify-center">
                <a href="#" className="">
                  Technologies
                </a>
                <a href="#" className="">
                  Projects
                </a>
                <a href="#" className="">
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
