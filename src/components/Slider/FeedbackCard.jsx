import React from 'react'
import styles from './styles.module.scss'
import cl from 'classnames'
import Image from "next/legacy/image"
import  BlockContent from '@sanity/block-content-to-react'

export default function FeedbackCard({className, name, text}) {
  const serializers = {
    types: {
      block: (props) => {
        switch (props.node.style) {
          default:
            return <p className={cl(className, styles.feedbackCardText)}>{props.children}</p>
        }
      }
    }
  }
  return (
    <div className={cl(styles.feedbackCard)}>
        <Image 
        src="/BG.svg"
        alt="Background"
        width={550}
        height={400}
        className={cl(styles.feedbackCardImage)}
        />
        
        <BlockContent blocks={text} 
        projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
        dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
        serializers={serializers} 
        ></BlockContent>
        <p className={cl(className, styles.feedbackCardName)}>{name}</p>
    </div>
  )
}
