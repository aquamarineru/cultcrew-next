import React from 'react'
import { client } from '../lib/client';
import Unternehmen from '../components/unternehmen/Unternehmen';

export const revalidate = 60;
export default async function UnternehmenPage() {

    const query = `*[_type == "unternehmen"] {
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

      let data, contactData;
      try{
        data = await client.fetch(query);
        contactData = await client.fetch(contactQuery);

      } catch (err) {
        console.error("Error fetching data:", err);
        return <div>Error loading service page</div>;
      }
        if (!data || !contactData) {
            return <div>Service not found</div>;
        }


  return (
    <div>
      <Unternehmen data={data[0]} contactData={contactData} />
    </div>
  )
}
