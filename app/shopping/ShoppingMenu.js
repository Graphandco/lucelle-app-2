import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";

// const tabs = ["Liste", "Inventaire", "+"];
const tabs = [
	{
		id: 0,
		text: "Liste",
		href: "/shopping",
	},
	{
		id: 1,
		text: "Inventaire",
		href: "/shopping/inventaire",
	},
	{
		id: 2,
		text: "+",
		href: "/shopping/inventaire/add-item",
	},
];

const ShoppingMenu = () => {
	const [selected, setSelected] = useState(0);
	return (
		<div className=" flex items-center flex-wrap gap-2">
			{tabs.map((tab) => (
				<Chip
					text={tab.text}
					selected={selected === tab.id}
					setSelected={setSelected}
					key={tab.text}
					id={tab.id}
					href={tab.href}
				/>
			))}
		</div>
	);
};

const Chip = ({ id, text, href, selected, setSelected }) => {
	const router = useRouter();

	return (
		<button
			onClick={() => {
				setSelected(id);
				// console.log(href);
				router.push(href);
			}}
			className={`${
				selected
					? "text-background"
					: "text-slate-300 hover:text-slate-200 hover:bg-slate-700"
			} text-xs transition-colors px-3 py-1 rounded-full relative border border-card`}
		>
			<span className="relative z-10">{text}</span>
			{selected && (
				<motion.span
					layoutId="pill-tab"
					transition={{ type: "spring", duration: 0.5 }}
					className="absolute inset-0 z-0 bg-foreground rounded-full"
				></motion.span>
			)}
		</button>
	);
};

export default ShoppingMenu;
