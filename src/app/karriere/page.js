import React from 'react'
import { client } from '../lib/client';
import Karriere from '../components/karriere/Karriere';

export default async function KarrierePage() {
    const query = ` *[_type == "jobs"]{
      title,
      subtitle,
      image{
        asset->{
          _id,
          url
        }
      },
      jobs[]{
        _id,
        title,
        description,
      },
      callToAction[]{
        _id,
        title,
        subtitle,
        button,
        external
      }
    }`
    let data
    try{
        data = await client.fetch(query);
    }
    catch(err){
      console.error("Error fetching data:", err);
      return <div>Error loading job data</div>;
    }
  return (
    <div>
      {/* <Karriere 
      data={data}
      /> */}
      <Karriere
      title={data[0].title}
      subtitle={data[0].subtitle}
      image={data[0].image}
      jobs={data[0].jobs}
      callToAction={data[0].callToAction[0]} 
      />
    </div>
  )
}
