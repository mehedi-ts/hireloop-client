import Banner from "@/components/Banner";
import CTASection from "@/components/CTASection";
import FeaturesSection from "@/components/FeaturesSection";
import JobSection from "@/components/JobSection";
import PricingSection from "@/components/PricingSection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <JobSection></JobSection>
      <FeaturesSection></FeaturesSection>
      <PricingSection></PricingSection>
      <CTASection></CTASection>
    </div>
  );
}
