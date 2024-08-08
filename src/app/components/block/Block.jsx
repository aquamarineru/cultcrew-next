import React from 'react'
import { PortableText } from '@portabletext/react';
import styles from './styles.module.scss';
import cl from 'classnames';

const components = {
  block: {
    h1: ({ children }) => <h1 className={styles.heading1}>{children}</h1>,
    h2: ({ children }) => <h2 className={styles.blockHeading2}>{children}</h2>,
    normal: ({ children }) => <p className={styles.paragraph}>{children}</p>,
    blockquote: ({ children }) => <blockquote className={styles.blockquote}>{children}</blockquote>,
    bullet: ({ children }) => (
      <ul className={styles.bulletList}>
        {children.map((item, index) => (
          <li key={index} className={styles.bulletListItem}>
            {item}
          </li>
        ))}
      </ul>
    ),
  },
  types: {
    image: ({ value }) => (
      <div className={styles.imageWrapper}>
        <Image
          src={urlFor(value).url()}
          alt={value.alt || 'Image'}
          width={500} 
          height={500} 
          style={{ objectFit: 'cover' }}
        />
      </div>
    ),
    serviceSlug: ({ value }) => (
      <div className={styles.serviceSlug}>
        {value.body.map((block, index) => (
          <div key={index}>{block.children[0].text}</div>
        ))}
      </div>
    ),
    
  },
  marks: {
    strong: ({ children }) => <strong className={styles.strong}>{children}</strong>,
    em: ({ children }) => <em className={styles.emphasis}>{children}</em>,
    link: ({ value, children }) => {
      const { href } = value;
      return (
        <a href={href} className={styles.link} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    },
  },
};

export default function Block({ value, className }) {
  return (
    <PortableText
    value={value}
    components={components}
    className={cl(className, styles.block)}
    />
  )
}
