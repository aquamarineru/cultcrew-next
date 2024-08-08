"use client";
import React from 'react'
import styles from './styles.module.scss'
import cl from 'classnames';
import Image from 'next/legacy/image';
import { urlFor } from '../lib/client';
import Link from 'next/link';
import Block from '../components/block/Block';
import Button from '../components/button/Button';

export default function About({ className, text, image, button, ariaLabel }) {
  return (
    <div className={cl(className, styles.about)}>
      <div className={cl(className, styles.aboutContent)}>
        {image && (
            <div className={cl(className, styles.aboutContentImg)}>
            <Image 
            src={urlFor(image).url()}
            alt={image}
            width={500}
            height={500}
            loading="lazy"
            />
        </div>
        )}
        <div className={cl(className, styles.aboutText)}>
            <Block value={text} />
        </div>
      </div>
      <Link href="/unternehmen" passHref>
            <Button 
            btnLabel={button}
            ariaLabel={ariaLabel} 
            /> 
       </Link>
    </div>
  )
}
