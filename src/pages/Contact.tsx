import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, MessageCircle, Instagram, Facebook } from "lucide-react";
import WhatsAppChooser from "@/components/ui/WhatsAppChooser";
import { useToast } from "@/hooks/use-toast";

import heroImage from "@/assets/hero-wedding-1.jpg";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", service: "", date: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message Sent!", description: "We'll get back to you within 24 hours." });
    setFormData({ name: "", email: "", phone: "", service: "", date: "", message: "" });
  };

  return (
    <Layout>
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-secondary overflow-hidden">
        <div className="absolute inset-0 opacity-20"><img src={heroImage} alt="" className="w-full h-full object-cover" /></div>
        <div className="relative section-container">
          <AnimatedSection>
            <nav className="text-sm text-secondary-foreground/60 mb-4"><Link to="/" className="hover:text-primary">Home</Link><span className="mx-2">/</span><span className="text-primary">Contact</span></nav>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-secondary-foreground">Contact Us</h1>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12">
            <AnimatedSection>
              <h2 className="font-heading text-3xl font-semibold mb-6">Get in Touch</h2>
              <p className="text-muted-foreground mb-8">Ready to capture your special moments? Fill out the form and we'll get back to you within 24 hours.</p>
              <div className="space-y-6">
                <div className="flex items-start gap-4"><div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center"><Phone className="w-5 h-5 text-primary" /></div><div><p className="font-semibold">Phone</p><div className="text-muted-foreground"><a href="tel:+917481829742" className="block hover:text-primary">+91 74818 29742</a><a href="tel:+919641744056" className="block hover:text-primary">+91 96417 44056</a></div></div></div>
                <div className="flex items-start gap-4"><div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center"><Mail className="w-5 h-5 text-primary" /></div><div><p className="font-semibold">Email</p><a href="mailto:prabhatmahato171@gmail.com" className="text-muted-foreground hover:text-primary">prabhatmahato171@gmail.com</a></div></div>
                <div className="flex items-start gap-4"><div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center"><MapPin className="w-5 h-5 text-primary" /></div><div><p className="font-semibold">Location</p><p className="text-muted-foreground">Jsr, India</p></div></div>
              </div>
              <div className="mt-8 flex gap-4 items-center">
                <WhatsAppChooser numbers={[{ number: "917481829742", label: "+91 74818 29742" }, { number: "919641744056", label: "+91 96417 44056" }]} message={"Hi, I'm interested in your photography services"} triggerLabel={"WhatsApp"} />
                <a href="https://www.instagram.com/b.techphotography?utm_source=qr&igsh=MXR0aGFtejU2aWttbQ==" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"><Instagram className="w-5 h-5" /></a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"><Facebook className="w-5 h-5" /></a>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-right">
              <form onSubmit={handleSubmit} className="bg-card p-8 rounded-xl shadow-soft space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div><label className="text-sm font-medium mb-2 block">Name *</label><Input required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Your name" /></div>
                  <div><label className="text-sm font-medium mb-2 block">Email *</label><Input required type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="your@email.com" /></div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div><label className="text-sm font-medium mb-2 block">Phone *</label><Input required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="(123) 456-7890" /></div>
                  <div><label className="text-sm font-medium mb-2 block">Service</label><Select value={formData.service} onValueChange={(v) => setFormData({ ...formData, service: v })}><SelectTrigger><SelectValue placeholder="Select a service" /></SelectTrigger><SelectContent><SelectItem value="wedding">Wedding Photography</SelectItem><SelectItem value="pre-wedding">Pre-Wedding</SelectItem><SelectItem value="newborn">Newborn</SelectItem><SelectItem value="maternity">Maternity</SelectItem><SelectItem value="birthday">Birthday</SelectItem><SelectItem value="cinematic">Cinematic Video</SelectItem></SelectContent></Select></div>
                </div>
                <div><label className="text-sm font-medium mb-2 block">Event Date</label><Input type="date" value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} /></div>
                <div><label className="text-sm font-medium mb-2 block">Message *</label><Textarea required rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Tell us about your event..." /></div>
                <Button type="submit" className="w-full" size="lg">Send Message</Button>
              </form>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
