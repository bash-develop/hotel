import React from "react";
import { FaLocationDot } from "react-icons/fa6";

function Footer() {
	return (
		<div className="border-t-1 bg-black/90 py-4 w-full text-white text-center flex flex-col sm:flex-row items-center justify-between lg:px-5 px-2">
			<div>
				<span className="block"> Отель София</span>
				<span className="block">2023, Официальный сайт</span>
			</div>
			<div className="location hidden md:flex gap-3 items-center hover:text-orange-400">
				<FaLocationDot />
				<a href="https://yandex.ru/maps/11063/mineralniye-vodi/?from=mapframe&ll=43.118770%2C44.219193&mode=usermaps&source=mapframe&um=constructor%3A3ad3a4e6b45fe957354068aff46726eae093200b393622ad7047f366790abfd9&utm_source=mapframe&z=15">
					улица Железноводская, д.14, Минеральные Воды
				</a>
			</div>
		</div>
	);
}

export default Footer;
