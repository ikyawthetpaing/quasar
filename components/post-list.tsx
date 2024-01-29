"use client";

import { HTMLAttributes, Suspense, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { getPosts } from "@/dev/posts";

import { cn } from "@/lib/utils";

import { PostItem } from "./post-item";

interface Props extends HTMLAttributes<HTMLDivElement> {
  fixedCategory?: string;
}

function Posts({ fixedCategory, className, ...props }: Props) {
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

export function PostList({ ...props }: Props) {
  return (
    <Suspense>
      <Posts {...props} />
    </Suspense>
  );
}
