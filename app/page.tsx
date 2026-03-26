import BackToTop from "@/components/BackToTop";
import ProgressBar from "@/components/ProgressBar";
import Hero from "@/components/Hero";
import Developer from "@/components/Developer";
import Features from "@/components/Features";
import Steps from "@/components/Steps";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  return (
    <main className="main">
      <CustomCursor />
      <ProgressBar />
      <BackToTop />
      <Hero />
      <Steps />
      <Features />
      <Developer />
      <Footer />
    </main>
  );
}
