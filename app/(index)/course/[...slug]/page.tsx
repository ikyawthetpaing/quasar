import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getChapters, getCourseChapter } from "@/lib/content/course";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Article } from "@/components/acticle";
import { Icons } from "@/components/icons";

interface Props {
  params: {
    slug: string[];
  };
}

function getChapterFromParams(params: Props["params"]) {
  const [courseSlug, chapterSlug] = params.slug;
  const post = getCourseChapter(courseSlug, chapterSlug);

  return post;
}

export function generateMetadata({ params }: Props): Metadata {
  const chapter = getChapterFromParams(params);

  if (!chapter) {
    return {};
  }

  const { title } = chapter;

  return {
    title: title,
  };
}

export default function CoursePage({ params }: Props) {
  const chapter = getChapterFromParams(params);

  if (!chapter) {
    notFound();
  }

  const [courseSlug] = params.slug;
  const chapters = getChapters(courseSlug);
  const prevChapterIndex = chapter.index - 1;
  const nextChapterIndex = chapter.index + 1;

  const prevChapter = prevChapterIndex >= 0 ? chapters[prevChapterIndex] : null;
  const nextChapter =
    nextChapterIndex < chapters.length ? chapters[nextChapterIndex] : null;

  return (
    <section>
      <h1 className="text-3xl font-bold sm:text-4xl">{chapter.title}</h1>
      <Article code={chapter.body.code} className="max-w-max" />
      <hr className="mt-6" />
      <div className="mt-6 flex flex-wrap justify-between gap-4">
        {prevChapter && (
          <Link
            href={`/course/${prevChapter.slugAsParams}`}
            className={cn(buttonVariants({ variant: "outline" }), "flex gap-2")}
          >
            <Icons.chevronLeft className="size-4" />
            Previous
          </Link>
        )}
        <div />
        {nextChapter && (
          <Link
            href={`/course/${nextChapter.slugAsParams}`}
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
