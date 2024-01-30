"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { NavItem } from "@/types";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Icons } from "@/components/icons";
import { NavItems } from "@/components/layout/nav-items";

interface Props {
  navItems: NavItem[];
}

export function MobileNavSheet({ navItems }: Props) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [pathname]);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button className="md:hidden">
          <Icons.menu className="size-7" />
        </button>
      </SheetTrigger>
      <SheetContent side="left">
        <NavItems
          items={navItems}
          className="flex h-full flex-col items-center justify-center gap-8 text-xl"
        />
      </SheetContent>
    </Sheet>
  );
}
