"use client";

import { HTMLAttributes, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { getPosts } from "@/dev/posts";

import { cn } from "@/lib/utils";

import { PostItem } from "./post-item";

interface Props extends HTMLAttributes<HTMLDivElement> {
  fixedCategory?: string;
}

export function PostList({ fixedCategory, className, ...props }: Props) {
  const searchParams = useSearchParams();

  const tag = searchParams.get("tag");
  const category = fixedCategory ? fixedCategory : searchParams.get("category");
  const posts = getPosts({
    amount: 6,
    category: category || undefined,
    tag: tag || undefined,
  });

  useEffect(() => console.log("run useEffect"), []);

  return (
    <div
      className={cn(
        "xs:grid-cols-2 grid grid-cols-1 gap-8 md:grid-cols-3",
        className
      )}
      {...props}
    >
      {posts.map((post, index) => (
        <PostItem key={index} post={post} />
      ))}
    </div>
  );
}
