import path from "path";
import { Page } from "@/types";

import { getMDXData } from "./utils";

const pages = getMDXData<Page>(path.join(process.cwd(), "content", "page"));

export function getPage(slug: string) {
  return pages.find(({ slug: _slug }) => _slug === slug);
}
