import React, { useRef } from "react";
import Image from "next/image";
import image2 from "@/public/image2.png";
import wifi from "@/public/wifi.svg";
import coffe from "@/public/coffe.svg";
import laundry from "@/public/laundry.svg";
import car from "@/public/car.svg";
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
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
          trigger: ".item",
          start: "bottom bottom",
          endTrigger: ".item",
          end: "+=200",
        },
      });
      tl.current.addLabel("toTop").from(".item", { y: "-100" });
      gsap
        .timeline({
          smoothChildTiming: true,
          paused: true,
          scrollTrigger: {
            scrub: 1,
            trigger: ".line1",
            start: "center center+=200px",
            end: "+=200",
          },
        })
        .addLabel("line")
        .from(".line1", { width: 0 });
      gsap
        .timeline({
          smoothChildTiming: true,
          paused: true,
          scrollTrigger: {
            scrub: 1,
            trigger: ".line2",
            start: "center center+=200px",
            end: "+=200",
          },
        })
        .addLabel("line")
        .from(".line2", { width: 0 });
      gsap
        .timeline({
          smoothChildTiming: true,
          paused: true,
          scrollTrigger: {
            scrub: 1,
            trigger: ".line3",
            start: "center center+=200px",
            end: "+=200",
          },
        })
        .addLabel("line")
        .from(".line3", { width: 0 });
    },
    { scope: container }
  );

  return (
    <div id="servise" ref={container} className="why w-full ">
      <div className="px-2 md:px-0 flex my-10 flex-wrap justify-center gap-2 lg:justify-around items-center w-full basis-1 flex-1">
        <div className="item">
          <div className="logo p-3 rounded-full bg-orange-400/10 flex gap-1 items-center">
            <Image src={coffe} alt="лого" width={48} />
            <div className="about">Бесплатные напитки</div>
          </div>
        </div>
        <div className="item">
          <div className="logo p-3 rounded-full bg-orange-400/10 flex gap-1 items-center">
            <Image src={car} alt="лого" width={48} />
            <div className="about">Прокат авто и парковка</div>
          </div>
        </div>
        <div className="item">
          <div className="logo p-3 rounded-full bg-orange-400/10 flex gap-1 items-center">
            <svg
              width="49"
              height="49"
              viewBox="0 0 49 49"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="path1"
                d="M14.436 30.4659H35.7871M14.0917 26.4482H36.1315M36.8657 17.884L35.2581 36.6398C35.0803 38.7142 34.9913 39.7512 34.5303 40.5361C34.1243 41.2272 33.5216 41.7811 32.7983 42.1266C31.977 42.5189 30.936 42.519 28.8539 42.519H21.3708C19.2888 42.519 18.2471 42.5189 17.4257 42.1266C16.7024 41.7811 16.0994 41.2272 15.6934 40.536C15.2324 39.7512 15.1435 38.7142 14.9656 36.6398L13.358 17.884C13.2542 16.6733 13.2024 16.0678 13.4062 15.6007C13.5852 15.1903 13.8962 14.8516 14.2898 14.6381C14.7378 14.3952 15.3455 14.3952 16.5606 14.3952H33.6638C34.8789 14.3952 35.4868 14.3952 35.9348 14.6381C36.3284 14.8516 36.6386 15.1903 36.8177 15.6007C37.0214 16.0678 36.9695 16.6733 36.8657 17.884ZM35.6528 14.3952H14.5713C12.7602 14.3952 11.8546 14.3952 11.3286 14.0161C10.8648 13.6819 10.5656 13.1659 10.5055 12.5974C10.4374 11.9526 10.8871 11.1664 11.7857 9.59387C12.457 8.41909 12.7926 7.83169 13.2637 7.40376C13.6848 7.02119 14.1823 6.73239 14.7234 6.55655C15.3286 6.35986 16.005 6.35986 17.358 6.35986H32.8667C34.2198 6.35986 34.8963 6.35986 35.5015 6.55655C36.0427 6.73239 36.5397 7.02119 36.9609 7.40376C37.4319 7.83169 37.7676 8.41909 38.4389 9.59387C39.3375 11.1664 39.787 11.9526 39.7188 12.5974C39.6588 13.1659 39.36 13.6819 38.8962 14.0161C38.3701 14.3952 37.4639 14.3952 35.6528 14.3952Z"
                stroke="#FF7500"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            {/* <Image src={laundry} alt="лого" width={48} /> */}
            <div className="about">Прачечная</div>
          </div>
        </div>
        <div className="item">
          <div className="logo p-3 rounded-full bg-orange-400/10 flex gap-1 items-center">
            <Image src={wifi} alt="лого" width={48} />
            <div className="about">Бесплатный Wi-Fi</div>
          </div>
        </div>
      </div>
      <div className="title text-center font-medium text-5xl mb-16">
        Почему вам стоит остановиться здесь
      </div>
      <div className="flex items-center justify-evenly flex-wrap ">
        <div className="flex flex-col gap-10 max-w-[380px]">
          <div className="flex flex-col gap-2 pl-1">
            <div className="number text-white p-3 text-lg rounded-full bg-orange-600 w-10 h-10 flex items-center justify-center">
              1
            </div>
            <div className="title font-bold text-2xl">Большой выбор комнат</div>
            <div className="line1 bg-orange-600 w-full h-1"></div>
            <div className="subtitle text-base text-gray-600">
              Комнаты различной вменстимости с разными типами кроватей, а так же
              кроватями для детей
            </div>
          </div>
          <div className="flex flex-col gap-2 pl-1">
            <div className="number text-white p-3 text-lg rounded-full bg-orange-600 w-10 h-10 flex items-center justify-center">
              2
            </div>
            <div className="title font-bold text-2xl">
              Низкая цена при отличном качестве
            </div>
            <div className="line2 bg-orange-600 w-full h-1"></div>
            <div className="subtitle text-base text-gray-600">
              Цены от 3100 рублей. Каждый номер оборудован телевизором,
              кондиционером, а так же собственной душевой комнатой
            </div>
          </div>
          <div className="flex flex-col gap-2 pl-1">
            <div className="number text-white p-3 text-lg rounded-full bg-orange-600 w-10 h-10 flex items-center justify-center">
              3
            </div>
            <div className="title font-bold text-2xl">Кухня</div>
            <div className="line3 bg-orange-600 w-full h-1"></div>
            <div className="subtitle text-base text-gray-600">
              На територии отеля оборудована кухня, так что вы всегда сможете
              заказать вкусный завтрак в номер.
            </div>
          </div>
        </div>
        <Image
          placeholder="blur"
          src={image2}
          alt="hotel"
          className="hidden lg:block"
        />
      </div>
    </div>
  );
}

export default Services;
