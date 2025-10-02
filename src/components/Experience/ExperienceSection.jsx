import { IBM_Plex_Sans } from "next/font/google";

const ibm_plex_sans = IBM_Plex_Sans({
	weight: ["400", "500", "600", "700"],
	style: ["normal"],
	subsets: ["latin"],
});
export default function ExperienceSection() {
	return (
		<div className="mt-10 px-4 sm:px-0">
			<div className="flex md:flex-row-reverse flex-col gap-x-6">
				Experience section
			</div>
		</div>
	);
}
