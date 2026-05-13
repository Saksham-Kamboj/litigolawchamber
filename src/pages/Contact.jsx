import ContactSection from "../components/HomePage/ContactSection";
import PageHeroSection from "../components/PageHeroSection";
import ContactHeroImage from "../assets/contact.avif";

export default function Contact() {
  return (
    <div>
      <PageHeroSection
        image={ContactHeroImage}
        title="Get in Touch"
        subtitle="Contact"
      />
      <ContactSection />
    </div>
  );
}
