import React from 'react';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import Title from '@/components/Title/Title';
import { urlFor } from '../../../lib/client';
import styles from './styles.module.scss';

export default function Education({ className, title, text, image }) {
    const components = {
        block: {
            normal: ({ children }) => <p>{children}</p>,
            h3: ({ children }) => <h3>{children}</h3>,
            blockquote: ({ children }) => <blockquote>{children}</blockquote>,
            bullet: ({ children }) => <ul><li>{children}</li></ul>,  // This is unconventional
        },
        list: {
            bullet: ({ children }) => <ul className={styles.mtXl}>{children}</ul>,
            number: ({ children }) => <ol className={styles.mtLg}>{children}</ol>,
            checkmarks: ({ children }) => <ol className={styles.mAutoTextLg}>{children}</ol>,
        },
        listItem: {
            bullet: ({ children }) => <li style={{ listStyleType: 'disclosure-closed' }}>{children}</li>,
            checkmarks: ({ children }) => <li>✅ {children}</li>,
        },
    };

    return (
        <div className={className}>
            <Title type="medium">{title}</Title>
            <PortableText value={text} components={components} />
            <Image 
                src={urlFor(image).url()} 
                alt="education"
                width={250} 
                height={400} 
            />
        </div>
    );
}
