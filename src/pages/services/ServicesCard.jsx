import React from 'react'
import styles from './styles.module.scss'
import cl from 'classnames'
import Link from 'next/link'
import { PortableText } from '@portabletext/react'
import { IoCheckmarkCircle } from "react-icons/io5";

export default function ServicesCard({ className, title, text, slug}) {

    const components = {
        block: {
            normal: ({ children }) => <p className={cl(className, styles.textNormal)}>{children}</p>,
            h2:({ children }) => <h2 className={cl(className, styles.textH2)}>{children}</h2>,
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
    <div>
        <Link href={`/services/${encodeURIComponent(slug)}` }className={cl(className, styles.services)}>
            <div  className={cl(className, styles.servicesCard)}>
                <h3 className={cl(className, styles.servicesTitle)}>{title}</h3>
                <PortableText value={text} components={components} />
            </div>
    </Link>
    </div>
  )
}
