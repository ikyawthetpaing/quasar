import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { PostMetadata } from "@/types";

import { formatDate } from "@/lib/utils";

interface Props {
  post: PostMetadata;
}

export function PostItem({ post }: Props) {
  const headersList = headers();
  const pathname = headersList.get("next-url");
  const { title, category, date, slug, thumbnail } = post;
  const url = pathname ? `/blog/${slug}?back=${pathname}` : `/blog/${slug}`;

  return (
    <Link href={url}>
      <div className="grid gap-2">
        <div className="relative aspect-video overflow-hidden rounded-2xl border">
          <Image
            src={thumbnail}
            alt={title}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, (min-width: 475px) 50vw, 100vw"
          />
          <div className="absolute right-4 top-4 rounded-lg bg-[rgba(255,255,255,0.45)] px-3 py-1 text-sm capitalize backdrop-blur-sm dark:bg-[rgba(0,0,0,0.45)]">
            {category}
          </div>
        </div>
        <p className="text-sm font-light uppercase">{formatDate(date)}</p>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
    </Link>
  );
}
