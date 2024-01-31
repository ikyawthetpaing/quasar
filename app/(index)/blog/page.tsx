import { Metadata } from "next";

import { baseConfig } from "@/config/base";
import { postConfig } from "@/config/post";
import { SearchPostForm } from "@/components/form/search-post-form";
import { PostCategoryFilter } from "@/components/post-category-filter";
import { PostList } from "@/components/post-list";
import { PostTagsFilter } from "@/components/post-tags-filter";

export const metadata: Metadata = {
  title: "Explore Stories and Ideas on Our Blog",
  description:
    "Discover a variety of stories and ideas on our blog, including travel, art, fashion and more.",
};

export default function BlogPage() {
  return (
    <div>
      <section className="grid gap-8">
        <div className="container">
          <h1 className="font-heading text-center text-3xl font-bold">
            Explore Our Stories and Ideas
          </h1>
        </div>
        <div className="grid gap-4">
          <div className="no-scrollbar container grid gap-8 overflow-x-scroll">
            <div className="flex justify-center">
              <PostCategoryFilter categories={baseConfig.categories} />
            </div>
          </div>
          <div className="no-scrollbar container overflow-x-scroll">
            <PostTagsFilter tags={postConfig.tags} className="mx-auto" />
          </div>
          <div className="container flex justify-center">
            <SearchPostForm className="max-w-96" />
          </div>
        </div>
        <PostList className="container" />
      </section>
    </div>
  );
}
