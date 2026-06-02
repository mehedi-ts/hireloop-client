import Banner from "@/components/Banner";
import FeaturesSection from "@/components/FeaturesSection";
import JobSection from "@/components/JobSection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <JobSection></JobSection>
      <FeaturesSection></FeaturesSection>
    </div>
  );
}
