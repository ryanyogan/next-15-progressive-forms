import { PrismaClient, Ticket } from "@prisma/client";

const prisma = new PrismaClient();

const tickets: Pick<
  Ticket,
  "title" | "content" | "status" | "deadline" | "bounty"
>[] = [
  {
    title: "Ticket 1",
    content: "This is the first ticket",
    status: "DONE" as const,
    deadline: new Date().toISOString().split("T")[0],
    bounty: 499,
  },
  {
    title: "Ticket 2",
    content: "This is the second ticket",
    status: "OPEN" as const,
    deadline: new Date().toISOString().split("T")[0],
    bounty: 399,
  },
  {
    title: "Ticket 3",
    content: "This is the third ticket",
    status: "IN_PROGRESS" as const,
    deadline: new Date().toISOString().split("T")[0],
    bounty: 299,
  },
];

async function seed() {
  const start = performance.now();
  console.log("DB Seed: Started...");

  await prisma.ticket.deleteMany();

  await prisma.ticket.createMany({
    data: tickets,
  });

  const end = performance.now();
  console.log(`DB Seed: Completed in ${end - start}ms`);
}

seed();
