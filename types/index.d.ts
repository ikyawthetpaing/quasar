import { Author as MetadataAuthor } from "next/dist/lib/metadata/types/metadata-types";

export type NavLink = {
  label: string;
  url: string;
};

export type SelectOption = {
  label: string;
  value: string;
};

export type NavItem = NavLink;

export type Category = {
  id: string;
  name: string;
  title: string;
  description: string;
  image: string;
};

export type BaseConfig = {
  navItems: NavItem[];
  categories: Category[];
  footerLinkGroups: { title: string; links: NavLink[] }[];
  legalLinks: NavLink[];
};

export type SiteConfig = {
  name: string;
  title: string;
  description: string;
  url: string;
  creator: string;
  ogImage: string;
  authors: MetadataAuthor[];
  keywords: string[];
};

export type Post = {
  title: string;
  description: string;
  thumbnail: string;
  category: string;
  date: string;
  featured: boolean;
  author: string;
};

export type PostMetadata = Post & {
  slug: string;
  views: number;
};

export type PostTag = {
  label: string;
  value: "latest" | "popular" | "featured";
};

export type PostConfig = {
  tags: PostTag[];
};

export type Page = {
  title: string;
  description: string;
};

export type Author = {
  name: string;
  avatar: string;
  role: string;
};
