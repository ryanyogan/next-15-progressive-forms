import { prisma } from "@/lib/prisma";
import { TicketWithMetadata } from "../types";

export async function getTickets(): Promise<TicketWithMetadata[]> {
  return await prisma.ticket.findMany({
    orderBy: {
      createdAt: "desc",
    },
    include: {
      user: {
        select: {
          username: true,
        },
      },
    },
  });
}
