"use client";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { toast } from "sonner";

const HomePage = () => {
	const { data: session, status } = useSession();
	console.log(status);

	const handleSignout = () => {
		signOut({ redirect: false });
		toast("Déconnexion réussie !");
	};

	return (
		<div className="mt-5">
			<div className="font-title text-4xl mb-4 font-black text-foreground">
				Lucelle App
			</div>
			<div className="mb-2 text-center text-foreground">
				{status === "authenticated" ? (
					<>
						<div>Connecté sous {session?.user?.name}</div>
						<Button onClick={() => handleSignout()}>
							Déconnexion
						</Button>
					</>
				) : (
					<>
						<div>Vous n'êtes pas connecté</div>
						<Button>
							<Link href="/login">Se connecter</Link>
						</Button>
					</>
				)}
			</div>
			<div className="colors grid gap-3">
				<div className="flex item-center gap-2">
					<div className="w-48">-background</div>
					<div className="w-7 h-7 border-2 border-red-500 bg-background"></div>
				</div>
				<div className="flex item-center gap-2">
					<div className="w-48">-foreground</div>
					<div className="w-7 h-7 border-2 border-red-500 bg-foreground"></div>
				</div>
				<div className="flex item-center gap-2">
					<div className="w-48">-card</div>
					<div className="w-7 h-7 border-2 border-red-500 bg-card"></div>
				</div>
				<div className="flex item-center gap-2">
					<div className="w-48">-card-foreground</div>
					<div className="w-7 h-7 border-2 border-red-500 bg-card-foreground"></div>
				</div>
				<div className="flex item-center gap-2">
					<div className="w-48">-popover</div>
					<div className="w-7 h-7 border-2 border-red-500 bg-popover"></div>
				</div>
				<div className="flex item-center gap-2">
					<div className="w-48">-popover-foreground</div>
					<div className="w-7 h-7 border-2 border-red-500 bg-popover-foreground"></div>
				</div>
				<div className="flex item-center gap-2">
					<div className="w-48">-primary</div>
					<div className="w-7 h-7 border-2 border-red-500 bg-primary"></div>
				</div>
				<div className="flex item-center gap-2">
					<div className="w-48">-primary-foreground</div>
					<div className="w-7 h-7 border-2 border-red-500 bg-primary-foreground"></div>
				</div>
				<div className="flex item-center gap-2">
					<div className="w-48">-secondary</div>
					<div className="w-7 h-7 border-2 border-red-500 bg-secondary"></div>
				</div>
				<div className="flex item-center gap-2">
					<div className="w-48">-secondary-foreground</div>
					<div className="w-7 h-7 border-2 border-red-500 bg-secondary-foreground"></div>
				</div>
				<div className="flex item-center gap-2">
					<div className="w-48">-muted</div>
					<div className="w-7 h-7 border-2 border-red-500 bg-muted"></div>
				</div>
				<div className="flex item-center gap-2">
					<div className="w-48">-muted-foreground</div>
					<div className="w-7 h-7 border-2 border-red-500 bg-muted-foreground"></div>
				</div>
				<div className="flex item-center gap-2">
					<div className="w-48">-accent</div>
					<div className="w-7 h-7 border-2 border-red-500 bg-accent"></div>
				</div>
				<div className="flex item-center gap-2">
					<div className="w-48">-accent-foreground</div>
					<div className="w-7 h-7 border-2 border-red-500 bg-accent-foreground"></div>
				</div>
				<div className="flex item-center gap-2">
					<div className="w-48">-destructive</div>
					<div className="w-7 h-7 border-2 border-red-500 bg-destructive"></div>
				</div>
				<div className="flex item-center gap-2">
					<div className="w-48">-destructive-foreground</div>
					<div className="w-7 h-7 border-2 border-red-500 bg-destructive-foreground"></div>
				</div>
				<div className="flex item-center gap-2">
					<div className="w-48">-border</div>
					<div className="w-7 h-7 border-2 border-red-500 bg-border"></div>
				</div>
				<div className="flex item-center gap-2">
					<div className="w-48">-input</div>
					<div className="w-7 h-7 border-2 border-red-500 bg-input"></div>
				</div>
				<div className="flex item-center gap-2">
					<div className="w-48">-ring</div>
					<div className="w-7 h-7 border-2 border-red-500 bg-ring"></div>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
