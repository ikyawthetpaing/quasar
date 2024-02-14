import { allBlogs } from "@/.contentlayer/generated";
import { PostMetadata, PostTag } from "@/types";

import { getPostViewsCount } from "@/lib/db/action/post-views";
import { slugify } from "@/lib/utils";

const blogs = allBlogs;

export async function getBlogsMetadata({
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
  let postsMetadata = blogs.map(
    ({
      author,
      category,
      date,
      description,
      featured,
      slug,
      thumbnail,
      title,
    }) =>
      ({
        author,
        category,
        date,
        description,
        featured,
        slug,
        thumbnail,
        title,
        views: 0,
      }) as PostMetadata
  );

  if (excludes) {
    postsMetadata = postsMetadata.filter(
      ({ slug }) => !excludes.includes(slug)
    );
  }

  if (category) {
    postsMetadata = postsMetadata.filter(
      ({ category: _category }) => slugify(_category) === category
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

export function getBlog(slug: string) {
  return blogs.find(({ slugAsParams }) => slugAsParams === slug);
}

let blogCategories: string[] = [];

export function getBlogCategories() {
  if (!(blogCategories.length > 0)) {
    blogs.forEach(({ category }) => {
      if (!blogCategories.includes(category)) {
        blogCategories.push(category);
      }
    });
  }
  return blogCategories;
}
