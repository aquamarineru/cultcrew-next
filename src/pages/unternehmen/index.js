import React from 'react'
import styles from './styles.module.scss'
import cl from 'classnames'
import { client } from '../../../lib/client'
import Cover from '@/components/Cover/Cover'
import CompanyHistory from './CompanyHistory'
import Team from './Team'
import Qualification from '@/components/Qualification/Qualification'
import Education from './Education'
import CallToAction from '@/components/CTA/CallToAction'
import Contact from '@/components/Contact/Contact'

export default function Unternehmen({className, data, contactData}) {

  return (
    <div>
      <Cover 
      title={data.title} 
      subtitle={data.subtitle}
      image={data.image.asset._ref}
      />
      <CompanyHistory
        description={data.aboutText}
      />
      <Team
        teamData={data.team}
        title={data.teamTitle}
      />
      <Qualification 
        data={data.qualification[0].qualificationCards}
        title={data.qualification[0].title}
      />
      <Education
        title={data.education.title}
        text={data.education.text}
        image={data.education.image?.asset.url}
      />
       <CallToAction
        title={data.callToAction[0].title}
        subtitle={data.callToAction[0].subtitle}
        btnLabel={data.callToAction[0].button}
        ariaLabel={data.callToAction[0].button} 
        href={data.callToAction[0].link ? data.callToAction[0].link : '/jobs'}
        /> 
        <Contact 
        title={contactData.title}
        subtitle={contactData.subtitle}
        image={contactData.image.asset.url}
        logo={contactData.contactDetails.logo}
        address={contactData.contactDetails.address}
        phone={contactData.contactDetails.additionalPhone}
        email={contactData.contactDetails.additionalEmail} />
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
      teamTitle,
      team[]{
        name,
        position,
        image{
          asset->{
            _id,
            url
          }
        },
        email,    
        phone,
      },
      qualification[]{
        title,
        qualificationCards[]{
          title,
          image{
            asset->{
              _id,
              url
            }
          },
        }
      },
      education{
        title,
        text,
        image{
          asset->{
            _id,
            url
          }
        },
      },
      callToAction[]{
        title,
        subtitle,
        button,
        link
      },
      contact{
        title,
        text,
        image{
          asset->{
            _id,
            url
          }
        },
        button,
        link
      }
    }`;

    const contactQuery = `*[ _type == "contact" ]{
      title,
      subtitle,
      image{
        asset->{
          _id,
          url
        },
      },
      contactDetails{
        logo,
        address,
        additionalPhone,
        additionalEmail,
      },
    }`
    const data = await client.fetch(aboutQuery);
    const contactData = await client.fetch(contactQuery);
    if (!data.length || !contactData.length) {
      console.error('No data found');
      return { props: { error: "No data found" } };
  }
    return {
      props: {
        data: data[0],
        contactData: contactData[0],
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