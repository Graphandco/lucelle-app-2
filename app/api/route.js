// route.js
import { NextResponse } from "next/server";

export async function GET(request, response) {
	try {
		const results = await fetch(
			`https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/resources/image`,
			{
				headers: {
					Authorization: `Basic ${Buffer.from(
						process.env.CLOUDINARY_API_KEY +
							":" +
							process.env.CLOUDINARY_API_SECRET
					).toString("base64")}`,
				},
			}
		);

		return NextResponse.json(results, { status: 200 }); // Respond with the todos
	} catch (error) {
		// console.log(error);
		return NextResponse.json(400);
	}

	// const results = await fetch(
	// 	`https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/resources/image`,
	// 	{
	// 		headers: {
	// 			Authorization: `Basic ${Buffer.from(
	// 				process.env.CLOUDINARY_API_KEY +
	// 					":" +
	// 					process.env.CLOUDINARY_API_SECRET
	// 			).toString("base64")}`,
	// 		},
	// 	}
	// ).then((r) => r.json());
	// console.log(results);
}
