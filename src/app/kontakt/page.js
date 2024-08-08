import React from 'react'
import { client } from '../lib/client';
import Contact from '../components/contact/Contact';

export default async function Kontakt() {
    const query = `*[_type == "contact"]{
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
    let data
    try{
        data = await client.fetch(query);
    }
    catch(err){
      console.error("Error fetching data:", err);
      return <div>Error loading contact data</div>;
    }
    if (!data || !data.length) {
        return <div>No data available</div>;
    }

  return (
    <div>
      <Contact 
      title={data[0].title}
      subtitle={data[0].subtitle}
      image={data[0].image}
      logo={data[0].contactDetails.logo}
      address={data[0].contactDetails.address} 
      phone={data[0].contactDetails.additionalPhone}
      email={data[0].contactDetails.additionalEmail}
      />
    </div>
  )
}
