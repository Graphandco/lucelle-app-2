// route.js
import { NextResponse } from "next/server";
import prisma from "@/lib/prismadb";

export async function POST(request, response) {
   try {
      const body = await request.json();
      const { client, content, completed, createdAt } = body;

      const customer = await prisma.note.create({
         data: {
            // client,
            content,
            completed,
            createdAt,
         },
      });

      return NextResponse.json(customer);
   } catch (error) {
      console.log(error);
      return NextResponse.json(400);
   }
}
