import Navbar from "@/components/Navbar";
import ProfileSection from "@/components/Profile";
export default function Home() {
  return (
    <div className="sm:p-10 p-5">
      <Navbar />
      <ProfileSection />
    </div>
  );
}
