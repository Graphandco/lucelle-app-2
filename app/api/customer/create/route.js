// route.js
import { NextResponse } from "next/server";
import prisma from "@/lib/prismadb";

export async function POST(request, response) {
   try {
      const body = await request.json();
      const { name, contactemail, website, phone, birthday, contactname, contactadress, loyer, cost } = body;

      const customer = await prisma.customer.create({
         data: {
            name,
            contactemail,
            website,
            phone,
            birthday,
            contactname,
            contactadress,
            loyer,
            cost,
         },
      });

      return NextResponse.json(customer);
   } catch (error) {
      console.log(error);
      return NextResponse.json(400);
   }
}
