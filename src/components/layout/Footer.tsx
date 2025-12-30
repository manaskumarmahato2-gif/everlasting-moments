import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="section-container section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About Column */}
          <div>
            <h3 className="font-heading text-2xl font-semibold mb-4">
              Btech<span className="text-primary"> Photography</span>
            </h3>
            <p className="text-secondary-foreground/80 text-sm leading-relaxed mb-6">
              We specialize in capturing the most precious moments of your life with artistry and passion. Every frame tells your unique love story.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/b.techphotography?utm_source=qr&igsh=MXR0aGFtejU2aWttbQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "About Us", "Services", "Portfolio", "Testimonials", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <Link
                      to={link === "Home" ? "/" : `/${link.toLowerCase().replace(" ", "-")}`}
                      className="text-secondary-foreground/80 hover:text-primary transition-colors text-sm"
                    >
                      {link}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-3">
              {[
                "Wedding Photography",
                "Pre-Wedding Shoots",
                "Newborn Photography",
                "Maternity Shoots",
                "Birthday Events",
                "Cinematic Videos",
              ].map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-secondary-foreground/80 hover:text-primary transition-colors text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <a
                    href="tel:+917481829742"
                    className="text-secondary-foreground/80 hover:text-primary transition-colors text-sm block"
                  >
                    +91 74818 29742
                  </a>
                  <a
                    href="tel:+919641744056"
                    className="text-secondary-foreground/80 hover:text-primary transition-colors text-sm block"
                  >
                    +91 96417 44056
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-0.5" />
                <a
                  href="mailto:prabhatmahato171@gmail.com"
                  className="text-secondary-foreground/80 hover:text-primary transition-colors text-sm"
                >
                  prabhatmahato171@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <span className="text-secondary-foreground/80 text-sm">
                  Jsr, India
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-foreground/10">
        <div className="section-container py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-secondary-foreground/60 text-sm">
            © {new Date().getFullYear()} Btech Photography. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              to="/privacy"
              className="text-secondary-foreground/60 hover:text-primary transition-colors text-sm"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-secondary-foreground/60 hover:text-primary transition-colors text-sm"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
