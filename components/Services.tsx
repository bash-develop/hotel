import React from "react";
import Image from "next/image";
import image2 from "@/public/image2.png";
function Services() {
	return (
		<div id="Сервисы" className="why w-full">
			<div className="title text-center font-medium text-5xl mb-16">
				Почему вам стоит остановиться здесь
			</div>
			<div className="flex items-center justify-evenly flex-wrap ">
				<div className="flex flex-col gap-10 max-w-[380px]">
					<div className="flex flex-col gap-2 ">
						<div className="number text-white p-3 text-lg rounded-full bg-orange-600 w-10 h-10 flex items-center justify-center">
							1
						</div>
						<div className="title font-bold text-2xl">Большой выбор комнат</div>
						<div className="subtitle text-base text-gray-600">
							Комнаты различной вменстимости с разными типами кроватей, а так же
							кроватями для детей
						</div>
					</div>
					<div className="flex flex-col gap-2 ">
						<div className="number text-white p-3 text-lg rounded-full bg-orange-600 w-10 h-10 flex items-center justify-center">
							2
						</div>
						<div className="title font-bold text-2xl">
							Низкая цена при отличном качестве
						</div>
						<div className="subtitle text-base text-gray-600">
							Цены от 3100 рублей со всеми удобствами, кондиционером и
							бесплатным чаем/кофе
						</div>
					</div>
					<div className="flex flex-col gap-2 ">
						<div className="number text-white p-3 text-lg rounded-full bg-orange-600 w-10 h-10 flex items-center justify-center">
							3
						</div>
						<div className="title font-bold text-2xl">Кухня</div>
						<div className="subtitle text-base text-gray-600">
							Amet minim mollit non deserunt ullamco est sit aliqua dolor do
							amet sint. Velit officia consequat.
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
