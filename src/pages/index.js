import React from "react";
import { Murecho } from "next/font/google";
import Hero from "../hero/Hero";
import styles from '@/styles/home.module.scss';
import cl from 'classnames';

const murecho = Murecho({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="">
      <Hero />
    </main>
  );
}
