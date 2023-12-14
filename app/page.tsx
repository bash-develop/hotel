"use client";

import Image from "next/image";
import hero from "@/public/hero.png";
import Rooms from "@/components/rooms";
import Services from "@/components/Services";
import Booking from "@/components/Booking";
import About from "@/components/About";
import Contacts from "@/components/Contacts";
import { Lenis, useLenis } from "@studio-freight/react-lenis";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useFrame, useRect } from "@studio-freight/hamo";
import gsap from "gsap";
import { AnimatePresence } from "framer-motion";
import Preloader from "@/components/preloader";

export default function Home() {
  gsap.registerPlugin(ScrollTrigger);
  const lenisRef = useRef();
  const lenis = useLenis();
  //@ts-ignore
  function raf(time) {
    lenis?.raf(time);
    ScrollTrigger.update();
    requestAnimationFrame(raf);
    // gsap.ticker.add((time) => {
    //   lenis.raf(time * 1000);
    // });
    gsap.ticker.lagSmoothing(0);
  }
  useLayoutEffect(() => {
    requestAnimationFrame(raf);
  }, []);

  const [introOut, setIntroOut] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIntroOut(true);
    }, 2500);
  });
  useEffect(() => {
    if (!introOut) {
      document.documentElement.classList.toggle("intro", true);
    }
    if (!lenis) return;
    if (introOut) {
      lenis.start();
      document.documentElement.classList.toggle("intro", false);
    } else {
      setTimeout(() => {
        lenis.stop();
      }, 0);
      document.documentElement.classList.toggle("intro", true);
    }
  }, [introOut, lenis]);

  useFrame((time: any) => {
    lenis?.raf(time);
  }, 0);

  return (
    <Lenis
      root
      ref={lenisRef}
      options={{
        duration: 1.2,
        smoothTouch: true,
        SmoothScroll: true,
        touchMultiplier: 2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      }}
    >
      <AnimatePresence mode="wait">
        {!introOut && <Preloader />}
      </AnimatePresence>
      <main className="scrollBody main pt-[38px] md:pt-16" id="home">
        <div className="relative ">
          <Image
            placeholder="blur"
            src={hero}
            alt="Отель София"
            id="Домой"
            className="w-[120vw] sm:w-screen"
          />
          <Booking />
        </div>
        <Services />
        <Rooms />
        <About />
        <Contacts />
      </main>
      <div className="mobile_call absolute"></div>
      <div className="mobile_reserve absolute"></div>
    </Lenis>
  );
}
