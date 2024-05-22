import React from 'react'
import { client } from '../../../lib/client'

export default function Jobs({jobsData}) {
    console.log(jobsData)
  return (
    <div>
      tetst jobs
    </div>
  )
}

export async function getStaticProps() {
  try {
    const jobsQuery = `*[ _type == "jobs" ]{
      title,
      subtitle,
      image,
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
        link
      }
    }`;
    const jobsData = await client.fetch(jobsQuery);
    if (!jobsData) {
      return {
        notFound: true,
      };
    }
    return {
      props: {
        jobsData,
      },
      revalidate: 60,
    };
  } catch (err) {
    console.error(err);
    return {
      notFound: true,
    };
  }
}
