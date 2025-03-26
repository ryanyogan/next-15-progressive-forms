"use client";

import { FieldError } from "@/components/forms/field-error";
import { FeedbackForm } from "@/components/forms/form";
import { SubmitButton } from "@/components/forms/submit-button";
import { EMPTY_ACTION_STATE } from "@/components/forms/utils/to-action-state";
import { Input } from "@/components/ui/input";
import { useActionState } from "react";
import { signIn } from "../actions/sign-in";

export function SignInForm() {
  const [actionState, action] = useActionState(signIn, EMPTY_ACTION_STATE);

  return (
    <FeedbackForm action={action} actionState={actionState}>
      <Input
        name="email"
        placeholder="Email"
        defaultValue={actionState.payload?.get("email") as string}
      />
      <FieldError actionState={actionState} name="email" />

      <Input
        name="password"
        placeholder="Password"
        type="password"
        defaultValue={actionState.payload?.get("password") as string}
      />
      <FieldError actionState={actionState} name="password" />

      <SubmitButton label="Sign In" />
    </FeedbackForm>
  );
}
