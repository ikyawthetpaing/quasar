"use server";

import { promises as fs } from "fs";
import path from "path";

export interface Chapter {
  index: number;
  title: string;
  slug: string;
  filename: string;
}

interface CourseData {
  metadata: {
    title: string;
    icon: string;
  };
  chapters: Record<string, Chapter>;
}

interface ChapterContent {
  metadata: {
    index: number;
    title: string;
  };
  slug: string;
  content: string;
}

export async function getCourseChapter(
  course: string,
  chapter: string
): Promise<ChapterContent | null> {
  try {
    const filePath = getChapterFilePath(course, chapter);
    const chapterData = await fs.readFile(filePath, "utf-8");
    const chapterJson: ChapterContent = JSON.parse(chapterData);
    return chapterJson;
  } catch (error) {
    console.error(
      `Error fetching chapter ${chapter} for course ${course}:`,
      error
    );
    return null;
  }
}

export async function getCourseChapters(course: string) {
  try {
    const filePath = getCourseIndexPath();
    const courseData = await fs.readFile(filePath, "utf-8");
    const data: Record<string, CourseData> = JSON.parse(courseData);

    const chapters = Object.values(data[course]?.chapters || {});
    return chapters;
  } catch (error) {
    console.error(`Error fetching chapters for course ${course}:`, error);
    return [];
  }
}

function getChapterFilePath(course: string, chapter: string) {
  return path.join(
    process.cwd(),
    ".generated-content",
    "course",
    course,
    "chapter",
    `${chapter}.mdx.json`
  );
}

function getCourseIndexPath() {
  return path.join(process.cwd(), ".generated-content", "course", "index.json");
}
