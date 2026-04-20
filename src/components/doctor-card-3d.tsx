import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ReactNode } from "react";

export const useFocusTilt = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(hover: none) and (pointer: coarse)").matches) return;

    let frame: number;

    const handleMove = (e: MouseEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const x = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
        const y = Math.max(0, Math.min(1, (e.clientY - rect.top) / rect.height));

        const rotateX = (0.5 - y) * 16; 
        const rotateY = (x - 0.5) * 16; 

        el.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        el.style.setProperty("--x", `${x * 100}%`);
        el.style.setProperty("--y", `${y * 100}%`);
      });
    };

    const reset = () => {
      cancelAnimationFrame(frame);
      el.style.transform = "rotateX(0deg) rotateY(0deg)";
      el.style.setProperty("--x", "50%");
      el.style.setProperty("--y", "50%");
    };

    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseleave", reset);

    return () => {
      cancelAnimationFrame(frame);
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", reset);
    };
  }, []);

  return ref;
};

export function DoctorCard3D({ children, className = "", style }: { children: ReactNode, className?: string, style?: any }) {
  const tiltRef = useFocusTilt();
  
  // Remove overflow-hidden directly as it flattens 3D translateZ parallax
  const safeClassName = className.replace("overflow-hidden", "");

  return (
    <>
      <style>{`
        .doctor-card-inner {
          transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);
        }
        .doctor-card-container:hover .doctor-card-inner {
          transition: transform 0.1s linear; 
        }
        .doctor-card-inner > img {
          transform: translateZ(30px) scale(1.05);
          will-change: transform;
          border-radius: inherit;
        }
        .doctor-card-inner > div:not(.reflection-layer) {
          transform: translateZ(60px);
          will-change: transform;
          border-radius: inherit;
        }
      `}</style>
      
      <motion.div
        className="doctor-card-container w-full h-full relative z-10"
        style={{ perspective: "1000px" }}
        animate={{ y: [0, -6, 0, 6, 0] }}
        transition={{
          duration: 6,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      >
        <div
          ref={tiltRef}
          className={`group doctor-card-inner w-full h-full relative ${safeClassName}`}
          style={{ 
            transformStyle: "preserve-3d", 
            "--x": "50%", 
            "--y": "50%",
            ...style
          } as any}
        >
          {children}

          {/* Dynamic Light Follow Glow */}
          <div 
            className="reflection-layer pointer-events-none absolute inset-0 rounded-[inherit] mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50"
            style={{
              background: "radial-gradient(circle at var(--x) var(--y), rgba(255, 255, 255, 0.25), transparent 60%)"
            }}
          />
        </div>
      </motion.div>
    </>
  );
}
