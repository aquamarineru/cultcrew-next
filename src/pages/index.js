import React, {useEffect} from "react";
import { client } from "../../lib/client";
import { Murecho } from "next/font/google";
import Hero from "../hero/Hero";
import styles from '@/styles/home.module.scss';
import cl from 'classnames';
import CookiesPopup from "../components/Cookies/CookiesPopup";



const murecho = Murecho({ subsets: ["latin"] });

export default function Home({ homeData }) {
  useEffect(() => {
    console.log("Home component rendered");
  }, []);
  return (
    <main className={cl(styles.main, murecho.className)}>
      <CookiesPopup />
      <Hero homeData={homeData}/>
    </main>
  );
}

export async function getStaticProps() {
  try{
    const homeQuery = `*[ _type == "home" ]{
      _id,
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
        cards[]->{
          _id,
          title,
          subtitle,
          Image{
            asset->{
              _id,
              url
            }
          },
          slug
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
          _id,
          name,
          company,
          text,
        }
      },
      news{
        title,
        subtitle,
        posts[]->{
          _id,
          title,
          subtitle,
          image{
            asset->{
              _id,
              url
            }
          },
          slug,
          body,
        }
      },
      callToAction[]{
        _id,
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