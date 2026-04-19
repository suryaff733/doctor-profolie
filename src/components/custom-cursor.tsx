import { useEffect, useRef } from "react";
import { useRouterState } from "@tanstack/react-router";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const router = useRouterState();

  useEffect(() => {
    const gsap = (window as any).gsap;
    if (!gsap || !cursorRef.current) return;

    // Only activate on fine pointer devices (desktop)
    if (window.matchMedia("(pointer: fine)").matches) {
      // Safely hide default cursor
      document.body.style.cursor = "none";
      const style = document.createElement("style");
      style.innerHTML = `a, button, input, [role="button"] { cursor: none !important; }`;
      document.head.appendChild(style);
      
      const cursor = cursorRef.current;
      
      // Smooth lerp mouse follower
      const moveCursor = (e: MouseEvent) => {
        gsap.to(cursor, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.15,
          ease: "power3.out"
        });
      };

      window.addEventListener("mousemove", moveCursor);

      const attachMagnetic = () => {
        document.querySelectorAll(".magnetic, .magnetic-strong, a, button").forEach((el: any) => {
          if (el.dataset.magneticInit) return;
          el.dataset.magneticInit = "true";

          el.addEventListener("mousemove", (e: MouseEvent) => {
            // Morphing cursor state on hover
            gsap.to(cursor, { 
              scale: el.classList.contains("magnetic-strong") ? 2.5 : 1.5, 
              backgroundColor: "rgba(15,47,58,0.1)",
              border: "1px solid rgba(15,47,58,0.4)",
              duration: 0.2 
            });

            // Magnetic attraction pull
            if (el.classList.contains("magnetic") || el.classList.contains("magnetic-strong")) {
              const rect = el.getBoundingClientRect();
              const x = e.clientX - rect.left - rect.width / 2;
              const y = e.clientY - rect.top - rect.height / 2;
              
              const pullStr = el.classList.contains("magnetic-strong") ? 0.3 : 0.15;

              gsap.to(el, {
                x: x * pullStr, 
                y: y * pullStr,
                scale: 1.05,
                duration: 0.4,
                ease: "power2.out"
              });
            }
          });

          el.addEventListener("mouseleave", () => {
            // Restore normal cursor
            gsap.to(cursor, { 
              scale: 1, 
              backgroundColor: "#0f2f3a",
              border: "none",
              duration: 0.2 
            });
            
            // Revert magnetic element organically (elastic snap back)
            if (el.classList.contains("magnetic") || el.classList.contains("magnetic-strong")) {
              gsap.to(el, { x: 0, y: 0, scale: 1, duration: 0.7, ease: "elastic.out(1, 0.3)" });
            }
          });
        });
      };

      attachMagnetic();
      
      // Reattach simply if dom mutates
      const observer = new MutationObserver(attachMagnetic);
      observer.observe(document.body, { childList: true, subtree: true });

      return () => {
        window.removeEventListener("mousemove", moveCursor);
        observer.disconnect();
        document.body.style.cursor = "auto";
        style.remove();
      };
    }
  }, [router.location.pathname]);

  return (
    <div 
      ref={cursorRef} 
      className="hidden md:block fixed top-0 left-0 w-3.5 h-3.5 bg-[#0f2f3a] rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 shadow-[0_0_15px_rgba(15,47,58,0.3)] transition-colors"
      style={{ willChange: "transform, width, height" }}
    />
  );
}
