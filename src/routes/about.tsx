import { createFileRoute } from "@tanstack/react-router";
import doctorImg from "@/assets/doctor-portrait.jpg";
import clinicImg from "@/assets/clinic-interior.jpg";
import { SectionHeading } from "@/components/section-heading";
import { GraduationCap, Award, Briefcase } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Dr. Nageshwar K — Gastroenterologist in Hyderabad" },
      {
        name: "description",
        content:
          "Dr. Nageshwar K, MBBS, DM (Gastroenterology) — 27 years of experience treating digestive and liver conditions in Hyderabad.",
      },
      { property: "og:title", content: "About Dr. Nageshwar K" },
      {
        property: "og:description",
        content: "Senior gastroenterologist with 27 years of experience.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="border-b border-border bg-[var(--gradient-hero)]">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-20 pb-16">
          <div className="text-[11px] uppercase tracking-[0.22em] text-primary mb-4">About</div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.08] max-w-4xl">
            Two decades of expertise. Always rooted in care.
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-14 items-start">
        <div className="lg:col-span-5">
          <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-[var(--shadow-card)]">
            <img src={doctorImg} alt="Dr. Nageshwar K" width={1024} height={1280} loading="lazy" className="h-full w-full object-cover" />
          </div>
        </div>
        <div className="lg:col-span-7 space-y-6 text-foreground/85 leading-relaxed">
          <p className="text-lg">
            Dr. Nageshwar K is a senior gastroenterologist practising in
            Hyderabad. After completing his MBBS at Osmania Medical College in
            1999, he went on to earn his DM in Gastroenterology from the same
            institution in 2008.
          </p>
          <p>
            Over a 27-year career, he has cared for thousands of patients with
            conditions ranging from common gastric complaints to complex liver
            disease. He believes deeply in unhurried consultations — taking
            the time to understand each patient's history, explain the
            diagnosis in plain language, and recommend only what is truly
            necessary.
          </p>
          <p>
            His practice spans Krishnaveni Hospital, Medisys Hospitals and
            the Nageshwar Gastro &amp; Liver Clinic in Vanasthalipuram, where he
            sees patients across Telangana and Andhra Pradesh.
          </p>

          <div className="grid sm:grid-cols-3 gap-5 pt-6">
            {[
              { icon: GraduationCap, label: "Education", value: "MBBS, DM (Gastro)" },
              { icon: Briefcase, label: "Experience", value: "27 years" },
              { icon: Award, label: "Registration", value: "APMC · 44317" },
            ].map((s) => (
              <div key={s.label} className="rounded-2xl border border-border bg-card p-5">
                <s.icon className="h-5 w-5 text-primary" />
                <div className="text-xs uppercase tracking-wider text-muted-foreground mt-3">{s.label}</div>
                <div className="font-display text-lg text-foreground mt-1">{s.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24">
        <SectionHeading eyebrow="Career" title="A practice built on experience" />
        <div className="mt-12 border-l border-border pl-8 space-y-10 max-w-3xl">
          {[
            { y: "2009 — Present", t: "Gastroenterologist", o: "Ozone Hospitals" },
            { y: "2003 — 2007", t: "General Physician", o: "Global Hospitals" },
            { y: "2008", t: "DM, Gastroenterology", o: "Osmania Medical College, Hyderabad" },
            { y: "1999", t: "MBBS", o: "Osmania Medical College, Hyderabad" },
          ].map((e) => (
            <div key={e.y} className="relative">
              <span className="absolute -left-[37px] top-2 h-3 w-3 rounded-full bg-primary ring-4 ring-background" />
              <div className="text-xs uppercase tracking-wider text-muted-foreground">{e.y}</div>
              <div className="font-display text-xl text-foreground mt-1">{e.t}</div>
              <div className="text-sm text-foreground/70">{e.o}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[var(--surface)] border-y border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div className="aspect-[16/10] rounded-3xl overflow-hidden shadow-[var(--shadow-card)]">
            <img src={clinicImg} alt="Clinic interior" width={1600} height={1024} loading="lazy" className="h-full w-full object-cover" />
          </div>
          <div>
            <SectionHeading
              eyebrow="The clinic"
              title="A calm, modern space — designed for healing."
              description="Our Vanasthalipuram clinic is built around patient comfort. Quiet waiting areas, modern diagnostic equipment, and a team trained to make every visit feel reassuring."
            />
          </div>
        </div>
      </section>
    </>
  );
}
