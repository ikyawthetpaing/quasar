"use client";

import { FormEvent, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function EmailSubscribeForm() {
  const [email, setEmail] = useState("");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(email);
  }

  return (
    <form onSubmit={onSubmit} className="flex rounded-xl border p-1">
      <Input
        placeholder="Email Address"
        className="border-none bg-transparent outline-none"
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button type="submit" variant="secondary" className="rounded-[8px]">
        Subscribe
      </Button>
    </form>
  );
}
