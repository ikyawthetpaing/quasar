import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getAuthor } from "@/lib/content/author";
import { getPosts } from "@/lib/content/post";
import { absoluteUrl, formatDate, timeAgo } from "@/lib/utils";
import { Article } from "@/components/acticle";
import { Icons } from "@/components/icons";

interface PostProps {
  params: {
    slug: string[];
  };
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

function getPostFromParams(params: PostProps["params"]) {
  const slug = params.slug.join("/");
  const post = getPosts().find((post) => post.slug === slug);

  if (!post) {
    null;
  }

  return post;
}

export function generateMetadata({ params }: PostProps): Metadata {
  const post = getPostFromParams(params);

  if (!post) {
    return {};
  }

  const { title, description, thumbnail } = post.metadata;

  const ogUrl = new URL(thumbnail);
  ogUrl.searchParams.set("title", title);
  ogUrl.searchParams.set("type", description);
  ogUrl.searchParams.set("mode", "light");

  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
      type: "article",
      url: absoluteUrl(post.slug),
      images: [
        {
          url: ogUrl.toString(),
          width: 1920,
          height: 1080,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: description,
      images: [ogUrl.toString()],
    },
  };
}

export default function Post({ params, searchParams }: PostProps) {
  const post = getPostFromParams(params);

  if (!post) {
    notFound();
  }

  const { back } = searchParams;
  const backUrl = typeof back === "string" ? back : "/blog";
  const {
    title,
    date,
    thumbnail,
    category,
    author: authorSlug,
  } = post.metadata;
  const author = getAuthor(authorSlug);

  return (
    <div className="container">
      <div className="flex flex-col gap-8">
        <div>
          <Link
            href={backUrl}
            scroll={false}
            className="flex items-center gap-2"
          >
            <Icons.arrowLeft className="size-4" />
            Back
          </Link>
        </div>
        <div className="flex flex-col items-center gap-4">
          <div className="rounded-lg border px-3 py-1 text-sm capitalize">
            {category}
          </div>
          <h1 className="font-heading text-center text-4xl font-bold">
            {title}
          </h1>
          <p className="text-muted-foreground text-center">
            {formatDate(date)} &#8226; {timeAgo(date)}
          </p>
          <div className="grid aspect-video overflow-hidden rounded-xl">
            <Image
              src={thumbnail}
              alt={title}
              width={1400}
              height={(1400 * 9) / 16}
              className="size-full object-cover"
            />
          </div>
        </div>
        <div className="flex gap-8 max-sm:flex-col">
          <div className="sm:flex-1">
            <div className="flex flex-col gap-4 border-b pb-4 pt-0 sm:min-w-max sm:pt-4">
              <h2 className="font-heading font-bold">Written by</h2>
              <div className="flex items-center gap-3">
                <div className="bg-muted size-14 shrink-0 overflow-hidden rounded-full">
                  <Image
                    src={author?.avatar!}
                    alt={author?.name!}
                    width={56}
                    height={56}
                  />
                </div>
                <div>
                  <h3 className="flex items-center gap-2 font-semibold">
                    {author?.name} <Icons.check className="size-5 fill-none" />
                  </h3>
                  <h4 className="text-muted-foreground text-sm">
                    {author?.role}
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <Article content={post.content} className="min-w-0 max-w-4xl" />
        </div>
      </div>
    </div>
  );
}
