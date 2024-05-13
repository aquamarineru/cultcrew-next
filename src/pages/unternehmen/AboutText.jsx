import React from 'react';
import Image from 'next/image';
import styles from './styles.module.scss';
import cl from 'classnames';
import { urlFor } from "../../../lib/client";
import BlockContent from '@sanity/block-content-to-react';

export default function AboutText({ className, aboutBlock, image }) {
    console.log(aboutBlock);
    const serializers = {
        types: {
            block: (props) => {
                switch (props.node.style) {
                    case 'h3':
                        return <h3 className={cl(className, styles.aboutTextTitle)}>{props.children}</h3>;
                    case 'h4':
                        return <h4 className={cl(className, styles.aboutTextSubtitle)}>{props.children}</h4>;
                    default:
                        return <p className={cl(className, styles.aboutText)}>{props.children}</p>;
                }
            },
            images: ({ node }) => {
                if (node.asset) {
                    return (
                        <Image 
                            src={urlFor(node.asset).url()}
                            alt={node.alt}
                            width={node.asset.metadata.dimensions.width}
                            height={node.asset.metadata.dimensions.height}
                        />
                    );
                }
                return null;
            },
            marks: {
                strong: ({ children }) => <strong className={styles.aboutTextStrong}>{children}</strong>,
                em: ({ children }) => <em className={styles.aboutTextItalic}>{children}</em>,
                underline: ({ children }) => <u className={styles.aboutTextUnderline}>{children}</u>,
                'strike-through': ({ children }) => <s>{children}</s>
            },
        }
    };

    return (
        <div className={cl(className, styles.about)}>
            {aboutBlock.map((about, index) => (
                <React.Fragment key={about._key || index}>
                    <BlockContent
                        blocks={about.text}
                        projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
                        dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
                        serializers={serializers}
                        className={index % 2 === 0 ? styles.textFirst : styles.textSecond}
                    />
                    {about.aboutImage && (
                        <Image
                            src={urlFor(about.aboutImage.asset).url()}
                            alt={about.aboutImage.alt || 'About section image'}
                            width={500}
                            height={500}
                            className={styles.coverImage}
                        />
                    )}
                </React.Fragment>
            ))}
        </div>
    );
}
