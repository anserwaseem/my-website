import LoadingScreen from "@/components/loading-screen";
import HomeSection from "@/components/sections/home";
import AboutSection from "@/components/sections/about";
import ProjectsSection from "@/components/sections/projects";
import ExperienceSection from "@/components/sections/experience";
import Technologies from "@/components/sections/technologies";
import ContactSection from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <HomeSection />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <Technologies />
      <ContactSection />
    </>
  );
}
