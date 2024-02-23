import { Metadata } from "next";

import { getCoursesMetadata } from "@/lib/content/course";
import { CousresSection } from "@/components/cousres-section";

export const metadata: Metadata = {
  title: "Learn Web Development with Our Free Courses",
  description:
    "Master web developement skills with our free, step-by-step courses.",
};

export default async function CoursesPage() {
  return <CousresSection courses={await getCoursesMetadata()} />;
}
