import React from 'react';
import styles from './styles.module.scss';
import cl from 'classnames';
import { client } from '../../../lib/client';
import Cover from '@/components/Cover/Cover';
import CompanyHistory from './CompanyHistory';
import Team from './Team';
import Qualification from '@/components/Qualification/Qualification';
import Education from './Education';
import CallToAction from '@/components/CTA/CallToAction';
import Contact from '@/components/Contact/Contact';
import Layout from '@/components/Layout/Layout';

export default function Unternehmen({ className, data, contactData }) {
  if (!data || !contactData) {
    return <div>Keine Daten verfügbar.</div>;
  }

  return (
    <div>
        <Cover 
        title={data.title} 
        subtitle={data.subtitle}
        image={data.image?.asset?.url || ''}
      />
        <CompanyHistory description={data.aboutText || []} />
        <Team
          teamData={data.team || []}
          title={data.teamTitle || ''}
        />
        {data.qualification.length > 0 && (
          <Qualification 
            data={data.qualification[0].qualificationCards || []}
            title={data.qualification[0].title || ''}
          />
        )}
        <Education
          title={data.education?.title || ''}
          text={data.education?.text || ''}
          image={data.education?.image?.asset?.url || ''}
        />
        {data.callToAction.length > 0 && (
          <CallToAction
            title={data.callToAction[0]?.title || ''}
            subtitle={data.callToAction[0]?.subtitle || ''}
            btnLabel={data.callToAction[0]?.button || ''}
            ariaLabel={data.callToAction[0]?.button || ''} 
            href={data.callToAction[0]?.link || '/jobs'}
          />
        )}
        <Contact 
          title={contactData.title || ''}
          subtitle={contactData.subtitle || ''}
          image={contactData.image?.asset?.url || ''}
          logo={contactData.contactDetails?.logo || ''}
          address={contactData.contactDetails?.address || ''}
          phone={contactData.contactDetails?.additionalPhone || ''}
          email={contactData.contactDetails?.additionalEmail || ''} 
        />
      
    </div>
  );
}

export async function getStaticProps() {
  try {
    const aboutQuery = `*[ _type == "unternehmen" ]{
      _id,
      title,
      subtitle,
      image{
        asset->{
          _id,
          url
        }
      },
      aboutText,
      teamTitle,
      team[]{
        _id,
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
        _id,
        title,
        qualificationCards[]{
          _id,
          title,
          image{
            asset->{
              _id,
              url
            }
          }
        }
      },
      education{
        _id,
        title,
        text,
        image{
          asset->{
            _id,
            url
          }
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

    const contactQuery = `*[ _type == "contact" ]{
      _id,
      title,
      subtitle,
      image{
        asset->{
          _id,
          url
        }
      },
      contactDetails{
        _id,
        logo,
        address,
        additionalPhone,
        additionalEmail
      }
    }`;

    const [data, contactData] = await Promise.all([
      client.fetch(aboutQuery),
      client.fetch(contactQuery)
    ]);

    if (!data.length || !contactData.length) {
      return { props: { error: "No data found" } };
    }

    return {
      props: {
        data: data[0],
        contactData: contactData[0]
      },
      revalidate: 60
    };

  } catch (err) {
    console.error(err);
    return {
      props: {
        error: "Failed to fetch data"
      }
    };
  }
}
