import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Отель София - Уютное размещение в Минеральных Водах",
	description:
		" Отель София - идеальный выбор для комфортного пребывания в Минеральных Водах. Мы предлагаем бесплатный Wi-Fi, трансфер, парковку и удобства для детей. Насладитесь удобством кондиционера и близостью к основным достопримечательностям города. Забронируйте номер сейчас и насладитесь приятным отдыхом в Отеле София.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className="scroll-smooth">
			<body
				className={` scroll-smooth  overflow-x-hidden ${inter.className} flex flex-col justify-center items-center`}
			>
				<Header />
				<div className="">{children}</div>
				<Footer/>
			</body>
		</html>
	);
}
