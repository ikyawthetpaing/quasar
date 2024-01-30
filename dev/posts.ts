export type Post = {
  title: string;
  description: string;
  thumbnail: string;
  category: string;
  date: string;
  featured: boolean;
  views: number;
};

export const posts: Post[] = [
  {
    title: "Exploring the Mountains",
    thumbnail: "/images/mountains.jpg",
    description: "Discover the breathtaking beauty of mountain landscapes.",
    date: "2023-9-24",
    category: "travel",
    featured: true,
    views: 230000,
  },
  {
    title: "The Art of Colors",
    thumbnail: "/images/art.jpg",
    description: "Immerse yourself in the world of vibrant and expressive art.",
    date: "2023-9-23",
    category: "art",
    featured: true,
    views: 100000,
  },
  {
    title: "Fashion Trends 2024",
    thumbnail: "/images/fashion.jpg",
    description:
      "Stay ahead with the latest fashion trends for the upcoming year.",
    category: "fashion",
    date: "2023-9-22",
    featured: true,
    views: 240040,
  },
  {
    title: "Balancing Work and Life",
    thumbnail: "/images/lifestyle.jpg",
    description:
      "Tips and tricks for achieving a harmonious work-life balance.",
    category: "lifestyle",
    date: "2023-9-21",
    featured: true,
    views: 400000,
  },
  {
    title: "Delicious Culinary Adventures",
    thumbnail: "/images/food.jpg",
    description: "Savor the flavors of diverse cuisines from around the world.",
    category: "food",
    date: "2023-9-20",
    featured: true,
    views: 678900,
  },
  {
    title: "Tech Innovations Unveiled",
    thumbnail: "/images/technology.jpg",
    description: "Stay updated on the latest technological breakthroughs.",
    category: "tech",
    date: "2023-9-19",
    featured: true,
    views: 234000,
  },
  {
    title: "Holistic Health and Wellness",
    thumbnail: "/images/health.jpg",
    description: "Explore holistic approaches to health and well-being.",
    category: "health",
    date: "2023-9-18",
    featured: true,
    views: 234000,
  },
  {
    title: "Journey into Scientific Wonders",
    thumbnail: "/images/science.jpg",
    description: "Uncover the mysteries of the scientific world.",
    category: "science",
    date: "2023-9-17",
    featured: true,
    views: 234000,
  },
  {
    title: "Exploring the Wonders of Machu Picchu",
    thumbnail: "/images/machu_picchu_thumbnail.jpg",
    description:
      "Discover the ancient beauty of Machu Picchu and its rich history.",
    category: "travel",
    date: "2023-9-16",
    featured: false,
    views: 234000,
  },
  {
    title: "The Art of Impressionism",
    thumbnail: "/images/impressionism_art_thumbnail.jpg",
    description:
      "Delve into the world of Impressionist art and its revolutionary techniques.",
    category: "art",
    date: "2023-9-15",
    featured: false,
    views: 234000,
  },
  {
    title: "Fashion Trends for the Season",
    thumbnail: "/images/fashion_trends_thumbnail.jpg",
    description:
      "Explore the latest fashion trends and stay stylish this season.",
    category: "fashion",
    date: "2023-10-28",
    featured: false,
    views: 234000,
  },
  {
    title: "Healthy Habits for a Balanced Lifestyle",
    thumbnail: "/images/healthy_lifestyle_thumbnail.jpg",
    description:
      "Tips and tricks for maintaining a balanced and healthy lifestyle.",
    category: "lifestyle",
    date: "2023-10-27",
    featured: false,
    views: 234000,
  },
  {
    title: "Culinary Adventures: A Foodie's Paradise",
    thumbnail: "/images/foodie_paradise_thumbnail.jpg",
    description:
      "Embark on a journey through diverse cuisines and indulge in delightful flavors.",
    category: "food",
    date: "2023-10-26",
    featured: false,
    views: 234000,
  },
  {
    title: "Innovations in Technology: A Glimpse into the Future",
    thumbnail: "/images/technology_innovations_thumbnail.jpg",
    description:
      "Stay updated on the latest technological advancements shaping our future.",
    category: "tech",
    date: "2023-10-25",
    featured: false,
    views: 234000,
  },
  {
    title: "Mindful Practices for Mental Health",
    thumbnail: "/images/mental_health_thumbnail.jpg",
    description:
      "Explore practices and routines to prioritize and improve mental well-being.",
    category: "health",
    date: "2023-10-24",
    featured: false,
    views: 234000,
  },
  {
    title: "Unraveling the Mysteries of the Cosmos",
    thumbnail: "/images/space_science_thumbnail.jpg",
    description:
      "Journey through the wonders of space and unravel the mysteries of the cosmos.",
    category: "science",
    date: "2023-10-23",
    featured: false,
    views: 234000,
  },
  {
    title: "Serene Beach Destinations for Your Next Getaway",
    thumbnail: "/images/beach_getaway_thumbnail.jpg",
    description:
      "Escape to the tranquility of these beautiful beach destinations around the world.",
    category: "travel",
    date: "2023-10-22",
    featured: false,
    views: 234000,
  },
  {
    title: "Modern Abstract Art: A Journey in Colors",
    thumbnail: "/images/abstract_art_thumbnail.jpg",
    description:
      "Dive into the vibrant world of modern abstract art and explore the power of colors.",
    category: "art",
    date: "2023-10-21",
    featured: false,
    views: 234000,
  },
  {
    title: "Runway Elegance: Fashion Shows That Stole the Spotlight",
    thumbnail: "/images/fashion_show_thumbnail.jpg",
    description:
      "Recap the glamorous fashion shows that showcased the latest trends and designs.",
    category: "fashion",
    date: "2023-10-20",
    featured: false,
    views: 234000,
  },
  {
    title: "Balancing Work and Play: Tips for a Fulfilling Lifestyle",
    thumbnail: "/images/balance_lifestyle_thumbnail.jpg",
    description:
      "Discover practical tips for achieving a balanced lifestyle amidst a busy schedule.",
    category: "lifestyle",
    date: "2023-10-19",
    featured: false,
    views: 234000,
  },
  {
    title: "Gastronomic Delights: Fusion Cuisine Explorations",
    thumbnail: "/images/fusion_cuisine_thumbnail.jpg",
    description:
      "Embark on a culinary adventure with unique and delicious fusion cuisine creations.",
    category: "food",
    date: "2023-10-18",
    featured: false,
    views: 234000,
  },
  {
    title: "Cutting-Edge Gadgets: The Future of Consumer Technology",
    thumbnail: "/images/futuristic_gadgets_thumbnail.jpg",
    description:
      "Explore futuristic gadgets that are shaping the landscape of consumer technology.",
    category: "tech",
    date: "2023-10-17",
    featured: false,
    views: 234000,
  },
  {
    title: "Mind-Body Connection: Holistic Approaches to Health",
    thumbnail: "/images/holistic_health_thumbnail.jpg",
    description:
      "Learn about holistic practices that emphasize the connection between the mind and body.",
    category: "health",
    date: "2023-10-16",
    featured: false,
    views: 234000,
  },
  {
    title: "Frontiers of Scientific Discovery: Recent Breakthroughs",
    thumbnail: "/images/scientific_breakthrough_thumbnail.jpg",
    description:
      "Stay informed about the latest breakthroughs in various scientific fields.",
    category: "science",
    date: "2023-10-15",
    featured: false,
    views: 234000,
  },
];

export function getPosts({
  amount = 6,
  tag = "latest",
  category,
  query,
}: {
  amount?: number;
  tag?: string | null;
  category?: string | null;
  query?: string | null;
}) {
  let filteredPosts = [...posts];

  if (category) {
    filteredPosts = filteredPosts.filter(
      ({ category: _category }) => _category === category
    );
  }

  if (query) {
    filteredPosts = filteredPosts.filter(({ title }) =>
      title.toLowerCase().includes(query.toLowerCase())
    );
  }

  switch (tag) {
    case "featured":
      filteredPosts = filteredPosts.filter(({ featured }) => featured);
      break;
    case "popular":
      filteredPosts.sort((a, b) => (b.views || 0) - (a.views || 0));
      break;
    case "latest":
      filteredPosts.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
      break;
  }

  console.log("Call to getPosts");

  return filteredPosts.slice(0, amount);
}
