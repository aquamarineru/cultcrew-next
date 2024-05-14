import React from 'react';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import Title from '@/components/Title/Title';
import { urlFor } from '../../../lib/client';
import styles from './styles.module.scss';
import cl from 'classnames';
import { IoCheckmarkCircle } from "react-icons/io5";


export default function Education({ className, title, text, image }) {
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
console.log(image)
    return (
        <div className={cl(className, styles.education, styles.container)}>
            <Title type="medium">{title}</Title>
            <div className={cl(className, styles.educationContent)}>
                <div>
                    <PortableText value={text} components={components} className={cl(className, styles.text)} />
                </div>
                {image && (
                    <Image 
                    src={urlFor(image).url()} 
                    alt="education"
                    width={250} 
                    height={400} 
                    className={cl(className, styles.educationImage)}
                />
                )}
            </div>
        </div>
    );
}
