import React from 'react';
import Image from 'next/image';
import styles from './styles.module.scss';
import cl from 'classnames';
import { urlFor } from '../../../lib/client';
import Block from '@/components/blockContent/Block';
import { IoCheckmarkCircle } from "react-icons/io5";

export default function CompanyHistory({ className, description = [], title }) {
    if (!description || !description.length) {
        return <div>Keine Daten verfügbar.</div>;
    }


    return (
        <div className={cl(styles.about, className, styles.container)}>
            {description.map((item, index) => (
                <div key={index} className={cl(styles.aboutContent)}>
                    {item.aboutImage && (
                        <Image
                            src={urlFor(item.aboutImage?.asset)?.url()}
                            alt={item.aboutImage.alt || title}
                            width={200}
                            height={200}
                            className={styles.aboutContentImage}
                            key={item.aboutImage._key}
                        />
                    )}
                     <Block blocks={item.text}  className={cl(className, styles.text)}
                    /> 
                </div>
            ))}
        </div>
    );
}
