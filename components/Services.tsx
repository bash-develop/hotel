import React from "react";
import Image from "next/image";
import image2 from "@/public/image2.png";
import wifi from "@/public/wifi.svg";
import coffe from "@/public/coffe.svg";
import laundry from "@/public/laundry.svg";
import car from "@/public/car.svg";
function Services() {
	return (
		<div id="Сервисы" className="why w-full ">
			<div className="px-2 md:px-0 flex my-10  flex-wrap justify-center gap-2 lg:justify-around items-center w-full">
				<div className="item">
					<div className="logo p-3 rounded-full bg-orange-400/10 flex gap-1 items-center">
						<Image src={coffe} alt="лого" width={48} />
						<div className="about">Бесплатные напитки</div>
					</div>
				</div>
				<div className="item">
					<div className="logo p-3 rounded-full bg-orange-400/10 flex gap-1 items-center">
						<Image src={car} alt="лого" width={48} />
						<div className="about">
							Прокат авто
							<br /> и парковка
						</div>
					</div>
				</div>
				<div className="item">
					<div className="logo p-3 rounded-full bg-orange-400/10 flex gap-1 items-center">
						<Image src={laundry} alt="лого" width={48} />
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
