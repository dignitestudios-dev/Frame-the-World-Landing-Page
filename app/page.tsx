import AppDownload from "./component/AppDownload";
import ContactSection from "./component/ContactSection";
import FeaturesSection from "./component/FeaturesSection";
import Footer from "./component/Footer";
import GallerySection from "./component/GallerySection";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden bg-white">
      <Navbar />
      <Hero />
      <GallerySection />
      <FeaturesSection />
      <AppDownload />
      <ContactSection />
      <Footer />
    </main>
  );
}
