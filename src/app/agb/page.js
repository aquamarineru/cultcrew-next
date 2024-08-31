
import React from 'react';
import { client } from '../lib/client';
import AgbPage from '../components/agb/AgbPage';
export const revalidate = 60;
export default async function AGB() {
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
    return <div>Not Found</div>; 
  }

  return (
    <div>
      <AgbPage data={data} />
    </div>
  );
}
