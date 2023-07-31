"use client";
import { useEffect, useState } from "react";
import { HiMenu, HiOutlineX } from "react-icons/hi";
import useScroll from "@/app/libs/use-scroll";
const links = ["Домой", "Сервисы", "Комнаты", "О нас", "Контакты"];
function Header() {
	const [active, setActive] = useState(false);
	const scrolled = useScroll(50);
	useEffect(() => {
		if (active) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
	}, [active]);
	const [activeLink, setActiveLink] = useState("Домой");

	return (
		<>
			<div
				className={` w-full flex items-center justify-center  fixed top-0 z-50 text-white ${
					scrolled
						? "border-b border-dark6 bg-black/80 backdrop-blur-xl lg:h-16"
						: "bg-black/90 lg:h-24"
				} z-30 transition-all`}
			>
				<ul
					className={`nav w-full scroll-smooth lg:flex lg:flex-row justify-around items-center lg:h-full h-screen  ${
						active ? "flex flex-col" : "hidden"
					} `}
				>
					<li
						className="z-50 select-none flex items-center justify-center text-lg w-full lg:w-64 text-center  h-14 cursor-pointer"
						onClick={() => {
							scrollTo(0, 0);
							setActive(false);
							setActiveLink("Домой");
						}}
					>
						Отель София
					</li>
					{links.map((link, i) => {
						return (
							<li
								onClick={() => {
									setActive(false);
									setActiveLink(link);
								}}
								key={i}
								className={`flex scroll-smooth items-center ${
									activeLink === link ? "border-b border-white/90" : ""
								}`}
							>
								<a
									className="lg:w-fit transition-all duration-300  hover:bg-white/20 p-2 rounded-lg"
									href={`#${link}`}
								>
									{link}
								</a>
							</li>
						);
					})}
					<li
						className="book border-2 border-solid border-white px-3 py-2 hover:text-black hover:bg-white transition-all duration-300 cursor-pointer justify-self-end"
						onClick={() => {
							scrollTo(0, 0);
							setActive(false);
						}}
					>
						<a href="tel:+79383449997">Позвонить</a>
					</li>
					<li
						className="book border-2 border-solid border-white px-3 py-2 hover:text-black hover:bg-white transition-all duration-300 cursor-pointer justify-self-end"
						onClick={() => {
							setActive(false);
							setActiveLink("Забронировать");
						}}
					>
						<a className="" href="#" data-tl-booking-open="true">
							Забронировать
						</a>
					</li>
				</ul>
			</div>
			<div
				className=" lg:hidden fixed top-0 right-1 z-50"
				onClick={() => setActive(!active)}
			>
				{active ? (
					<HiOutlineX className="w-8 h-8 text-white" />
				) : (
					<HiMenu className="w-8 h-8 text-black " />
				)}
			</div>
		</>
	);
}

export default Header;
