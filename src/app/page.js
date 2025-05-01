import Navbar from "@/components/Navbar";
export default function Home() {
  return (
    <div className="">
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
        <p className="mt-4 text-lg">This is a simple portfolio page.</p>
      </div>
    </div>
  );
}
