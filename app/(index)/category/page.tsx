import { Metadata } from "next";

import { getPostCategories } from "@/lib/content/post";
import { CategoriesSection } from "@/components/categories-section";

export const metadata: Metadata = {
  title: "Browse Web Development Blog Categories",
  description:
    "Discover a wealth of information, tutorials, and free web development blog posts.",
};

export default async function CategoryPage() {
  return <CategoriesSection categories={await getPostCategories()} />;
}
