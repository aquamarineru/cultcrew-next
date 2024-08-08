
import React from 'react';
import { client } from '../lib/client';
import ImpressumPage from '../components/impressum/ImpressumPage';
export const revalidate = 60;
export default async function Impressum() {
  const query = `*[ _type == "impressum" ]{
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
      <ImpressumPage data={data} />
    </div>
  );
}
