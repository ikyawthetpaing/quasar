import Link from "next/link";

import { baseConfig } from "@/config/base";
import { CategoryBox } from "@/components/category-box";

export default function CategoryPage() {
  return (
    <div>
      <section className="container grid gap-8">
        <h1 className="font-heading text-center text-3xl font-bold">
          Explore Our Categories
        </h1>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-8">
          {baseConfig.categories.map(({ label, value, image }, index) => (
            <Link key={index} href={`/category/${value}`}>
              <CategoryBox label={label} image={image} />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
