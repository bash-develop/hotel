import React from "react";
import Reveal from "@/components/Reveal";
import { Phone, Pin, ArrowRight } from "@/components/icons";

const info = [
  {
    icon: Phone,
    label: "Телефон",
    value: "+7 (938)-344-99-97",
    note: "Отдел бронирования / Служба приёма и размещения (24 ч.)",
    href: "tel:+79383449997",
  },
  {
    icon: Pin,
    label: "Адрес",
    value: "г. Минеральные Воды, ул. Железноводская, 14",
    note: "Мы находимся в центре города",
    href: "https://yandex.ru/maps/11063/mineralniye-vodi/?from=mapframe&ll=43.118770%2C44.219193&mode=usermaps&source=mapframe&um=constructor%3A3ad3a4e6b45fe957354068aff46726eae093200b393622ad7047f366790abfd9&utm_source=mapframe&z=15",
  },
];

function Contacts() {
  return (
    <div
      className="relative w-full overflow-hidden bg-[#f5f0e8] py-16 lg:py-24"
      id="contacts"
    >
      <div className="pointer-events-none absolute -left-40 bottom-0 h-[360px] w-[360px] rounded-full border border-[#ddcfb6]/60" />
      <div className="relative mx-auto w-full max-w-[1240px] px-4">
        <Reveal
          y={60}
          className="overflow-hidden rounded-[32px] bg-white shadow-[0_24px_70px_rgba(120,95,60,0.12)] lg:grid lg:grid-cols-[0.95fr_1.05fr]"
        >
          <div className="flex flex-col justify-center gap-9 p-8 sm:p-12">
            <div>
              <div className="flex items-center gap-4">
                <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#8a7a63]">
                  Контакты
                </span>
                <span className="h-px w-16 bg-[#d8c9ae]" />
              </div>
              <h2 className="mt-4 font-display text-4xl font-medium leading-tight tracking-tight text-[#26221c] sm:text-5xl">
                Свяжитесь с нами
              </h2>
              <p className="mt-4 max-w-[420px] text-[15px] leading-relaxed text-[#7a7062]">
                Мы всегда рады ответить на ваши вопросы и помочь с
                бронированием.
              </p>
            </div>

            <div className="flex flex-col gap-7">
              {info.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#f4ebda] text-[#9a7742]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#b08a4f]">
                        {item.label}
                      </div>
                      <a
                        href={item.href}
                        className="mt-1 block max-w-[300px] text-[17px] font-medium leading-snug text-[#26221c] transition-colors hover:text-[#b08a4f]"
                      >
                        {item.value}
                      </a>
                      <p className="mt-1 max-w-[300px] text-[13px] leading-relaxed text-[#8a7a63]">
                        {item.note}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <a
              href="#"
              data-tl-booking-open="true"
              className="group inline-flex w-fit items-center gap-3 rounded-full bg-[#3b2f24] px-7 py-4 text-sm font-medium text-white shadow-lg transition-colors duration-300 hover:bg-[#54402d]"
            >
              Забронировать номер
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          <div className="relative min-h-[320px] lg:min-h-[520px]">
            <iframe
              title="Карта — Отель София"
              className="absolute inset-0 h-full w-full"
              style={{ border: 0 }}
              loading="lazy"
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A3ad3a4e6b45fe957354068aff46726eae093200b393622ad7047f366790abfd9&amp;source=constructor"
            ></iframe>
          </div>
        </Reveal>
      </div>
    </div>
  );
}

export default Contacts;
