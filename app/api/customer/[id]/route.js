import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(request, { params }) {
   // console.log(params);
   try {
      const client = await prisma.customer.findFirst({
         where: {
            id: params.id,
         },
      });

      // console.log(client);

      if (!client) {
         return new NextResponse("Client non trouvé", { status: 404 });
      }
      return new NextResponse(JSON.stringify(client), { status: 200 });
   } catch (error) {
      console.error("Erreur lors de la récupération du client :", error);
      return new NextResponse("Erreur serveur", { status: 500 });
   }
}
