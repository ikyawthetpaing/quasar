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
    const courseData = await fs.readFile(
      path.join(process.cwd(), ".generated-content", "course", "index.json"),
      "utf-8"
    );
    const data: Record<string, CourseData> = JSON.parse(courseData);

    const chapterFilename = data[course]?.chapters[chapter]?.filename;
    if (!chapterFilename) return null;

    const chapterData = await fs.readFile(
      path.join(
        process.cwd(),
        ".generated-content",
        "course",
        course,
        "chapter",
        chapterFilename
      ),
      "utf-8"
    );
    const chapterJson: ChapterContent = JSON.parse(chapterData);
    return chapterJson;
  } catch (error) {
    console.error("Error fetching course chapter:", error);
    return null;
  }
}

export async function getCourseChapters(course: string): Promise<Chapter[]> {
  try {
    const courseData = await fs.readFile(
      path.join(process.cwd(), ".generated-content", "course", "index.json"),
      "utf-8"
    );
    const data: Record<string, CourseData> = JSON.parse(courseData);

    const chapters = Object.values(data[course]?.chapters || {});
    return chapters;
  } catch (error) {
    console.error("Error fetching course chapters:", error);
    return [];
  }
}
