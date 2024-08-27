import { client } from '../../lib/client';

const buildSitemapXml = async () => {
    const baseUrl = 'https://cultcrew.vercel.app';
    const lastMod = new Date().toISOString();
    
    // Fetch service and news page slugs
    const serviceQuery = `*[_type == "servicesCards"]{ "slug": slug.current }`;
    const newsQuery = `*[_type == "post"]{ "slug": slug.current }`;
    const services = await client.fetch(serviceQuery);
    const newsPosts = await client.fetch(newsQuery);

    const urls = [
        ...services.map(service => ({
            loc: `${baseUrl}/services/${service.slug}`,
            changefreq: 'monthly',
            priority: '0.8'
        })),
        ...newsPosts.map(post => ({
            loc: `${baseUrl}/news/${post.slug}`,
            changefreq: 'weekly',
            priority: '0.6'
        }))
    ];

    // Generate sitemap XML
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls.map(url => `
    <url>
      <loc>${url.loc}</loc>
      <lastmod>${lastMod}</lastmod>
      <changefreq>${url.changefreq}</changefreq>
      <priority>${url.priority}</priority>
    </url>
  `).join('')}
</urlset>`;

    return sitemap;
};

export default async function handler(req, res) {
    try {
        const sitemap = await buildSitemapXml();
        res.setHeader('Content-Type', 'application/xml');
        res.status(200).send(sitemap);
    } catch (error) {
        console.error("Error generating sitemap:", error);
        res.status(500).send("Failed to generate sitemap");
    }
}
