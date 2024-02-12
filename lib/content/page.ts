import path from "path";
import { Page } from "@/types";

import { getMDXData } from "@/lib/content/utils";

const pages = getMDXPages();

function getMDXPages() {
  return getMDXData<Page>(path.join(process.cwd(), "content", "page"));
}

export function getPage(slug: string) {
  const _pages = process.env.NODE_ENV === "production" ? pages : getMDXPages();
  return _pages.find(({ slug: _slug }) => _slug === slug);
}
