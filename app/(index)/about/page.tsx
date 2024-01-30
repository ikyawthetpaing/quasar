import Link from "next/link";
import { authors } from "@/dev/authors";

import { siteConfig } from "@/config/site";

export default function AboutPage() {
  return (
    <div className="container grid gap-12">
      <h1 className="font-heading text-3xl font-bold">About Us</h1>
      <div className="grid max-w-2xl gap-8">
        <p className="about-paragraph">
          Welcome to Quasar – a vibrant community of storytellers and thought
          leaders. Since our inception in 2023, we&apos;ve been curating a
          tapestry of ideas, experiences, and award-winning features that
          resonate with a diverse audience, all housed within the pages of our
          articles.
        </p>
        <p className="about-paragraph">
          Our journey began with a unique editorial vision – the recognition
          that technology was not just a fringe player but had taken center
          stage, transforming the cultural landscape. The advent of mobile
          technology catapulted us into a new era of digital consumers,
          surrounded by a dazzling array of screens that fueled revolutions in
          media, transportation, and science. At Quasar, we navigate this
          dynamic landscape to bring you stories that capture the essence of a
          world evolving faster than ever before.
        </p>
        <p className="about-paragraph">
          Have a valuable tip to share with us? Your insights are crucial to our
          mission. Here&apos;s a secure way to get in touch with us.
        </p>
        <div className="grid gap-4">
          <h2 className="font-heading text-2xl font-bold">
            {siteConfig.name} Community
          </h2>
          <ul className="pl-8">
            {authors.map(({ name, role, username }, index) => (
              <li key={index} className="list-disc">
                {role}:{" "}
                <Link
                  href={`https://twitter.com/${username}`}
                  className="underline underline-offset-4"
                  target="_blank"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
