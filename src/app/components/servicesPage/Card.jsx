"use client";
import React from 'react';
import cl from 'classnames';
import styles from './styles.module.scss';
import Link from 'next/link';
import Button from '../button/Button';
import Block from '../block/Block';

export default function Card({ title, text, slug, className }) {
    return(
        <div className={cl(className, styles.servicesCard)}>
            <h3 className={cl(className, styles.servicesCardTitle)}>{title} </h3>
            <Block value={text} />
            <Link href={`/services/${encodeURIComponent(slug)}`} 
            passHref
            >
                <Button 
                aria-label="Mehr erfahren"
                btnLabel="Mehr erfahren"
                type="button"
                />
            </Link>
        </div>
    )
}