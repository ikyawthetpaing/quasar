import Link from "next/link";

import { slugify } from "@/lib/utils";

interface Props {
  categories: string[];
}

export function CategoriesSection({ categories }: Props) {
  return (
    <section className="container flex flex-col gap-8">
      <h2 className="font-heading text-center text-2xl font-bold sm:text-3xl">
        Blog Categories
      </h2>
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((category, index) => (
          <Link key={index} href={`/category/${slugify(category)}`}>
            <div className="min-w-max rounded-xl border px-4 py-2 duration-150 hover:px-6">
              {category}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
