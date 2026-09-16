import React from "react";
import Image from "next/image";
import aboutImg from "@/public/about.png";
import reviewers from "@/public/reviewers.png";
import Reveal from "@/components/Reveal";
import {
  Star,
  ArrowRight,
  Coffee,
  Car,
  Bed,
  Mug,
  Heart,
  Leaf,
} from "@/components/icons";

const items = [
  {
    icon: Coffee,
    title: "Кухня",
    desc: "Вкусный завтрак, доставка тоже вкусная",
  },
  {
    icon: Car,
    title: "Аренда авто и паркинг",
    desc: "Отель предоставляет трансфер до отеля, аренду авто, а также отличный паркинг",
  },
  {
    icon: Bed,
    title: "Лучшие комнаты",
    desc: "Очень красивые комнаты с кондиционером. Удобная душевая. Очень чисто и уютно.",
  },
  {
    icon: Mug,
    title: "Бесплатный чай/кофе",
    desc: "Бесплатный чай и кофе в номере — просто замечательно!",
  },
  {
    icon: Heart,
    title: "Комфорт и сервис",
    desc: "Забота о вас на каждом этапе пребывания. Мы делаем всё, чтобы вы чувствовали себя как дома.",
  },
  {
    icon: Leaf,
    title: "Уютная атмосфера",
    desc: "Стильный интерьер, тишина и комфорт для вашего отдыха.",
  },
];

function About() {
  return (
    <>
      <div
        className="relative w-full overflow-hidden bg-[#f5f0e8] py-16 lg:py-24"
        id="about"
      >
        <div className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full border border-[#ddcfb6]/60" />
        <div className="relative mx-auto grid w-full max-w-[1240px] grid-cols-1 items-center gap-10 px-4 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <div className="flex items-center gap-4">
              <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#8a7a63]">
                О нас
              </span>
              <span className="h-px w-16 bg-[#d8c9ae]" />
            </div>
            <h2 className="mt-5 font-display text-4xl font-medium leading-tight tracking-tight text-[#26221c] sm:text-5xl">
              Отель, в который
              <br />
              <span className="text-[#b08a4f]">хочется возвращаться</span>
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-[#6b6157]">
              Хотите оставаться на связи? В отеле есть бесплатный Wi-Fi. Для
              путешественников на машине организована парковка. Берите питомца с
              собой — возможно размещение с домашним любимцем за дополнительную
              плату. Чтобы путешествие было не только приятным, но и удобным,
              гости могут заказать трансфер. А ещё в распоряжении гостей
              прачечная, индивидуальная регистрация заезда и отъезда,
              гладильные услуги и прокат автомобилей.
            </p>

            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
              {["Бесплатный Wi-Fi", "Парковка", "Трансфер"].map((el, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 text-sm text-[#6b6157]"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#b08a4f]" />
                  {el}
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15} y={60}>
            <div className="relative h-[360px] w-full overflow-hidden rounded-[28px] shadow-[0_18px_50px_rgba(120,95,60,0.14)] sm:h-[440px] lg:h-[520px]">
              <Image
                src={aboutImg}
                alt="Отель София"
                fill
                placeholder="blur"
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </div>

      <div className="relative w-full overflow-hidden bg-[#faf6ef] py-16 lg:py-24">
        <Leaf className="pointer-events-none absolute -left-12 bottom-0 h-56 w-56 text-[#efe6d6]/70" />
        <div className="relative mx-auto grid w-full max-w-[1240px] grid-cols-1 gap-12 px-4 lg:grid-cols-[0.9fr_1.6fr] lg:gap-14">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <div className="flex items-center gap-4">
              <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#8a7a63]">
                Услуги и удобства
              </span>
              <span className="h-px w-16 bg-[#d8c9ae]" />
            </div>
            <h2 className="mt-5 font-display text-4xl font-medium leading-tight tracking-tight text-[#26221c] sm:text-5xl">
              Классические номера и интерьер
            </h2>
            <p className="mt-5 max-w-[420px] text-[15px] leading-relaxed text-[#6b6157]">
              Уютные номера с продуманным интерьером, где каждая деталь создана
              для вашего комфорта. Современные удобства и тёплая атмосфера.
            </p>

            <div className="mt-8 flex items-center gap-3">
              <Star className="h-5 w-5 text-[#d9a441]" />
              <span className="font-display text-2xl font-medium text-[#26221c]">
                8.5
              </span>
              <span className="text-sm text-[#7a7062]">Отличные отзывы</span>
            </div>

            <div className="mt-5 flex items-center gap-4">
              <Image
                src={reviewers}
                alt="Отзывы гостей"
                height={34}
                className="h-[34px] w-auto"
              />
              <span className="text-sm text-[#7a7062]">Людям тут нравится</span>
            </div>
          </Reveal>

          <Reveal
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            y={60}
          >
            {items.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="group flex flex-col gap-4 rounded-2xl border border-[#eee3d0] bg-white p-6 shadow-[0_12px_35px_rgba(120,95,60,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#e0cfae] hover:shadow-[0_18px_45px_rgba(120,95,60,0.12)]"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#f4ebda] text-[#9a7742]">
                      <Icon className="h-6 w-6" />
                    </div>
                    <ArrowRight className="h-4 w-4 text-[#b08a4f] transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                  <h3 className="font-display text-lg font-medium leading-snug text-[#26221c]">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#7a7062]">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </Reveal>
        </div>
      </div>
    </>
  );
}

export default About;
