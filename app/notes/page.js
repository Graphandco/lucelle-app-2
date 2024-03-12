"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import md5 from "md5";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { FaCheck, FaTrashAlt, FaFlag } from "react-icons/fa";

const Notes = () => {
	const [notes, setNotes] = useState([]);

	useEffect(() => {
		//fetch notes
		const fetchNotes = async () => {
			try {
				const response = await axios.get(`/api/note`, {
					next: { revalidate: 1 },
				});

				if (response.status !== 200) {
					throw new Error(
						`Failed to fetch items: ${response.status} ${response.statusText}`
					);
				}
				console.log(response.data);

				setNotes(response.data);
			} catch (error) {
				console.error(`Error fetching items: ${error.message}`);
			}
		};
		// call fetch fetchNotes
		fetchNotes();
	}, []);

	return (
		<div className="mt-5">
			<div className="font-title text-4xl font-black text-foreground">
				Notes
			</div>
			<div className="grid gap-4 mt-5">
				{notes.map((note) => (
					<div
						key={note.id}
						className="flex justify-between items-center border-b border-card py-1"
					>
						<div className="flex items-center gap-4">
							<Avatar className="w-8 h-8">
								<AvatarImage
									src={`https://www.gravatar.com/avatar/${md5(
										note.author
									)}?d=mm`}
									alt="Avatar de l'utilisateur"
								/>
								<AvatarFallback>L</AvatarFallback>
							</Avatar>
							<div className="">{note.name}</div>
						</div>
						<div className="flex gap-2 items-center">
							<Button
								variant="outline"
								size="icon"
								className="w-8 h-8"
							>
								<FaCheck className="h-3 w-3" />
							</Button>
							<Button
								variant="outline"
								size="icon"
								className="w-8 h-8"
							>
								<FaFlag className="h-3 w-3" />
							</Button>
							<Button
								variant="outline"
								size="icon"
								className="w-8 h-8"
							>
								<FaTrashAlt className="h-3 w-3" />
							</Button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Notes;
