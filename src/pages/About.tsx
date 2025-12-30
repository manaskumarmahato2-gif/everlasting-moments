import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/button";
import { MessageSquare, Calendar, Camera, Wand2, Truck } from "lucide-react";

import heroImage from "@/assets/hero-wedding-1.jpg";
import heroImage2 from "@/assets/hero-wedding-2.jpg";

const processSteps = [
  {
    icon: MessageSquare,
    title: "Initial Consultation",
    description: "We discuss your vision, preferences, and requirements to understand your unique story.",
  },
  {
    icon: Calendar,
    title: "Planning & Preparation",
    description: "Together we plan the timeline, locations, and special moments you want captured.",
  },
  {
    icon: Camera,
    title: "Event Coverage",
    description: "Our professional team captures every precious moment with artistry and attention to detail.",
  },
  {
    icon: Wand2,
    title: "Editing & Enhancement",
    description: "Each photo and video is carefully edited to bring out its full beauty and emotion.",
  },
  {
    icon: Truck,
    title: "Delivery",
    description: "Receive your stunning photos and videos in your preferred format, on time.",
  },
];

const About = () => {
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
              <span className="text-primary">About Us</span>
            </nav>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-secondary-foreground">
              About Us
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section-padding">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimatedSection animation="fade-in-left">
              <div>
                <span className="text-primary text-sm font-medium uppercase tracking-widest mb-3 block">
                  Our Story
                </span>
                <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-6">
                  Preserving Moments, Creating Memories
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Founded with a passion for storytelling through imagery, Btech Photography has been capturing the most precious moments of couples and families for over a decade. What started as a dream to document love stories has grown into a team of dedicated artists who share the same vision.
                  </p>
                  <p>
                    We believe that every love story is unique, and it deserves to be told in a way that reflects its authenticity and beauty. Our approach combines technical expertise with artistic vision, ensuring that each photograph and video becomes a timeless piece of art.
                  </p>
                  <p>
                    From intimate elopements to grand celebrations, we've had the privilege of being part of thousands of love stories. Each experience has taught us something new and reinforced our commitment to excellence.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-right">
              <div className="relative">
                <img
                  src={heroImage2}
                  alt="About Btech Photography"
                  className="rounded-lg shadow-romantic w-full"
                />
                <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-elegant">
                  <div className="text-4xl font-heading font-bold">10+</div>
                  <div className="text-sm">Years Experience</div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-muted">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection>
              <div className="bg-card p-8 md:p-10 rounded-xl shadow-soft h-full">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Camera className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading text-2xl font-semibold mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To capture and preserve life's most precious moments with artistry, passion, and professionalism. We strive to create timeless imagery that tells your unique story and brings joy for generations to come. Every frame we capture is a testament to our dedication to excellence and our love for what we do.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <div className="bg-card p-8 md:p-10 rounded-xl shadow-soft h-full">
                <div className="w-14 h-14 bg-accent/30 rounded-full flex items-center justify-center mb-6">
                  <Wand2 className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading text-2xl font-semibold mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be the most trusted and beloved photography studio, known for our exceptional quality, creative vision, and heartfelt service. We envision a world where every significant moment is beautifully documented, allowing people to relive their happiest memories through stunning visual storytelling.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="section-padding">
        <div className="section-container">
          <AnimatedSection>
            <SectionHeading
              label="How We Work"
              title="Our Process"
              description="From your first inquiry to the final delivery, we ensure a seamless and enjoyable experience."
            />
          </AnimatedSection>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />

            <div className="space-y-12 lg:space-y-0">
              {processSteps.map((step, index) => (
                <AnimatedSection key={step.title} delay={index * 100}>
                  <div
                    className={`lg:grid lg:grid-cols-2 lg:gap-16 items-center ${
                      index % 2 === 0 ? "" : "lg:direction-rtl"
                    }`}
                  >
                    <div
                      className={`${
                        index % 2 === 0 ? "lg:text-right lg:pr-16" : "lg:text-left lg:pl-16 lg:order-2"
                      }`}
                    >
                      <div
                        className={`flex items-center gap-4 mb-4 ${
                          index % 2 === 0 ? "lg:justify-end" : "lg:justify-start"
                        }`}
                      >
                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-glow">
                          <step.icon className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <span className="text-primary font-semibold">Step {index + 1}</span>
                      </div>
                      <h3 className="font-heading text-xl font-semibold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                    <div
                      className={`hidden lg:flex items-center justify-center ${
                        index % 2 === 0 ? "" : "lg:order-1"
                      }`}
                    >
                      <div className="w-4 h-4 bg-primary rounded-full shadow-glow" />
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-secondary">
        <div className="section-container text-center">
          <AnimatedSection>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-secondary-foreground mb-4">
              Ready to Work With Us?
            </h2>
            <p className="text-secondary-foreground/80 mb-8 max-w-xl mx-auto">
              Let's create something beautiful together. Reach out to discuss your vision and how we can bring it to life.
            </p>
            <Button asChild size="lg">
              <Link to="/contact">Contact Us Today</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default About;
