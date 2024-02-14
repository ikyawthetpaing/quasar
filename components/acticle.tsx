import "@/styles/article.css";

import { HTMLAttributes } from "react";

import { CustomMDX } from "@/components/custom-mdx";

interface Props extends HTMLAttributes<HTMLElement> {
  code: string;
}
export function Article({ code, className, ...props }: Props) {
  return (
    <article className={className} {...props}>
      <CustomMDX code={code} />
    </article>
  );
}
