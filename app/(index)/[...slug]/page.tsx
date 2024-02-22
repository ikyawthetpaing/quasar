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

async function getPageFromParams(params: PageProps["params"]) {
  const slug = params.slug.join("/");
  const page = await getPage(slug);

  if (!page) {
    null;
  }

  return page;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const page = await getPageFromParams(params);

  if (!page) {
    return {};
  }

  const { title, description, slug } = page;

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
      url: absoluteUrl(slug),
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

export default async function Page({ params }: PageProps) {
  const page = await getPageFromParams(params);

  if (!page) {
    notFound();
  }

  return (
    <div className="container flex flex-col gap-8">
      <h1 className="font-heading text-4xl font-bold">{page.title}</h1>
      <Article content={page.content} className="max-w-max" />
    </div>
  );
}
