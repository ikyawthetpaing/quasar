import { allPages } from "@/.contentlayer/generated";

const pages = allPages;

export function getPage(slug: string) {
  return pages.find(({ slugAsParams }) => slugAsParams === slug);
}
