import { HTMLAttributes } from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";

interface Props extends HTMLAttributes<HTMLDivElement> {
  label: string;
  image: string;
}

export function CategoryBox({ label, image, className, ...props }: Props) {
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
        alt={label}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl border bg-[rgba(0,0,0,0.25)] px-6 py-3 text-white backdrop-blur-sm dark:bg-[rgba(255,255,255,0.25)] dark:text-black">
        {label}
      </p>
    </div>
  );
}
