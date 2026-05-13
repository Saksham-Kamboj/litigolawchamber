import PageHeroSection from "../components/PageHeroSection";
import TeamSection from "../components/TeamSection";
import OurTeamHeroImage from "../assets/our-team.avif";

export default function OurTeam() {
  return (
    <div>
      <PageHeroSection
        image={OurTeamHeroImage}
        title="Our Team"
        subtitle="Meet the experts"
      />
      <TeamSection />
    </div>
  );
}
