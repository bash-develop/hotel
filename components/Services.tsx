import React, { useRef } from "react";
import Image from "next/image";
import image2 from "@/public/image2.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {
  Coffee,
  Car,
  Washer,
  Wifi,
  Bed,
  Tag,
  ChefHat,
  Shield,
  ArrowRight,
  Pin,
  Diamond,
} from "@/components/icons";

const perks = [
  {
    icon: Coffee,
    title: "Бесплатные напитки",
    subtitle: "Чай, кофе, вода 24/7",
  },
  {
    icon: Car,
    title: "Прокат авто и парковка",
    subtitle: "Удобство в каждой детали",
  },
  {
    icon: Washer,
    title: "Прачечная",
    subtitle: "Чистота без забот",
  },
  {
    icon: Wifi,
    title: "Бесплатный Wi-Fi",
    subtitle: "Весь отель покрыт",
  },
];

const features = [
  {
    num: "01",
    icon: Bed,
    title: "Большой выбор комнат",
    desc: "Комнаты различной вместимости с разными типами кроватей, а также кроватями для детей.",
  },
  {
    num: "02",
    icon: Tag,
    title: "Низкая цена при отличном качестве",
    desc: "Цены от 3100 рублей. Каждый номер оборудован телевизором, кондиционером, а также собственной душевой комнатой.",
  },
  {
    num: "03",
    icon: ChefHat,
    title: "Кухня",
    desc: "На территории отеля оборудована кухня, так что вы всегда сможете заказать вкусный завтрак в номер.",
  },
  {
    num: "04",
    icon: Shield,
    title: "Забота о вашем комфорте",
    desc: "Вежливый персонал, чистота, безопасность и внимание к каждой мелочи.",
  },
];

function Services() {
  gsap.registerPlugin(ScrollTrigger);
  const container = useRef<HTMLDivElement>(null);
  const tl = useRef<GSAPTimeline>();

  useGSAP(
    () => {
      tl.current = gsap.timeline({
        smoothChildTiming: true,
        paused: true,
        scrollTrigger: {
          scrub: 1,
          trigger: ".perk-item",
          start: "bottom 100%",
          end: "+=200",
        },
      });
      tl.current.addLabel("toTop").from(".perk-item", {
        y: "-60",
        opacity: 0,
        stagger: 0.15,
      });

      gsap.utils.toArray<HTMLElement>(".feature-line").forEach((line) => {
        gsap.from(line, {
          width: 0,
          scrollTrigger: {
            scrub: 1,
            trigger: line,
            start: "center center+=200px",
            end: "+=200",
          },
        });
      });
    },
    { scope: container }
  );

  return (
    <div
      id="servise"
      ref={container}
      className="why relative w-full overflow-hidden bg-[#f5f0e8] py-14 lg:py-20"
    >
      <div className="pointer-events-none absolute -right-32 -top-40 h-[420px] w-[420px] rounded-full border border-[#ddcfb6]/70" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-[360px] w-[360px] rounded-full border border-[#ddcfb6]/50" />

      <div className="relative mx-auto w-full max-w-[1240px] px-4">
        <div className="flex flex-col divide-y divide-[#e7dcc8] rounded-[28px] border border-[#eee3d0] bg-white/70 px-4 py-2 shadow-[0_18px_50px_rgba(120,95,60,0.08)] backdrop-blur md:flex-row md:items-center md:divide-x md:divide-y-0 md:px-2 md:py-1">
          {perks.map((perk, i) => {
            const Icon = perk.icon;
            return (
              <div
                key={i}
                className="perk-item flex flex-1 items-center gap-4 px-3 py-4 md:px-6"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#e5d8c0] bg-[#f4ebda] text-[#9a7742]">
                  <Icon className="h-7 w-7" />
                </div>
                <div>
                  <div className="text-[15px] font-normal leading-tight text-[#2b251d]">
                    {perk.title}
                  </div>
                  <div className="mt-1 text-[10px] uppercase tracking-[0.18em] text-[#b08a4f]">
                    {perk.subtitle}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 grid grid-cols-1 items-center gap-12 lg:mt-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <div>
            <div className="flex items-center gap-4">
              <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#8a7a63]">
                Преимущества отеля
              </span>
              <span className="h-px w-16 bg-[#d8c9ae]" />
            </div>

            <h2 className="mt-5 font-display text-4xl font-medium leading-[1.1] tracking-tight text-[#26221c] sm:text-5xl lg:text-[52px]">
              Почему вам стоит
              <br />
              <span className="font-normal text-[#b08a4f]">
                остановиться здесь
              </span>
            </h2>

            <p className="mt-6 max-w-[520px] text-[15px] leading-relaxed text-[#6b6157]">
              Мы создали пространство, где каждая деталь работает на ваш
              комфорт. Уютная атмосфера, продуманный сервис и выгодное
              расположение — всё, чтобы вы чувствовали себя как дома.
            </p>

            <div className="mt-9 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2">
              {features.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <div key={i} className="flex gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#e5d8c0] bg-[#f4ebda] text-[#9a7742]">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="font-serif text-lg italic text-[#b08a4f]">
                          {feature.num}
                        </span>
                        <span className="feature-line h-px w-10 bg-[#d8c9ae]" />
                      </div>
                      <h3 className="mt-2 text-[17px] font-medium leading-snug text-[#26221c]">
                        {feature.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-[#7a7062]">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <a
                href="#"
                data-tl-booking-open="true"
                className="group inline-flex items-center gap-3 rounded-full bg-[#3b2f24] px-7 py-4 text-sm font-medium text-white shadow-lg transition-colors duration-300 hover:bg-[#54402d]"
              >
                Забронировать номер
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <div className="flex items-center gap-2 text-sm text-[#8a7a63]">
                <Diamond className="h-3.5 w-3.5 text-[#b08a4f]" />
                Ваш комфорт — наша главная цель
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative h-[420px] w-full overflow-hidden rounded-[28px] sm:h-[520px] lg:h-[580px]">
              <Image
                src={image2}
                alt="Ресепшн отеля София"
                fill
                placeholder="blur"
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="absolute bottom-5 left-5 right-5 flex items-center gap-3 rounded-2xl bg-white/95 px-5 py-4 shadow-xl sm:left-auto sm:right-5 sm:w-[280px]">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f4ebda] text-[#9a7742]">
                <Pin className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium text-[#26221c]">
                  Удобное расположение
                </div>
                <div className="text-xs text-[#8a7a63]">
                  в самом сердце города
                </div>
              </div>
              <ArrowRight className="h-4 w-4 shrink-0 text-[#9a7742]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
