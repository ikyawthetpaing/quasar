import { BaseConfig } from "@/types";

export const baseConfig: BaseConfig = {
  navItems: [
    { label: "Home", url: "/" },
    { label: "Category", url: "/category" },
    { label: "Blog", url: "/blog" },
    { label: "About", url: "/about" },
  ],
  categories: [
    {
      name: "Travel",
      id: "travel",
      title: "Discover Destinations, Tips, and Inspiration",
      image: "/images/categories/travel.jpg",
      description:
        "Explore the world through the lens of travel enthusiasts. Journey to breathtaking destinations and discover hidden gems.",
    },
    {
      name: "Art",
      id: "art",
      title: "Immerse Yourself in Paintings, Sculptures, and More",
      image: "/images/categories/art.jpg",
      description:
        "Immerse yourself in the diverse world of art. From classic masterpieces to contemporary expressions, witness the beauty of human creativity.",
    },
    {
      name: "Fashion",
      id: "fashion",
      title: "Stay Trendy with Style Tips and Inspiration",
      image: "/images/categories/fashion.jpg",
      description:
        "Stay ahead of the style curve with the latest trends and fashion insights. Unleash your inner fashionista and express your unique style.",
    },
    {
      name: "Lifestyle",
      id: "lifestyle",
      title: "Tips for Health, Wellness, and Happiness",
      image: "/images/categories/lifestyle.jpg",
      description:
        "Achieve a balanced and fulfilling life with lifestyle tips and insights. Enhance your well-being and embrace a holistic approach to living.",
    },
    {
      name: "Food",
      id: "food",
      title: "Recipes, Reviews, and Culinary Adventures",
      image: "/images/categories/food.jpg",
      description:
        "Embark on a culinary journey to savor the flavors of different cuisines. From recipes to foodie adventures, indulge in the world of gastronomy.",
    },
    {
      name: "Tech",
      id: "tech",
      title: "Gadgets, Reviews, and Future Trends",
      image: "/images/categories/tech.jpg",
      description:
        "Stay on the cutting edge of technology. Explore innovations, gadgets, and the latest advancements shaping the future in the world of tech.",
    },
    {
      name: "Health",
      id: "health",
      title: "Tips for Nutrition, Fitness, and Well-being",
      image: "/images/categories/health.jpg",
      description:
        "Prioritize your well-being with health tips and practices. Nourish your mind and body for a healthier and more fulfilling life.",
    },
    {
      name: "Science",
      id: "science",
      title: "Discoveries, Explorations, and Mysteries of the Universe",
      image: "/images/categories/science.jpg",
      description:
        "Unravel the mysteries of the universe through scientific discoveries and explorations. Dive into the wonders of the cosmos and beyond.",
    },
  ],
  footerLinkGroups: [
    {
      title: "Pages",
      links: [
        { label: "Home", url: "/" },
        { label: "Category", url: "/category" },
        { label: "Blog", url: "/blog" },
        { label: "About", url: "/about" },
      ],
    },
    {
      title: "Community",
      links: [
        { label: "About", url: "/about" },
        { label: "Brands", url: "/brands" },
        { label: "Careers", url: "/careers" },
      ],
    },
  ],
};

export function getCategory(category: string) {
  return (
    baseConfig.categories.find(({ id: value }) => value === category) || null
  );
}
