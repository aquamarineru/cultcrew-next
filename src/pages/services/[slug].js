import React from 'react';
import { useRouter } from 'next/router';
import { PortableText } from '@portabletext/react';
import cl from 'classnames';
import styles from './styles.module.scss';
import { client, urlFor } from '../../../lib/client';
import Cover from '@/components/Cover/Cover';
import Image from 'next/image';
import Block from '@/components/blockContent/Block';
import Contact from '@/components/Contact/Contact';

export default function ServicePage({data, className, contactData}) {
    
    const router = useRouter();
    if (router.isFallback) {
        return <div>Loading...</div>;
    }

    return (
        <div> 
            <Cover
                title={data.title}
                image={data.image} 
                subtitle={data.subtitle}
            />
            <div className={cl(className, styles.post)}>
                {data.body.map((section, index) => (
                    <div key={section._id || index} className={cl(className, styles.postBlock)}>
                        <Block blocks={section.body}  />
                    </div>
                ))}
                
            </div> 
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


export async function getStaticPaths() {
    const query = '*[_type == "servicesCards"]';
    const cards = await client.fetch(query);
    const paths = cards.map(card => ({
        params: { slug: card.slug.current },
    }));
  
    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const query = `*[_type == "servicesCards" && slug.current == $slug][0]{
        _id,
        title,
        subtitle,
        image{
            asset->{
                _id,
                url
            }
        },
        body,
        slug
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
  
    const data = await client.fetch(query, { slug: params.slug });
    const contactData = await client.fetch(contactQuery);

    return {
        props: {
            data,
            contactData: contactData[0]
        },
    };
}