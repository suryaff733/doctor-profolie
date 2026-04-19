import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Phone, MapPin, Star, ShieldCheck, Stethoscope, Activity, Heart, CheckCircle2 } from "lucide-react";
import doctorImg from "@/assets/doctor-portrait.jpg";
import { SectionHeading } from "@/components/section-heading";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nageshwar Gastro & Liver Clinic — Vanasthalipuram, Hyderabad" },
      {
        name: "description",
        content:
          "Trusted gastroenterology & liver clinic in Vanasthalipuram. 27 years of experience, expert care for digestive health by Dr. Nageshwar K, MBBS, DM.",
      },
      { property: "og:title", content: "Nageshwar Gastro & Liver Clinic" },
      {
        property: "og:description",
        content: "Specialist digestive & liver care in Hyderabad — Dr. Nageshwar K, MBBS, DM.",
      },
    ],
  }),
  component: HomePage,
});

const services = [
  { icon: Stethoscope, title: "Gastroscopy", desc: "Diagnostic upper GI endoscopy with same-day reports." },
  { icon: Heart, title: "Liver Disease", desc: "Hepatitis, fatty liver and cirrhosis treatment plans." },
  { icon: Activity, title: "Piles (Non-Surgical)", desc: "Minimally invasive treatment for piles & fissures." },
  { icon: ShieldCheck, title: "GI Bleeding", desc: "Urgent evaluation and management of GI bleeding." },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative border-b border-border bg-[var(--gradient-hero)]">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-16 pb-20 lg:pt-24 lg:pb-28 grid lg:grid-cols-12 gap-14 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-sm border border-border bg-card px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] text-foreground/70">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Now accepting new patients
            </div>
            <h1 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.08] tracking-tight">
              Specialist Gastroenterology<br className="hidden md:block" />
              {" & "}Liver Care in Hyderabad.
            </h1>
            <p className="font-telugu text-base text-muted-foreground mt-4">
              నాగేశ్వర్ గ్యాస్ట్రో &amp; కాలేయ క్లినిక్
            </p>
            <p className="mt-6 max-w-xl text-base text-muted-foreground leading-relaxed">
              Led by Dr. Nageshwar K, MBBS, DM (Gastroenterology), with 27
              years of experience in treating complex digestive and liver
              conditions. Modern diagnostics. Considered, evidence-based care.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-sm bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:opacity-90 transition"
              >
                Book a consultation <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="tel:09949337101"
                className="inline-flex items-center gap-2 rounded-sm border border-border bg-card px-6 py-3 text-sm font-medium text-foreground hover:bg-secondary transition"
              >
                <Phone className="h-4 w-4 text-primary" /> 099493 37101
              </a>
            </div>

            <ul className="mt-10 grid sm:grid-cols-2 gap-3 max-w-xl text-sm text-foreground/80">
              {[
                "DM-qualified gastroenterologist",
                "27+ years of clinical experience",
                "Verified medical registration",
                "Same-day endoscopy reports",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-border bg-secondary shadow-[var(--shadow-elegant)]">
              <img
                src={doctorImg}
                alt="Dr. Nageshwar K, Gastroenterologist"
                width={1024}
                height={1280}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/95 via-primary/60 to-transparent p-6">
                <div className="text-primary-foreground">
                  <div className="font-display text-xl">Dr. Nageshwar K</div>
                  <div className="text-xs text-primary-foreground/80 mt-0.5">
                    MBBS, DM (Gastroenterology) · Reg. 44317
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-b border-border bg-[var(--surface)]">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 grid grid-cols-2 md:grid-cols-4 gap-y-4 text-sm">
          {[
            { v: "27+", l: "Years of practice" },
            { v: "4.4 / 5", l: "Patient rating" },
            { v: "86%", l: "Recommend the doctor" },
            { v: "DM", l: "Gastroenterology" },
          ].map((s) => (
            <div key={s.l} className="text-center md:text-left md:border-l md:first:border-l-0 md:pl-6">
              <div className="font-display text-2xl text-primary">{s.v}</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground mt-0.5">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-10 items-end mb-14">
          <div className="lg:col-span-8">
            <SectionHeading
              eyebrow="Areas of practice"
              title="Comprehensive care for digestive & liver health"
              description="From routine consultations to advanced endoscopic procedures, every patient receives focused, evidence-based care."
            />
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <Link to="/services" className="inline-flex items-center gap-2 text-sm text-primary font-medium group">
              View all services
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
            </Link>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-border">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative border-r border-b border-border bg-card p-7 hover:bg-[var(--surface)] transition-colors"
            >
              <div className="h-11 w-11 rounded-sm bg-primary/8 flex items-center justify-center text-primary mb-5">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DOCTOR FEATURE */}
      <section className="bg-[var(--surface)] border-y border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-28 grid lg:grid-cols-12 gap-14 items-start">
          <div className="lg:col-span-5">
            <div className="aspect-[4/5] overflow-hidden rounded-sm border border-border">
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
            <div className="text-[11px] uppercase tracking-[0.22em] text-primary mb-4">
              About the doctor
            </div>
            <h2 className="font-display text-3xl md:text-4xl text-foreground leading-tight">
              Dr. Nageshwar K
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              MBBS, DM (Gastroenterology) · 27 years of experience
            </p>
            <p className="mt-6 text-base text-foreground/80 leading-relaxed max-w-xl">
              Dr. Nageshwar K trained at Osmania Medical College, Hyderabad
              and has spent more than two decades caring for patients with
              complex digestive and liver conditions. His practice spans
              Krishnaveni Hospital, Medisys Hospitals and the Nageshwar
              Gastro &amp; Liver Clinic in Vanasthalipuram.
            </p>

            <dl className="mt-10 grid sm:grid-cols-2 gap-x-10 gap-y-6 max-w-xl border-t border-border pt-8">
              {[
                { t: "Education", v: "MBBS, DM — Osmania Medical College" },
                { t: "Specialisation", v: "Gastroenterologist" },
                { t: "Registration", v: "AP Medical Council · 44317" },
                { t: "Languages", v: "Telugu, Hindi, English" },
              ].map((d) => (
                <div key={d.t}>
                  <dt className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{d.t}</dt>
                  <dd className="mt-1.5 text-sm text-foreground">{d.v}</dd>
                </div>
              ))}
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

      {/* TESTIMONIAL */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="text-[11px] uppercase tracking-[0.22em] text-primary mb-4">Patient stories</div>
            <h2 className="font-display text-3xl md:text-4xl text-foreground leading-tight">
              What our patients say.
            </h2>
            <div className="mt-6 flex items-center gap-3">
              <div className="flex text-gold">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <span className="text-sm text-muted-foreground">4.4 from 88 reviews</span>
            </div>
            <Link to="/stories" className="mt-6 inline-flex items-center gap-2 text-sm text-primary font-medium group">
              All stories <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
            </Link>
          </div>
          <div className="lg:col-span-8 grid md:grid-cols-2 gap-5">
            {[
              { n: "Sunil", w: "Anal Fissure Treatment", t: "Doctor was very friendly and good natured. He explained the issue very well. I strongly recommend him." },
              { n: "Ramakuru V. Rao", w: "Gastric problem", t: "Doctor prescribed medicine and it helped to cure the problem. I am satisfied and would rate 9/10." },
            ].map((q) => (
              <figure key={q.n} className="border border-border bg-card p-7">
                <div className="flex text-gold mb-4">
                  {[...Array(5)].map((_, j) => <Star key={j} className="h-3.5 w-3.5 fill-current" />)}
                </div>
                <blockquote className="text-foreground/85 leading-relaxed text-sm">"{q.t}"</blockquote>
                <figcaption className="mt-5 pt-5 border-t border-border">
                  <div className="font-display text-base text-foreground">{q.n}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{q.w} · Verified patient</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 lg:py-20 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8">
            <h2 className="font-display text-3xl md:text-4xl leading-tight">
              Take the first step toward feeling better.
            </h2>
            <p className="mt-4 text-primary-foreground/80 max-w-xl">
              Book a consultation today. We'll listen carefully, explain
              clearly, and recommend only what's truly needed.
            </p>
            <div className="mt-3 flex items-start gap-2 text-sm text-primary-foreground/70">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
              Lane opp. Bhashyam School, Prashanthi Nagar, Vanasthalipuram, Telangana 500070
            </div>
          </div>
          <div className="lg:col-span-4 flex flex-wrap gap-3 lg:justify-end">
            <a
              href="tel:09949337101"
              className="inline-flex items-center gap-2 rounded-sm bg-primary-foreground text-primary px-6 py-3 text-sm font-medium hover:opacity-90 transition"
            >
              <Phone className="h-4 w-4" /> 099493 37101
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-sm border border-primary-foreground/30 px-6 py-3 text-sm font-medium hover:bg-primary-foreground/10 transition"
            >
              Visit clinic <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
