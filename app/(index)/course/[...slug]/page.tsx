import { notFound } from "next/navigation";

import { getCourseChapter } from "@/lib/content/course";
import { Article } from "@/components/acticle";

interface Props {
  params: {
    slug: string[];
  };
}

function getChapterFromParams(params: Props["params"]) {
  const [courseSlug, chapterSlug] = params.slug;
  const post = getCourseChapter(
    courseSlug,
    chapterSlug ? chapterSlug : "index"
  );

  return post;
}

export default function CoursePage({ params }: Props) {
  const chapter = getChapterFromParams(params);

  if (!chapter) return notFound();

  return (
    <div>
      <h1 className="text-3xl font-bold sm:text-4xl">
        {chapter.metadata.title}
      </h1>
      <Article content={chapter.content} className="max-w-max" />
    </div>
  );
}
