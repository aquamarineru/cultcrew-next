"use client";
import React from 'react';
import cl from 'classnames';
import Cover from '../cover/Cover';
import styles from './styles.module.scss';
import Job from './Job';
import CallToAction from '../callToAction/CallToAction';

export default function Karriere({ title, subtitle, image, jobs, callToAction, className }) {
  return (
    <div>
      <Cover
         title={title}
         subtitle={subtitle}
         image={image}
      />
       <div className={cl(className, styles.jobs)}>
        {jobs.length > 0 ? (
          jobs.map((job, index) => (
            <Job
              key={index}
              title={job.title}
              description={job.description}
            />
          ))
        ) : (
          <p>No jobs available</p>
        )}
      </div>

      {callToAction && (
        <CallToAction
          title={callToAction.title}
          subtitle={callToAction.subtitle}
          btnLabel={callToAction.button}
          ariaLabel={callToAction.button}
          href={callToAction.external ? callToAction.external : '/kontakt'}
        />
      )}
    </div>
      
  );
}
