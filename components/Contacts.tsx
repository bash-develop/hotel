import React from "react";
import { FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
function Contacts() {
  return (
    <div
      className="contats w-full  py-20 md:py-26 flex flex-col items-center justify-center"
      id="contacts"
    >
      <div className="title text-center font-medium text-5xl mb-16 w-full">
        Контакты
      </div>
      <div className="flex flex-col md:flex-row gap-32 items-center justify-center">
        <div className="info flex flex-col gap-2 items-center justify-center">
          <div className="phone flex gap-2 items-start text-xl hover:text-orange-400">
            <FaPhone className=" translate-y-1" />
            <a href="tel:+79383449997" className=" ">
              +7(938)-344-99-97 <br />
              <span className="text-base">
                Отдел бронирования/Служба приема <br /> и размещения (24 ч.)
              </span>
            </a>
          </div>
          <div className="location flex gap-3 items-start text-xl hover:text-orange-400">
            <FaLocationDot />
            <a href="https://yandex.ru/maps/11063/mineralniye-vodi/?from=mapframe&ll=43.118770%2C44.219193&mode=usermaps&source=mapframe&um=constructor%3A3ad3a4e6b45fe957354068aff46726eae093200b393622ad7047f366790abfd9&utm_source=mapframe&z=15">
              Улица Железноводская, д.14,
              <br /> Минеральные Воды
            </a>
          </div>
        </div>
        <iframe
          className="rounded-lg border-orange-400 border self-center"
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A3ad3a4e6b45fe957354068aff46726eae093200b393622ad7047f366790abfd9&amp;source=constructor"
          width="318"
          height="285"
        ></iframe>
      </div>
    </div>
  );
}

export default Contacts;
