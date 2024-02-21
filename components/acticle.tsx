import "@/styles/article.css";

import { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";
import { CustomMDX } from "@/components/mdx/custom-mdx";

interface Props extends HTMLAttributes<HTMLElement> {
  content: string;
}
export function Article({ content, className, ...props }: Props) {
  return (
    <article
      className={cn(
        "prose prose-quoteless prose-neutral dark:prose-invert",
        className
      )}
      {...props}
    >
      <CustomMDX source={content} />
    </article>
  );
}
