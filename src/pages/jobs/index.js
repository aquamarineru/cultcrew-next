import React from 'react'
import { client } from '../../../lib/client'
import cl from 'classnames'
import styles from './styles.module.scss'
import Cover from '@/components/Cover/Cover'
import CallToAction from '@/components/CTA/CallToAction'
import Job from '@/components/Job/Job'

export default function Jobs({jobsData, className}) {
  return (
    <div>
      <Cover 
        title={jobsData.title}
        subtitle={jobsData.subtitle}
        image={jobsData.image.asset._ref}
      />
      <div className={cl(className, styles.jobs)}>
                {jobsData.jobs.map((job, index) => (
                    <Job
                        key={index}
                        title={job.title}
                        description={job.description}  
                    />
                ))}
        </div>
      <CallToAction
        title={jobsData.callToAction[0].title}
        subtitle={jobsData.callToAction[0].subtitle}
        btnLabel={jobsData.callToAction[0].button}
        ariaLabel={jobsData.callToAction[0].button}
        href={jobsData.callToAction[0].link ? jobsData.callToAction[0].link : '/kontakt'}
      />
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
        jobsData : jobsData[0],
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
