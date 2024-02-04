import path from "path";
import { Post, PostMetadata, PostTag } from "@/types";

import { getMDXData } from "./utils";

const posts = getMDXData<Post>(path.join(process.cwd(), "content", "post"));

export function getPostsMetadata({
  excludes,
  pageIndex = 0,
  perPage = 6,
  tag = "latest",
  category,
  query,
}: {
  excludes?: string[];
  pageIndex?: number;
  perPage?: number;
  tag?: PostTag["value"] | null;
  category?: string | null;
  query?: string | null;
}) {
  let postsMetadata = posts.map(
    ({ metadata, slug }) =>
      ({
        slug,
        views: 0,
        ...metadata,
      }) as PostMetadata
  );

  if (excludes) {
    postsMetadata = postsMetadata.filter(
      ({ slug }) => !excludes.includes(slug)
    );
  }

  if (category) {
    postsMetadata = postsMetadata.filter(
      ({ category: _category }) => _category === category
    );
  }

  if (query) {
    postsMetadata = postsMetadata.filter(({ title }) =>
      title.toLowerCase().includes(query.toLowerCase())
    );
  }

  switch (tag) {
    case "featured":
      postsMetadata = postsMetadata.filter(({ featured }) => featured);
      break;
    case "popular":
    // postsMetadata.sort((a, b) => (b.views || 0) - (a.views || 0));
    // break;
    case "latest":
    default:
      postsMetadata.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
      break;
  }

  return {
    postsMetadata: getPageItems(postsMetadata, pageIndex, perPage),
    pageCount: Math.ceil(postsMetadata.length / perPage),
  };
}

function getPageItems<T>(
  inputArray: T[],
  pageIndex: number,
  pageSize: number
): T[] {
  const startIndex = pageIndex * pageSize;
  const endIndex = startIndex + pageSize;

  return inputArray.slice(startIndex, endIndex);
}

export function getPost(_slug: string) {
  return posts.find(({ slug }) => slug === _slug);
}
