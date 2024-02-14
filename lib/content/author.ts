import { allAuthors } from "@/.contentlayer/generated";

const authors = allAuthors;

export function getAuthor(slug: string) {
  return authors.find(({ slugAsParams }) => slugAsParams === slug);
}
