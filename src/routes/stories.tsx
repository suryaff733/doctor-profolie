import { createFileRoute } from "@tanstack/react-router";
import { Star, Quote } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

export const Route = createFileRoute("/stories")({
  head: () => ({
    meta: [
      { title: "Patient Stories — Nageshwar Gastro & Liver Clinic" },
      {
        name: "description",
        content:
          "Read verified patient experiences with Dr. Nageshwar K, gastroenterologist in Hyderabad.",
      },
      { property: "og:title", content: "Patient Stories" },
      {
        property: "og:description",
        content: "Real, verified patient experiences.",
      },
    ],
  }),
  component: StoriesPage,
});

const stories = [
  {
    name: "Sunil",
    when: "5 years ago",
    visited: "Anal Fissure Treatment (Non-Surgical)",
    rec: true,
    text: "Doctor was very friendly and good natured, he explained the issue very well. I strongly recommend him.",
    tags: ["Friendly", "Clear explanation", "Value for money"],
  },
  {
    name: "Ramakuru Venkateswara Rao",
    when: "6 years ago",
    visited: "Gastric problem",
    rec: true,
    text: "I visited for gastric problem, doctor prescribed medicine and it helped to cure the problem. I am satisfied with the treatment and would rate 9/10.",
    tags: ["Effective treatment", "Recommended"],
  },
  {
    name: "Anonymous",
    when: "Recent",
    visited: "Liver consultation",
    rec: true,
    text: "Took the time to walk through every report and explained the long-term plan very clearly. Felt heard for the first time.",
    tags: ["Patient", "Thorough"],
  },
];

function StoriesPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pt-20 pb-16">
        <div className="text-xs uppercase tracking-[0.22em] text-primary mb-4">Patient stories</div>
        <h1 className="font-display text-5xl md:text-6xl text-foreground leading-[1.05] max-w-3xl">
          In their own <span className="italic text-primary">words.</span>
        </h1>

        <div className="mt-10 flex items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="flex text-amber-accent">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
            </div>
            <span className="font-display text-2xl text-foreground">4.4</span>
          </div>
          <div className="text-sm text-muted-foreground">From 88 verified reviews</div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stories.map((s, i) => (
            <article key={i} className="relative rounded-2xl border border-border bg-card p-7 flex flex-col">
              <Quote className="h-8 w-8 text-primary/20 absolute top-6 right-6" />
              <div className="flex text-amber-accent mb-4">
                {[...Array(5)].map((_, j) => <Star key={j} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="text-foreground/85 leading-relaxed">"{s.text}"</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <span key={t} className="text-[11px] uppercase tracking-wider rounded-full bg-secondary text-secondary-foreground px-3 py-1">{t}</span>
                ))}
              </div>
              <div className="mt-6 pt-5 border-t border-border">
                <div className="font-display text-base text-foreground">{s.name}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{s.visited} · {s.when}</div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[var(--cream)] border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20">
          <SectionHeading
            eyebrow="Why patients choose us"
            title="Care that earns trust, visit after visit."
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { v: "86%", l: "Patient recommendation" },
              { v: "27+", l: "Years of practice" },
              { v: "35+", l: "Verified stories" },
              { v: "4.4★", l: "Google rating" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-5xl text-primary">{s.v}</div>
                <div className="text-sm text-muted-foreground mt-2">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
