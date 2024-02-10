import { IconName } from "@/types";

type Course = {
  title: string;
  url: string;
  icon: IconName;
};

export const courses: Course[] = [
  { title: "HTML", url: "", icon: "html" },
  { title: "CSS", url: "", icon: "css" },
  { title: "JavaScript", url: "", icon: "javascript" },
  { title: "React", url: "", icon: "react" },
  { title: "NodeJS", url: "", icon: "nodejs" },
  { title: "MongoDB", url: "", icon: "mongodb" },
  { title: "Typescript", url: "", icon: "typescript" },
  { title: "MySQL", url: "", icon: "mysql" },
  { title: "Python", url: "", icon: "python" },
  { title: "Django", url: "", icon: "django" },
];
