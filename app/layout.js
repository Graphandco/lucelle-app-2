import { ThemeProvider } from "@/components/theme-provider";
import { Inter } from "next/font/google";
import { Bebas_Neue } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/Footer";

const inter = Inter({
	display: "swap",
	variable: "--text-font",
	subsets: ["latin"],
});
const bebas = Bebas_Neue({
	weight: "400",
	subsets: ["latin"],
	display: "swap",
	variable: "--title-font",
});

export const metadata = {
	title: "Lucelle App",
	description: "L'App de la Lucelle",
};

export default function RootLayout({ children }) {
	return (
		<html lang="fr" suppressHydrationWarning>
			<head />
			<body className={`${bebas.variable} ${inter.variable}`}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					// disableTransitionOnChange
				>
					<Header />
					<main className="container mt-5">{children}</main>
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
