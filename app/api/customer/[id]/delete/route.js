import prisma from "@/lib/prismadb";

import { NextResponse } from "next/server";

export async function DELETE(req, { params }) {
   try {
      if (!params.customerId) {
         return new NextResponse("Not found", { status: 404 });
      }

      // delete customer
      const deletedCustomer = await prisma.customer.delete({
         where: {
            id: params.customerId,
         },
      });

      // Respond with the updated todo
      return NextResponse.json(deletedCustomer, { status: 200 });
   } catch (error) {
      console.log("[DELETE TODO]", error);

      // Handle errors
      return new NextResponse("Internal Server Error", { status: 500 });
   }
}
