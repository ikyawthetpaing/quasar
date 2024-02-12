import { BaseConfig } from "@/types";

import { getPostCategories } from "@/lib/content/post";
import { slugify } from "@/lib/utils";

export const baseConfig: BaseConfig = {
  navItems: [
    { label: "Home", url: "/" },
    { label: "Course", url: "/course" },
    { label: "Blog", url: "/blog" },
    { label: "About", url: "/about" },
  ],
  footerLinkGroups: [
    {
      title: "Pages",
      links: [
        { label: "Home", url: "/" },
        { label: "Course", url: "/course" },
        { label: "Category", url: "/category" },
        { label: "Blog", url: "/blog" },
      ],
    },
    {
      title: "Community",
      links: [
        { label: "About", url: "/about" },
        { label: "Brands", url: "/brands" },
        { label: "Careers", url: "/careers" },
      ],
    },
  ],
  legalLinks: [
    { label: "Privacy Policy", url: "/privacy" },
    { label: "Terms of Service", url: "/terms" },
    { label: "Cookie Policy", url: "/cookiepolicy" },
  ],
};

export function getCategory(category: string) {
  return (
    getPostCategories().find((value) => slugify(value) === category) || null
  );
}
