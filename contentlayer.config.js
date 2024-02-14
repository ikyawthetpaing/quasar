import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
  },
  //   readingTime: {
  //     type: "number",
  //     resolve: (doc) => {
  //       const content = String(doc.body.raw);
  //       const wordsPerMinute = 200;
  //       const numberOfWords = content.split(/\s/g).length;
  //       const minutes = numberOfWords / wordsPerMinute;
  //       return Math.ceil(minutes);
  //     },
  //   },
};

export const Page = defineDocumentType(() => ({
  name: "Page",
  filePathPattern: "page/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
      required: true,
    },
  },
  computedFields,
}));

export const Author = defineDocumentType(() => ({
  name: "Author",
  filePathPattern: "author/**/*.mdx",
  contentType: "mdx",
  fields: {
    name: {
      type: "string",
      required: true,
    },
    avatar: {
      type: "string",
      required: true,
    },
    role: {
      type: "string",
      required: true,
    },
  },
  computedFields,
}));

export const Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: "blog/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    thumbnail: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
      required: true,
    },
    category: {
      type: "string",
      required: true,
    },
    date: {
      type: "date",
      required: true,
    },
    featured: {
      type: "boolean",
      default: false,
      required: false,
    },
    author: {
      type: "string",
      required: true,
    },
  },
  computedFields,
}));

export const Chapter = defineDocumentType(() => ({
  name: "Chapter",
  filePathPattern: "course/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    index: {
      type: "number",
      required: true,
    },
  },
  computedFields,
}));

export default makeSource({
  contentDirPath: "./content",
  documentTypes: [Blog, Page, Author, Chapter],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: "one-dark-pro",
          onVisitLine(node) {
            // Prevent lines from collapsing in `display: grid` mode, and allow empty
            // lines to be copy/pasted
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: " " }];
            }
          },
          onVisitHighlightedLine(node) {
            node.properties.className.push("line--highlighted");
          },
          onVisitHighlightedWord(node) {
            node.properties.className = ["word--highlighted"];
          },
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["subheading-anchor"],
            ariaLabel: "Link to section",
          },
        },
      ],
    ],
  },
});
