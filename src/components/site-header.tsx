import { Link } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { Menu, X, Phone, Search } from "lucide-react";

const nav = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "stories", label: "Patient Stories" },
  { id: "contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx: any;
    const initAnimation = () => {
      const gsap = (window as any).gsap;
      if (!gsap) {
        setTimeout(initAnimation, 50);
        return;
      }
      ctx = gsap.context(() => {
        gsap.from(navRef.current, {
          y: -100,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
          delay: 2.8 // Delays slightly so it comes in as the intro screen finishes
        });
      });
    };
    initAnimation();

    return () => {
      if (ctx) ctx.revert();
    };
  }, []);

  const [isHidden, setIsHidden] = useState(false);

  // Safe and smooth navbar hide-on-scroll logic
  useEffect(() => {
    let lastScroll = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      if (open) return;
      
      const current = window.scrollY;
      
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (current > lastScroll && current > 80) {
            setIsHidden(true); // Scrolled down
          } else {
            setIsHidden(false); // Scrolled up
          }
          lastScroll = current;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [open]);

  return (
    <>
      <header className={`fixed top-4 md:top-6 left-1/2 -translate-x-1/2 w-[92%] max-w-6xl z-40 transition-transform duration-500 ease-out will-change-transform ${isHidden ? "-translate-y-[160%]" : "translate-y-0"}`}>
        <div
          ref={navRef}
          className="navbar w-full bg-white/85 backdrop-blur-xl border border-white/20 shadow-[0_8px_30px_rgb(0,0,0,0.08)] rounded-[40px] px-3 md:px-5 h-[72px] flex items-center justify-between"
          style={{ willChange: "transform, opacity" }}
        >
          {/* LEFT: LOGO */}
          <Link to="/" className="flex items-center gap-3.5 group ml-2">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary group-hover:scale-105 transition-transform duration-500">
              <rect width="40" height="40" rx="10" fill="currentColor" fillOpacity="0.08" className="group-hover:fillOpacity-100 transition-all duration-500" />
              <path d="M14 26V14L26 26V14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-white transition-colors duration-500" />
              <circle cx="14" cy="14" r="2" fill="currentColor" className="group-hover:fill-white transition-colors duration-500" />
              <circle cx="26" cy="26" r="2" fill="currentColor" className="group-hover:fill-white transition-colors duration-500" />
            </svg>
            <div className="leading-tight">
              <div className="font-display text-base text-foreground tracking-tight">Nageshwar Clinic</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mr-2">
                Gastro &amp; Liver
              </div>
            </div>
          </Link>

          {/* CENTER: NAV MENUS */}
          <nav className="hidden lg:flex items-center gap-1 p-1 bg-black/5 rounded-full">
            {nav.map((n) => (
              <a
                key={n.id}
                href={`/#${n.id}`}
                onClick={(e) => {
                  if (window.location.pathname === "/") {
                    e.preventDefault();
                    const el = document.getElementById(n.id);
                    if (el) {
                      const offsetPosition = el.getBoundingClientRect().top + window.scrollY - 100;
                      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                    }
                  }
                }}
                className="magnetic px-5 py-2 text-sm font-medium text-foreground/75 hover:text-foreground hover:bg-black/5 rounded-full transition-all duration-300"
              >
                {n.label}
              </a>
            ))}
          </nav>

          {/* RIGHT: CALL TO ACTION */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:09949337101"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium hover:scale-105 hover:shadow-[0_8px_20px_rgba(15,47,58,0.2)] transition-all duration-300 mr-1"
            >
              <Phone className="h-4 w-4" />
              <span>099493 37101</span>
            </a>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-full hover:bg-black/5 text-foreground transition-colors mr-1"
            aria-label="Menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* MOBILE MENU DROPDOWN */}
      {open && (
        <div className="fixed inset-0 z-30 pt-[110px] px-4 bg-background/95 backdrop-blur-xl lg:hidden">
          <div className="bg-white rounded-3xl p-6 shadow-xl border border-white/20 flex flex-col gap-2">
            {nav.map((n) => (
              <a
                key={n.id}
                href={`/#${n.id}`}
                onClick={(e) => {
                  setOpen(false);
                  if (window.location.pathname === "/") {
                    e.preventDefault();
                    const el = document.getElementById(n.id);
                    if (el) {
                      const offsetPosition = el.getBoundingClientRect().top + window.scrollY - 100;
                      // Small delay to allow the drawer to close visually first
                      setTimeout(() => {
                        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                      }, 100);
                    }
                  }
                }}
                className="text-base py-3 px-4 rounded-xl text-foreground/80 hover:bg-black/5 transition-colors"
               >
                {n.label}
              </a>
            ))}
            <div className="mt-4 pt-4 border-t border-border">
              <a
                href="tel:09949337101"
                className="flex items-center justify-center gap-2 rounded-xl bg-primary text-primary-foreground px-5 py-3.5 text-sm font-medium"
              >
                <Phone className="h-4 w-4" /> Call 099493 37101
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
