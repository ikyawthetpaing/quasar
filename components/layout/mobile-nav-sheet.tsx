"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavItem } from "@/types";

import { getCourseChapters } from "@/lib/content/course";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Icons } from "@/components/icons";
import { NavItems } from "@/components/layout/nav-items";

interface Props {
  navItems: NavItem[];
}

export function MobileNavSheet({ navItems }: Props) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [chapters, setChapters] = useState<
    {
      index: number;
      title: string;
      slug: string;
      path: string;
    }[]
  >([]);
  const [, , courseSlug, chapterSlug] = pathname.split("/");

  useEffect(() => {
    getCourseChapters(courseSlug).then((values) => setChapters(values));
  }, [courseSlug]);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button className="md:hidden">
          <Icons.menu className="size-7" />
        </button>
      </SheetTrigger>
      <SheetContent side="left" className="no-scrollbar overflow-scroll">
        {courseSlug && chapters ? (
          <div className="flex flex-col gap-8 pt-6">
            <NavItems items={navItems} className="flex-wrap justify-between" />
            <div className="flex flex-col gap-1">
              {chapters.map(({ title, slug }, index) => (
                <Link
                  key={index}
                  href={`/course/${courseSlug}/${slug}`}
                  className={cn(
                    "hover:border-border rounded-lg border border-transparent px-4 py-1",
                    {
                      "bg-secondary text-secondary-foreground":
                        slug === chapterSlug ||
                        (!chapterSlug && slug === "index"),
                    }
                  )}
                >
                  {title}
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <NavItems
            items={navItems}
            className="flex h-full flex-col items-center justify-center gap-8 text-xl"
          />
        )}
      </SheetContent>
    </Sheet>
  );
}
