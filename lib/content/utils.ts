import fs from "fs";
import path from "path";

function parseFrontmatter<T extends Record<string, string | number | boolean>>(
  fileContent: string
): { metadata: T; content: string } {
  const frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  const match = frontmatterRegex.exec(fileContent);

  if (!match) {
    throw new Error("Frontmatter not found in the file content.");
  }

  const frontMatterBlock = match[1];
  const content = fileContent.replace(frontmatterRegex, "").trim();
  const frontMatterLines = frontMatterBlock.trim().split("\n");
  const metadata: Partial<T> = {};

  frontMatterLines.forEach((line) => {
    const [key, ...valueArr] = line.split(": ");
    const value = valueArr
      .join(": ")
      .trim()
      .replace(/^['"](.*)['"]$/, "$1");
    metadata[key.trim() as keyof T] = value as T[keyof T];
  });

  return { metadata: metadata as T, content };
}

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function readMDXFile<T extends Record<string, string | number | boolean>>(
  filePath: string
) {
  let rawContent = fs.readFileSync(filePath, "utf-8");
  return parseFrontmatter<T>(rawContent);
}

function extractTweetIds(content: string) {
  let tweetMatches = content.match(/<StaticTweet\sid="[0-9]+"\s\/>/g);
  return (
    tweetMatches?.map((tweet) => {
      const match = tweet.match(/[0-9]+/g);
      return match ? match[0] : null;
    }) || []
  );
}

export function getMDXData<T extends Record<string, string | number | boolean>>(
  dir: string
) {
  let mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    let { metadata, content } = readMDXFile<T>(path.join(dir, file));
    let slug = path.basename(file, path.extname(file));
    let tweetIds = extractTweetIds(content);
    return {
      metadata,
      slug,
      tweetIds,
      content,
    };
  });
}
