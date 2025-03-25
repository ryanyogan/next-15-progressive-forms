import { prisma } from "@/lib/prisma";
import { Ticket } from "@prisma/client";

export async function getTickets(): Promise<Ticket[]> {
  return prisma.ticket.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
}
