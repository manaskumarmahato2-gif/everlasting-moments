import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

import heroImage from "@/assets/hero-wedding-1.jpg";

const testimonials = [
  { name: "Sarah & Michael", event: "Wedding", quote: "Eternal Moments captured our wedding day perfectly. Every photo tells a story and brings back all the emotions. We couldn't be happier with the results!", rating: 5, image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" },
  { name: "Emily Johnson", event: "Maternity Shoot", quote: "The most beautiful photos I've ever seen. They made me feel so comfortable and the results exceeded my expectations.", rating: 5, image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop" },
  { name: "David & Lisa", event: "Pre-Wedding", quote: "Professional, creative, and absolutely wonderful to work with. Our pre-wedding photos are magazine-worthy!", rating: 5, image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" },
  { name: "Jennifer Adams", event: "Newborn", quote: "They were so gentle with our baby and captured the most precious moments. We treasure these photos!", rating: 5, image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop" },
  { name: "Robert & Emma", event: "Wedding", quote: "From start to finish, the experience was amazing. The team was professional and the photos are stunning.", rating: 5, image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop" },
  { name: "Amanda Chen", event: "Birthday", quote: "My daughter's first birthday was captured beautifully. Every detail, every smile - they got it all!", rating: 5, image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop" },
];

const Testimonials = () => {
  return (
    <Layout>
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-secondary overflow-hidden">
        <div className="absolute inset-0 opacity-20"><img src={heroImage} alt="" className="w-full h-full object-cover" /></div>
        <div className="relative section-container">
          <AnimatedSection>
            <nav className="text-sm text-secondary-foreground/60 mb-4"><Link to="/" className="hover:text-primary">Home</Link><span className="mx-2">/</span><span className="text-primary">Testimonials</span></nav>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-secondary-foreground">Client Testimonials</h1>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding">
        <div className="section-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <AnimatedSection key={t.name} delay={i * 50}>
                <div className="bg-card rounded-xl p-8 shadow-soft h-full flex flex-col">
                  <div className="flex mb-4">{[...Array(t.rating)].map((_, j) => <Star key={j} className="w-5 h-5 text-primary fill-primary" />)}</div>
                  <p className="text-foreground italic mb-6 flex-1">"{t.quote}"</p>
                  <div className="flex items-center gap-4">
                    <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-primary" />
                    <div><p className="font-semibold">{t.name}</p><p className="text-muted-foreground text-sm">{t.event}</p></div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted">
        <div className="section-container text-center">
          <AnimatedSection>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-4">Ready to Create Your Own Story?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">Join our happy clients and let us capture your special moments.</p>
            <Button asChild size="lg"><Link to="/contact">Book Now</Link></Button>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Testimonials;
