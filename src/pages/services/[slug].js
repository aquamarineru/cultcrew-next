import React from 'react';
import { useRouter } from 'next/router';
import { PortableText } from '@portabletext/react';
import cl from 'classnames';
import styles from './styles.module.scss';
import { client, urlFor } from '../../../lib/client';
import Cover from '@/components/Cover/Cover';
import Image from 'next/image';
import Block from '@/components/blockContent/Block';

export default function ServicePage({data, className}) {
    
    const router = useRouter();
    if (router.isFallback) {
        return <div>Loading...</div>;
    }

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
                        <Block blocks={section.body}  />
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