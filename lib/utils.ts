import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import { env } from "@/env.mjs";

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

export function absoluteUrl(path?: string): string {
  const siteUrl = env.NEXT_PUBLIC_APP_URL;
  if (!path) {
    return siteUrl;
  }
  return `${siteUrl}${path}`;
}

export function formatDate(input: string | number): string {
  const date = new Date(input);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}
