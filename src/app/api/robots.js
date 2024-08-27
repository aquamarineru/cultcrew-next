export default function robots() {
    return {
      rules: {
        userAgent: '*',
        allow: '/',
        disallow: '/private/',
      },
      sitemap: 'https://cultcrew.vercel.app/sitemap.xml',
    }
  }