import { Metadata } from "next";

import { courses } from "@/config/course";
import { CousresSection } from "@/components/cousres-section";
import { SiteFooter } from "@/components/layout/site-footer";

export const metadata: Metadata = {
  title: "Learn Web Development with Our Free Courses",
  description:
    "Master web developement skills with our free, step-by-step courses.",
};

export default function CoursesPage() {
  return <CousresSection courses={courses} />;
}
