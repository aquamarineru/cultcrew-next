import React from 'react';
import { client } from '../lib/client';
import ServicesPage from '../components/servicesPage/ServicesPage';

export default async function Services() {
    const query = `*[_type == "servicesPage"]{
        title,
        subtitle,
        image{
            asset->{
                _id,
                url
            }
        },
        cards[]->{
            _id,
            title,
            text,
            slug,
            body
        },
        callToAction[]{
            _id,
            title,
            subtitle,
            button,
            link
        }
    }`;

    let data;
    try {
        data = await client.fetch(query);
    } catch (err) {
        console.error("Error fetching data:", err);
        return <div>Error loading services data</div>;
    }

    if (!data || !data.length) {
        return <div>No data available</div>;
    }

    return (
        <div>
            <ServicesPage data={data[0]} />
        </div>
    );
}
