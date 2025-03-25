import Form from "next/form";
import { toast } from "sonner";
import { useActionFeedback } from "./hooks/use-action-feedback";
import { ActionState } from "./utils/to-action-state";

type FormProps = {
  action: (payload: FormData) => void;
  actionState: ActionState;
  children: React.ReactNode;
};

export function FeedbackForm({ action, actionState, children }: FormProps) {
  useActionFeedback(actionState, {
    onSuccess: ({ actionState }) => {
      if (actionState.message) {
        toast.success(actionState.message);
      }
    },
    onError: ({ actionState }) => {
      if (actionState.message) {
        toast.error(actionState.message);
      }
    },
  });

  return (
    <Form action={action} className="flex flex-col gap-y-2">
      {children}

      <noscript>
        {actionState.status === "ERROR" && (
          <div style={{ color: "red" }}>{actionState.message}</div>
        )}

        {actionState.status === "SUCCESS" && (
          <div style={{ color: "green" }}>{actionState.message}</div>
        )}
      </noscript>
    </Form>
  );
}
