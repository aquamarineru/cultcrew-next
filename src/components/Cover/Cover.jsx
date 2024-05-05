import React from 'react'
import styles from './styles.module.scss'
import cl from 'classnames'
import Image from "next/legacy/image"
import Title from '@/components/Title/Title'
import Button from '@/components/Button/Button'
import { urlFor } from '../../../lib/client'
import BlockContent from '@sanity/block-content-to-react';


export default function Cover({className, image, title, subtitle,  btnLabel, href, ariaLabel}) {
  const serializers = {
    types: {
      block: (props) => {
        switch (props.node.style) {
          default:
            return <p className={cl(className, styles.coverText)}>{props.children}</p>
        }
      }
    }
  }
  return (
    <div className={cl(className, styles.cover)}>
        {image && (
            <Image
            src={urlFor(image).url()}
            alt="Background"
            layout="fill"
            priority={true}
            quality={80}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={cl(styles.coverImage)}
            />
        )}
        <div className={cl(styles.coverCircleBlur)}></div>
        <div className={cl(className, styles.coverTitle)}>
            <Title type="large">
            { title } 
            </Title>
            <BlockContent blocks={subtitle} 
             projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
             dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
             className={cl(className, styles.coverText)} 
             serializers={serializers}
             />
            <Button 
            href={href}
            ariaLabel={ariaLabel} 
            btnLabel={btnLabel}
            /> 
        </div>
      
    </div>
  )
}
