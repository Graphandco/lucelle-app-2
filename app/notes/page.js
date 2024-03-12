"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import Note from "./Note";
import { Kanban } from "./Kanban";

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
			<Kanban />

			<div className="grid gap-4 mt-5">
				{notes?.map((note) => (
					<Note key={note.id} note={note} />
				))}
			</div>
		</div>
	);
};

export default Notes;
