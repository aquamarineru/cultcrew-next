import React from 'react'
import styles from './styles.module.scss'
import cl from 'classnames'
import Image from "next/legacy/image"
import { GoCheck } from "react-icons/go";
import Button from '../components/Button/Button';
import BlockContent from '@sanity/block-content-to-react';
import { urlFor } from '../../lib/client'

export default function About({className, text, image,  button, ariaLabel}) {
    const serializers = {
        types: {
          block: (props) => {
            switch (props.node.style) {
              case 'h3':
                return <h3 className={cl(className, styles.aboutTitle)}>{props.children}</h3>;
              case "bullet":
                return <div className={cl(className, styles.aboutTextCheck)}>
                  <p className={cl(className, styles.aboutText)}>{props.children}</p>
                </div>;
              default:
                return <p className={cl(className, styles.aboutText)}>{props.children}</p>;
            }
          }
        }
      };
      
  return (
    <div className={cl(className, styles.about)}>
        <div className={cl(className, styles.aboutContent)}>
        {image && (
            <div className={cl(className, styles.aboutImg)}>
                <Image 
                src={urlFor(image).url()}
                alt={image}
                width={500}
                height={500}
                />
            </div>
            
        )}
            <BlockContent
            blocks={text} 
            projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
            dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
            serializers={serializers} >
            </BlockContent>
        </div>
        <Button 
        href="/unternehmen" 
        btnLabel={button}
        ariaLabel={ariaLabel} /> 
        </div>

    
  )
}

/***
 * <h3 className={cl(className, styles.aboutTitle)}>Die Wahl von Cult Crew  Sicherheitsdiensten bietet zahlreiche Vorteile, darunter:</h3>
            <div className={cl(className, styles.aboutTextCheck)}>
                <GoCheck size={30} className='' />
                <p> <br/> <b>Zuverlässigkeit:</b>  Unser Service garantiert eine        durchgehende Sicherheitsüberwachung und schnelle Reaktionszeiten.</p>
            </div>
            <div className={cl(className, styles.aboutTextCheck)}>
                <GoCheck size={30} className='text-primary' />
                <p> <br/> <b>Zuverlässigkeit:</b>  Unser Service garantiert eine        durchgehende Sicherheitsüberwachung und schnelle Reaktionszeiten.</p>
            </div>
            <div className={cl(className, styles.aboutTextCheck)}>
                <GoCheck size={30} className='text-primary' />
                <p> <br/> <b>Zuverlässigkeit:</b>  Unser Service garantiert eine        durchgehende Sicherheitsüberwachung und schnelle Reaktionszeiten.</p>
            </div>
            <div className={cl(className, styles.aboutTextCheck)}>
                <GoCheck size={30} className='text-primary' />
                <p> <br/> <b>Zuverlässigkeit:</b>  Unser Service garantiert eine        durchgehende Sicherheitsüberwachung und schnelle Reaktionszeiten.</p>
            </div>
 */