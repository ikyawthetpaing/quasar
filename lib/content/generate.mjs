import fs from "fs";
import path from "path";

import { getMDXData, listDirectoriesSync, readMDXFile } from "./utils.mjs";

const generatedPath = path.join(process.cwd(), ".generated-content");
const generateCoursePath = path.join(generatedPath, "course");

async function generateContent() {
  if (!fs.existsSync(generatedPath)) {
    fs.mkdirSync(generatedPath);
  }
  generateCourses();
}

generateContent();

function generateCourses() {
  if (!fs.existsSync(generateCoursePath)) {
    fs.mkdirSync(generateCoursePath);
  }

  const index = {};

  const courseDirectories = listDirectoriesSync(
    path.join(process.cwd(), "content", "course")
  );

  courseDirectories?.forEach((courseDir) => {
    const specificCoursePath = path.join(generateCoursePath, courseDir);
    const courseChapterPath = path.join(specificCoursePath, "chapter");
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

    if (!fs.existsSync(specificCoursePath)) {
      fs.mkdirSync(specificCoursePath);
    }
    if (!fs.existsSync(courseChapterPath)) {
      fs.mkdirSync(courseChapterPath);
    }
    const courseMetadata = readMDXFile(courseIndexPath).metadata;
    index[courseDir] = {
      metadata: courseMetadata,
      chapters: {},
    };

    const chapters = getMDXData(chaptersPath, "getCourses");
    chapters
      .sort((a, b) => a.metadata.index - b.metadata.index)
      .forEach((data) => {
        const filePath = path.join(courseChapterPath, `${data.slug}.json`);
        fs.writeFileSync(filePath, JSON.stringify(data), "utf-8");
        index[courseDir].chapters[data.slug] = {
          ...data.metadata,
          slug: data.slug,
          path: filePath,
        };
      });
  });

  fs.writeFileSync(
    path.join(generateCoursePath, "index.json"),
    JSON.stringify(index),
    "utf-8"
  );
}
