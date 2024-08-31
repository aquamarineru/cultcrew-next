
import React from 'react';
import { client } from '../lib/client';
import DatenschutzPage from '../components/datenschutz/DatenschutzPage';
export const revalidate = 60;
export default async function Datenschutz() {
  const query = `*[ _type == "datenschutz" ]{
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
      <DatenschutzPage data={data} />
    </div>
  );
}
