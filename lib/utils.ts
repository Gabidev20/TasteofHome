import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCAD(amount: number) {
  return new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD",
  }).format(amount);
}

// Next.js throws this internally (from cookies()/headers()) to bail a route
// out of static generation into dynamic rendering during the build's static
// trial pass. A try/catch around code that calls cookies() must rethrow it
// unchanged — swallowing it would defeat Next's static/dynamic detection.
// https://nextjs.org/docs/messages/dynamic-server-error
export function rethrowIfNextDynamicUsage(error: unknown): void {
  const digest = (error as { digest?: string } | null)?.digest;
  if (typeof digest === "string" && digest.startsWith("DYNAMIC_SERVER_USAGE")) {
    throw error;
  }
}
