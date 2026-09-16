"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import standard2 from "@/public/2standard.png";
import beds2 from "@/public/2beds.png";
import standard2Plus from "@/public/2stand+.png";
import super3 from "@/public/3super.png";
import luxRoom from "@/public/luxRoom.png";
import stand4 from "@/public/4stand.png";
import stand5 from "@/public/5standard.png";
import stand6 from "@/public/6standard.png";
import {
  Bed,
  Wifi,
  Tv,
  Sofa,
  Users,
  Sparkle,
  Shield,
  Leaf,
  ArrowLeft,
  ArrowRight,
} from "@/components/icons";
import Reveal from "@/components/Reveal";

type AmenityKey =
  | "king"
  | "double"
  | "twin"
  | "three"
  | "four"
  | "five"
  | "six"
  | "sofa"
  | "wifi"
  | "tv";

const amenities: Record<
  AmenityKey,
  { icon: React.ComponentType<{ className?: string }>; label: string }
> = {
  king: { icon: Bed, label: "Кровать King Size" },
  double: { icon: Bed, label: "Двуспальная кровать" },
  twin: { icon: Bed, label: "2 отдельные кровати" },
  three: { icon: Bed, label: "3 кровати" },
  four: { icon: Bed, label: "4 кровати" },
  five: { icon: Bed, label: "5 кроватей" },
  six: { icon: Bed, label: "6 кроватей" },
  sofa: { icon: Sofa, label: "Диван" },
  wifi: { icon: Wifi, label: "Wi-Fi" },
  tv: { icon: Tv, label: "TV" },
};

const perks = [
  { icon: Sparkle, title: "Комфорт", subtitle: "как дома" },
  { icon: Shield, title: "Чистота", subtitle: "и порядок" },
  { icon: Wifi, title: "Бесплатный", subtitle: "Wi-Fi" },
];

const rooms = [
  {
    img: luxRoom,
    category: "Люкс",
    guests: 2,
    title: "Люкс Classic",
    desc: "Просторный номер с изысканным интерьером и всеми удобствами для вашего комфорта.",
    amenities: ["king", "wifi", "tv"] as AmenityKey[],
  },
  {
    img: standard2,
    category: "Стандарт",
    guests: 2,
    title: "Двухместный Standard",
    desc: "Уютный номер с удобной кроватью и приятной атмосферой.",
    amenities: ["double", "wifi", "tv"] as AmenityKey[],
    room: "240018",
  },
  {
    img: standard2Plus,
    category: "Семейный",
    guests: 2,
    title: "Двухместный с двуспальной кроватью и диваном",
    desc: "Отличный выбор для семьи или компании друзей.",
    amenities: ["double", "sofa", "wifi"] as AmenityKey[],
    room: "240264",
  },
  {
    img: beds2,
    category: "Эконом",
    guests: 2,
    title: "Двухместный с двумя кроватями",
    desc: "Комфортный и практичный номер для двоих с раздельными кроватями.",
    amenities: ["twin", "wifi", "tv"] as AmenityKey[],
  },
  {
    img: super3,
    category: "Комфорт",
    guests: 3,
    title: "Трёхместный Superior",
    desc: "Больше пространства для вашего удобства. Идеально для семьи или друзей.",
    amenities: ["three", "wifi", "tv"] as AmenityKey[],
    room: "240271",
  },
  {
    img: stand4,
    category: "Стандарт",
    guests: 4,
    title: "Четырёхместный Standard",
    desc: "Просторный номер для большой компании или семьи.",
    amenities: ["four", "wifi", "tv"] as AmenityKey[],
    room: "240022",
  },
  {
    img: stand5,
    category: "Стандарт",
    guests: 5,
    title: "Пятиместный Standard",
    desc: "Вместительный номер с комфортными спальными местами для большой компании.",
    amenities: ["five", "wifi", "tv"] as AmenityKey[],
    room: "240690",
  },
  {
    img: stand6,
    category: "Стандарт",
    guests: 6,
    title: "Шестиместный Standard",
    desc: "Максимум места для дружной компании или большой семьи.",
    amenities: ["six", "wifi", "tv"] as AmenityKey[],
  },
];

function guestLabel(n: number) {
  if (n === 1) return "гость";
  if (n >= 2 && n <= 4) return "гостя";
  return "гостей";
}

function Rooms() {
  const [perView, setPerView] = useState(3);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const update = () =>
      setPerView(
        window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1
      );
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const totalPages = Math.ceil(rooms.length / perView);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    setPage((p) => Math.min(p, Math.max(0, totalPages - 1)));
  }, [totalPages]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    const threshold = 40;
    if (delta > threshold) {
      setPage((p) => Math.max(0, p - 1));
    } else if (delta < -threshold) {
      setPage((p) => Math.min(totalPages - 1, p + 1));
    }
    touchStartX.current = null;
  };

  return (
    <div
      className="relative w-full overflow-hidden bg-[#f5f0e8] py-16 lg:py-24"
      id="rooms"
    >
      <Leaf className="pointer-events-none absolute -left-10 top-10 h-40 w-40 text-[#e7dcc8]/60" />
      <Leaf className="pointer-events-none absolute -right-10 top-0 h-52 w-52 rotate-180 text-[#e7dcc8]/50" />

      <div className="relative mx-auto w-full max-w-[1240px] px-4">
        <Reveal className="relative text-center">
          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-[#d8c9ae]" />
            <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#8a7a63]">
              Наши комнаты
            </span>
            <span className="h-px w-10 bg-[#d8c9ae]" />
          </div>

          <h2 className="mt-4 font-display text-4xl font-medium leading-tight tracking-tight text-[#26221c] sm:text-5xl lg:text-[56px]">
            Большой выбор
          </h2>
          <p className="mt-4 text-[15px] text-[#7a7062]">
            Уютные и стильные номера для вашего идеального отдыха
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3 lg:absolute lg:right-0 lg:top-2 lg:mt-0 lg:justify-end">
            {perks.map((perk, i) => {
              const Icon = perk.icon;
              return (
                <div key={i} className="flex items-center gap-2.5 text-left">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#e5d8c0] bg-white/70 text-[#9a7742]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-[13px] font-medium leading-tight text-[#2b251d]">
                      {perk.title}
                    </div>
                    <div className="text-[12px] leading-tight text-[#9a8d79]">
                      {perk.subtitle}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>

        <Reveal y={60}>
          <div
            className="mt-14 touch-pan-y overflow-hidden py-3"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex items-stretch transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${page * 100}%)` }}
            >
              {rooms.map((room, i) => (
                <div
                  key={i}
                  className="w-full shrink-0 px-3.5 sm:w-1/2 lg:w-1/3"
                >
                  <div className="group flex h-full flex-col overflow-hidden rounded-[22px] bg-white shadow-[0_16px_45px_rgba(120,95,60,0.10)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_rgba(120,95,60,0.16)]">
                    <div className="relative h-52 w-full overflow-hidden">
                      <Image
                        src={room.img}
                        alt={room.title}
                        fill
                        placeholder="blur"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    <span className="absolute left-4 top-4 rounded-full bg-white px-3.5 py-1.5 text-[10px] font-medium uppercase tracking-[0.16em] text-[#3b2f24] shadow-sm">
                      {room.category}
                    </span>
                    <span className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-[11px] font-medium text-[#3b2f24] shadow-sm">
                      <Users className="h-3.5 w-3.5 text-[#9a7742]" />
                      {room.guests} {guestLabel(room.guests)}
                    </span>
                  </div>

                  <div className="relative flex flex-1 flex-col p-6">
                    <Leaf className="pointer-events-none absolute right-3 top-3 h-16 w-16 text-[#efe6d6]" />
                    <h3 className="relative font-display text-xl font-medium leading-snug text-[#26221c]">
                      {room.title}
                    </h3>
                    <p className="relative mt-2 text-sm leading-relaxed text-[#7a7062]">
                      {room.desc}
                    </p>

                    <div className="mt-auto flex flex-wrap items-center justify-between gap-x-3 gap-y-4 border-t border-[#f1eadd] pt-4">
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                        {room.amenities.map((key, ai) => {
                          const item = amenities[key];
                          const Icon = item.icon;
                          return (
                            <span
                              key={ai}
                              className="flex items-center gap-1.5 text-[12px] text-[#8a7a63]"
                            >
                              <Icon className="h-4 w-4 text-[#9a7742]" />
                              {item.label}
                            </span>
                          );
                        })}
                      </div>

                      <a
                        href="#"
                        data-tl-booking-open="true"
                        {...(room.room ? { "data-tl-room": room.room } : {})}
                        className="group/btn inline-flex items-center gap-2 rounded-full bg-[#b08a4f] px-4 py-2.5 text-[13px] font-medium text-white transition-colors duration-300 hover:bg-[#9a7742]"
                      >
                        Забронировать
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          </div>
        </Reveal>

        <div className="mt-10 flex items-center justify-center gap-5">
          <span className="hidden h-px w-24 bg-[#d8c9ae] sm:block" />
          <button
            aria-label="Предыдущие номера"
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d8c9ae] bg-white/70 text-[#9a7742] transition-all duration-300 hover:bg-white disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                aria-label={`Страница ${i + 1}`}
                onClick={() => setPage(i)}
                className={`h-2.5 w-2.5 rounded-full transition-colors duration-300 ${
                  i === page
                    ? "bg-[#b08a4f]"
                    : "bg-[#ddd0b8] hover:bg-[#cdbc9d]"
                }`}
              />
            ))}
          </div>
          <button
            aria-label="Следующие номера"
            onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
            disabled={page === totalPages - 1}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d8c9ae] bg-white/70 text-[#9a7742] transition-all duration-300 hover:bg-white disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
          <span className="hidden h-px w-24 bg-[#d8c9ae] sm:block" />
        </div>
      </div>
    </div>
  );
}

export default Rooms;
