"use client";

import { consumeCookieByKey } from "@/actions/cookies";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";

export function RedirectToast() {
  // We are using pathname here to trigger this effect when the route changes
  // given the template.tsx file does not work as intended... fucking next man,
  // I think it is time to go back to Remix or Tanstack start!
  const pathname = usePathname();

  useEffect(() => {
    const showCookieToast = async () => {
      const message = await consumeCookieByKey("toast");

      if (message) {
        toast.success(message);
      }
    };

    showCookieToast();
  }, [pathname]);

  return null;
}
