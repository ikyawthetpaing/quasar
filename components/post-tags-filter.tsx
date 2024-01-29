"use client";

import { HTMLAttributes, useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { SelectOption } from "@/types";

import { cn } from "@/lib/utils";

interface Props extends HTMLAttributes<HTMLDivElement> {
  tags: SelectOption[];
}
export function PostTagsFilter({ tags, className, ...props }: Props) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const [tag, setTag] = useState<string>(tags[0].value);

  useEffect(() => {
    const param = searchParams.get("tag");
    if (param && tags.find(({ value }) => value === param)) {
      setTag(param);
    }
  }, [searchParams, tags]);

  useEffect(() => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    if (!tag) {
      current.delete("tag");
    } else {
      current.set("tag", tag);
    }
    const search = current.toString();
    const query = search ? `?${search}` : "";
    router.push(`${pathname}${query}`, { scroll: false });
  }, [tag, pathname, router, searchParams]);

  return (
    <div className={cn("flex w-max rounded-full border", className)} {...props}>
      {tags.map(({ label, value }) => (
        <button
          key={value}
          className={cn(
            "text-muted-foreground rounded-full px-4 py-1 text-sm",
            {
              "bg-secondary text-secondary-foreground": value === tag,
            }
          )}
          onClick={() => setTag(value)}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
