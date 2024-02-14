import { Metadata } from "next";

import { getBlogCategories } from "@/lib/content/blog";
import { CategoriesSection } from "@/components/categories-section";

export const metadata: Metadata = {
  title: "Browse Web Development Blog Categories",
  description:
    "Discover a wealth of information, tutorials, and free web development blog posts.",
};

export default function CategoryPage() {
  return <CategoriesSection categories={getBlogCategories()} />;
}
