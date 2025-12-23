import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

import heroImage from "@/assets/hero-wedding-1.jpg";
import heroImage2 from "@/assets/hero-wedding-2.jpg";
import heroImage3 from "@/assets/hero-wedding-3.jpg";
import serviceWedding from "@/assets/service-wedding.jpg";

const packages = [
  {
    name: "Essential",
    price: "1,999",
    description: "Perfect for intimate ceremonies",
    features: [
      "6 hours coverage",
      "1 photographer",
      "200+ edited photos",
      "Online gallery",
      "2-week delivery",
    ],
    popular: false,
  },
  {
    name: "Premium",
    price: "3,499",
    description: "Our most popular choice",
    features: [
      "Full day coverage",
      "2 photographers",
      "500+ edited photos",
      "Online gallery",
      "Photo album (30 pages)",
      "Engagement session",
      "1-week delivery",
    ],
    popular: true,
  },
  {
    name: "Luxury",
    price: "5,999",
    description: "The complete experience",
    features: [
      "Full day + next day coverage",
      "2 photographers + 1 videographer",
      "800+ edited photos",
      "Cinematic highlight video",
      "Premium album (50 pages)",
      "Engagement session",
      "Same-day edit video",
      "Priority delivery",
    ],
    popular: false,
  },
];

const WeddingServices = () => {
  return (
    <Layout>
      {/* Page Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-secondary overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={heroImage} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative section-container">
          <AnimatedSection>
            <nav className="text-sm text-secondary-foreground/60 mb-4">
              <Link to="/" className="hover:text-primary">Home</Link>
              <span className="mx-2">/</span>
              <Link to="/services" className="hover:text-primary">Services</Link>
              <span className="mx-2">/</span>
              <span className="text-primary">Wedding Services</span>
            </nav>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-secondary-foreground">
              Wedding Services
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Description */}
      <section className="section-padding">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <span className="text-primary text-sm font-medium uppercase tracking-widest mb-3 block">
                Wedding Photography & Video
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-6">
                Your Love Story, Beautifully Captured
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Your wedding day is one of the most important moments of your life. Our team is dedicated to capturing every emotion, every detail, and every precious moment that makes your day uniquely yours.
                </p>
                <p>
                  From the nervous excitement of getting ready to the joyful tears during vows, from the first dance to the last farewell – we document it all with artistry and heart.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fade-in-right">
              <div className="grid grid-cols-2 gap-4">
                <img src={heroImage} alt="Wedding" className="rounded-lg shadow-elegant" />
                <img src={heroImage2} alt="Wedding" className="rounded-lg shadow-elegant mt-8" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-padding bg-muted">
        <div className="section-container">
          <AnimatedSection>
            <SectionHeading
              label="Included"
              title="What's Included"
              description="Every wedding package comes with our signature attention to detail and professional service."
            />
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Full day wedding coverage",
              "Professional photographers/videographers",
              "High-resolution edited images",
              "Online password-protected gallery",
              "Digital delivery of all files",
              "Print-ready files",
              "Consultation meetings",
              "Timeline planning assistance",
              "Second shooter option",
            ].map((item, index) => (
              <AnimatedSection key={item} delay={index * 50}>
                <div className="flex items-center gap-3 bg-card p-4 rounded-lg">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">{item}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding">
        <div className="section-container">
          <AnimatedSection>
            <SectionHeading
              label="Gallery"
              title="Sample Work"
              description="A glimpse of the beautiful moments we've captured."
            />
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[heroImage, heroImage2, heroImage3, serviceWedding, heroImage2, heroImage, serviceWedding, heroImage3].map((img, index) => (
              <AnimatedSection key={index} delay={index * 50}>
                <div className="aspect-square rounded-lg overflow-hidden group cursor-pointer">
                  <img
                    src={img}
                    alt={`Wedding gallery ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="section-padding bg-muted">
        <div className="section-container">
          <AnimatedSection>
            <SectionHeading
              label="Pricing"
              title="Wedding Packages"
              description="Choose the perfect package for your special day."
            />
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <AnimatedSection key={pkg.name} delay={index * 100}>
                <div
                  className={`bg-card rounded-xl p-8 h-full flex flex-col ${
                    pkg.popular
                      ? "ring-2 ring-primary shadow-glow relative"
                      : "shadow-soft"
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  )}
                  <h3 className="font-heading text-2xl font-semibold mb-2">{pkg.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{pkg.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-heading font-bold text-foreground">${pkg.price}</span>
                  </div>
                  <ul className="space-y-3 mb-8 flex-1">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant={pkg.popular ? "default" : "outline"} className="w-full">
                    <Link to="/contact">Book This Package</Link>
                  </Button>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-secondary">
        <div className="section-container text-center">
          <AnimatedSection>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-secondary-foreground mb-4">
              Ready to Book Your Wedding Photography?
            </h2>
            <p className="text-secondary-foreground/80 mb-8 max-w-xl mx-auto">
              Let's discuss your vision and create something beautiful together.
            </p>
            <Button asChild size="lg">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default WeddingServices;
