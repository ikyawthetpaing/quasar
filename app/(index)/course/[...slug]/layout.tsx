import Link from "next/link";

import { getCourseChapters } from "@/lib/content/course";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Props {
  children: React.ReactNode;
  params: {
    slug: string[];
  };
}

export default async function CourseChapteLayout({ params, children }: Props) {
  const [courseSlug, chapterSlug] = params.slug;
  const chapters = await getCourseChapters(courseSlug);
  return (
    <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-8">
      <aside className="fixed top-24 z-30 -ml-2 hidden h-[calc(100vh-96px)] w-full shrink-0 border-r md:sticky md:block">
        <ScrollArea className="h-full pr-6">
          <div className="flex flex-col gap-1 py-16">
            {chapters?.map(({ title, slug }, index) => (
              <Link
                key={index}
                href={
                  slug === "index"
                    ? `/course/${courseSlug}`
                    : `/course/${courseSlug}/${slug}`
                }
                className={cn(
                  "hover:border-border text-muted-foreground rounded-lg border border-transparent px-4 py-1",
                  {
                    "bg-secondary text-secondary-foreground":
                      slug === chapterSlug ||
                      (!chapterSlug && slug === "index"),
                  }
                )}
              >
                {title}
              </Link>
            ))}
          </div>
        </ScrollArea>
      </aside>
      <div className="pt-16">{children}</div>
    </div>
  );
}
