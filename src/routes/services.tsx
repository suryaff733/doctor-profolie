import { createFileRoute, Link } from "@tanstack/react-router";
import { Stethoscope, Heart, Activity, ShieldCheck, Droplet, Pill, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Nageshwar Gastro & Liver Clinic" },
      {
        name: "description",
        content:
          "Gastroscopy, liver disease treatment, piles, fissure care and more — full-spectrum gastroenterology services in Vanasthalipuram, Hyderabad.",
      },
      { property: "og:title", content: "Our Services" },
      {
        property: "og:description",
        content: "Full-spectrum gastroenterology services in Hyderabad.",
      },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { icon: Stethoscope, title: "Gastroscopy", desc: "Upper GI endoscopy to diagnose acidity, ulcers, reflux and bleeding — performed comfortably with same-day reports." },
  { icon: Heart, title: "Liver Disease Treatment", desc: "Comprehensive care for fatty liver, hepatitis B & C, cirrhosis, jaundice and alcoholic liver disease." },
  { icon: Activity, title: "Piles — Non-Surgical", desc: "Modern, minimally invasive treatment for haemorrhoids and anal fissures with rapid recovery." },
  { icon: Droplet, title: "Vomit Blood / GI Bleeding", desc: "Urgent assessment and definitive management of upper and lower gastrointestinal bleeding." },
  { icon: ShieldCheck, title: "Gallbladder Evaluation", desc: "Diagnostic workup for gallstones, cholecystitis and biliary symptoms with timely surgical referral when needed." },
  { icon: Pill, title: "Chronic Acidity & IBS", desc: "Personalised plans for GERD, gastritis and irritable bowel syndrome — combining medication and lifestyle." },
];

function ServicesPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pt-20 pb-12">
        <div className="text-xs uppercase tracking-[0.22em] text-primary mb-4">Services</div>
        <h1 className="font-display text-5xl md:text-6xl text-foreground leading-[1.05] max-w-3xl">
          Specialist care, <span className="italic text-primary">end to end.</span>
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
          Every service is delivered personally by Dr. Nageshwar K — from the
          first consultation to follow-up.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <div key={s.title} className="rounded-sm border border-border bg-card p-7 hover:shadow-[var(--shadow-card)] hover:-translate-y-1 transition-all duration-300">
              <div className="h-12 w-12 rounded-sm bg-primary/10 flex items-center justify-center text-primary mb-5">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24">
        <SectionHeading eyebrow="Common questions" title="Frequently asked" />
        <div className="mt-12 max-w-3xl divide-y divide-border border-y border-border">
          {[
            { q: "Where does Dr. Nageshwar K practice?", a: "At the Nageshwar Gastro & Liver Clinic in Vanasthalipuram, and at Krishnaveni Hospital, Hayathnagar." },
            { q: "What conditions does the doctor treat?", a: "Gastroscopy, liver disease, piles (non-surgical), GI bleeding, gallbladder issues, chronic acidity, IBS and more." },
            { q: "What is the consultation fee?", a: "₹350 for clinic consultation. Diagnostic procedures and tests are billed separately." },
            { q: "Do you take walk-ins?", a: "Yes, walk-ins are welcome during clinic hours. We recommend calling ahead to minimise waiting." },
          ].map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer items-center justify-between gap-6 list-none">
                <span className="font-display text-lg text-foreground">{f.q}</span>
                <span className="text-primary text-2xl leading-none group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>

        <div className="mt-12">
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-sm bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:opacity-90 transition shadow-[var(--shadow-soft)]">
            Book your visit <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
