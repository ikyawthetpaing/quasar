import { Post } from "@/dev/posts";

import { formatDate } from "@/lib/utils";

interface Props {
  post: Post;
}

export function PostItem({ post }: Props) {
  const { title, category, date } = post;

  return (
    <div className="grid gap-2">
      <div className="relative aspect-video rounded-2xl border">
        <div className="absolute right-4 top-4 rounded-lg border px-3 py-1 text-sm capitalize">
          {category}
        </div>
      </div>
      <p className="text-sm font-light uppercase">{formatDate(date)}</p>
      <h3 className="text-xl font-bold">{title}</h3>
    </div>
  );
}
