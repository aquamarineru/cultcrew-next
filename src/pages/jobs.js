import React from 'react'
import { client } from "../../lib/client";
import Cover from '@/components/Cover/Cover'

export default function Jobs({className, jobsData}) {
  return (
    <div>
      <Cover 
      title={jobsData.title}
      subtitle={jobsData.subtitle}
      image={jobsData.image.asset._ref}
      />
    </div>
  )
}

export async function getStaticProps() {
    try{
      const jobsQuery = `*[ _type == "jobs" ]{
        title,
        subtitle,
        image,
        jobs[]{
            title,
            description,
        },
        callToAction[]{
          title,
          button,
          link
        }
      }`;
      const jobsData = await client.fetch(jobsQuery);
      if(!jobsData){
        return {
          props: {
            error: "No data found",
          },
        };
      }
      return {
        props: {
          jobsData: jobsData[0]
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