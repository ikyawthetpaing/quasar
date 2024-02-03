import PostViews from "../model/post-views";

export async function updateAndGetPostViewsCount(slug: string) {
  const postViews = await PostViews.findOneAndUpdate(
    { slug },
    { $inc: { count: 1 } },
    {
      upsert: true,
      new: true,
      setDefaultsOnInsert: true,
      returnDocument: "after",
    }
  );

  return postViews.count;
}
