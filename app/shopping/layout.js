"use client";
import React from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { usePathname } from "next/navigation";
import ShoppingMenu from "./ShoppingMenu";

const ShoppingListLayout = ({ children }) => {
	const pathname = usePathname();

	return (
		<>
			<div className="mt-5 flex justify-between items-center mb-5">
				<h1 className="font-title text-4xl font-black text-foreground">
					Courses
				</h1>
				<ShoppingMenu />

				{/* <nav className="flex items-center gap-2">
					<Link className="text-xs" href="/shopping">
						<Badge
							variant={pathname === "/shopping" ? "" : "outline"}
							className="text-xs"
						>
							Liste
						</Badge>
					</Link>
					<Link className="text-xs" href="/shopping/inventaire">
						<Badge
							variant={
								pathname === "/shopping/inventaire"
									? ""
									: "outline"
							}
							className="text-xs"
						>
							Inventaire
						</Badge>
					</Link>
					<Link
						className="text-xs"
						href="/shopping/inventaire/add-item"
					>
						<Badge
							variant={
								pathname === "/shopping/inventaire/add-item"
									? ""
									: "outline"
							}
							className="text-xs"
						>
							+
						</Badge>
					</Link>
				</nav> */}
			</div>
			{children}
		</>
	);
};

export default ShoppingListLayout;
