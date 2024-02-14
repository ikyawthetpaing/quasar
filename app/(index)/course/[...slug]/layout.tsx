import Link from "next/link";

import { getChapters } from "@/lib/content/course";
import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  params: {
    slug: string[];
  };
}

export default function CourseChapteLayout({ params, children }: Props) {
  const [courseSlug] = params.slug;
  console.log(params.slug, params.slug.join("/"));
  const chapters = getChapters(courseSlug);
  return (
    <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
      <aside className="fixed top-[88px] z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
        <div className="flex flex-col gap-1">
          {chapters?.map(({ title, slugAsParams }, index) => (
            <Link
              key={index}
              href={`/course/${slugAsParams}`}
              className={cn(
                "hover:border-border rounded-lg border border-transparent px-4 py-1",
                {
                  "bg-secondary text-secondary-foreground ":
                    slugAsParams === params.slug.join("/"),
                }
              )}
            >
              {title}
            </Link>
          ))}
        </div>
      </aside>
      {children}
    </div>
  );
}
