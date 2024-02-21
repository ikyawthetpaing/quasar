import fs from "fs";
import path from "path";

function parseStringToType(stringValue) {
  if (!isNaN(stringValue)) {
    return parseFloat(stringValue);
  }

  if (
    stringValue.toLowerCase() === "true" ||
    stringValue.toLowerCase() === "false"
  ) {
    return stringValue.toLowerCase() === "true";
  }

  return stringValue;
}

function parseFrontmatter(fileContent) {
  const frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  const match = frontmatterRegex.exec(fileContent);

  if (!match) {
    throw new Error("Frontmatter not found in the file content.");
  }

  const frontMatterBlock = match[1];
  const content = fileContent.replace(frontmatterRegex, "").trim();
  const frontMatterLines = frontMatterBlock.trim().split("\n");
  const metadata = {};

  frontMatterLines.forEach((line) => {
    const [key, ...valueArr] = line.split(": ");
    const value = valueArr
      .join(": ")
      .trim()
      .replace(/^['"](.*)['"]$/, "$1");
    metadata[key.trim()] = parseStringToType(value);
  });

  return { metadata, content };
}

function getMDXFiles(dir) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

export function readMDXFile(filePath) {
  let rawContent = fs.readFileSync(filePath, "utf-8");
  return parseFrontmatter(rawContent);
}

export function getMDXData(dir, from) {
  console.log(`called getMDXData from ${from}`);
  let mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    let { metadata, content } = readMDXFile(path.join(dir, file));
    let slug = path.basename(file, path.extname(file));
    return {
      metadata,
      slug,
      content,
    };
  });
}

export function listDirectoriesSync(dir) {
  try {
    const directories = fs
      .readdirSync(dir, { withFileTypes: true })
      .filter((dirent) => dirent.isDirectory())
      .map((dir) => dir.name);

    return directories;
  } catch (err) {
    console.error("Error reading directory:", err);
  }
}
