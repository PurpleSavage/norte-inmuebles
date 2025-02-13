"use client";
import Main from "@/components/Main";
import Services from "@/components/Services";
import Technology from "@/components/Technology";
import { useEffect, useRef } from "react";
import Guide from "@/components/Guide";
import Lenis from "lenis";
import Testimonials from "@/components/Testimonials";
export default function Home() {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,
      lerp: 0.1, // Controla la suavidad del scroll (0 a 1)
      wheelMultiplier: 1, // Ajusta la sensibilidad del scroll
      infinite: false, // Evita que el scroll sea infinito
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    lenisRef.current = lenis;

    return () => {
      lenis.destroy(); 
    };
  }, []);

  return (
    <div className="min-h-screen md:p-4 space-y-40 w-full " >
      <Main />
      <Services />
      <Guide />
      <Technology />
      <Testimonials/>
    </div>
  );
}
