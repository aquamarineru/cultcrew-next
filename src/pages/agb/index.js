import React from 'react'
import { client } from '../../../lib/client'
import cl from 'classnames'
import styles from './styles.module.scss'
import Cover from '@/components/Cover/Cover'
import Block from '@/components/blockContent/Block'

export default function AGB({data, className}) {
  console.log(data)
  return (
    <div>
      test
     <Cover 
        //image={data[0].Image.asset.url} 
        title={data[0].title} 
        subtitle={data[0].subtitle} 
        className={cl(className, styles.cover)}
      /> 
        <div className={cl(className, styles.data)}>
        <Block blocks={data[0].text} />
      </div>  
    </div>
  )
}
export async function getStaticProps() {
  try {
    const query = `*[ _type == "agb" ]{
      title,
      subtitle,
      text,
      Image{
        asset->{
          _id,
          url
        },
      },
    }`;
    const data = await client.fetch(query);
    if (!data) {
      return {
        notFound: true,
      };
    }
    return {
      props: {
        data,
      },
      revalidate: 60,
    };
  } catch (err) {
    console.error(err);
    return {
      notFound: true,
    };
  }
}