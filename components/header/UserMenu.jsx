import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const UserMenu = () => {
	return (
		<Avatar className="w-7 h-7">
			<AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
			<AvatarFallback>CN</AvatarFallback>
		</Avatar>
	);
};

export default UserMenu;
