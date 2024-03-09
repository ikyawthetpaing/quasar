import { Metadata } from "next";
import { notFound } from "next/navigation";

import { getCategory } from "@/config/base";
import { postConfig } from "@/config/post";
import { SearchPostForm } from "@/components/form/search-post-form";
import { PostList } from "@/components/post-list";
import { PostTagsFilter } from "@/components/post-tags-filter";

interface Props {
  params: {
    slug: string;
  };
  searchParams?: {
    [key: string]: string | string[] | undefined;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = getCategory(params.slug);

  if (!category) {
    return {};
  }

  return {
    title: category.title,
    description: category.description,
  };
}

export default function CategoryPostsPage({ params, searchParams }: Props) {
  const category = getCategory(params.slug);

  if (!category) notFound();

  return (
    <div className="grid gap-8">
      <div className="container flex flex-col items-center gap-8">
        <h1 className="font-heading text-center text-3xl font-bold">
          {category.title}
        </h1>
        <p className="max-w-xl text-center">{category.description}</p>
      </div>
      <div className="no-scrollbar container overflow-x-scroll">
        <PostTagsFilter tags={postConfig.tags} className="mx-auto" />
      </div>
      <div className="container flex justify-center">
        <SearchPostForm
          className="max-w-96"
          placeholder={`Search posts in ${category.id}`}
        />
      </div>
      <PostList
        fixedCategory={category.id}
        searchParams={searchParams}
        className="container"
      />
    </div>
  );
}
