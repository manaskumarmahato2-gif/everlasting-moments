import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

import heroImage from "@/assets/hero-wedding-1.jpg";
import serviceWedding from "@/assets/service-wedding.jpg";
import serviceFamily from "@/assets/service-family.jpg";
import serviceCinematic from "@/assets/service-cinematic.jpg";

const services = [
  {
    title: "Wedding Photography & Video",
    description: "Complete coverage of your wedding day, from getting ready to the last dance. Our team captures every emotion, every detail, and every precious moment.",
    features: ["Full day coverage", "2 photographers", "Edited photos", "Online gallery", "Photo album"],
    image: serviceWedding,
    link: "/services/wedding",
  },
  {
    title: "Pre-Wedding Photography & Video",
    description: "Romantic pre-wedding shoots at stunning locations to celebrate your engagement and create beautiful save-the-date content.",
    features: ["Location scouting", "Outfit changes", "Professional styling tips", "High-resolution images"],
    image: serviceWedding,
    link: "/services/wedding",
  },
  {
    title: "Newborn Baby Photography",
    description: "Gentle, professional newborn sessions that capture the pure innocence and beauty of your newest family member.",
    features: ["Safe posing", "Props included", "Parent & sibling shots", "Digital gallery"],
    image: serviceFamily,
    link: "/services/family",
  },
  {
    title: "Maternity Photography",
    description: "Celebrate the beauty of pregnancy with elegant maternity portraits that you'll treasure forever.",
    features: ["Studio or outdoor", "Wardrobe guidance", "Partner inclusion", "Artistic editing"],
    image: serviceFamily,
    link: "/services/family",
  },
  {
    title: "First Rice Ceremony Photography",
    description: "Document this traditional milestone with professional photography that honors cultural significance and family joy.",
    features: ["Ceremony coverage", "Family portraits", "Candid moments", "Event documentation"],
    image: serviceFamily,
    link: "/services/family",
  },
  {
    title: "Birthday Photography & Video",
    description: "From first birthdays to milestone celebrations, we capture the joy and excitement of your special day.",
    features: ["Event coverage", "Cake smash photos", "Guest photos", "Video highlights"],
    image: serviceFamily,
    link: "/services/family",
  },
  {
    title: "Cinematic Wedding Films",
    description: "Breathtaking wedding films that tell your love story with cinematic artistry, professional editing, and emotional soundtracks.",
    features: ["4K quality", "Drone footage", "Professional audio", "Same-day edit option"],
    image: serviceCinematic,
    link: "/services/cinematic",
  },
];

const Services = () => {
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
              <span className="text-primary">Services</span>
            </nav>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-secondary-foreground">
              Our Services
            </h1>
            <p className="text-secondary-foreground/80 mt-4 max-w-2xl text-lg">
              Comprehensive photography and videography services for all your special moments.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 50}>
                <div className="group bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-romantic transition-all duration-300 h-full flex flex-col">
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6 md:p-8 flex-1 flex flex-col">
                    <h3 className="font-heading text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-6 flex-1">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm">
                          <ChevronRight className="w-4 h-4 text-primary" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild variant="outline" className="w-full">
                      <Link to={service.link}>View Details</Link>
                    </Button>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-muted">
        <div className="section-container text-center">
          <AnimatedSection>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-4">
              Not Sure Which Service You Need?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Contact us for a free consultation. We'll help you choose the perfect package for your needs and budget.
            </p>
            <Button asChild size="lg">
              <Link to="/contact">Get a Custom Quote</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
