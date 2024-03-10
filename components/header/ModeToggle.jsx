"use client";

// import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { RiMoonClearLine } from "react-icons/ri";
import { FiSun } from "react-icons/fi";
import { BsMoonStarsFill } from "react-icons/bs";

import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
	const { theme, setTheme } = useTheme();

	return (
		<Button
			variant="outline"
			size="icon"
			className="w-auto border-0 bg-transparent hover:bg-transparent -translate-y-1"
			onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
		>
			<FiSun className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
			<RiMoonClearLine className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
			<span className="sr-only">Changer de thème</span>
		</Button>
	);
}
