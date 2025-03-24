import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ticketPath } from "@/paths";
import clsx from "clsx";
import { LucideArrowUpRightFromSquare } from "lucide-react";
import Link from "next/link";
import { TICKET_ICONS } from "../constants";
import { Ticket } from "../types";

type TicketItemProps = {
  ticket: Ticket;
  isDetail?: boolean;
};

export function TicketItem({ ticket, isDetail }: TicketItemProps) {
  const detailButton = (
    <Button variant="outline" size="icon" asChild>
      <Link href={ticketPath(ticket.id)}>
        <LucideArrowUpRightFromSquare className="size-4" />
      </Link>
    </Button>
  );

  return (
    <div
      className={clsx("w-full flex gap-x-1", {
        "max-w-[580px]": isDetail,
        "max-w-[420px]": !isDetail,
      })}
    >
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="flex gap-x-2">
            <span>{TICKET_ICONS[ticket.status]}</span>
            <span className="truncate">{ticket.title}</span>
          </CardTitle>

          <CardContent>
            <span
              className={clsx("whitespace-break-spaces", {
                "line-clamp-3": !isDetail,
              })}
            >
              {ticket.content}
            </span>
          </CardContent>

          <CardFooter>
            <Link href={ticketPath(ticket.id)} className="text-sm underline">
              View
            </Link>
          </CardFooter>
        </CardHeader>
      </Card>

      {isDetail ? null : (
        <div className="flex flex-col gap-y-1">{detailButton}</div>
      )}
    </div>
  );
}
