"use client";

import { HTMLAttributes, Suspense, useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCreateQueryString } from "@/hooks/create-query-string";
import { Category } from "@/types";

import { cn } from "@/lib/utils";

interface Props extends HTMLAttributes<HTMLDivElement> {
  categories: Pick<Category, "name" | "id">[];
}
export function Filter({ categories, className, ...props }: Props) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const { createQueryString } = useCreateQueryString();

  const [category, setCategory] = useState<string | null>(null);

  useEffect(() => {
    const param = searchParams.get("category");
    if (param && categories.find(({ id: value }) => value === param)) {
      setCategory(param);
    } else {
      if (category) {
        setCategory(null);
      }
    }
  }, [categories, category, searchParams]);

  return (
    <div className={cn("flex gap-8", className)} {...props}>
      {[{ name: "All", id: null }, ...categories].map(({ name, id }, index) => (
        <button
          key={index}
          className={cn(
            "text-muted-foreground underline-offset-4 hover:underline",
            { "text-foreground underline": id === category }
          )}
          onClick={() =>
            router.push(
              `${pathname}?${createQueryString({ category: id, page_index: 0 })}`,
              {
                scroll: false,
              }
            )
          }
        >
          {name}
        </button>
      ))}
    </div>
  );
}

export function PostCategoryFilter({ ...props }: Props) {
  return (
    <Suspense>
      <Filter {...props} />
    </Suspense>
  );
}
