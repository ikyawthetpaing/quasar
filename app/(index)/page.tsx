import Link from "next/link";
import { getPosts } from "@/dev/posts";

import { baseConfig } from "@/config/base";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { CategoryBox } from "@/components/category-box";
import { EmailSubscribeForm } from "@/components/form/email-subscribe-form";
import { PostCategoryFilter } from "@/components/post-category-filter";
import { PostItem } from "@/components/post-item";
import { PostList } from "@/components/post-list";

export default function Home() {
  return (
    <div className="flex flex-col gap-24">
      <HeroSection />
      <CategoriesSection />
      <FeaturedPostsSection />
      <LatestPosts />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="container flex flex-col items-center gap-8 text-center">
      <h1 className="max-w-5xl text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
        We&apos;re {siteConfig.name}. See our thoughts, stories and ideas.
      </h1>
      <p className="text-muted-foreground leading-normal sm:text-xl sm:leading-8">
        {/* {siteConfig.name} is a minimal mutipurpose blog. A relaxing way to
        explore our thoughts and ideas. */}
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
      {baseConfig.categories.map(({ label, value, image }, index) => (
        <Link key={index} href={`/category/${value}`} className="flex-1">
          <CategoryBox label={label} image={image} className="min-w-36" />
        </Link>
      ))}
    </section>
  );
}

function FeaturedPostsSection() {
  return (
    <section className="container grid gap-8">
      <div className="flex flex-wrap justify-between gap-8">
        <h2 className="text-3xl font-bold">Featured Posts</h2>
        <Link
          href={"/blog?tag=featured"}
          className={cn(buttonVariants({ variant: "secondary" }))}
        >
          View all
        </Link>
      </div>
      <div className="xs:grid-cols-2 grid grid-cols-1 gap-8 md:grid-cols-3">
        {getPosts({ amount: 6, tag: "featured" }).map((post, index) => (
          <PostItem key={index} post={post} />
        ))}
      </div>
    </section>
  );
}

function LatestPosts() {
  return (
    <section className="grid gap-8">
      <h2 className="text-center text-3xl font-bold">Our Latest Posts</h2>
      <div className="no-scrollbar container grid gap-8 overflow-x-scroll">
        <div className="flex justify-center">
          <PostCategoryFilter categories={baseConfig.categories} />
        </div>
      </div>
      <PostList className="container" />
    </section>
  );
}
