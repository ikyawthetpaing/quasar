import Link from "next/link";
import { courses } from "@/dev/course";

import { siteConfig } from "@/config/site";
import { getPostCategories } from "@/lib/content/post";
import { slugify } from "@/lib/utils";
import { EmailSubscribeForm } from "@/components/form/email-subscribe-form";
import { Icon, Icons } from "@/components/icons";
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
      <CousresSection />
      <CategoriesSection />
      <LatestPosts searchParams={searchParams} />
      <FeaturedPostsSection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="container flex flex-col items-center gap-8 text-center">
      <h1 className="font-heading max-w-6xl text-4xl font-bold sm:text-5xl md:text-6xl">
        See our free web development courses, tutorials, and insights.
      </h1>
      <p className="text-muted-foreground leading-normal sm:text-xl sm:leading-8">
        Discover a world of inspiration at {siteConfig.name}, a minimal
        multipurpose blog.
      </p>
      <EmailSubscribeForm />
    </section>
  );
}

function CousresSection() {
  return (
    <section className="container flex flex-col gap-8">
      <h2 className="font-heading text-center text-2xl font-bold sm:text-3xl">
        Learn to Code with Our Free Courses
      </h2>
      <div className="flex flex-wrap gap-4">
        {courses.map(({ title, icon }, index) => (
          <div
            key={index}
            className="bg-muted-foreground group relative aspect-square max-h-36 min-w-36 flex-1 overflow-hidden rounded-2xl sm:max-h-44 sm:min-w-44"
          >
            <Icon
              name={icon}
              className="fill-muted size-full duration-150 group-hover:scale-110"
            />
            <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl bg-[rgba(255,255,255,0.45)] px-6 py-3 backdrop-blur-sm dark:bg-[rgba(0,0,0,0.45)]">
              {title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function CategoriesSection() {
  return (
    <section className="container flex flex-col gap-8">
      <h2 className="font-heading text-center text-2xl font-bold sm:text-3xl">
        Blog Categories
      </h2>
      <div className="flex flex-wrap justify-center gap-2">
        {getPostCategories().map((category, index) => (
          <Link key={index} href={`/category/${slugify(category)}`}>
            <div className="min-w-max rounded-xl border px-4 py-2 duration-150 hover:px-6">
              {category}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

function FeaturedPostsSection() {
  return (
    <section className="container grid gap-8">
      <h2 className="font-heading text-center text-2xl font-bold sm:text-3xl">
        Featured Posts
      </h2>
      <PostList fixedTag="featured" showPagination={false} />
      <div className="flex justify-center">
        <Link
          href={"/blog?tag=featured"}
          className="flex items-center gap-2 text-base duration-150 hover:gap-4"
        >
          View all <Icons.moveRight className="size-4" />
        </Link>
      </div>
    </section>
  );
}

function LatestPosts({ searchParams }: Props) {
  return (
    <section className="grid gap-8">
      <h2 className="font-heading text-center text-2xl font-bold sm:text-3xl">
        Our Latest Posts
      </h2>
      <div className="no-scrollbar container grid gap-8 overflow-x-scroll">
        <div className="flex justify-center">
          <PostCategoryFilter categories={getPostCategories()} />
        </div>
      </div>
      <PostList searchParams={searchParams} className="container" />
    </section>
  );
}
