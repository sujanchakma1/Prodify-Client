import Features from "@/components/layout/Features";
import Hero from "@/components/layout/Hero";
import ProductPreview from "@/components/layout/ProductPreview";
import Stats from "@/components/layout/Stats";
import Testimonials from "@/components/layout/Testimonials";

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <ProductPreview />
      <Testimonials />
      <Stats />
    </div>
  );
}
