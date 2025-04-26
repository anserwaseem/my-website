import LoadingScreen from "@/components/loading-screen";
import HomeSection from "@/components/sections/home";
import AboutSection from "@/components/sections/about";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <HomeSection />
      <AboutSection />
    </>
  );
}
