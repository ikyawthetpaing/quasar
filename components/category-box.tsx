import { HTMLAttributes } from "react";
import Image from "next/image";
import { Category } from "@/types";

import { cn } from "@/lib/utils";

interface Props extends HTMLAttributes<HTMLDivElement> {
  category: Pick<Category, "id" | "name" | "title" | "image">;
}

export function CategoryBox({ category, className, ...props }: Props) {
  const { name, title, image } = category;
  return (
    <div
      className={cn(
        "bg-muted relative flex aspect-square overflow-hidden rounded-2xl border",
        className
      )}
      {...props}
    >
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover"
        sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, (min-width: 475px) 50vw, 100vw"
      />
      <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl border bg-[rgba(0,0,0,0.25)] px-6 py-3 text-white backdrop-blur-sm dark:bg-[rgba(255,255,255,0.25)] dark:text-black">
        {name}
      </p>
    </div>
  );
}
