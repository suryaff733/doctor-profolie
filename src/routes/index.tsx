import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import { ArrowRight, Phone, MapPin, Star, ShieldCheck, Stethoscope, Activity, Heart, CheckCircle2, Clock, Mail } from "lucide-react";
import doctorImg from "@/assets/doctor-portrait.jpg";
import endoscopyImg from "@/assets/endoscopy.jpg";
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
  useEffect(() => {
    let ctx: any;
    const initAnimation = () => {
      const gsap = (window as any).gsap;
      const ScrollTrigger = (window as any).ScrollTrigger;

      if (!gsap || !ScrollTrigger) {
        setTimeout(initAnimation, 50);
        return;
      }

      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        const tl = gsap.timeline();

        // --- SPLASH INTRO SEQUENCE ---

        // Box fade in
        tl.fromTo(".logo-box",
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1, duration: 0.6, ease: "power3.out" }
        );

        // Draw left line
        tl.to(".logo-line:nth-child(1)", {
          strokeDashoffset: 0,
          duration: 0.4,
          ease: "power2.inOut"
        });

        // Draw diagonal
        tl.to(".logo-line:nth-child(2)", {
          strokeDashoffset: 0,
          duration: 0.4,
          ease: "power2.inOut"
        }, "-=0.15");

        // Draw right line
        tl.to(".logo-line:nth-child(3)", {
          strokeDashoffset: 0,
          duration: 0.4,
          ease: "power2.inOut"
        }, "-=0.2");

        // Pop in the dots
        tl.to(".logo-dot", {
          opacity: 1,
          duration: 0.2,
          stagger: 0.1
        }, "-=0.2");

        // Glow pulse
        tl.to(".logo-box", {
          scale: 1.05,
          duration: 0.5,
          yoyo: true,
          repeat: 1,
          ease: "sine.inOut"
        });

        // Cinematic Zoom transition
        tl.to(".logo-box", {
          scale: 12,
          opacity: 0,
          duration: 0.8,
          ease: "power4.inOut"
        });

        // Remove intro
        tl.to(".intro", {
          opacity: 0,
          duration: 0.4,
          onComplete: () => {
            const introEl = document.querySelector(".intro") as HTMLElement;
            if (introEl) introEl.style.display = "none";
          }
        }, "-=0.6");


        // --- HERO SEQUENCE EXPLOSION ---
        tl.addLabel("heroStart", "-=0.3");

        // Background WebAura grid lines
        tl.from(".webaura-line", {
          opacity: 0,
          duration: 1.5,
          ease: "power2.inOut",
          stagger: 0.2
        }, "heroStart");

        // Taglines
        tl.from(".hero-tagline", {
          y: 20,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.1
        }, "heroStart");

        // Main heading line 1
        tl.from(".hero-title-1", {
          y: 80,
          opacity: 0,
          duration: 1,
          ease: "power3.out"
        }, "heroStart+=0.3");

        // Main heading line 2
        tl.from(".hero-title-2", {
          y: 80,
          opacity: 0,
          duration: 1,
          ease: "power3.out"
        }, "heroStart+=0.5");

        // Doctor image
        tl.from(".hero-image", {
          x: 100,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out"
        }, "heroStart+=0.4");

        // Buttons & features
        tl.from(".hero-buttons", {
          y: 20,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out"
        }, "heroStart+=0.6");

        tl.from(".hero-feature", {
          y: 20,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.1
        }, "heroStart+=0.8");

        // --- CONTINUOUS BACKGROUND MOTIONS ---

        // Anti-Gravity Floating (🔥 KEY EFFECT)
        gsap.to(".hero-image", {
          y: -12,
          duration: 3,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true
        });

        // Liquid Morphing Background Blobs
        gsap.utils.toArray(".liquid-blob").forEach((el: any, i: number) => {
          gsap.to(el, {
            x: i % 2 === 0 ? "10vw" : "-10vw",
            y: i % 2 === 0 ? "-5vh" : "10vh",
            scale: 1.2,
            rotate: 45,
            borderRadius: i % 2 === 0 ? "60% 40% 30% 70% / 60% 30% 70% 40%" : "30% 60% 70% 40% / 50% 60% 30% 60%",
            duration: 8 + i * 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
          });
        });

        // Floating icons
        gsap.utils.toArray(".floating-icon").forEach((el: any, i: number) => {
          gsap.to(el, {
            y: -8,
            duration: 2 + i * 0.3,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
          });
        });

        // --- SCROLL INTERACTIVE TRIGGERS ---

        // Scroll Reveal (Cinematic)
        gsap.utils.toArray(".fade-up").forEach((el: any) => {
          gsap.from(el, {
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
            },
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
          });
        });

        // Stagger Cards
        gsap.from(".service-card", {
          scrollTrigger: {
            trigger: ".services",
            start: "top 80%"
          },
          y: 60,
          opacity: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out"
        });

        // About Section Split Animation (Cinematic Refinement)
        gsap.from(".about-title-group > *", {
          scrollTrigger: ".about",
          y: 40,
          opacity: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power3.out"
        });

        gsap.from(".about-image-wrapper", {
          scrollTrigger: ".about",
          scale: 0.94,
          opacity: 0,
          duration: 1.5,
          ease: "power3.out"
        });

        // Facility Section Fade
        gsap.from(".facility-image", {
          scrollTrigger: ".facility",
          y: 40,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out"
        });
        
        gsap.from(".facility-text > *", {
          scrollTrigger: ".facility",
          y: 20,
          opacity: 0,
          stagger: 0.1,
          duration: 1,
          ease: "power3.out"
        });

        // Contact Section Fade
        gsap.from(".contact-card", {
          scrollTrigger: "#contact",
          y: 30,
          opacity: 0,
          stagger: 0.1,
          duration: 1,
          ease: "power3.out"
        });
        
        gsap.from(".contact-map", {
          scrollTrigger: "#contact",
          scale: 0.96,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out"
        });

        // About Image Gentle Anti-Gravity Float
        gsap.to(".about-image", {
          y: -8,
          duration: 5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
        });

        // Parallax Effect
        gsap.to(".hero-image-parallax", {
          yPercent: 20,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero",
            scrub: true
          }
        });

        gsap.to(".hero-glow", {
          yPercent: 30,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero",
            scrub: true
          }
        });

        // Button Micro Interaction
        document.querySelectorAll(".btn").forEach((btn: any) => {
          btn.addEventListener("mouseenter", () => {
            gsap.to(btn, { y: -3, duration: 0.2 });
          });

          btn.addEventListener("mouseleave", () => {
            gsap.to(btn, { y: 0, duration: 0.2 });
          });

          btn.addEventListener("mousedown", () => {
            gsap.to(btn, { scale: 0.95, duration: 0.1 });
          });

          btn.addEventListener("mouseup", () => {
            gsap.to(btn, { scale: 1, duration: 0.1 });
          });
        });
      });
    };

    initAnimation();

    return () => {
      if (ctx) ctx.revert();
    };
  }, []);

  return (
    <>
      {/* FULLSCREEN SPLASH INTRO */}
      <div className="intro fixed inset-0 z-[9999] bg-[#05090C] flex justify-center items-center pointer-events-none">
        <div className="logo-box relative w-[140px] h-[140px] rounded-[30px] bg-[var(--surface)] shadow-2xl shadow-black/50 flex flex-col items-center justify-center">
          <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
            {/* Left vertical line */}
            <line x1="30" y1="25" x2="30" y2="75" className="logo-line" style={{ strokeDasharray: 100, strokeDashoffset: 100 }} />
            {/* Diagonal */}
            <line x1="30" y1="25" x2="70" y2="75" className="logo-line" style={{ strokeDasharray: 100, strokeDashoffset: 100 }} />
            {/* Right vertical */}
            <line x1="70" y1="25" x2="70" y2="75" className="logo-line" style={{ strokeDasharray: 100, strokeDashoffset: 100 }} />
            {/* Top dot */}
            <circle cx="30" cy="25" r="7" className="logo-dot" fill="currentColor" opacity="0" stroke="none" />
            {/* Bottom dot */}
            <circle cx="70" cy="75" r="7" className="logo-dot" fill="currentColor" opacity="0" stroke="none" />
          </svg>
        </div>
      </div>

      {/* HERO */}
      <section id="home" className="hero relative border-b border-border bg-[var(--gradient-hero)] overflow-hidden">
        {/* Cinematic WebGL-esque Gradient Mesh */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 mix-blend-multiply opacity-[0.8] dark:mix-blend-screen dark:opacity-[0.15]">
          <div className="liquid-blob absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-primary/20 rounded-[40%_60%_70%_30%/40%_40%_60%_50%] filter blur-[80px]" />
          <div className="liquid-blob absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-blue-300/30 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] filter blur-[100px]" />
        </div>

        {/* WebAura Detail Lines */}
        <div className="webaura-line absolute top-10 left-10 w-10 h-10 border-t border-l border-primary/20 pointer-events-none hidden md:block" />
        <div className="webaura-line absolute bottom-10 right-10 w-10 h-10 border-b border-r border-primary/20 pointer-events-none hidden md:block" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-20 pb-20 lg:pt-32 lg:pb-36 grid lg:grid-cols-12 gap-14 items-center min-h-[85vh]">
          <div className="lg:col-span-7">
            <div className="hero-tagline inline-flex items-center gap-2 rounded-sm border border-border bg-card px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] text-foreground/70 shadow-sm relative overflow-hidden">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              Specialist Gastroenterology & Liver Care
            </div>

            <h1 className="mt-8 font-display text-5xl md:text-6xl lg:text-[5rem] lg:leading-[1.05] tracking-tight">
              <div className="overflow-hidden pb-2">
                <div className="hero-title-1 font-bold text-foreground">
                  GASTRO CARE
                </div>
              </div>
              <div className="overflow-hidden">
                <div className="hero-title-2 font-serif font-medium italic text-muted-foreground pt-1">
                  &amp; LIVER HEALTH
                </div>
              </div>
            </h1>

            <p className="hero-tagline font-telugu text-base text-muted-foreground mt-8">
              నాగేశ్వర్ గ్యాస్ట్రో &amp; కాలేయ క్లినిక్
            </p>

            <p className="hero-tagline mt-6 max-w-xl text-base text-foreground/80 leading-relaxed">
              Dr. Nageshwar K's prestigious medical training spans Gandhi Medical College
              and Osmania Medical College. He has spent more than two decades caring for patients with
              complex digestive and liver conditions. He currently practices at
              Krishnaveni Hospital in Hayat Nagar and his own Nageshwar
              Gastro &amp; Liver Clinic in Vanasthalipuram.
            </p>

            <div className="hero-buttons mt-10 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn magnetic-strong inline-flex items-center gap-2 rounded-sm bg-primary text-primary-foreground px-6 py-3.5 text-sm font-medium transition-colors"
              >
                Book a consultation <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="tel:09949337101"
                className="btn magnetic inline-flex items-center gap-2 rounded-sm border border-border bg-card px-6 py-3.5 text-sm font-medium text-foreground hover:bg-[var(--surface)] transition-colors"
              >
                <Phone className="h-4 w-4 text-primary" /> 099493 37101
              </a>
            </div>

            <ul className="mt-12 grid sm:grid-cols-2 gap-3 max-w-xl text-sm text-foreground/80">
              {[
                "MD, DM qualified gastroenterologist",
                "27+ years of clinical experience",
                "Verified medical registration",
                "Same-day endoscopy reports",
              ].map((t) => (
                <li key={t} className="hero-feature flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5 relative hero-image-parallax">
            <div className="hero-image relative aspect-[4/5] overflow-hidden rounded-sm border border-border bg-white shadow-[var(--shadow-elegant)]">
              <img
                src={doctorImg}
                alt="Dr. Nageshwar K, Gastroenterologist"
                width={1024}
                height={1280}
                className="h-full w-full object-cover object-center"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/95 via-primary/60 to-transparent p-6">
                <div className="text-primary-foreground">
                  <div className="font-display text-xl">Dr. Nageshwar K</div>
                  <div className="text-xs text-primary-foreground/80 mt-0.5">
                    MBBS, MD, DM (Gastroenterology) · Reg. 44317
                  </div>
                </div>
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute -bottom-16 right-0 opacity-50 hidden lg:flex flex-col items-center gap-2 text-xs uppercase tracking-widest font-medium text-muted-foreground rotate-90 origin-right pointer-events-none">
              Explore
              <div className="w-12 h-px bg-current" />
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="fade-up border-b border-border bg-[var(--surface)]">
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
      <section id="services" className="services mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-28 overflow-hidden">
        <div className="grid lg:grid-cols-12 gap-10 items-end mb-14 fade-up">
          <div className="lg:col-span-8">
            <SectionHeading
              eyebrow="Areas of practice"
              title="Comprehensive care for digestive & liver health"
              description="From routine consultations to advanced endoscopic procedures, every patient receives focused, evidence-based care."
            />
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <a href="#services" onClick={(e) => { e.preventDefault(); document.getElementById('services')?.scrollIntoView({behavior: 'smooth'}); }} className="magnetic inline-flex items-center gap-2 text-sm text-primary font-medium group transition-transform px-4 py-2 border border-transparent hover:border-primary/20 rounded-full">
              View all services
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
            </a>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-border">
          {services.map((s) => (
            <div
              key={s.title}
              className="service-card group relative border-r border-b border-border bg-card p-7 hover:bg-[var(--surface)] shadow-none hover:shadow-[var(--shadow-elegant)] hover:z-10 transition-colors duration-500"
              style={{ willChange: "transform, opacity, box-shadow" }}
            >
              <div className="h-11 w-11 rounded-sm bg-primary/8 flex items-center justify-center text-primary mb-5 group-hover:scale-110 group-hover:bg-primary/15 transition-all duration-500">
                <s.icon className="floating-icon h-5 w-5" />
              </div>
              <h3 className="font-display text-lg text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DOCTOR FEATURE */}
      <section id="about" className="about bg-[var(--surface)] border-y border-border overflow-hidden">
        <div className="about-section mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32 grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          <div className="about-image-wrapper lg:col-span-5 relative" style={{ willChange: "transform, opacity" }}>
            {/* Cinematic Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-[radial-gradient(circle,var(--tw-gradient-stops))] from-primary/15 via-primary/5 to-transparent blur-[40px] -z-10 pointer-events-none" />
            
            <div className="about-image aspect-[4/5] overflow-hidden rounded-[24px] border border-border bg-white shadow-[0_25px_60px_-15px_rgba(0,0,0,0.1)] transition-transform duration-500 hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.15)] hover:-translate-y-1" style={{ willChange: "transform" }}>
              <img
                src={doctorImg}
                alt="Dr. Nageshwar K"
                width={1024}
                height={1280}
                loading="lazy"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
          <div className="about-text lg:col-span-7" style={{ willChange: "transform, opacity" }}>
            <div className="about-title-group">
              <div className="text-[11px] uppercase tracking-[0.22em] text-primary mb-5 font-bold">
                About the doctor
              </div>
              <h2 className="about-title font-display text-4xl md:text-5xl text-foreground leading-tight">
                Dr. Nageshwar K
              </h2>
              <p className="mt-3 text-sm md:text-base text-muted-foreground font-medium">
                MBBS, MD, DM (Gastroenterology) · 27 years of experience
              </p>
              <p className="mt-8 text-base md:text-lg text-foreground/85 leading-relaxed max-w-xl">
                Dr. Nageshwar K trained at Osmania Medical College, Hyderabad
                and has spent more than two decades caring for patients with
                complex digestive and liver conditions. His practice spans
                Krishnaveni Hospital, Medisys Hospitals and the Nageshwar
                Gastro &amp; Liver Clinic in Vanasthalipuram.
              </p>
            </div>

            <dl className="mt-10 grid sm:grid-cols-2 gap-x-10 gap-y-6 max-w-xl border-t border-border pt-8">
              {[
                { t: "Education", v: "MBBS (Gandhi), MD (NTR UHS), DM (Osmania)" },
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
              className="btn mt-10 inline-flex items-center gap-2 text-sm font-medium text-primary group transition-colors"
            >
              Read full profile <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
            </Link>
          </div>
        </div>
      </section>

      {/* CLINIC / ENDOSCOPY FACILITY FEATURE */}
      <section className="facility fade-up mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32 overflow-hidden border-b border-border">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          <div className="facility-text lg:col-span-6 lg:order-2">
            <div className="text-[11px] uppercase tracking-[0.22em] text-primary mb-5 font-bold">
              State-of-the-Art Facilities
            </div>
            <h2 className="font-display text-3xl md:text-4xl text-foreground leading-tight">
              Advanced Endoscopy & Diagnostics
            </h2>
            <p className="mt-6 text-base md:text-lg text-foreground/80 leading-relaxed max-w-xl">
              Precision matters in gastroenterology. Our procedure rooms are equipped with leading-edge endoscopic technologies to ensure accurate diagnostics and minimally invasive therapeutic procedures. 
            </p>
            <p className="mt-4 text-base md:text-lg text-foreground/80 leading-relaxed max-w-xl">
              From sophisticated imaging to rigorous sterilization protocols, we prioritize patient safety and comfort—providing clear, same-day reporting so you never have to wait anxiously for answers.
            </p>
            
            <ul className="mt-8 grid sm:grid-cols-2 gap-3 text-sm text-foreground/80">
              {[
                "High-Definition Imaging",
                "Strict Sterilization Protocols",
                "Advanced Therapeutic Tools",
                "Comfort-focused Environment"
              ].map((t) => (
                <li key={t} className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                  <span className="font-medium text-foreground">{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-6 lg:order-1 relative">
            <div className="facility-image aspect-[4/3] rounded-[24px] overflow-hidden shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] border border-border">
               <img 
                 src={endoscopyImg} 
                 alt="Dr Nageshwar performing endoscopy" 
                 width={1024} 
                 height={768} 
                 loading="lazy" 
                 className="w-full h-full object-cover object-center scale-105 hover:scale-100 transition-transform duration-[2s] ease-out"
               />
               <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6 pointer-events-none">
                 <div className="text-white/90 text-sm font-medium">In-house Endoscopy Suite</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section id="stories" className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-28 overflow-hidden">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 fade-up">
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
            <a href="#stories" onClick={(e) => { e.preventDefault(); document.getElementById('stories')?.scrollIntoView({behavior: 'smooth'}); }} className="btn mt-6 inline-flex items-center gap-2 text-sm text-primary font-medium group transition-colors">
              All stories <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
            </a>
          </div>
          <div className="lg:col-span-8 grid md:grid-cols-2 gap-5">
            {[
              { n: "Sunil", w: "Anal Fissure Treatment", t: "Doctor was very friendly and good natured. He explained the issue very well. I strongly recommend him." },
              { n: "Ramakuru V. Rao", w: "Gastric problem", t: "Doctor prescribed medicine and it helped to cure the problem. I am satisfied and would rate 9/10." },
            ].map((q) => (
              <figure key={q.n} className="fade-up h-full border border-border bg-card p-7 hover:shadow-[var(--shadow-elegant)] transition-colors duration-500" style={{ willChange: "transform, opacity" }}>
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

      {/* CONTACT (Rich Map Integration) */}
      <section id="contact" className="mx-auto max-w-7xl px-6 lg:px-10 py-24 overflow-hidden border-t border-border">
        <div className="fade-up mb-12">
          <div className="text-[11px] uppercase tracking-[0.22em] text-primary mb-4">Location</div>
          <h2 className="font-display text-4xl md:text-5xl text-foreground leading-tight">
            Visit us, or call.
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Our team typically responds within minutes during clinic hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5 space-y-4 min-w-0">
            {[
              {
                icon: MapPin,
                title: "Address",
                body: (
                  <a
                    href="https://maps.app.goo.gl/UoF5dBZSc6yf5x4J9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    Lane opposite Bhashyam School,<br />
                    Prashanthi Nagar, Vanasthalipuram,<br />
                    Telangana 500070
                  </a>
                ),
              },
              {
                icon: Phone,
                title: "Phone",
                body: <a href="tel:09949337101" className="text-primary hover:underline font-medium">099493 37101</a>,
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
              <div key={c.title} className="contact-card rounded-xl border border-border bg-white shadow-sm p-5 flex gap-4 transition-transform hover:shadow-md hover:-translate-y-0.5 duration-300">
                <div className="h-10 w-10 shrink-0 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                  <c.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{c.title}</div>
                  <div className="mt-1 text-foreground/85 leading-relaxed text-sm">{c.body}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-7 min-w-0">
            <div className="contact-map rounded-2xl overflow-hidden border border-border shadow-[var(--shadow-elegant)] aspect-[4/3] lg:aspect-auto lg:h-full min-h-[480px] bg-muted relative">
              <iframe
                title="Clinic location map"
                src="https://www.google.com/maps?q=Vanasthalipuram,+Telangana+500070&output=embed"
                className="w-full h-full border-0 grayscale-[20%] contrast-125 opacity-90 transition-opacity hover:opacity-100 duration-500"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        {/* Floating Navy CTA */}
        <div className="fade-up mt-16 rounded-2xl bg-primary shadow-xl border border-primary-foreground/10 p-10 md:p-14 text-primary-foreground flex flex-col md:flex-row items-start md:items-center justify-between gap-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent pointer-events-none" />
          <div className="relative">
            <h2 className="font-display text-3xl md:text-4xl text-white">Need to speak with us today?</h2>
            <p className="mt-2 text-primary-foreground/85 text-sm md:text-base max-w-lg">
              Our team typically responds within minutes during clinic hours. We're here to answer your questions and arrange priority scheduling if necessary.
            </p>
          </div>
          <a
            href="tel:09949337101"
            className="magnetic relative flex shrink-0 items-center gap-2 rounded-xl bg-gold text-foreground px-8 py-4 text-sm font-semibold hover:opacity-90 shadow-lg shadow-gold/20 transition-all"
          >
            <Phone className="h-4 w-4" /> Call 099493 37101
          </a>
        </div>
      </section>
    </>
  );
}
