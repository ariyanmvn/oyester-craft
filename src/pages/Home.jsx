import Hero from '../home/Hero';
import NewArrivals from '../home/NewArrivals';
import ProductsSection from '../home/ProductsSection';
import Features from '../home/Features';
import SEO from '../components/seo/SEO';

export default function Home() {
  return (
    <>
      <SEO 
        title="Home" 
        description="Welcome to Oyster Craft. Discover our handcrafted jute and leather bags, tissue boxes, and unique accessories."
        keywords="oyster craft, handcrafted bags, jute bags, leather bags, bangladesh handicrafts"
      />
      <Hero />
      <NewArrivals />
      <ProductsSection />
      <Features />
    </>
  );
}
