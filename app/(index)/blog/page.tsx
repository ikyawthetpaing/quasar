import { getPosts } from "@/dev/posts";

import { baseConfig } from "@/config/base";
import { postConfig } from "@/config/post";
import { SearchPostForm } from "@/components/form/search-post-form";
import { PostCategoryFilter } from "@/components/post-category-filter";
import { PostItem } from "@/components/post-item";
import { PostList } from "@/components/post-list";
import { PostTagsFilter } from "@/components/post-tags-filter";

export default function BlogPage() {
  return (
    <div>
      <section className="grid gap-8">
        <div className="container">
          <h1 className="text-center text-3xl font-bold">
            Explore Our Insights and Ideas
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
