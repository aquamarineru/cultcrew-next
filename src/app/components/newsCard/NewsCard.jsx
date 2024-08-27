"use client";
import React from 'react';
import styles from './styles.module.scss';
import cl from 'classnames';
import Image from 'next/legacy/image';
import Link from 'next/link';
import { urlFor } from '../../lib/client';
import Block from '../block/Block';

export default function NewsCard({ className, title, subtitle, slug, image }) {
    return(
        <div className={cl(className, styles.card)}>
            <Link href={`/news/${encodeURIComponent(slug)}`} className={cl(className, styles.cardLink)}>
                <Image
                src={urlFor(image).url()}
                alt={title}
                width={300}
                height={250}
                loading="lazy"
                className={styles.cardImage}
                /> 
                <div className={styles.cardContent}>
                    <h3 className={styles.cardTitle}>{title} </h3>
                    <Block value={subtitle} />
                    <button className={cl(className, styles.cardButton)} aria-label='mehr lesen'>Mehr lesen
                    </button>
                </div>
            </Link>

        </div>
    )
}