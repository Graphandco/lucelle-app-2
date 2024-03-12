"use client";
import React from "react";
import { ModeToggle } from "./ModeToggle";
import Image from "next/image";
import { FiShoppingCart, FiHome } from "react-icons/fi";
import { PiWallet } from "react-icons/pi";
import { CgNotes } from "react-icons/cg";
import { LuWallet } from "react-icons/lu";

import Link from "next/link";
import { usePathname } from "next/navigation";
import UserMenu from "./UserMenu";

const Header = () => {
	const pathname = usePathname();
	const menuItems = [
		{
			name: "Accueil",
			href: "/",
			icon: <FiHome className="h-6 w-6" />,
		},
		{
			name: "Shoppping",
			href: "/shopping",
			icon: <FiShoppingCart className="h-6 w-6" />,
		},
		{
			name: "Comptes",
			href: "/comptes",
			icon: <LuWallet className="h-6 w-6" />,
		},
		{
			name: "Noes",
			href: "/notes",
			icon: <CgNotes className="h-6 w-6" />,
		},
	];

	return (
		<>
			<div className="px-6 pt-3 bg-background">
				<div className="flex justify-between items-center">
					<div className="flex items-center gap-4">
						<div className="logo-wrapper">
							<Image
								src="/logo.png"
								width={35}
								height={35}
								alt="Logo Lucelle App"
							/>
						</div>
						<div className="font-title text-3xl font-black text-primary">
							Lucelle App
						</div>
					</div>
					<ModeToggle />
				</div>
			</div>

			<div className="container flex justify-between items-center pt-1 bg-background sticky top-0 z-10 border-b border-card">
				<div className="flex justify-between items-center grow translate-y-[1px] pr-3">
					{menuItems.map((item) => (
						<Link
							href={item.href}
							key={item.name}
							className="flex flex-col"
						>
							<span
								className={`border-b-2 py-2 px-5 inline-block transition-all ${
									pathname === item.href
										? "text-primary border-primary"
										: " border-transparent"
								}`}
							>
								{item.icon}
							</span>
						</Link>
					))}
					<UserMenu />
				</div>
			</div>
		</>
	);
};
export default Header;
