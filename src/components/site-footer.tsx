import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Clock } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-border bg-[var(--cream)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="font-display text-2xl text-foreground">
            Nageshwar Gastro &amp; Liver Clinic
          </div>
          <div className="font-telugu text-base text-muted-foreground mt-1">
            నాగేశ్వర్ గ్యాస్ట్రో &amp; కాలేయ క్లినిక్
          </div>
          <p className="mt-5 text-sm text-muted-foreground max-w-md leading-relaxed">
            Compassionate, expert care for digestive and liver health — led by
            Dr. Nageshwar K, MBBS, DM (Gastroenterology), with 27 years of
            experience.
          </p>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.18em] text-foreground/60 mb-4">
            Visit
          </div>
          <ul className="space-y-3 text-sm text-foreground/80">
            <li className="flex gap-3">
              <MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" />
              <span>
                Lane opposite Bhashyam School, Prashanthi Nagar,
                Vanasthalipuram, Telangana 500070
              </span>
            </li>
            <li className="flex gap-3">
              <Phone className="h-4 w-4 mt-0.5 text-primary shrink-0" />
              <a href="tel:09949337101" className="hover:text-primary">
                099493 37101
              </a>
            </li>
            <li className="flex gap-3">
              <Clock className="h-4 w-4 mt-0.5 text-primary shrink-0" />
              <span>Mon – Sat · 9:00 AM – 9:00 PM</span>
            </li>
          </ul>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.18em] text-foreground/60 mb-4">
            Explore
          </div>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/about" className="text-foreground/80 hover:text-primary">About the Doctor</Link></li>
            <li><Link to="/services" className="text-foreground/80 hover:text-primary">Services</Link></li>
            <li><Link to="/stories" className="text-foreground/80 hover:text-primary">Patient Stories</Link></li>
            <li><Link to="/contact" className="text-foreground/80 hover:text-primary">Book Consultation</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 text-xs text-muted-foreground flex flex-col md:flex-row justify-between gap-2">
          <span>© {new Date().getFullYear()} Nageshwar Gastro &amp; Liver Clinic. All rights reserved.</span>
          <span>Vanasthalipuram · Hyderabad · Telangana</span>
        </div>
      </div>
    </footer>
  );
}
