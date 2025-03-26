import { CardCompact } from "@/components/card-compact";
import { SignUpForm } from "@/features/auth/components/sign-up-form";
import { signInPath } from "@/paths";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <div>
      <CardCompact
        title="Sign Up"
        description="Create an account to access all features."
        className="w-full max-w-[420px] animate-fade-from-top"
        content={<SignUpForm />}
        footer={
          <Link href={signInPath()} className="text-sm text-muted-foreground">
            Have an account? Sign In no
          </Link>
        }
      />
    </div>
  );
}
