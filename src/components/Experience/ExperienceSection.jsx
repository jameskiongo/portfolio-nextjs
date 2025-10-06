import { JsIcon } from "../icons/JsIcon";
import { PhpIcon } from "../icons/PhpIcon";
import { WordpressIcon } from "../icons/WordpressIcon";

export default function ExperienceSection() {
	return (
		<div id="experience" className="mt-10 px-4 sm:px-0">
			<div>
				<h1 className="capitalize text-xl font-bold pb-5">experience</h1>
			</div>
			<div className="">
				<div className="flex flex-row items-center justify-between">
					<h1 className="capitalize text-2xl font-bold">wordpress developer</h1>
					<p className="capitalize font-extralight italic text-sm justify-center">
						Sep 2022 - July 2025
					</p>
				</div>
				<div className="flex flex-row items-center justify-between">
					<h1 className="capitalize font-light text-lg">the sylvia system</h1>
					<p className="capitalize italic text-sm font-extralight justify-center">
						remote
					</p>
				</div>
			</div>
			<div>
				<p className="text-xs font-normal py-1">
					WordPress Developer at a real estate marketing sector, responsible for
					designing, developing, and customizing websites for a diverse range of
					clients
				</p>
				<div className="flex flex-row gap-x-3">
					<WordpressIcon />
					<PhpIcon />
					<JsIcon />
				</div>
			</div>
		</div>
	);
}
