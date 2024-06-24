import React from 'react'
import styles from './styles.module.scss'
import cl from 'classnames'
import { client } from '../../../lib/client'
import Contact from '@/components/Contact/Contact'
import cookie from 'cookie';
import { v4 as uuidv4 } from 'uuid';

export default function Kontakt({className, data}) {
  return (
    <div>
     <Contact 
      title={data.title}
      subtitle={data.subtitle}
      image={data.image.asset.url}
      logo={data.contactDetails.logo}
      address={data.contactDetails.address}
      phone={data.contactDetails.additionalPhone}
      email={data.contactDetails.additionalEmail}
     />
    </div>
  )
}

export async function getStaticProps() {
  try {
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
    const data = await client.fetch(contactQuery)
    
    if (!data || data.length === 0) {
      console.error("No data found");
      return {
        props: {
          error: "No data found",
        },
        revalidate: 60,
      };
    }
    
    return {
      props: {
        data: data[0],
      },
      revalidate: 60,
    }
    const sessionToken = uuidv4();

    // Set the secure, HttpOnly cookie
    context.res.setHeader('Set-Cookie', cookie.serialize('sessionToken', sessionToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60, // 1 hour
      path: '/',
    }));
  } catch (err) {
    console.error("Error fetching data:", err);
    return {
      props: {
        error: "Failed to fetch data",
      },
      revalidate: 60,
    };
  }
}