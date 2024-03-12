"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Comptes = () => {
	const { status } = useSession();
	const router = useRouter();

	if (status === "loading") {
		return <p>Loading...</p>;
	}

	if (status === "unauthenticated") {
		router.push("/login");
	}

	return (
		<div className=" mt-5">
			<div className="font-title text-4xl font-black text-foreground">
				Comptes
			</div>
		</div>
	);
};

export default Comptes;
