import React from 'react'
import styles from './styles.module.scss'
import cl from 'classnames'
import Image from "next/legacy/image"
import { PortableText } from '@portabletext/react';
import { IoCheckmarkCircle } from "react-icons/io5";

export default function FeedbackCard({className, name, text, company}) {
  const components = {
    block: {
        normal: ({ children }) => <p className={cl(className, styles.textNormal)}>{children}</p>,
    },
    list: {
        bullet: ({ children }) => <ul className={cl(className, styles.textBullet)}>{children}</ul>,
        number: ({ children }) => <ol className={cl(className, styles.textNumber)}>{children}</ol>,
        checkmarks: ({ children }) => <ol className={cl(className, styles.textCheck)}>{children}</ol>,
    },
    listItem: {
        bullet: ({ children }) => <li>{children}</li>,
        number: ({ children }) => <li>{children}</li>,
    },
    marks: {
        strong: ({ children }) => <strong className={cl(className, styles.textStrong)}>{children}</strong>,
        em: ({ children }) => <em className={cl(className, styles.textEm)}>{children}</em>,
        link: ({value, children}) => {
            const target = (value?.href || '').startsWith('http') ? '_blank' : undefined
            return (
              <a href={value?.href} target={target} rel={target === '_blank' && 'noindex nofollow'} className={cl(className, styles.textLink)}>
                {children}
              </a>
            )
          },
    }
};
  return (
    <div className={cl(styles.feedbackCard)}>
        <div className={cl(className, styles.feedbackCardText)}>
         <PortableText value={text} components={components} projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}></PortableText>
        </div>
        <p className={cl(className, styles.feedbackCardName)}>{name}</p>
        <p className={cl(className, styles.feedbackCardCompany)}>{company}</p>
    </div>
  )
}
