import { prisma } from "@/lib/prisma";
import { cache } from "react";

export const getTicket = cache(async (id: string) => {
  return await prisma.ticket.findUnique({
    where: {
      id,
    },
    include: {
      user: {
        select: {
          username: true,
        },
      },
    },
  });
});
