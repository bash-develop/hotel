import Image from "next/image";
import hero from "@/public/hero.png";
import Rooms from "@/components/rooms";
import Services from "@/components/Services";
import Booking from "@/components/Booking";
import About from "@/components/About";
import Contacts from "@/components/Contacts";

export default function Home() {
	return (
		<main className="scroll-smooth flex min-h-screen flex-col items-center justify-start lg:pt-24 overflow-x-hidden">
			<Image
				placeholder="blur"
				src={hero}
				alt="Отель София"
				id="Домой"
				className="w-screen"
			/>
			<Booking />
			<Services />
			<Rooms />
			<About />
			<Contacts/>
		</main>
	);
}
