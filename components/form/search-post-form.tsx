"use client";

import { HTMLAttributes, useState } from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { Icons } from "../icons";

interface Props extends HTMLAttributes<HTMLFormElement> {}

export function SearchPostForm({ className, ...props }: Props) {
  const [query, setQuery] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(query);
      }}
      className={cn(
        "flex h-9 w-full max-w-56 overflow-hidden rounded-full border",
        className
      )}
      {...props}
    >
      <Button size="icon" variant="ghost" className="h-full rounded-full">
        <Icons.search className="size-4" />
      </Button>
      <Input
        placeholder="Search posts"
        className="h-full border-none bg-transparent pl-0 outline-none"
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
}
