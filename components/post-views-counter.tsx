"use client";

import { useEffect, useState } from "react";

import { updateAndGetPostViewsCount } from "@/lib/db/action/post-views";

interface Props {
  slug: string;
}

export function PostViewsCounter({ slug }: Props) {
  const [viewsCount, setViewsCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    updateAndGetPostViewsCount(slug)
      .then((value) => {
        setViewsCount(value);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return "... views";
  } else {
    return `${viewsCount} ${viewsCount > 1 ? "views" : "view"}`;
  }
}
