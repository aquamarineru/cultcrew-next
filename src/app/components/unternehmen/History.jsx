"use client";
import React from 'react';
import styles from './styles.module.scss';
import cl from 'classnames';
import { urlFor } from '../../lib/client';
import Image from 'next/legacy/image';
import Block from '../block/Block';

export default function History({ description, className }) {
    return (
        <div className={cl(className, styles.history)}>
            {description.map((item, index) => (
                <div key={item._key || index} className={styles.historyContent}>
                    {item.aboutImage && (
                        <div className={styles.historyContentImage}>
                            <Image
                                src={urlFor(item.aboutImage).url()}
                                alt={item.aboutImage.alt || 'History Image'}
                                width={300}
                                height={300}
                                quality={80}
                            />
                        </div>
                    )}

                    <div>
                        {item.title && <h2 className={styles.historyTitle}>{item.title}</h2>}
                        {item.text && (
                            <div className={styles.historyContentText}>
                                <Block value={item.text} />
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}
