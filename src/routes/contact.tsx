import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Nageshwar Gastro & Liver Clinic, Vanasthalipuram" },
      {
        name: "description",
        content:
          "Visit Nageshwar Gastro & Liver Clinic in Vanasthalipuram, Hyderabad. Call 099493 37101 or book a consultation.",
      },
      { property: "og:title", content: "Contact the Clinic" },
      {
        property: "og:description",
        content: "Address, hours and phone for the Vanasthalipuram clinic.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <section className="border-b border-border bg-[var(--gradient-hero)]">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-20 pb-16">
          <div className="text-[11px] uppercase tracking-[0.22em] text-primary mb-4">Contact</div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.08] max-w-3xl">
            Visit us, or call.
          </h1>
          <p className="font-telugu text-base text-muted-foreground mt-3">
            నాగేశ్వర్ గ్యాస్ట్రో &amp; కాలేయ క్లినిక్
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-10 pb-24">
        <div className="lg:col-span-5 space-y-5 min-w-0">
          {[
            {
              icon: MapPin,
              title: "Address",
              body: (
                <>
                  Lane opposite Bhashyam School,<br />
                  Prashanthi Nagar, Vanasthalipuram,<br />
                  Telangana 500070
                </>
              ),
            },
            {
              icon: Phone,
              title: "Phone",
              body: <a href="tel:09949337101" className="text-primary hover:underline">099493 37101</a>,
            },
            {
              icon: Clock,
              title: "Hours",
              body: (
                <>
                  Mon – Sat · 9:00 AM – 9:00 PM<br />
                  Sunday · Closed
                </>
              ),
            },
            {
              icon: Mail,
              title: "Email",
              body: <a href="mailto:contact@nageshwarclinic.in" className="text-primary hover:underline">contact@nageshwarclinic.in</a>,
            },
          ].map((c) => (
            <div key={c.title} className="rounded-sm border border-border bg-card p-6 flex gap-4">
              <div className="h-11 w-11 shrink-0 rounded-sm bg-primary/10 text-primary flex items-center justify-center">
                <c.icon className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">{c.title}</div>
                <div className="mt-1 text-foreground/85 leading-relaxed text-sm">{c.body}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:col-span-7 min-w-0">
          <div className="rounded-sm overflow-hidden border border-border shadow-[var(--shadow-card)] aspect-[4/3] lg:aspect-auto lg:h-full min-h-[480px] bg-muted">
            <iframe
              title="Clinic location map"
              src="https://www.google.com/maps?q=Vanasthalipuram,+Telangana+500070&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-24">
        <div className="rounded-sm bg-[var(--gradient-primary)] p-10 md:p-14 text-primary-foreground flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2 className="font-display text-3xl md:text-4xl">Need to speak with us today?</h2>
            <p className="mt-2 text-primary-foreground/85 text-sm md:text-base">
              Our team typically responds within minutes during clinic hours.
            </p>
          </div>
          <a
            href="tel:09949337101"
            className="inline-flex items-center gap-2 rounded-sm bg-gold text-foreground px-6 py-3 text-sm font-medium hover:opacity-90 transition"
          >
            <Phone className="h-4 w-4" /> Call 099493 37101
          </a>
        </div>
      </section>
    </>
  );
}
