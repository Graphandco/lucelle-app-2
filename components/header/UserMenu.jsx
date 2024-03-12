"use client";
import { useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import md5 from "md5";

const UserMenu = () => {
	const { data: session, status } = useSession();

	return (
		<Avatar className="w-7 h-7">
			<AvatarImage
				src={`https://www.gravatar.com/avatar/${md5(
					session?.user?.email ? session.user.email : ""
				)}?d=mm`}
				alt="Avatar de l'utilisateur"
			/>
			<AvatarFallback>CN</AvatarFallback>
		</Avatar>
	);
};

export default UserMenu;
