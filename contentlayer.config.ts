import { defineDocumentType, makeSource } from "contentlayer/source-files";
import type { DocumentGen } from "contentlayer/core";

import rehypeSlug from "rehype-slug";
import rehypeCodeTitles from "rehype-code-titles";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrism from "rehype-prism-plus";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";

export const urlFromFilePath = (doc: DocumentGen): string => {
  return doc._raw.flattenedPath.replace(/pages\/?/, "");
};

export const Note = defineDocumentType(() => ({
  name: "Note",
  filePathPattern: `note/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    date: { type: "string", required: true },
  },
  computedFields: {
    url_path: {
      type: "string",
      description:
        'The URL path of this page relative to site root. For example, the site root page would be "/", and doc page would be "docs/getting-started/"',
      resolve: urlFromFilePath,
    },
    pathSegments: {
      type: "json",
      resolve: (doc) =>
        doc._raw.flattenedPath
          .split("/")
          // skip `/docs` prefix
          .slice(1)
          .map((pathName) => {
            return { pathName };
          }),
    },
  },
}));

export const Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: `blog/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    date: { type: "string", required: true },
    description: { type: "string", required: true },
    thumbnailUrl: { type: "string", required: true },
    tags: {
      type: "list",
      required: true,
      of: {
        type: "string",
      },
      default: [],
    },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ""),
    },
  },
}));

export const Book = defineDocumentType(() => ({
  name: "Book",
  filePathPattern: `book/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    date: { type: "string", required: true },
    description: { type: "string", required: true },
    thumbnailUrl: { type: "string", required: true },
    tags: {
      type: "list",
      required: true,
      of: {
        type: "string",
      },
      default: [],
    },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ""),
    },
  },
}));

export default makeSource({
  contentDirPath: "posts",
  documentTypes: [Blog, Note, Book],
  mdx: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [
      rehypeSlug,
      rehypeKatex,
      rehypeCodeTitles,
      rehypePrism,
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["anchor"],
          },
        },
      ],
    ],
  },
});
