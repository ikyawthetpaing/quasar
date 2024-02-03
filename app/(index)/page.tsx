import Link from "next/link";

import { baseConfig } from "@/config/base";
import { siteConfig } from "@/config/site";
import { updateAndGetPostViewsCount } from "@/lib/db/action/post-views";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { CategoryBox } from "@/components/category-box";
import { EmailSubscribeForm } from "@/components/form/email-subscribe-form";
import { PostCategoryFilter } from "@/components/post-category-filter";
import { PostList } from "@/components/post-list";

interface Props {
  searchParams?: {
    [key: string]: string | string[] | undefined;
  };
}

export default function Home({ searchParams }: Props) {
  return (
    <div className="flex flex-col gap-24">
      <HeroSection />
      <CategoriesSection />
      <FeaturedPostsSection />
      <LatestPosts searchParams={searchParams} />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="container flex flex-col items-center gap-8 text-center">
      <h1 className="font-heading max-w-5xl text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
        We&apos;re {siteConfig.name}. See our thoughts, stories and ideas.
      </h1>
      <p className="text-muted-foreground leading-normal sm:text-xl sm:leading-8">
        Discover a world of inspiration at {siteConfig.name}, a minimal
        multipurpose blog.
      </p>
      <div className="mt-4">
        <EmailSubscribeForm />
      </div>
    </section>
  );
}

function CategoriesSection() {
  return (
    <section className="no-scrollbar container flex gap-4 overflow-x-scroll">
      {baseConfig.categories.map((category, index) => (
        <Link key={index} href={`/category/${category.id}`} className="flex-1">
          <CategoryBox category={category} className="min-w-36" />
        </Link>
      ))}
    </section>
  );
}

function FeaturedPostsSection() {
  return (
    <section className="container grid gap-8">
      <div className="flex flex-wrap justify-between gap-8">
        <h2 className="font-heading text-3xl font-bold">Featured Posts</h2>
        <Link
          href={"/blog?tag=featured"}
          className={cn(buttonVariants({ variant: "secondary" }))}
        >
          View all
        </Link>
      </div>
      <PostList fixedTag="featured" showPagination={false} />
    </section>
  );
}

function LatestPosts({ searchParams }: Props) {
  return (
    <section className="grid gap-8">
      <h2 className="font-heading text-center text-3xl font-bold">
        Our Latest Posts
      </h2>
      <div className="no-scrollbar container grid gap-8 overflow-x-scroll">
        <div className="flex justify-center">
          <PostCategoryFilter categories={baseConfig.categories} />
        </div>
      </div>
      <PostList searchParams={searchParams} className="container" />
    </section>
  );
}
