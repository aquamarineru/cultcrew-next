"use client";
import React from 'react'
import styles from './styles.module.scss'
import cl from 'classnames'
import Block from '../block/Block';

export default function FeedbackCard({className, name, text, company}) {

  return (
    <div className={cl(className, styles.feedback)}>
     <div className={cl(className, styles.feedbackText)}>
        <Block value={text} />
      </div> 
      <p className={cl(className, styles.feedbackName)}>{name}</p>
      <p className={cl(className, styles.feedbackCompany)}>{company}</p>
    </div>
  )
}
