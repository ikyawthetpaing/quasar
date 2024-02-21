import path from "path";
import { Author } from "@/types";

import { getMDXData } from "./utils";

const authors = getMDXData<Author>(
  path.join(process.cwd(), "content", "author"),
  "getAuthors"
);

export function getAuthors() {
  return authors;
}

export function getAuthor(_slug: string) {
  const author = authors.find(({ slug }) => slug === _slug);
  if (author) {
    return author.metadata;
  }
  return null;
}
