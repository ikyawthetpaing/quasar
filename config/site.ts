import { SiteConfig } from "@/types";

import { absoluteUrl } from "@/lib/utils";

export const siteConfig: SiteConfig = {
  name: "Quasar",
  title: "Quasar: Learn to Code with Our Free Courses and Articles",
  description:
    "Quasar is your go-to destination for free courses and articles to help you grasp web development skills and stay ahead in this evolving field.",
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
