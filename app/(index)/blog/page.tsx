import { Metadata } from "next";

import { postConfig } from "@/config/post";
import { getPostCategories } from "@/lib/content/post";
import { SearchPostForm } from "@/components/form/search-post-form";
import { PostCategoryFilter } from "@/components/post-category-filter";
import { PostList } from "@/components/post-list";
import { PostTagsFilter } from "@/components/post-tags-filter";

interface Props {
  searchParams?: {
    [key: string]: string | string[] | undefined;
  };
}

export const metadata: Metadata = {
  title: "Learn to Web Development with Our Blog Posts",
  description:
    "Learn web development skills through our tutorials, articles, and blog posts",
};

export default function BlogPage({ searchParams }: Props) {
  return (
    <div>
      <section className="grid gap-8">
        <div className="container">
          <h1 className="font-heading text-center text-3xl font-bold">
            Learn to Code with Our Tutorials & Articles
          </h1>
        </div>
        <div className="grid gap-4">
          <div className="no-scrollbar container grid gap-8 overflow-x-scroll">
            <div className="flex justify-center">
              <PostCategoryFilter categories={getPostCategories()} />
            </div>
          </div>
          <div className="no-scrollbar container overflow-x-scroll">
            <PostTagsFilter tags={postConfig.tags} className="mx-auto" />
          </div>
          <div className="container flex justify-center">
            <SearchPostForm className="max-w-96" />
          </div>
        </div>
        <PostList searchParams={searchParams} className="container" />
      </section>
    </div>
  );
}
