import React from 'react'
import styles from './styles.module.scss';
import cl from 'classnames';
import BlockContent from '@sanity/block-content-to-react';

export default function ServicesCard({ services, className }) {
    const serializers = {
        types: {
          block: (props) => {
            switch (props.node.style) {
              case 'h3':
                return <h3 className={cl(className, styles.servicesTitle)}>{props.children}</h3>;
              case "bullet":
                return <ul className={cl(className, styles.servicesText)}>
                  <li className={cl(className, styles.servicesTextBullet)}>{props.children}</li>
                </ul>
              case "strong":
                return <strong className={cl(className, styles.servicesTextStrong)}>{props.children}</strong>;
              default:
                return <p className={cl(className, styles.servicesText)}>{props.children}</p>;
            }
          },
          marks: {
            strong: ({ children }) => <strong className={styles.servicesTextStrong}>{children}</strong>,
            em: ({ children }) => <em className={styles.servicesTextItalic}>{children}</em>,
            underline: ({ children }) => <u className={styles.servicesTextUnderline}>{children}</u>,
            'strike-through': ({ children }) => <s>{children}</s>
        },
        
        }
      };
  return (
    <div className={cl(className, styles.services)}>
        {services.map(service => (
        <div key={service.title} className={cl(styles.servicesCard)}>
          <h3 className={cl(className, styles.servicesTitle)}>{service.title}</h3>
          <BlockContent
            blocks={service.text}
            projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
            dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
            serializers={serializers}
          />
        </div>
      ))}
      
    </div>
  )
}
