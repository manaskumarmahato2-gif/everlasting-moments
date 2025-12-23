import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  {
    name: "Services",
    path: "/services",
    dropdown: [
      { name: "Wedding Services", path: "/services/wedding" },
      { name: "Family Milestones", path: "/services/family" },
      { name: "Cinematic Videos", path: "/services/cinematic" },
    ],
  },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Testimonials", path: "/testimonials" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-soft py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="section-container flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <span className={cn(
            "font-heading text-2xl md:text-3xl font-semibold transition-colors duration-300",
            isScrolled ? "text-foreground" : "text-background"
          )}>
            Eternal<span className="text-primary">Moments</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <div
              key={link.name}
              className="relative"
              onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                to={link.path}
                className={cn(
                  "flex items-center gap-1 text-sm font-medium transition-colors duration-300 story-link",
                  isScrolled
                    ? isActive(link.path)
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                    : isActive(link.path)
                    ? "text-primary"
                    : "text-background/90 hover:text-background"
                )}
              >
                {link.name}
                {link.dropdown && <ChevronDown className="w-4 h-4" />}
              </Link>

              {/* Dropdown Menu */}
              {link.dropdown && activeDropdown === link.name && (
                <div className="absolute top-full left-0 pt-2 animate-fade-in">
                  <div className="bg-background rounded-lg shadow-romantic border border-border py-2 min-w-[200px]">
                    {link.dropdown.map((subLink) => (
                      <Link
                        key={subLink.name}
                        to={subLink.path}
                        className={cn(
                          "block px-4 py-2 text-sm transition-colors",
                          isActive(subLink.path)
                            ? "text-primary bg-accent/30"
                            : "text-foreground hover:text-primary hover:bg-accent/20"
                        )}
                      >
                        {subLink.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* CTA Button - Desktop */}
        <div className="hidden lg:block">
          <Button asChild variant={isScrolled ? "default" : "hero-outline"} size="sm">
            <Link to="/contact">Book Now</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={cn(
            "lg:hidden p-2 transition-colors",
            isScrolled ? "text-foreground" : "text-background"
          )}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 top-0 bg-background z-40 transition-transform duration-300",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col h-full pt-20 px-6">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <div key={link.name}>
                <Link
                  to={link.path}
                  className={cn(
                    "block py-3 text-lg font-medium border-b border-border transition-colors",
                    isActive(link.path) ? "text-primary" : "text-foreground"
                  )}
                >
                  {link.name}
                </Link>
                {link.dropdown && (
                  <div className="pl-4 mt-2 space-y-2">
                    {link.dropdown.map((subLink) => (
                      <Link
                        key={subLink.name}
                        to={subLink.path}
                        className={cn(
                          "block py-2 text-sm transition-colors",
                          isActive(subLink.path)
                            ? "text-primary"
                            : "text-muted-foreground hover:text-foreground"
                        )}
                      >
                        {subLink.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
          <div className="mt-8">
            <Button asChild className="w-full" size="lg">
              <Link to="/contact">Book a Consultation</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
