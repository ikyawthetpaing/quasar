"use client";

import { HTMLAttributes } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavItem } from "@/types";

import { cn } from "@/lib/utils";

interface Props extends HTMLAttributes<HTMLUListElement> {
  items: NavItem[];
}

export function NavItems({ items, className, ...props }: Props) {
  const pathname = usePathname();
  return (
    <nav className="h-full">
      <ul className={cn("flex gap-4", className)} {...props}>
        {items.map(({ label, url }, index) => (
          <li key={index}>
            <Link
              href={url}
              className={cn(
                "text-muted-foreground underline-offset-4 hover:underline",
                {
                  "underline text-foreground":
                    pathname === url ||
                    (url !== "/" && pathname.startsWith(url)),
                }
              )}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
