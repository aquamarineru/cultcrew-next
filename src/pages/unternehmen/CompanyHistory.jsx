import React from 'react';
import Image from 'next/image';
import styles from './styles.module.scss';
import cl from 'classnames';
import { urlFor } from '../../../lib/client';
import { PortableText } from '@portabletext/react';
import { IoCheckmarkCircle } from "react-icons/io5";

export default function CompanyHistory({ className, description = [], title }) {
    if (!description || !description.length) {
        return <div>No history data available.</div>;
    }
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
        <div className={cl(styles.about, className, styles.container)}>
            {description.map((item, index) => (
                <div key={index} className={cl(styles.aboutContent)}>
                    {item.aboutImage && (
                        <Image
                            src={urlFor(item.aboutImage?.asset)?.url()}
                            alt={item.aboutImage.alt || title}
                            width={200}
                            height={200}
                            className={styles.aboutContentImage}
                        />
                    )}
                    <PortableText value={item.text} components={components} className={cl(className, styles.text)}
                    />
                </div>
            ))}
        </div>
    );
}
