import ContactSection from "@/components/Contact";
import ExperienceSection from "@/components/Experience";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProfileSection from "@/components/Profile";
import ProjectSection from "@/components/Projects";
import TechSection from "@/components/technologies";
export default function Home() {
	return (
		<div className="max-w-2xl mx-auto py-5 md:px-0 px-2">
			<Navbar />
			<ProfileSection />
			<ExperienceSection />
			<ProjectSection />
			<TechSection />
			<ContactSection />
			<Footer />
		</div>
	);
}
