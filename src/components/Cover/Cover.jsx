import React from 'react';
import styles from './styles.module.scss';
import cl from 'classnames';
import Image from "next/legacy/image";
import Title from '@/components/Title/Title';
import Button from '@/components/Button/Button';
import { urlFor } from '../../../lib/client';
import Block from '@/components/blockContent/Block';

export default function Cover({ className, image, title, subtitle, btnLabel, href, ariaLabel, date, timeToRead }) {

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
          {title}
        </Title>
        <div className={cl(className, styles.coverText)}>
          {subtitle && Array.isArray(subtitle) && subtitle.length > 0 ? (
            <Block blocks={subtitle} />
          ) : (
            <p>No subtitle available</p>
          )}
        </div>
        {
          date && timeToRead &&
          <div className={cl(className, styles.coverPost)}>
            <p> Datum der Publikation : {date}</p>
            <p>Lesenzeit :  {timeToRead} </p>
          </div>
        }
        {btnLabel && href && ariaLabel &&
          <Button
            href={href}
            ariaLabel={ariaLabel}
            btnLabel={btnLabel}
          />
        }
      </div>
    </div>
  );
}
