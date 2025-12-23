import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/button";

import heroImage1 from "@/assets/hero-wedding-1.jpg";
import heroImage2 from "@/assets/hero-wedding-2.jpg";
import heroImage3 from "@/assets/hero-wedding-3.jpg";
import serviceWedding from "@/assets/service-wedding.jpg";
import serviceFamily from "@/assets/service-family.jpg";
import serviceCinematic from "@/assets/service-cinematic.jpg";

const categories = ["All", "Weddings", "Pre-Wedding", "Babies", "Maternity", "Birthdays", "Cinematic"];

const portfolioItems = [
  { image: heroImage1, category: "Weddings", title: "Sarah & Michael" },
  { image: heroImage2, category: "Weddings", title: "Beach Wedding" },
  { image: heroImage3, category: "Weddings", title: "Ring Details" },
  { image: serviceWedding, category: "Pre-Wedding", title: "Lavender Fields" },
  { image: serviceFamily, category: "Babies", title: "Newborn Session" },
  { image: serviceCinematic, category: "Cinematic", title: "Wedding Film" },
  { image: heroImage1, category: "Maternity", title: "Garden Maternity" },
  { image: heroImage2, category: "Birthdays", title: "First Birthday" },
  { image: heroImage3, category: "Weddings", title: "Ceremony Moments" },
  { image: serviceWedding, category: "Pre-Wedding", title: "Sunset Session" },
  { image: serviceFamily, category: "Babies", title: "Twin Babies" },
  { image: serviceCinematic, category: "Cinematic", title: "Love Story" },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(9);

  const filteredItems =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  const visibleItems = filteredItems.slice(0, visibleCount);

  return (
    <Layout>
      {/* Page Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-secondary overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={heroImage1} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative section-container">
          <AnimatedSection>
            <nav className="text-sm text-secondary-foreground/60 mb-4">
              <Link to="/" className="hover:text-primary">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-primary">Portfolio</span>
            </nav>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-secondary-foreground">
              Our Portfolio
            </h1>
            <p className="text-secondary-foreground/80 mt-4 max-w-2xl text-lg">
              Browse through our collection of beautiful moments captured.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section-padding">
        <div className="section-container">
          {/* Filter Buttons */}
          <AnimatedSection>
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setActiveCategory(category);
                    setVisibleCount(9);
                  }}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-primary text-primary-foreground shadow-glow"
                      : "bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* Image Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {visibleItems.map((item, index) => (
              <AnimatedSection key={`${item.title}-${index}`} delay={index * 30}>
                <div className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <span className="text-primary text-xs font-medium uppercase tracking-wider">
                        {item.category}
                      </span>
                      <h3 className="text-background font-heading text-lg font-semibold">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Load More */}
          {visibleCount < filteredItems.length && (
            <AnimatedSection className="text-center mt-12">
              <Button
                onClick={() => setVisibleCount((prev) => prev + 6)}
                variant="outline"
                size="lg"
              >
                Load More
              </Button>
            </AnimatedSection>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-muted">
        <div className="section-container text-center">
          <AnimatedSection>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-4">
              Like What You See?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Let us capture your special moments with the same care and artistry.
            </p>
            <Button asChild size="lg">
              <Link to="/contact">Book a Session</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
