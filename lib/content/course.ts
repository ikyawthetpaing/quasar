import { allChapters } from "@/.contentlayer/generated";

const chapers = allChapters;

export function getChapters(course: string) {
  const _chapters = chapers
    .filter(({ slugAsParams }) => {
      const [courseSlug] = slugAsParams.split("/");
      return courseSlug === course;
    })
    .sort((a, b) => a.index - b.index)
    .map(({ title, slugAsParams }) => ({
      title,
      slugAsParams,
    }));

  return _chapters;
}

export function getCourseChapter(
  courseSlug: string,
  chapterSlug?: string | null
) {
  const chapterSlugAsParams = chapterSlug
    ? `${courseSlug}/${chapterSlug}`
    : courseSlug;
  return (
    chapers.find(({ slugAsParams }) => slugAsParams === chapterSlugAsParams) ||
    null
  );
}
