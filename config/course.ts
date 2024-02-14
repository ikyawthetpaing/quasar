import { Course } from "@/types";

export const courses: Course[] = [
  { title: "HTML", url: "/course/html", icon: "html", disabled: false },
  { title: "CSS", url: "/course/css", icon: "css", disabled: true },
  {
    title: "JavaScript",
    url: "/course/js",
    icon: "javascript",
    disabled: true,
  },
  { title: "React", url: "/course/react", icon: "react", disabled: true },
  { title: "NodeJS", url: "/course/nodejs", icon: "nodejs", disabled: true },
  { title: "MongoDB", url: "/course/mongodb", icon: "mongodb", disabled: true },
  {
    title: "Typescript",
    url: "/course/ts",
    icon: "typescript",
    disabled: true,
  },
  { title: "MySQL", url: "/course/mysql", icon: "mysql", disabled: true },
  { title: "Python", url: "/course/python", icon: "python", disabled: true },
  { title: "Django", url: "/course/django", icon: "django", disabled: true },
];
