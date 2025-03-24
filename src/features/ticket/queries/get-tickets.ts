import { prisma } from "@/lib/prisma";
import { Ticket } from "@prisma/client";

export async function getTickets(): Promise<Ticket[]> {
  return await prisma.ticket.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
}
