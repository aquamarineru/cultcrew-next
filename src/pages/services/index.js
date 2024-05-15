import React from 'react'
import styles from './styles.module.scss'
import cl from 'classnames'
import { client } from '../../../lib/client'

import Cover from '@/components/Cover/Cover'
import ServicesCard from './ServicesCard'
import CallToAction from '@/components/CTA/CallToAction'

export default function Services({className, servicesData}) {
  console.log(servicesData)
  return (
    <div>
      <Cover 
      title={servicesData.title} 
      subtitle={servicesData.subtitle}
      image={servicesData.image.asset._ref}
      />
       {servicesData.cards.map((card, index) => (
        <ServicesCard
        key={card._id || index}
          title={card.title}
          text={card.text}
          slug={card.slug.current}
          className={className}
        />
      ))}
      <CallToAction
      title={servicesData.callToAction[0].title}
      subtitle={servicesData.callToAction[0].subtitle}
      btnLabel={servicesData.callToAction[0].button}
      ariaLabel={servicesData.callToAction[0].button}
      href={servicesData.callToAction[0].link ? servicesData.callToAction[0].link : '/kontakt'}
      />
    </div>
  )
}
export async function getStaticProps() {
  try{
    const servicesQuery = `*[ _type == "servicesPage" ]{
      title,
      subtitle,
      image,
      cards[]->{
        _id,
        title,
        text,
        slug,
        body
      },
      callToAction[]{
        _id,
        title,
        subtitle,
        button,
        link
      }
    }`;
    const servicesData = await client.fetch(servicesQuery);
    if(!servicesData){
      return {
        props: {
          error: "No data found",
        },
      };
    }
    return {
      props: {
        servicesData: servicesData[0]
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