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
						<NavigationMenuContent>
							<div className="w-37.5 p-5 gap-y-2 flex flex-col items-center justify-center">
								<a href="#experience" className="">
									Experience
								</a>
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
