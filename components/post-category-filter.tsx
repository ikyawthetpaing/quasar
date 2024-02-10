"use client";

import { HTMLAttributes, Suspense, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useCreateQueryString } from "@/hooks/create-query-string";

import { cn, slugify } from "@/lib/utils";

interface Props extends HTMLAttributes<HTMLDivElement> {
  categories: string[];
}
export function Filter({ categories, className, ...props }: Props) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { createQueryString } = useCreateQueryString();

  const [category, setCategory] = useState<string | null>(null);

  useEffect(() => {
    const param = searchParams.get("category");
    if (
      param &&
      categories.find((categoryName) => slugify(categoryName) === param)
    ) {
      setCategory(param);
    } else {
      if (category) {
        setCategory(null);
      }
    }
  }, [categories, category, searchParams]);

  return (
    <div className={cn("flex gap-8", className)} {...props}>
      {["All", ...categories].map((categoryName, index) => (
        <Link
          key={index}
          href={`${pathname}?${createQueryString({ category: categoryName === "All" ? null : slugify(categoryName), page_index: 0 })}`}
          className={cn(
            "text-muted-foreground min-w-max underline-offset-4 hover:underline",
            {
              "text-foreground underline":
                slugify(categoryName) === category ||
                (category === null && categoryName === "All"),
            }
          )}
          scroll={false}
        >
          {categoryName}
        </Link>
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
