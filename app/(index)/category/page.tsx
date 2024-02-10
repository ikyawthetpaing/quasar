import Link from "next/link";

import { getPostCategories } from "@/lib/content/post";
import { slugify } from "@/lib/utils";

export default function CategoryPage() {
  return (
    <section className="container flex flex-col gap-8">
      <h2 className="font-heading text-center text-2xl font-bold sm:text-3xl">
        Explore Blog Categories
      </h2>
      <div className="flex flex-wrap justify-center gap-2">
        {getPostCategories().map((category, index) => (
          <Link key={index} href={`/category/${slugify(category)}`}>
            <div className="min-w-max rounded-xl border px-4 py-2">
              {category}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
