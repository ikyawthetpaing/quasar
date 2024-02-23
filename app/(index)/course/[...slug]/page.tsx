import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getChapterContent, getCourseChapters } from "@/lib/content/course";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Article } from "@/components/acticle";
import { Icons } from "@/components/icons";

interface Props {
  params: {
    slug: string[];
  };
}

async function getChapterFromParams(params: Props["params"]) {
  const [courseSlug, chapterSlug] = params.slug;
  const post = await getChapterContent(
    courseSlug,
    chapterSlug ? chapterSlug : "index"
  );

  return post;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const chapter = await getChapterFromParams(params);

  if (!chapter) {
    return {};
  }

  const { title } = chapter.metadata;

  return {
    title: title,
  };
}

export default async function CoursePage({ params }: Props) {
  const chapter = await getChapterFromParams(params);

  if (!chapter) {
    notFound();
  }

  const [courseSlug] = params.slug;
  const chapters = await getCourseChapters(courseSlug);
  const prevChapterIndex = parseInt(chapter.metadata.index.toString()) - 1;
  const nextChapterIndex = parseInt(chapter.metadata.index.toString()) + 1;

  const prevChapter = prevChapterIndex >= 0 ? chapters[prevChapterIndex] : null;
  const nextChapter =
    nextChapterIndex < chapters.length ? chapters[nextChapterIndex] : null;

  return (
    <section>
      <h1 className="text-3xl font-bold sm:text-4xl">
        {chapter.metadata.title}
      </h1>
      <Article content={chapter.content} className="max-w-max" />
      <hr className="mt-6" />
      <div className="mt-6 flex flex-wrap justify-between gap-4">
        {prevChapter && (
          <Link
            href={`/course/${courseSlug}/${prevChapter.slug}`}
            className={cn(buttonVariants({ variant: "outline" }), "flex gap-2")}
          >
            <Icons.chevronLeft className="size-4" />
            Previous
          </Link>
        )}
        <div />
        {nextChapter && (
          <Link
            href={`/course/${courseSlug}/${nextChapter.slug}`}
            className={cn(buttonVariants({ variant: "outline" }), "flex gap-2")}
          >
            Next
            <Icons.chevronRight className="size-4" />
          </Link>
        )}
      </div>
    </section>
  );
}
