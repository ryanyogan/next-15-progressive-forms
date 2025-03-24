"use server";

import { prisma } from "@/lib/prisma";
import { ticketPath, ticketsPath } from "@/paths";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

const upsertTicketSchema = z.object({
  title: z.string().min(1).max(200),
  content: z.string().min(1).max(1024),
});

export async function upsertTicket(
  id: string | undefined,
  _actionState: { message: string; payload?: FormData },
  formData: FormData
) {
  try {
    const data = upsertTicketSchema.parse({
      title: formData.get("title"),
      confirm: formData.get("content"),
    });

    await prisma.ticket.upsert({
      where: {
        id: id || "",
      },
      update: data,
      create: data,
    });
  } catch (error) {
    console.error(error);
    return { message: "Failed to create ticket", payload: formData };
  }

  revalidatePath(ticketsPath());

  if (id) {
    redirect(ticketPath(id));
  }

  return { message: "Ticket created" };
}
