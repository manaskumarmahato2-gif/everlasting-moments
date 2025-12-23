import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Play, Video, Film, Music, Check } from "lucide-react";

import serviceCinematic from "@/assets/service-cinematic.jpg";
import heroImage from "@/assets/hero-wedding-2.jpg";
import heroImage2 from "@/assets/hero-wedding-1.jpg";

const features = [
  {
    icon: Video,
    title: "4K Ultra HD Quality",
    description: "Crystal clear footage that captures every detail beautifully.",
  },
  {
    icon: Film,
    title: "Drone Aerial Shots",
    description: "Stunning aerial perspectives that add cinematic grandeur.",
  },
  {
    icon: Music,
    title: "Professional Sound",
    description: "High-quality audio recording for vows, speeches, and ambient sounds.",
  },
];

const packages = [
  {
    name: "Highlight Film",
    duration: "3-5 minutes",
    price: "1,499",
    features: [
      "Cinematic highlight reel",
      "Licensed music",
      "Color grading",
      "2-week delivery",
    ],
  },
  {
    name: "Feature Film",
    duration: "15-20 minutes",
    price: "2,999",
    features: [
      "Full ceremony coverage",
      "Reception highlights",
      "Drone footage",
      "Licensed music",
      "Color grading",
      "1-week delivery",
    ],
  },
  {
    name: "Documentary",
    duration: "45-60 minutes",
    price: "4,999",
    features: [
      "Full day coverage",
      "Complete ceremony & reception",
      "Speeches and toasts",
      "Drone footage",
      "Custom soundtrack",
      "Same-day edit available",
      "Raw footage included",
    ],
  },
];

const CinematicServices = () => {
  return (
    <Layout>
      {/* Page Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-secondary overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={serviceCinematic} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative section-container">
          <AnimatedSection>
            <nav className="text-sm text-secondary-foreground/60 mb-4">
              <Link to="/" className="hover:text-primary">Home</Link>
              <span className="mx-2">/</span>
              <Link to="/services" className="hover:text-primary">Services</Link>
              <span className="mx-2">/</span>
              <span className="text-primary">Cinematic Videos</span>
            </nav>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-secondary-foreground">
              Cinematic Videos
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Video Showreel */}
      <section className="section-padding">
        <div className="section-container">
          <AnimatedSection>
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-romantic group cursor-pointer">
              <img
                src={heroImage}
                alt="Video Showreel"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-foreground/30 flex items-center justify-center group-hover:bg-foreground/40 transition-colors">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 text-primary-foreground ml-1" />
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Description */}
      <section className="section-padding bg-muted">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <span className="text-primary text-sm font-medium uppercase tracking-widest mb-3 block">
                Your Story, Cinematically Told
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-6">
                Breathtaking Wedding Films
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                While photos capture moments, video captures motion, sound, and emotion in a way nothing else can. Our cinematic wedding films are crafted with the same care and artistry as a feature film, telling your love story in a way that you can relive again and again.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Using professional cinema cameras, stabilizers, and audio equipment, we create films that feel like something out of a movie – because your love story deserves nothing less.
              </p>
            </AnimatedSection>
            <AnimatedSection animation="fade-in-right">
              <img
                src={serviceCinematic}
                alt="Cinematic filming"
                className="rounded-xl shadow-romantic"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding">
        <div className="section-container">
          <AnimatedSection>
            <SectionHeading
              label="What Makes Us Different"
              title="Cinematic Excellence"
            />
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <AnimatedSection key={feature.title} delay={index * 100}>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
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
              label="Packages"
              title="Video Packages"
              description="Choose the package that best tells your story."
            />
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <AnimatedSection key={pkg.name} delay={index * 100}>
                <div className="bg-card rounded-xl p-8 shadow-soft h-full flex flex-col">
                  <h3 className="font-heading text-2xl font-semibold mb-1">{pkg.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{pkg.duration}</p>
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
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/contact">Request Quote</Link>
                  </Button>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Gallery */}
      <section className="section-padding">
        <div className="section-container">
          <AnimatedSection>
            <SectionHeading
              label="Sample Work"
              title="Featured Films"
            />
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[heroImage, heroImage2, serviceCinematic, serviceCinematic, heroImage, heroImage2].map((img, index) => (
              <AnimatedSection key={index} delay={index * 50}>
                <div className="relative aspect-video rounded-lg overflow-hidden group cursor-pointer">
                  <img
                    src={img}
                    alt={`Video thumbnail ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-foreground/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <Play className="w-5 h-5 text-primary-foreground ml-0.5" />
                    </div>
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
              Ready for Your Cinematic Wedding Film?
            </h2>
            <p className="text-secondary-foreground/80 mb-8 max-w-xl mx-auto">
              Let's create a film that captures the magic of your special day.
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

export default CinematicServices;
