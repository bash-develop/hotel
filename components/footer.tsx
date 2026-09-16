"use client";

import React from "react";
import { useLenis } from "@studio-freight/react-lenis";
import { Phone, Pin, ArrowRight } from "@/components/icons";

const links = [
  { title: "Домой", href: "#home" },
  { title: "Сервисы", href: "#servise" },
  { title: "Комнаты", href: "#rooms" },
  { title: "О нас", href: "#about" },
  { title: "Контакты", href: "#contacts" },
];

function Footer() {
  const lenis = useLenis();

  const go = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    if (lenis) {
      lenis.scrollTo(href);
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full bg-[#26221c] text-[#d9cfbe]">
      <div className="mx-auto w-full max-w-[1240px] px-4 py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="font-display text-2xl font-medium text-white">
              Отель София
            </div>
            <p className="mt-3 max-w-[240px] text-sm leading-relaxed text-[#a89d8c]">
              Уютный отель в самом сердце Минеральных Вод. Комфортные номера,
              внимательный сервис и домашняя атмосфера.
            </p>
          </div>

          <div>
            <div className="text-[11px] font-medium uppercase tracking-[0.25em] text-[#b08a4f]">
              Навигация
            </div>
            <ul className="mt-4 flex flex-col gap-2.5">
              {links.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    onClick={(e) => go(e, link.href)}
                    className="text-sm text-[#d9cfbe] transition-colors hover:text-white"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-[11px] font-medium uppercase tracking-[0.25em] text-[#b08a4f]">
              Контакты
            </div>
            <div className="mt-4 flex flex-col gap-3">
              <a
                href="tel:+79383449997"
                className="flex items-center gap-2.5 text-sm text-[#d9cfbe] transition-colors hover:text-white"
              >
                <Phone className="h-4 w-4 shrink-0 text-[#b08a4f]" />
                +7 (938)-344-99-97
              </a>
              <a
                href="https://yandex.ru/maps/11063/mineralniye-vodi/?from=mapframe&ll=43.118770%2C44.219193&mode=usermaps&source=mapframe&um=constructor%3A3ad3a4e6b45fe957354068aff46726eae093200b393622ad7047f366790abfd9&utm_source=mapframe&z=15"
                className="flex items-start gap-2.5 text-sm leading-relaxed text-[#d9cfbe] transition-colors hover:text-white"
              >
                <Pin className="mt-0.5 h-4 w-4 shrink-0 text-[#b08a4f]" />
                г. Минеральные Воды, ул. Железноводская, 14
              </a>
            </div>
          </div>

          <div>
            <div className="text-[11px] font-medium uppercase tracking-[0.25em] text-[#b08a4f]">
              Бронирование
            </div>
            <p className="mt-4 text-sm text-[#a89d8c]">
              Круглосуточно, 24/7
            </p>
            <a
              href="#"
              data-tl-booking-open="true"
              className="group mt-4 inline-flex items-center gap-2 rounded-full bg-[#b08a4f] px-5 py-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-[#9a7742]"
            >
              Забронировать
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-[#8f8577] sm:flex-row">
          <span>© 2026 Отель София. Официальный сайт</span>
          <span>
            Создано:{" "}
            <a
              href="https://shankin.dev"
              className="transition-colors hover:text-white"
            >
              shankin.dev
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
