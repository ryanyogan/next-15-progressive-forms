"use client";

import {
  DatePicker,
  ImperativeHandleFromDatePicker,
} from "@/components/date-picker";
import { FieldError } from "@/components/forms/field-error";
import { FeedbackForm } from "@/components/forms/form";
import { SubmitButton } from "@/components/forms/submit-button";
import { EMPTY_ACTION_STATE } from "@/components/forms/utils/to-action-state";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { fromCent } from "@/utils/currency";
import { Ticket } from "@prisma/client";
import { useActionState, useRef } from "react";
import { upsertTicket } from "../actions/upsert-ticket";

type TicketUpsertFormProps = {
  ticket?: Ticket;
};

export function TicketUpsertForm({ ticket }: TicketUpsertFormProps) {
  const [actionState, action] = useActionState(
    upsertTicket.bind(null, ticket?.id),
    EMPTY_ACTION_STATE
  );

  const datePickerImperativeHandleRef =
    useRef<ImperativeHandleFromDatePicker>(null);

  function handleSuccess() {
    datePickerImperativeHandleRef.current?.reset();
  }

  return (
    <FeedbackForm
      action={action}
      actionState={actionState}
      onSuccess={handleSuccess}
    >
      <Label htmlFor="title">Title</Label>
      <Input
        type="text"
        id="title"
        name="title"
        defaultValue={
          (actionState.payload?.get("title") as string) ?? ticket?.title
        }
      />

      <FieldError actionState={actionState} name="title" />

      <Label htmlFor="content">Content</Label>
      <Textarea
        id="content"
        name="content"
        defaultValue={
          (actionState.payload?.get("content") as string) ?? ticket?.content
        }
      />

      <FieldError actionState={actionState} name="content" />

      <div className="flex gap-x-2 mb-1">
        <div className="w-1/2 flex flex-col gap-y-2">
          <Label htmlFor="deadline">Deadline</Label>
          <DatePicker
            imperativeHandleRef={datePickerImperativeHandleRef}
            id="deadline"
            name="deadline"
            defaultValue={
              (actionState.payload?.get("deadline") as string) ??
              ticket?.deadline
            }
          />
          <FieldError actionState={actionState} name="deadline" />
        </div>
        <div className="w-1/2 flex flex-col gap-y-2">
          <Label htmlFor="bounty">Bounty ($)</Label>
          <Input
            id="bounty"
            name="bounty"
            type="number"
            step=".01"
            defaultValue={
              (actionState.payload?.get("bounty") as string) ??
              (ticket?.bounty ? fromCent(ticket.bounty) : "")
            }
          />
          <FieldError actionState={actionState} name="bounty" />
        </div>
      </div>

      <SubmitButton label={ticket ? "Edit" : "Create"} />
    </FeedbackForm>
  );
}
