import path from "path";
import { Page } from "@/types";

import { getMDXData } from "@/lib/content/utils";

const pages = getPages();

function getPages() {
  return getMDXData<Page>(
    path.join(process.cwd(), "content", "page"),
    "getPages"
  );
}

export function getPage(slug: string) {
  // const _pages = process.env.NODE_ENV === "production" ? pages : getPages();
  // return _pages.find(({ slug: _slug }) => _slug === slug);
  return pages.find(({ slug: _slug }) => _slug === slug);
}
