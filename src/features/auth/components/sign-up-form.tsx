"use client";

import { FieldError } from "@/components/forms/field-error";
import { FeedbackForm } from "@/components/forms/form";
import { SubmitButton } from "@/components/forms/submit-button";
import { EMPTY_ACTION_STATE } from "@/components/forms/utils/to-action-state";
import { Input } from "@/components/ui/input";
import { useActionState } from "react";
import { signUp } from "../actions/sign-up";

export function SignUpForm() {
  const [actionState, action] = useActionState(signUp, EMPTY_ACTION_STATE);

  return (
    <FeedbackForm action={action} actionState={actionState}>
      <Input
        name="username"
        placeholder="Username"
        defaultValue={actionState.payload?.get("username") as string}
      />
      <FieldError actionState={actionState} name="username" />

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

      <Input
        name="confirmPassword"
        placeholder="Confirm Password"
        type="password"
        defaultValue={actionState.payload?.get("confirmPassword") as string}
      />
      <FieldError actionState={actionState} name="confirmPassword" />

      <SubmitButton label="Sign Up" />
    </FeedbackForm>
  );
}
