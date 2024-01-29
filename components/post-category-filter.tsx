"use client";

import { HTMLAttributes, Suspense, useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Category } from "@/types";

import { cn } from "@/lib/utils";

interface Props extends HTMLAttributes<HTMLDivElement> {
  categories: Pick<Category, "label" | "value">[];
}
export function PostCategory({ categories, className, ...props }: Props) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const [category, setCategory] = useState<string>("");

  useEffect(() => {
    const param = searchParams.get("category");
    if (param && categories.find(({ value }) => value === param)) {
      setCategory(param);
    }
  }, [categories, searchParams]);

  useEffect(() => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    if (!category) {
      current.delete("category");
    } else {
      current.set("category", category);
    }
    const search = current.toString();
    const query = search ? `?${search}` : "";
    router.push(`${pathname}${query}`, { scroll: false });
  }, [category, pathname, router, searchParams]);

  return (
    <div className={cn("flex gap-8", className)} {...props}>
      {[{ label: "All", value: "" }, ...categories].map(
        ({ label, value }, index) => (
          <button
            key={index}
            className={cn(
              "text-muted-foreground underline-offset-4 hover:underline",
              { "text-foreground underline": value === category }
            )}
            onClick={() => setCategory(value)}
          >
            {label}
          </button>
        )
      )}
    </div>
  );
}

export function PostCategoryFilter({ ...props }: Props) {
  return (
    <Suspense>
      <PostCategory {...props} />
    </Suspense>
  );
}
