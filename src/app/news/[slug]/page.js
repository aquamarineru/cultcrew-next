import React from 'react';
import { client } from '../../lib/client';
import NewsSlug from 'app/components/newsCard/NewsSlug';
export const revalidate = 60;
export default async function NewsSlugPage( { params}) {
    const { slug } = params;
    
    const query = `*[_type == "post" && slug.current == $slug][0]{
        _id,
        title,
        subtitle,
        image {
          asset-> {
            _id,
            url
          }
        },
        slug,
        body {
          _id,
          date,
          timeToRead,
          image {
            asset-> {
              _id,
              url
            }
          },
          postText[]{
            _key,
            children[]{
              _key,
              text
            }
          },
          callToAction[]{
            _id,
            title,
            subtitle,
            button,
            link
          },
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
            data = await client.fetch(query, { slug });
            contactData = await client.fetch(contactQuery);
      }
      catch(err){
        console.error("Error fetching data:", err);
        return <div>Error loading news data</div>;
      }
      if(!data){
        return <div>News not found</div>;
      }
      console.log(data);
  return (
    <div>
      <NewsSlug
                title={data.title}
                subtitle={data.subtitle}
                image={data.image}
                slug={data.slug}
                body={data.body}
                contactData={contactData}
            />
    </div>
  );
}
