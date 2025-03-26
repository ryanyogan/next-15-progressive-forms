import { env } from "../env.mjs";

export function getBaseUrl() {
  const environment = process.env.NODE_ENV;

  const baseUrl =
    environment === "development"
      ? "http://localhost:3000"
      : `https://${env.NEXT_PUBLIC_VERCEL_URL}`;

  return baseUrl;
}
