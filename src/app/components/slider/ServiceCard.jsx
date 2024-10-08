import React from 'react';
import Image from "next/legacy/image";
import styles from './styles.module.scss';
import cl from 'classnames';
import Link from 'next/link';
import Block from '../block/Block';

export default function ServiceCard({ image, title, description, slug, className }) {
  return (
    <Link href={`/services/${slug}`}  className={cl(className, styles.card)} passHref>
      <div className={cl(className, styles.cardIcon)} >
        <Image 
          src={image} 
          width={100} 
          height={100} 
          alt={title}
        />
      </div>
      <h3 className={cl(className, styles.cardTitle)}>{title}</h3>
        <Block value={description} 
        className={cl(className, styles.cardDescription)} />
    </Link>
  );
}
