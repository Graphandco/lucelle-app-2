"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
	const { register, handleSubmit } = useForm();
	const { data: session, status } = useSession();
	const router = useRouter();

	console.log(status);
	const onSubmit = async (formData) => {
		const [email, password] = [formData.email, formData.password];
		try {
			const res = await signIn("credentials", {
				email,
				password,
				redirect: false,
			});

			// console.log(status);

			if (res?.error == null) {
				toast("Connexion réussie !", {
					// description: `Bienvenue, ${session?.user?.name}`,
				});
				setTimeout(() => {
					router.push("/");
				}, 1000);
			} else {
				toast("⛔️ Identifiants incorrects ! ⛔️", {});

				// toast.error('Error occurred while logging in');
			}
		} catch (error) {
			console.log(error);
		}
		// e.preventDefault();
		// console.log(data.email);
		// toast("Vous êtes connecté !", {});
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
			<div className="grid gap-2">
				<Label htmlFor="email">Email</Label>
				<Input
					{...register("email")}
					type="email"
					id="email"
					placeholder="Saisissez votre adresse email"
				/>
			</div>
			<div className="grid gap-2">
				<Label htmlFor="text">Mot de passe</Label>
				<Input
					{...register("password")}
					type="password"
					id="password"
					placeholder="Saisissez votre mot de passe"
				/>
			</div>
			<Button type="submit">Se connecter</Button>
		</form>
	);
}
