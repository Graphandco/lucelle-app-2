"use client";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { toast } from "sonner";

const AddItem = () => {
	const addNote = async (e) => {
		e.preventDefault();

		try {
			const response = await axios.post(
				"/api/shopping/create",
				{
					// client: clientId,
					// content: note,
					// completed: false,
				},
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			);

			const customer = response.data;
			// setNote("");
			toast("La note a bien été créée !", {});
			// window.location.reload();
			// router.push("/clients");
		} catch (error) {
			console.error("Error registering note:", error);
		}
	};

	return (
		<div>
			<span>AddItem</span>
			<Button onClick={addNote}>Add Item</Button>
		</div>
	);
};

export default AddItem;
