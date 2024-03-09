import { Metadata } from "next";
import { notFound } from "next/navigation";

import { getPage } from "@/lib/content/page";
import { absoluteUrl } from "@/lib/utils";
import { Article } from "@/components/acticle";

interface PageProps {
  params: {
    slug: string[];
  };
}

function getPageFromParams(params: PageProps["params"]) {
  const slug = params.slug.join("/");
  const page = getPage(slug);

  if (!page) {
    null;
  }

  return page;
}

export function generateMetadata({ params }: PageProps): Metadata {
  const page = getPageFromParams(params);

  if (!page) {
    return {};
  }

  const { title, description } = page.metadata;

  const ogUrl = new URL(absoluteUrl("/api/og"));
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
      url: absoluteUrl(page.slug),
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

export default function Page({ params }: PageProps) {
  const page = getPageFromParams(params);

  if (!page) {
    notFound();
  }

  return (
    <div className="container">
      <Article content={page.content} className="max-w-max" />
    </div>
  );
}
