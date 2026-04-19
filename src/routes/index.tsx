import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Phone, MapPin, Star, ShieldCheck, Stethoscope, Activity, Heart } from "lucide-react";
import heroImg from "@/assets/hero-anatomy.jpg";
import doctorImg from "@/assets/doctor-portrait.jpg";
import { SectionHeading } from "@/components/section-heading";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nageshwar Gastro & Liver Clinic — Vanasthalipuram, Hyderabad" },
      {
        name: "description",
        content:
          "Trusted gastroenterology & liver clinic in Vanasthalipuram. 27 years of experience, 4.4★ rated, expert care for digestive health.",
      },
      { property: "og:title", content: "Nageshwar Gastro & Liver Clinic" },
      {
        property: "og:description",
        content: "Compassionate, expert digestive & liver care in Hyderabad.",
      },
    ],
  }),
  component: HomePage,
});

const services = [
  { icon: Stethoscope, title: "Gastroscopy", desc: "Painless diagnostic endoscopy with same-day reports." },
  { icon: Heart, title: "Liver Disease Treatment", desc: "Hepatitis, fatty liver and cirrhosis care plans." },
  { icon: Activity, title: "Piles (Non-Surgical)", desc: "Modern, minimally invasive piles & fissure care." },
  { icon: ShieldCheck, title: "Vomit Blood / GI Bleed", desc: "Urgent evaluation and management of GI bleeding." },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[var(--gradient-hero)]" aria-hidden />
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-primary/5 blur-3xl" aria-hidden />
        <div className="absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-amber-accent/10 blur-3xl" aria-hidden />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-16 pb-24 lg:pt-24 lg:pb-32 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 backdrop-blur px-4 py-1.5 text-xs text-foreground/70">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-accent" />
              Now accepting new patients · Vanasthalipuram
            </div>
            <h1 className="mt-6 font-display text-5xl md:text-6xl lg:text-7xl text-foreground leading-[1.02] tracking-tight">
              Care that listens.<br />
              <span className="italic text-primary">Expertise that heals.</span>
            </h1>
            <p className="font-telugu text-lg text-muted-foreground mt-4">
              నాగేశ్వర్ గ్యాస్ట్రో &amp; కాలేయ క్లినిక్
            </p>
            <p className="mt-6 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed">
              Specialist gastroenterology and liver care in the heart of
              Hyderabad. 27 years of experience, modern diagnostics, and a
              calm, unhurried consultation — every visit.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-3.5 text-sm font-medium hover:opacity-90 transition shadow-[var(--shadow-elegant)]"
              >
                Book a consultation <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="tel:09949337101"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-medium text-foreground hover:bg-secondary transition"
              >
                <Phone className="h-4 w-4 text-primary" /> 099493 37101
              </a>
            </div>

            <div className="mt-12 grid grid-cols-3 max-w-lg gap-6">
              {[
                { v: "27+", l: "Years experience" },
                { v: "4.4★", l: "From 88 reviews" },
                { v: "DM", l: "Gastroenterology" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-3xl text-primary">{s.v}</div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-[var(--shadow-elegant)]">
              <img
                src={heroImg}
                alt="Digestive system illustration"
                width={1280}
                height={1280}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl shadow-[var(--shadow-card)] p-5 max-w-xs border border-border">
              <div className="flex items-center gap-1 text-amber-accent">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-2 text-sm text-foreground/80 leading-relaxed">
                "Doctor was very friendly and explained the issue very well. I strongly recommend him."
              </p>
              <p className="mt-2 text-xs text-muted-foreground">— Sunil, verified patient</p>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-8 grid sm:grid-cols-3 gap-6 text-sm">
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-5 w-5 text-primary" />
            <span className="text-foreground/80">Medical Registration Verified</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="h-5 w-5 text-primary" />
            <span className="text-foreground/80">Vanasthalipuram, Hyderabad</span>
          </div>
          <div className="flex items-center gap-3">
            <Stethoscope className="h-5 w-5 text-primary" />
            <span className="text-foreground/80">MBBS, DM — Osmania Medical College</span>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32">
        <SectionHeading
          eyebrow="What we treat"
          title="Specialist care for digestive & liver health"
          description="From routine consultations to advanced endoscopic procedures, every patient receives focused, evidence-based care."
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative rounded-2xl border border-border bg-card p-7 hover:shadow-[var(--shadow-card)] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-5">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Link to="/services" className="inline-flex items-center gap-2 text-sm text-primary font-medium group">
            View all services
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
          </Link>
        </div>
      </section>

      {/* DOCTOR FEATURE */}
      <section className="bg-[var(--cream)] border-y border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32 grid lg:grid-cols-12 gap-14 items-center">
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-[var(--shadow-card)]">
              <img
                src={doctorImg}
                alt="Dr. Nageshwar K"
                width={1024}
                height={1280}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="text-xs uppercase tracking-[0.22em] text-primary mb-4">
              Meet your doctor
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-foreground leading-tight">
              Dr. Nageshwar K
            </h2>
            <p className="mt-2 text-base text-muted-foreground">
              MBBS, DM (Gastroenterology) · 27 years of experience
            </p>
            <p className="mt-6 text-base md:text-lg text-foreground/80 leading-relaxed max-w-xl">
              Dr. Nageshwar K trained at Osmania Medical College, Hyderabad and
              has spent more than two decades caring for patients with complex
              digestive and liver conditions. His patients describe him as
              friendly, patient and clear in his explanations.
            </p>

            <dl className="mt-10 grid sm:grid-cols-2 gap-x-10 gap-y-6 max-w-xl">
              <div>
                <dt className="text-xs uppercase tracking-wider text-muted-foreground">Education</dt>
                <dd className="mt-1 text-sm text-foreground">Osmania Medical College, Hyderabad</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-muted-foreground">Specialisation</dt>
                <dd className="mt-1 text-sm text-foreground">Gastroenterologist</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-muted-foreground">Registration</dt>
                <dd className="mt-1 text-sm text-foreground">AP Medical Council · 44317</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-muted-foreground">Languages</dt>
                <dd className="mt-1 text-sm text-foreground">Telugu, Hindi, English</dd>
              </div>
            </dl>

            <Link
              to="/about"
              className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-primary group"
            >
              Read full profile <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24">
        <div className="relative overflow-hidden rounded-3xl bg-[var(--gradient-primary)] p-10 md:p-16 text-primary-foreground">
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-amber-accent/30 blur-3xl" />
          <div className="relative max-w-2xl">
            <h2 className="font-display text-4xl md:text-5xl leading-tight">
              Take the first step toward feeling better.
            </h2>
            <p className="mt-5 text-base md:text-lg text-primary-foreground/85">
              Book a consultation today. We'll listen carefully, explain
              clearly, and recommend only what's truly needed.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="tel:09949337101"
                className="inline-flex items-center gap-2 rounded-full bg-amber-accent text-foreground px-7 py-3.5 text-sm font-medium hover:opacity-90 transition"
              >
                <Phone className="h-4 w-4" /> Call 099493 37101
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-7 py-3.5 text-sm font-medium hover:bg-primary-foreground/10 transition"
              >
                Visit clinic <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
