import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Baby, Heart, Cake, PartyPopper } from "lucide-react";

import serviceFamily from "@/assets/service-family.jpg";
import heroImage from "@/assets/hero-wedding-1.jpg";

const familyServices = [
  {
    icon: Baby,
    title: "Newborn Photography",
    description: "Capture the pure innocence of your newborn in their first days. Our gentle, safe approach ensures comfortable sessions for your little one.",
    duration: "2-3 hours",
    includes: ["Multiple setups", "Parent & sibling shots", "20+ edited images", "Digital gallery"],
    price: "From $399",
  },
  {
    icon: Heart,
    title: "Maternity Photography",
    description: "Celebrate the beauty of pregnancy with elegant portraits that showcase this incredible journey. Available in studio or outdoor settings.",
    duration: "1-2 hours",
    includes: ["Wardrobe guidance", "Partner inclusion", "15+ edited images", "Print options"],
    price: "From $299",
  },
  {
    icon: Cake,
    title: "First Rice Ceremony",
    description: "Document this traditional milestone with professional coverage that honors cultural significance and captures family joy.",
    duration: "3-4 hours",
    includes: ["Ceremony coverage", "Family portraits", "50+ edited images", "Online gallery"],
    price: "From $599",
  },
  {
    icon: PartyPopper,
    title: "Birthday Photography",
    description: "From first birthdays to milestone celebrations, we capture the joy, laughter, and special moments of your celebration.",
    duration: "2-4 hours",
    includes: ["Event coverage", "Cake smash option", "40+ edited images", "Video highlights available"],
    price: "From $499",
  },
];

const FamilyServices = () => {
  return (
    <Layout>
      {/* Page Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-secondary overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={serviceFamily} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative section-container">
          <AnimatedSection>
            <nav className="text-sm text-secondary-foreground/60 mb-4">
              <Link to="/" className="hover:text-primary">Home</Link>
              <span className="mx-2">/</span>
              <Link to="/services" className="hover:text-primary">Services</Link>
              <span className="mx-2">/</span>
              <span className="text-primary">Family Milestones</span>
            </nav>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-secondary-foreground">
              Family Milestones
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedSection>
              <span className="text-primary text-sm font-medium uppercase tracking-widest mb-3 block">
                Celebrating Life's Precious Moments
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-6">
                Family Photography Services
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Life is full of beautiful milestones worth celebrating. From the arrival of a new baby to birthday celebrations, we capture these precious moments with care, creativity, and professionalism.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-muted">
        <div className="section-container">
          <div className="space-y-16">
            {familyServices.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 100}>
                <div
                  className={`grid lg:grid-cols-2 gap-10 items-center ${
                    index % 2 === 1 ? "lg:direction-rtl" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center">
                        <service.icon className="w-7 h-7 text-primary-foreground" />
                      </div>
                      <span className="text-primary font-semibold">{service.price}</span>
                    </div>
                    <h3 className="font-heading text-2xl md:text-3xl font-semibold mb-4">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <div className="bg-card p-6 rounded-lg mb-6">
                      <p className="text-sm text-muted-foreground mb-3">
                        <strong className="text-foreground">Duration:</strong> {service.duration}
                      </p>
                      <p className="text-sm font-medium text-foreground mb-2">What's Included:</p>
                      <ul className="grid grid-cols-2 gap-2">
                        {service.includes.map((item) => (
                          <li key={item} className="text-sm text-muted-foreground flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button asChild>
                      <Link to="/contact">Book This Service</Link>
                    </Button>
                  </div>
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <img
                      src={index % 2 === 0 ? serviceFamily : heroImage}
                      alt={service.title}
                      className="rounded-xl shadow-romantic w-full"
                    />
                  </div>
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
              Have Questions About Our Family Services?
            </h2>
            <p className="text-secondary-foreground/80 mb-8 max-w-xl mx-auto">
              We'd love to hear from you. Contact us for more information or to book your session.
            </p>
            <Button asChild size="lg">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default FamilyServices;
