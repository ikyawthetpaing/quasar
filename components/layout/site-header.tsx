import Link from "next/link";
import { NavItem } from "@/types";

import { siteConfig } from "@/config/site";

import { SearchPostForm } from "../form/search-post-form";

interface Props {
  navItems: NavItem[];
}

export function SiteHeader({ navItems }: Props) {
  return (
    <header className="container grid grid-cols-3 items-center py-5">
      <nav className="flex gap-4">
        {navItems.map(({ label: title, url: href }, index) => (
          <Link
            key={index}
            href={href}
            className="underline-offset-4 hover:underline"
          >
            {title}
          </Link>
        ))}
      </nav>
      <div className="flex justify-center">
        <Link href="/" className="text-xl font-bold">
          {siteConfig.name}
        </Link>
      </div>
      <div className="flex justify-end">
        <SearchPostForm />
      </div>
    </header>
  );
}
