import React from 'react'
import styles from './styles.module.scss'
import cl from 'classnames'
import Block from '@/components/blockContent/Block';

export default function FeedbackCard({className, name, text, company}) {

  return (
    <div className={cl(styles.feedbackCard)}>
        <div className={cl(className, styles.feedbackCardText)}>
         <Block blocks={text} />
        </div>
        <p className={cl(className, styles.feedbackCardName)}>{name}</p>
        <p className={cl(className, styles.feedbackCardCompany)}>{company}</p>
    </div>
  )
}
