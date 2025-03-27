import { signInPath } from "@/paths";
import { redirect } from "next/navigation";
import { getAuth } from "./get-auth";

export async function getAuthOrRedirect() {
  const auth = await getAuth();
  if (!auth.user) {
    redirect(signInPath());
  }

  return auth;
}
