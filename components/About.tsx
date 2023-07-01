import React from "react";
import Image from "next/image";
import aboutImg from "@/public/about.png";
import star from "@/public/star.svg";
import reviewers from "@/public/reviewers.png";
import coffe from "@/public/Coffe_To_Go.svg";
import tea from "@/public/tea.svg";
import car from "@/public/car_white.svg";
import leaf from "@/public/leaf.svg";

const items = [
	{
		image: <Image src={tea} alt="alt" />,
		title: "Кухня",
		desc: "Вкусный завтрак, доставка тоже вкусная",
	},
	{
		image: <Image src={car} alt="alt" className="p-1" />,
		title: "Аренда авто и паркинг",
		desc: "Отель предоставляет трансфер до отеля, аренду авто, а так же отлтчный паркинг",
	},
	{
		image: <Image src={leaf} alt="alt" />,
		title: "Лучшие комнаты",
		desc: "Очень красивые комнаты с кондиционером. Удобная душевая . Очень чисто и уютно.",
	},
	{
		image: <Image src={coffe} alt="alt" />,
		title: "Бесплатный чай/кофе",
		desc: "Бесплатный чай и кофе в номере - просто замечательно!",
	},
];
function About() {
	return (
		<>
			<div
				className="about w-full gap-10 bg-black/80 flex flex-col md:flex-row items-center justify-center lg:justify-between lg:pl-14"
				id="О нас"
			>
				<div className="left p-4 flex flex-col gap-10">
					<div className="title text-5xl font-bold text-white pb-4  border-b border-orange-500 w-40">
						О нас
					</div>
					<div className="text-base text-gray-400 lg:w-[350px] w-full">
						Хотите оставаться на связи? В отеле есть бесплатный Wi-Fi. Для
						путешественников на машине организована парковка. Берите питомца с
						собой. В отеле возможно размещение с домашним любимцем за
						дополнительную плату. Чтобы путешествие было не только приятным, но
						и удобным, гости могут заказать трансфер. А ещё в распоряжении
						гостей прачечная, индивидуальная регистрация заезда и отъезда,
						гладильные услуги и прокат автомобилей. Сотрудники отеля поддержат
						беседу на русском. В номере гостей ждут телевизор. Оснащение зависит
						от выбранной категории номера.
					</div>
				</div>
				<Image
					placeholder="blur"
					src={aboutImg}
					alt="about"
					className=" xl:h-[600px] md:h-[400px] px-2"
				/>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 mt-10">
				<div className="left pl-2">
					<div className="title font-bold text-2xl mb-2">
						КЛАССИЧЕСКИЕ НОМЕРА И ИНТЕРЬЕР
					</div>
					<div className="reviews text-base text-gray-400 mb-10">
						<div className="flex gap-2">
							<span className="font-bold text-xl text-black">8.5</span>
							<Image src={star} alt="Звезд" />
						</div>
						Отличные отзывы
					</div>
					<Image
						placeholder="blur"
						src={reviewers}
						alt="reviewers"
						height={30}
						className="mb-5"
					/>
					Людям тут нравится
				</div>
				<div className="right grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 mb-10">
					{items.map((el, i) => (
						<div
							className="item flex flex-col gap-2 xl:w-[300px] shadow-lg hover:shadow-2xl transition-all duration-300 p-1"
							key={i}
						>
							<div className="image flex items-center justify-center p-3 rounded-full bg-orange-400 w-16 h-16 ">
								{el.image}
							</div>
							<div className="title text-lg text-black font-semibold">
								{el.title}
							</div>
							<div className="description">{el.desc}</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
}

export default About;
