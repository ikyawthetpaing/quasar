import { Metadata } from "next";
import Link from "next/link";

import { baseConfig } from "@/config/base";
import { CategoryBox } from "@/components/category-box";

export const metadata: Metadata = {
  title: "Explore Insights on Travel, Art, Fashion, and More",
  description:
    "Discover captivating stories and fresh perspectives on a diverse range of topics, from travel adventures to tech innovations. Find your inspiration here!",
};

export default function CategoryPage() {
  return (
    <div>
      <section className="container grid gap-8">
        <h1 className="font-heading text-center text-3xl font-bold">
          Explore Our Categories
        </h1>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-8">
          {baseConfig.categories.map((category, index) => (
            <Link key={index} href={`/category/${category.id}`}>
              <CategoryBox category={category} />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
