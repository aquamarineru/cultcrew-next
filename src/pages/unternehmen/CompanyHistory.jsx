import React from 'react';
import Image from 'next/image';
import styles from './styles.module.scss';
import cl from 'classnames';
import { urlFor } from '../../../lib/client';
import BlockContent from '@sanity/block-content-to-react';

export default function CompanyHistory({ className, description, title }) {
    const serializers = {
        types: {
            block: (props) => {
                switch (props.node.style) {
                case 'h3':
                        return <h3 className={cl(className, styles.aboutTextTitle)}>{props.children}</h3>;
                case 'h4':
                        return <h4 className={cl(className, styles.aboutTextSubtitle)}>{props.children}</h4>;
                default:
                    return <p className={cl(styles.companyText)}>{props.children}</p>;
                }
            }
        }
    };

    return (
        <div>
            {description.map((item, index) => (
                <div key={index} className={cl(className, styles.companyHistoryItem)}>
                    <BlockContent 
                        blocks={item.text} 
                        projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
                        dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
                        className={styles.companyText} 
                        serializers={serializers}
                    />
                    {item.aboutImage && (
                        <Image
                            src={urlFor(item.aboutImage.asset).url()}
                            alt={item.aboutImage.alt || title}
                            width={200}
                            height={200}
                        />
                    )}
                </div>
            ))}
        </div>
    );
}
