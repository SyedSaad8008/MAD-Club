import HeroSection from "@/components/hero-section";
import ClubOverview from "@/components/club-overview";
import EventsPreview from "@/components/events-preview";
import LeadershipPreview from "@/components/leadership-preview";

export default function Home() {
  return (
    <div data-testid="home-page">
      <HeroSection />
      <ClubOverview />
      <EventsPreview />
      <LeadershipPreview />
    </div>
  );
}
