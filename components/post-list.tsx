import { HTMLAttributes } from "react";
import { PostTag } from "@/types";

import { getPostsMetadata } from "@/lib/content/post";
import { cn, isString } from "@/lib/utils";
import { PostItem } from "@/components/post-item";

interface Props extends HTMLAttributes<HTMLDivElement> {
  amount?: number;
  fixedCategory?: string;
  fixedTag?: PostTag["value"];
  searchParams?: {
    [key: string]: string | string[] | undefined;
  };
}

export function PostList({
  amount = 6,
  fixedCategory,
  fixedTag,
  searchParams,
  className,
  ...props
}: Props) {
  const query = isString(searchParams?.query) ? searchParams.query : null;
  const tag = fixedTag
    ? fixedTag
    : isString(searchParams?.tag)
      ? (searchParams.tag as PostTag["value"])
      : null;
  const category = fixedCategory
    ? fixedCategory
    : isString(searchParams?.category)
      ? searchParams.category
      : null;
  const posts = getPostsMetadata({
    amount,
    category,
    tag,
    query,
  });

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
