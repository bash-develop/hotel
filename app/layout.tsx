import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";

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
		<html lang="en">
			<body className={` w-11/12  overflow-x-hidden ${inter.className} flex justify-center items-center mx-auto`}>
				<Header />

				<div className="">{children}</div>
			</body>
		</html>
	);
}
