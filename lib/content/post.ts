import path from "path";
import { Post, PostTag } from "@/types";

import { getMDXData } from "./utils";

const posts = getMDXData<Post>(path.join(process.cwd(), "content", "post"));

export function getPosts() {
  return posts;
}

export function getPostsMetadata({
  amount = 6,
  tag = "latest",
  category,
  query,
}: {
  amount?: number;
  tag?: PostTag["value"] | null;
  category?: string | null;
  query?: string | null;
}) {
  let postsMetadata = posts.map(({ metadata, slug }) => ({
    slug,
    views: 0,
    ...metadata,
  }));

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

  return postsMetadata.slice(0, amount);
}
