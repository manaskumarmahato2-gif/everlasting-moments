import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Camera, Heart, Clock, Award, Star, Play, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";

import heroImage1 from "@/assets/hero-wedding-1.jpg";
import heroImage2 from "@/assets/hero-wedding-2.jpg";
import heroImage3 from "@/assets/hero-wedding-3.jpg";
import serviceWedding from "@/assets/service-wedding.jpg";
import serviceFamily from "@/assets/service-family.jpg";
import serviceCinematic from "@/assets/service-cinematic.jpg";

const heroImages = [heroImage1, heroImage2, heroImage3];

const services = [
  {
    title: "Wedding Services",
    description: "From pre-wedding shoots to the reception, we capture every magical moment of your special day.",
    image: serviceWedding,
    link: "/services/wedding",
  },
  {
    title: "Family Milestones",
    description: "Celebrate life's precious moments - newborns, maternity, first birthdays, and family ceremonies.",
    image: serviceFamily,
    link: "/services/family",
  },
  {
    title: "Cinematic Videos",
    description: "Breathtaking wedding films that tell your love story with cinematic artistry and emotion.",
    image: serviceCinematic,
    link: "/services/cinematic",
  },
];

const features = [
  {
    icon: Camera,
    title: "Professional Equipment",
    description: "State-of-the-art cameras, lenses, and lighting to capture stunning imagery.",
  },
  {
    icon: Heart,
    title: "Experienced Team",
    description: "Passionate photographers with years of experience in wedding and event coverage.",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description: "Your precious memories delivered within the promised timeline, every time.",
  },
  {
    icon: Award,
    title: "Affordable Packages",
    description: "Flexible packages designed to fit your budget without compromising quality.",
  },
];

const testimonials = [
  {
    name: "Sarah & Michael",
    event: "Wedding",
    quote: "Btech Photography captured our wedding day perfectly. Every photo tells a story and brings back all the emotions.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
  {
    name: "Emily Johnson",
    event: "Maternity Shoot",
    quote: "The most beautiful photos I've ever seen. They made me feel so comfortable and the results exceeded my expectations.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
  },
  {
    name: "David & Lisa",
    event: "Pre-Wedding",
    quote: "Professional, creative, and absolutely wonderful to work with. Our pre-wedding photos are magazine-worthy!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  },
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Slideshow */}
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image}
              alt={`Wedding photography ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-foreground/20 via-foreground/30 to-foreground/50" />
          </div>
        ))}

        {/* Hero Content */}
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="section-container">
            <div className="max-w-3xl mx-auto space-y-6">
              <h1 className="font-heading text-4xl md:text-5xl lg:text-7xl font-semibold text-background leading-tight animate-fade-in">
                Capturing Your
                <span className="block text-primary">Precious Moments</span>
              </h1>
              <p className="text-background/90 text-lg md:text-xl max-w-2xl mx-auto animate-fade-in animation-delay-200">
                Professional Wedding & Event Photography that tells your unique love story
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 animate-fade-in animation-delay-400">
                <Button asChild variant="hero">
                  <Link to="/contact">Book a Consultation</Link>
                </Button>
                <Button asChild variant="hero-outline">
                  <Link to="/portfolio">View Our Work</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? "bg-primary w-8"
                  : "bg-background/50 hover:bg-background/80"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-background/80 animate-scroll-indicator"
          aria-label="Scroll to content"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </section>

      {/* Services Overview Section */}
      <section className="section-padding bg-muted">
        <div className="section-container">
          <AnimatedSection>
            <SectionHeading
              label="What We Offer"
              title="Our Services"
              description="From intimate ceremonies to grand celebrations, we offer comprehensive photography and videography services tailored to your needs."
            />
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 100}>
                <Link
                  to={service.link}
                  className="group block bg-card rounded-lg overflow-hidden shadow-soft hover:shadow-romantic transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="aspect-[4/5] overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <span className="text-primary text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                      Learn More
                      <ChevronDown className="w-4 h-4 -rotate-90" />
                    </span>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Portfolio Section */}
      <section className="section-padding">
        <div className="section-container">
          <AnimatedSection>
            <SectionHeading
              label="Our Work"
              title="Recent Work"
              description="A glimpse into some of our most cherished moments captured through our lens."
            />
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {[heroImage1, heroImage2, heroImage3, serviceWedding, serviceFamily, serviceCinematic].map(
              (image, index) => (
                <AnimatedSection key={index} delay={index * 50}>
                  <div className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer">
                    <img
                      src={image}
                      alt={`Portfolio image ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors duration-300 flex items-center justify-center">
                      <span className="text-background font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        View
                      </span>
                    </div>
                  </div>
                </AnimatedSection>
              )
            )}
          </div>

          <AnimatedSection className="text-center mt-12">
            <Button asChild size="lg">
              <Link to="/portfolio">View Full Portfolio</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-muted">
        <div className="section-container">
          <AnimatedSection>
            <SectionHeading
              label="Why Us"
              title="Why Choose Us"
              description="We're dedicated to making your special moments unforgettable through our expertise and passion."
            />
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <AnimatedSection key={feature.title} delay={index * 100}>
                <div className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <feature.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Preview Section */}
      <section className="section-padding">
        <div className="section-container">
          <AnimatedSection>
            <SectionHeading
              label="Testimonials"
              title="What Our Clients Say"
              description="Don't just take our word for it - hear from the couples and families we've had the honor to work with."
            />
          </AnimatedSection>

          <div className="max-w-3xl mx-auto">
            <div className="relative overflow-hidden">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`transition-all duration-500 ${
                    currentTestimonial === index
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 absolute inset-0 translate-x-8"
                  }`}
                >
                  <div className="bg-card rounded-xl p-8 md:p-12 shadow-soft text-center">
                    <div className="flex justify-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-primary fill-primary" />
                      ))}
                    </div>
                    <p className="text-foreground text-lg md:text-xl italic mb-6 leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex items-center justify-center gap-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-full object-cover border-2 border-primary"
                      />
                      <div className="text-left">
                        <p className="font-semibold text-foreground">{testimonial.name}</p>
                        <p className="text-muted-foreground text-sm">{testimonial.event}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Testimonial Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentTestimonial === index
                      ? "bg-primary w-8"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <AnimatedSection className="text-center mt-10">
            <Button asChild variant="outline" size="lg">
              <Link to="/testimonials">Read More Testimonials</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage2}
            alt="CTA Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/60" />
        </div>

        <div className="relative section-container text-center text-background">
          <AnimatedSection>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
              Ready to Capture Your Moments?
            </h2>
            <p className="text-background/80 text-lg mb-8 max-w-2xl mx-auto">
              Let's create timeless memories together. Book a consultation with our team today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild variant="hero">
                <Link to="/contact">Get in Touch</Link>
              </Button>
              <a
                href="tel:+1234567890"
                className="flex items-center gap-2 text-background hover:text-primary transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>+1 (234) 567-890</span>
              </a>
              <a
                href="https://wa.me/1234567890?text=Hi, I'm interested in your photography services"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-background hover:text-primary transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
