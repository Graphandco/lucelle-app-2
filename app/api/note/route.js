// route.js
import { NextResponse } from "next/server";
import prisma from "@/lib/prismadb";

export async function GET(request, response) {
	try {
		//fetch all todos in the db and order by createdAt in desc order
		const clients = await prisma.note.findMany({
			orderBy: {
				createdAt: "desc",
			},
		});

		return NextResponse.json(clients, { status: 200 }); // Respond with the todos
	} catch (error) {
		// console.log(error);
		return NextResponse.json(400);
	}
}
