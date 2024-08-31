import React from 'react';
import { client } from '../../lib/client';
import ServiceSlug from '../../components/servicesPage/ServiceSlug';

export const revalidate = 60;
export default async function ServiceSlugPage( { params}) {
    const { slug } = params;
    const serviceQuery = `*[_type == "servicesCards" && slug.current == $slug][0]{
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

    let serviceData, contactData;

    try {
        serviceData = await client.fetch(serviceQuery, { slug });
        contactData = await client.fetch(contactQuery);
    } catch (err) {
        console.error("Error fetching data:", err);
        return <div>Error loading service page</div>;
    }

    if (!serviceData) {
        return <div>Service not found</div>;
    }

    return (
        <div> 
            <ServiceSlug data={serviceData} contactData={contactData} />
            {/* <Cover
                title={serviceData.title}
                image={serviceData.image} 
                subtitle={serviceData.subtitle}
            />
            <div className={cl(styles.post)}>
                {serviceData.body.map((section, index) => (
                    <Block key={section._id || index} value={section.body} className={styles.postBlock} />
                ))}
            </div> 
            <Contact 
                title={contactData[0]?.title || ''}
                subtitle={contactData[0]?.subtitle || ''}
                image={contactData[0]?.image?.asset?.url || ''}
                logo={contactData[0]?.contactDetails?.logo || ''}
                address={contactData[0]?.contactDetails?.address || ''}
                phone={contactData[0]?.contactDetails?.additionalPhone || ''}
                email={contactData[0]?.contactDetails?.additionalEmail || ''} 
            /> */}
        </div>
    );
}
