import React from "react";
import { Murecho } from "next/font/google";
import Hero from "../hero/Hero";

const murecho = Murecho({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Hero />
    </main>
  );
}
