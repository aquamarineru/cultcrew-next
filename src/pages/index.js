import React from "react";
import { client } from "../../lib/client";
import { Murecho } from "next/font/google";
import Hero from "../hero/Hero";
import styles from '@/styles/home.module.scss';
import cl from 'classnames';

const murecho = Murecho({ subsets: ["latin"] });

export default function Home({ homeData }) {
  return (
    <main className="">
      <Hero homeData={homeData}/>
    </main>
  );
}

export async function getStaticProps() {
  try{
    const homeQuery = `*[ _type == "home" ]{
      title,
      subtitle,
      button,
      Image{
        asset->{
          _id,
          url
        }
      },
      services{
        title,
        subtitle,
        cards[]{
          title,
          subtitle,
          Image{
            asset->{
              _id,
              url
            }
          },
          button,
        }
      },
      about{
        text,
        Image{
          asset->{
            _id,
            url
          }
        },
        button
      },
      feedback{
        title,
        subtitle,
        fbCards[]{
          name,
          company,
          text,
        }
      },
      news{
        title,
        subtitle,
        newsCards[]{
          title,
          subtitle,
          slug,
          Image{
            asset->{
              _id,
              url
            }
          }
        }
      },
      callToAction[]{
        title,
        subtitle,
        button,
        link
      }

    }`;

    const homeData = await client.fetch(homeQuery);
    if(!homeData){
      return {
        props: {
          error: "No data found",
        },
      };
    }

    return {
      props: {
        homeData: homeData[0],
      },
      revalidate: 60,
    };
  }
  catch(err){
    console.error(err);
    return {
      props: {
        error: "An error occurred",
      },
    };
  }
}