import { HTMLAttributes } from "react";
import Link from "next/link";
import { NavItem } from "@/types";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { SearchPostForm } from "@/components/form/search-post-form";
import { MobileNavSheet } from "@/components/layout/mobile-nav-sheet";
import { NavItems } from "@/components/layout/nav-items";
import { SearchPostDialog } from "@/components/search-post-dialog";

interface Props extends HTMLAttributes<HTMLDivElement> {
  navItems: NavItem[];
}

export function SiteHeader({ navItems, className, ...props }: Props) {
  return (
    <header
      className={cn(
        "border-border/40 bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur",
        className
      )}
      {...props}
    >
      <div className="container grid h-14 grid-cols-3 items-center">
        <div>
          <NavItems items={navItems} className="hidden md:flex" />
          <div className="block md:hidden">
            <MobileNavSheet
              navItems={navItems}
              // coursesChapters={coursesChapters}
            />
          </div>
        </div>
        <div className="flex justify-center">
          <Link href="/" className="font-heading text-2xl font-bold">
            {siteConfig.name}
          </Link>
        </div>
        <div className="flex justify-end">
          <SearchPostForm className="hidden h-8 md:flex" actionUrl="/blog" />
          <div className="block md:hidden">
            <SearchPostDialog actionUrl="/blog" />
          </div>
        </div>
      </div>
    </header>
  );
}
