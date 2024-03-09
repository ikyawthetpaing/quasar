import Link from "next/link";
import { NavItem } from "@/types";

import { siteConfig } from "@/config/site";
import { SearchPostForm } from "@/components/form/search-post-form";
import { MobileNavSheet } from "@/components/layout/mobile-nav-sheet";
import { NavItems } from "@/components/layout/nav-items";
import { SearchPostDialog } from "@/components/search-post-dialog";

interface Props {
  navItems: NavItem[];
}

export function SiteHeader({ navItems }: Props) {
  return (
    <header className="container grid grid-cols-3 items-center py-5">
      <div>
        <NavItems items={navItems} className="hidden sm:flex" />
        <div className="block sm:hidden">
          <MobileNavSheet navItems={navItems} />
        </div>
      </div>
      <div className="flex justify-center">
        <Link href="/" className="font-heading text-2xl font-bold">
          {siteConfig.name}
        </Link>
      </div>
      <div className="flex justify-end">
        <SearchPostForm className="hidden sm:flex" actionUrl="/blog" />
        <div className="block sm:hidden">
          <SearchPostDialog actionUrl="/blog" />
        </div>
      </div>
    </header>
  );
}
