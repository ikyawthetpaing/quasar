import { SiteConfig } from "@/types";

import { absoluteUrl } from "@/lib/utils";

export const siteConfig: SiteConfig = {
  name: "Quasar",
  title: "Quasar: Guiding Your Journey to Success in the Web Development",
  description:
    "Quasar is your go-to destination for comprehensive free courses and articles, empowering you to master the art of web development and stay ahead in this dynamic niche.",
  url: absoluteUrl(),
  ogImage: absoluteUrl("/og.jpg"),
  creator: "@ikyawthetpaing",
  authors: [
    { name: "Kyaw Thet Paing", url: "https://ikyawthetpaing.vercel.app" },
  ],
  keywords: [
    "Quasar",
    "Tutorials & How-To Guides",
    "Design Inspiration & Trends",
    "Tools & Resources",
    "Case Studies & Portfolio Reviews",
    "Coding Tips & Tricks",
    "Industry News & Updates",
    "UX/UI Design",
    "Freelancing & Career Development",
  ],
};
