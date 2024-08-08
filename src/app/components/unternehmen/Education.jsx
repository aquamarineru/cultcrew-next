"use client";
import React from 'react';
import styles from './styles.module.scss';
import cl from 'classnames';
import Image from 'next/legacy/image';
import { urlFor } from '../../lib/client';
import Block from '../block/Block';

export default function Education({ className, title, text, image }) {
    return (
        <div className={cl(className, styles.education, styles.container)}>
            <h2 type="medium">{title}</h2>
            <div className={cl(className, styles.educationContent)}>
                <div>
                    <Block value={text} className={cl(className, styles.text)} />
                </div> 
                {image && (
                <div className={cl(className, styles.educationWrapper)}>
                    <Image 
                    src={urlFor(image).url()} 
                    alt="education"
                    width={250} 
                    height={400} 
                    priority
                    className={styles.educationWrapperImage}
                    />
                </div>
                )}
            </div>
        </div>
    );
}