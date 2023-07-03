import React from "react";
import Image from "next/image";
import standard2 from "@/public/2standard.png";
import beds2 from "@/public/2beds.png";
import standard2Plus from "@/public/2stand+.png";
import super3 from "@/public/3super.png";
import luxRoom from "@/public/luxRoom.png";
import stand5 from "@/public/5standard.png";
import stand4 from "@/public/4stand.png";
import stand6 from "@/public/6standard.png";
function Rooms() {
	return (
		<div
			className="scroll-smooth rooms w-full flex flex-col justify-center items-center text-center my-20"
			id="Комнаты"
		>
			<div className="titles flex flex-col gap-4 mb-4">
				<div className="title font-bold text-xl">Наши комнаты</div>
				<div className="title2 text-5xl font-bold"> Большой выбор</div>
				<div className=" text-base">
					Большой выбор комнат со всеми удобствами и различными типами кроватей
				</div>
			</div>
			<div className="items grid gap-20 px-3 max-[450px]:grid-cols-1 grid-cols-2 lg:grid-cols-3 ">
				<div className="flex flex-col gap-3">
					<Image
						placeholder="blur"
						src={luxRoom}
						alt="фото комнаты"
						className="lg:w-80 w-full"
					/>
					<div className="ghests text-sm text-gray-400 text-left">2 ГОСТЯ</div>
					<div className="title text-xl font-semibold text-left">
						Люкс Classic
					</div>
				</div>

				<div className="flex flex-col gap-3">
					<Image
						placeholder="blur"
						src={standard2}
						alt="фото комнаты"
						className="lg:w-80 w-full"
					/>
					<div className="ghests text-sm text-gray-400 text-left">2 ГОСТЯ</div>
					<div className="title text-xl font-semibold text-left">
						Двухместный Standard <br />
					</div>
				</div>
				<div className="flex flex-col gap-3">
					<Image
						placeholder="blur"
						src={standard2Plus}
						alt="фото комнаты"
						className="lg:w-80 w-full"
					/>
					<div className="ghests text-sm text-gray-400 text-left">2 ГОСТЯ</div>
					<div className="title text-xl font-semibold text-left">
						Двухместный c двуспальной <br /> кроватью и диваном
					</div>
				</div>
				<div className="flex flex-col gap-3">
					<Image
						placeholder="blur"
						src={beds2}
						alt="фото комнаты"
						className="lg:w-80 w-full"
					/>
					<div className="ghests text-sm text-gray-400 text-left">2 ГОСТЯ</div>
					<div className="title text-xl font-semibold text-left">
						Двухместный c двумя <br /> кроватьями
					</div>
				</div>
				<div className="flex flex-col gap-3">
					<Image
						placeholder="blur"
						src={super3}
						alt="фото комнаты"
						className="lg:w-80 w-full"
					/>
					<div className="ghests text-sm text-gray-400 text-left">3 ГОСТЯ</div>
					<div className="title text-xl font-semibold text-left">
						Трёхместный Superior
					</div>
				</div>
				<div className="flex flex-col gap-3">
					<Image
						placeholder="blur"
						src={stand4}
						alt="фото комнаты"
						className="lg:w-80 w-full"
					/>
					<div className="ghests text-sm text-gray-400 text-left">4 ГОСТЯ</div>
					<div className="title text-xl font-semibold text-left">
						Четырёхместный Standard
					</div>
				</div>
				<div className="flex flex-col gap-3">
					<Image
						placeholder="blur"
						src={stand5}
						alt="фото комнаты"
						className="lg:w-80 w-full"
					/>
					<div className="ghests text-sm text-gray-400 text-left">5 ГОСТЕЙ</div>
					<div className="title text-xl font-semibold text-left">
						Пятиместный Standard
					</div>
				</div>
				<div className="flex flex-col gap-3 ">
					<Image
						placeholder="blur"
						src={stand6}
						alt="фото комнаты"
						className="lg:w-80 w-full"
					/>
					<div className="ghests text-sm text-gray-400 text-left">6 ГОСТЕЙ</div>
					<div className="title text-xl font-semibold text-left">
						Шестиместный Standard
					</div>
				</div>
			</div>
		</div>
	);
}

export default Rooms;
