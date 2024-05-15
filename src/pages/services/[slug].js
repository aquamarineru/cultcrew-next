import React from 'react';
import { useRouter } from 'next/router';
import { PortableText } from '@portabletext/react';
import cl from 'classnames';
import styles from './styles.module.scss';
import { client, urlFor } from '../../../lib/client';
import Cover from '@/components/Cover/Cover';
import Image from 'next/image';

export default function ServicePage({data, className}) {
    console.log(data);  
    const router = useRouter();
    if (router.isFallback) {
        return <div>Loading...</div>;
    }

    const components = {
        block: {
            normal: ({ children }) => <p className={cl(className, styles.textNormal)}>{children}</p>,
            h3: ({ children }) => <h3>{children.map(child => child.text)}</h3>,
            blockquote: ({ children }) => <blockquote className={cl(className, styles.textQuote)}>{children}</blockquote>,
            bullet: ({ children }) => <ul className={cl(className, styles.textBullet)}><li className={cl(className, styles.textBulletItem)}>{children}</li></ul>,
            default: ({ children }) => <div>{children}</div>,
        },
        types: {
            image: ({ value }) => {
              return <div>IMAGE: {value}</div>;
            }
          },
        list: {
            bullet: ({ children }) => <ul className={cl(className, styles.textBullet)}>{children}</ul>,
            number: ({ children }) => <ol className={cl(className, styles.textNumber)}>{children}</ol>,
            checkmarks: ({ children }) => <ol className={cl(className, styles.textCheck)}>{children}</ol>,
        },
        listItem: {
            bullet: ({ children }) => <li>{children}</li>,
            number: ({ children }) => <li>{children}</li>,
        },
        marks: {
            strong: ({ children }) => <strong className={cl(className, styles.textStrong)}>{children}</strong>,
            em: ({ children }) => <em className={cl(className, styles.textEm)}>{children}</em>,
            link: ({ value, children }) => {
                const target = (value?.href || '').startsWith('http') ? '_blank' : undefined;
                return (
                    <a href={value?.href} target={target} rel={target === '_blank' ? 'noopener noreferrer' : undefined} className={cl(className, styles.textLink)}>
                        {children}
                    </a>
                );
            },
        },
    };

    return (
        <div>
            <Cover
                title={data.title}
                image={data.image} 
                subtitle={data.subtitle}
            />
            <div>
                {data.body.map((section, index) => (
                    <div key={section._id || index}>
                        <PortableText value={section.body} components={components} />
                    </div>
                ))}
            </div>
        </div>
    );
}


export async function getStaticPaths() {
    const query = '*[_type == "servicesCards"]';
    const cards = await client.fetch(query);
    const paths = cards.map(card => ({
        params: { slug: card.slug.current },
    }));
  
    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const query = `*[_type == "servicesCards" && slug.current == $slug][0]{
        _id,
        title,
        subtitle,
        image{
            asset->{
                _id,
                url
            }
        },
        body,
        slug
    }`;
    const data = await client.fetch(query, { slug: params.slug });

    return {
        props: {
            data,
        },
    };
}