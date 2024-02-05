import path from "path";
import { Post, PostMetadata, PostTag } from "@/types";

import { getMDXData } from "@/lib/content/utils";
import { getPostViewsCount } from "@/lib/db/action/post-views";

const posts = getPosts();

function getPosts() {
  return getMDXData<Post>(path.join(process.cwd(), "content", "post"));
}

export async function getPostsMetadata({
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
  const _posts = process.env.NODE_ENV === "production" ? posts : getPosts();
  let postsMetadata = _posts.map(
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
      postsMetadata = postsMetadata.filter(
        ({ featured }) => featured === "true"
      );
      break;
    case "popular":
      postsMetadata = await Promise.all(
        postsMetadata.map(async (metadata) => {
          const views = await getPostViewsCount(metadata.slug);
          return { ...metadata, views };
        })
      );
      postsMetadata.sort((a, b) => (b.views || 0) - (a.views || 0));
      break;
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
  const _posts = process.env.NODE_ENV === "production" ? posts : getPosts();
  return _posts.find(({ slug }) => slug === _slug);
}
