import React from 'react'
import { client } from '../../../lib/client'

export default function Datenschutz({data}) {
  console.log(data)
  return (
    <div>
      test
    </div>
  )
}
export async function getStaticProps() {
  try {
    const query = `*[ _type == "datenschutz" ]{
      title,
      subtitle,
      text,
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