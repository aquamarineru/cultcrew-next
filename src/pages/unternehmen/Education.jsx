import React from 'react';
import Image from 'next/image';
import Title from '@/components/Title/Title';
import { urlFor } from '../../../lib/client';
import styles from './styles.module.scss';
import cl from 'classnames';
import Block   from '@/components/blockContent/Block';  


export default function Education({ className, title, text, image }) {

console.log(image)
    return (
        <div className={cl(className, styles.education, styles.container)}>
            <Title type="medium">{title}</Title>
            <div className={cl(className, styles.educationContent)}>
                <div>
                    <Block blocks={text} className={cl(className, styles.text)} />
                </div> 
                {image && (
                    <Image 
                    src={urlFor(image).url()} 
                    alt="education"
                    width={250} 
                    height={400} 
                    className={cl(className, styles.educationImage)}
                />
                )}
            </div>
        </div>
    );
}
