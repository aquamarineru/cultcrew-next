import React from 'react'
import styles from './styles.module.scss'
import cl from 'classnames'
import Image from "next/legacy/image"
import Button from '../components/Button/Button';
import { urlFor } from '../../lib/client'
import Block from '@/components/blockContent/Block';

export default function About({className, text, image,  button, ariaLabel}) {
      
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
                  priority={true}
                  />
              </div>
              
          )}
          <div className={cl(className, styles.aboutText)}>
            <Block blocks={text} className={cl(className, styles.aboutTextBlock)} />
          </div>
        </div>
        <Button 
        href="/unternehmen" 
        btnLabel={button}
        ariaLabel={ariaLabel} /> 
        </div>

    
  )
}
