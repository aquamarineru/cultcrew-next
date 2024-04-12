import React from 'react'
import styles from './styles.module.scss'
import cl from 'classnames'
import Image from 'next/image'
import Title from '@/components/Title/Title'
import Button from '@/components/Button/Button'

export default function Cover({className, image, title, text,  btnLabel, href, ariaLabel}) {
  return (
    <div className={cl(className, styles.cover)}>
        <Image
        src={image}
        alt="Background"
        priority={true}
        quality={100}
        layout='fill'
        objectFit="cover"
/*         objectPosition="left" */
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className={cl(styles.coverImage)}
        />
        <div className={cl(styles.coverCircleBlur)}></div>
        <div className={cl(className, styles.coverTitle)}>
            <Title type="large">
            { title } 
            </Title>
            <Title>
            { text }
            </Title>
            <Button 
            href={href}
            ariaLabel={ariaLabel} 
            btnLabel={btnLabel}
            />
        </div>
      
    </div>
  )
}
