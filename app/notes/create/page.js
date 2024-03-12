"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function CreateNote() {
	const { register, handleSubmit } = useForm();
	const { data: session, status } = useSession();
	const router = useRouter();

	const onSubmit = async (formData) => {
		const [name] = [formData.name];
		try {
			const response = await axios.post(
				"/api/note/create",
				{
					name,
					author: session.user.email,
				},
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			);

			const customer = response.data;
			toast("La note a bien été créée !", {});
			// window.location.reload();
			router.push("/notes");
		} catch (error) {
			console.error("Error registering note:", error);
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
			<div className="grid gap-2">
				<Label htmlFor="text">Titre</Label>
				<Input
					{...register("name")}
					type="text"
					id="name"
					placeholder="Saisissez votre texte"
				/>
			</div>
			<Button type="submit">Ajouter la note</Button>
		</form>
	);
}
