import React from 'react'
import styles from './styles.module.scss'
import cl from 'classnames'
import { client } from "../../../lib/client";
import Cover from '@/components/Cover/Cover'
import AboutText from './AboutText'

export default function Unternehmen({className, aboutData}) {
  return (
    <div>
      <Cover 
      title={aboutData.title} 
      subtitle={aboutData.subtitle}
      image={aboutData.image.asset._ref}
      />
      <AboutText 
      aboutBlock={aboutData.aboutText}
      image={aboutData.aboutText.image}
      title={aboutData.aboutText.title}
      />
    </div>
  )
}
export async function getStaticProps() {
  try{
    const aboutQuery = `*[ _type == "unternehmen" ]{
      title,
      subtitle,
      image,
      aboutText[]{
        title,
        aboutImage {
          asset->{
              _id,
              url
          },
          alt
      },
        text
      },
      team[]{
        name,
        position,
        image,
        email,    
        phone,
      },
      qualification[]{
        title,
        qualificationCards[]{
          title,
          image,
        }
      },
      education{
        title,
        text,
        image,
      },
      callToAction[]{
        title,
        button,
        link
      },
      contact{
        title,
        text,
        image,
        button,
        link
      }
    }`;
    const aboutData = await client.fetch(aboutQuery);
    if(!aboutData){
      return {
        props: {
          error: "No data found",
        },
      };
    }
    return {
      props: {
        aboutData: aboutData[0]
      },
      revalidate: 60
    }

  }
  catch (err) {
    console.error(err);
    return {
      props: {
        error: "Failed to fetch data"
      },
    };
  }
}
