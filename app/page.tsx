import Image from "next/image";
import hero from "@/public/hero.png";
import wifi from "@/public/wifi.svg";
import coffe from "@/public/coffe.svg";
import laundry from "@/public/laundry.svg";
import car from "@/public/car.svg";
import Rooms from "@/components/rooms";
import Services from "@/components/Services";
import Booking from "@/components/Booking";
import About from "@/components/About";

export default function Home() {
	return (
		<main className="scroll-smooth flex min-h-screen flex-col items-center justify-start lg:pt-24 overflow-x-hidden">
			<Booking />
			<Image
				placeholder="blur"
				src={hero}
				alt="Отель София"
				id="Домой"
				className="w-screen"
			/>
			<div className="px-2 md:px-0 flex my-10  flex-wrap justify-center gap-2 lg:justify-around items-center w-full">
				<div className="item">
					<div className="logo p-3 rounded-full bg-orange-400/10 flex gap-1 items-center">
						<Image  src={coffe} alt="лого" width={48} />
						<div className="about">Бесплатные напитки</div>
					</div>
				</div>
				<div className="item">
					<div className="logo p-3 rounded-full bg-orange-400/10 flex gap-1 items-center">
						<Image  src={car} alt="лого" width={48} />
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
						<Image  src={wifi} alt="лого" width={48} />
						<div className="about">Бесплатный Wi-Fi</div>
					</div>
				</div>
			</div>
			<Services />
			<Rooms />
			<About />
		</main>
	);
}
