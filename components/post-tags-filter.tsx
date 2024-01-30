"use client";

import { HTMLAttributes, Suspense, useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCreateQueryString } from "@/hooks/create-query-string";
import { SelectOption } from "@/types";

import { cn } from "@/lib/utils";

interface Props extends HTMLAttributes<HTMLDivElement> {
  tags: SelectOption[];
}
function Filter({ tags, className, ...props }: Props) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const { createQueryString } = useCreateQueryString();

  const [tag, setTag] = useState<string | null>(null);

  useEffect(() => {
    const param = searchParams.get("tag");
    if (param && tags.find(({ value }) => value === param)) {
      setTag(param);
    } else {
      if (tag) {
        setTag(null);
      }
    }
  }, [searchParams, tag, tags]);

  return (
    <div className={cn("flex w-max rounded-full border", className)} {...props}>
      {tags.map(({ label, value }) => (
        <button
          key={value}
          className={cn(
            "text-muted-foreground rounded-full px-4 py-1 text-sm",
            {
              "bg-secondary text-secondary-foreground":
                value === tag || (!tag && value === "latest"),
            }
          )}
          onClick={() =>
            router.push(`${pathname}?${createQueryString({ tag: value })}`, {
              scroll: false,
            })
          }
        >
          {label}
        </button>
      ))}
    </div>
  );
}

export function PostTagsFilter({ ...props }: Props) {
  return (
    <Suspense>
      <Filter {...props} />
    </Suspense>
  );
}
