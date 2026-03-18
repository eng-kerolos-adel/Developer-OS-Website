import { GridBackground } from "@/components/grid-background";
import Navbar from "@/components/Navbar";
import BackToTop from "@/components/BackToTop";
import ProgressBar from "@/components/ProgressBar";
import Hero from "@/components/Hero";
import Developer from "@/components/Developer";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Steps from "@/components/Steps";

export default function Home() {
  return (
    <>
      <GridBackground />
      <ProgressBar />
      <BackToTop />
      <Navbar />
      <Hero />
      <Steps />
      <Features />
      <Developer />
      <Footer />
    </>
  );
}
