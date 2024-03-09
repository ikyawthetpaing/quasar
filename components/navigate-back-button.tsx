"use client";

import { useRouter } from "next/navigation";

import { Icons } from "@/components/icons";

export function NavigateBackButton() {
  const router = useRouter();
  return (
    <button onClick={() => router.back()} className="flex items-center gap-2">
      <Icons.arrowLeft className="size-4" />
      Back
    </button>
  );
}
