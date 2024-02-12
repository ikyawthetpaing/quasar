import path from "path";
import { IconName } from "@/types";

import { getMDXData, listDirectoriesSync, readMDXFile } from "./utils";

export type CourseMetadata = {
  title: string;
  icon: IconName;
};

export type ChapterMetadata = {
  index: number;
  title: string;
};

const courses = getCourses();
const coursesChapters = getCoursesChapters();
const coursesData = getCoursesData();

function getCourses() {
  const _courses: Record<
    string,
    {
      metadata: CourseMetadata;
      chapters: Record<
        string,
        {
          metadata: ChapterMetadata;
          slug: string;
          content: string;
        }
      >;
    }
  > = {};
  const courseDirectories = listDirectoriesSync(
    path.join(process.cwd(), "content", "course")
  );

  courseDirectories?.forEach((courseDir) => {
    const courseIndexPath = path.join(
      process.cwd(),
      "content",
      "course",
      courseDir,
      "index.mdx"
    );
    const chaptersPath = path.join(
      process.cwd(),
      "content",
      "course",
      courseDir,
      "chapter"
    );

    const chapters = getMDXData<ChapterMetadata>(chaptersPath);

    _courses[courseDir] = {
      metadata: readMDXFile<CourseMetadata>(courseIndexPath).metadata,
      chapters: {},
    };

    chapters.forEach((chapterData) => {
      _courses[courseDir].chapters[chapterData.slug] = chapterData;
    });
  });

  return _courses;
}

function getCourseChapter(course: string, chapter: string) {
  const _courses =
    process.env.NODE_ENV === "production" ? courses : getCourses();
  return _courses[course]?.chapters[chapter];
}

function getCoursesChapters() {
  const _courseChapters: Record<
    string,
    { title: string; slug: string; index: number }[]
  > = {};

  Object.keys(courses).forEach((course) => {
    const chapters: { title: string; slug: string; index: number }[] = [];

    if (courses[course] && courses[course].chapters) {
      Object.keys(courses[course].chapters).forEach((key) => {
        chapters.push({
          slug: courses[course].chapters[key].slug,
          title: courses[course].chapters[key].metadata.title,
          index: courses[course].chapters[key].metadata.index,
        });
      });
    }

    chapters.sort((a, b) => a.index - b.index);
    _courseChapters[course] = chapters;
  });

  return _courseChapters;
}

function getCourseChapters(course: string) {
  return coursesChapters[course];
}

function getCoursesData() {
  return Object.keys(courses).map((key) => ({
    ...courses[key].metadata,
    slug: key,
  }));
}

export { getCourseChapter, getCourseChapters, coursesChapters };
