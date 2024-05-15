import React from 'react'
import styles from './styles.module.scss'
import cl from 'classnames'
import Image from "next/legacy/image"
import Title from '@/components/Title/Title'
import Button from '@/components/Button/Button'
import { urlFor } from '../../../lib/client'
import { PortableText } from '@portabletext/react';
import { IoCheckmarkCircle } from "react-icons/io5";


export default function Cover({className, image, title, subtitle,  btnLabel, href, ariaLabel}) {
  const components = {
    block: {
        normal: ({ children }) => <p className={cl(className, styles.textNormal)}>{children}</p>,
        h3: ({ children }) => <h3 className={cl(className, styles.textH3)}>{children}</h3>,
        blockquote: ({ children }) => <blockquote className={cl(className, styles.textQuote)}>{children}</blockquote>,
        bullet: ({ children }) => <ul className={cl(className, styles.textBullet)}><li className={cl(className, styles.textBulletItem)}><IoCheckmarkCircle /> {children}</li></ul>,  
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
            <div className={cl(className, styles.coverText)}>
              <PortableText value={subtitle} components={components}  />
            </div>
            {
              btnLabel && href && ariaLabel &&
              <Button 
              href={href}
              ariaLabel={ariaLabel} 
              btnLabel={btnLabel}
              />
             }
        </div>
      
    </div>
  )
}
