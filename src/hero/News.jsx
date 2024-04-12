import React from 'react'
import styles from './styles.module.scss'
import cl from 'classnames'
import Title from '@/components/Title/Title'
import Button from '@/components/Button/Button'
import Card from '@/components/Card/Card'

const newsData = [
    {
        image: '/image1.webp',
        title: 'Neue Sicherheitsstandards',
        text: 'Wir setzen neue Maßstäbe in der Sicherheitstechnik und bieten Ihnen innovative Lösungen für Ihre Sicherheit.',
        link: '/news/news1'
    },
    {
        image: '/image2.webp',
        title: 'Sicherheits',
        text: 'Wir setzen neue Maßstäbe in der Sicherheitstechnik und bieten Ihnen innovative Lösungen für Ihre Sicherheit.',
        link: '/news/news2'
    },
    {
        image: '/image3.webp',
        title: 'Neue Sicherheitsstandards',
        text: 'Wir setzen neue Maßstäbe in der Sicherheitstechnik und bieten Ihnen innovative Lösungen für Ihre Sicherheit.',
        link: '/news/news3'
    }
]

export default function News({className}) {
  return (
    <div className={cl(className, styles.news)}>
        <Title type="medium">Aktuelle News</Title>
        <p className={cl(className, styles.news, styles.newsText)}>Bleiben Sie auf dem Laufenden</p>
        <div className={cl(className, styles.newsCard)}>
            {newsData.map((news, index) => (
                <Card
                    key={index}
                    className={styles.newsCard}
                    image={news.image}
                    title={news.title}
                    text={news.text}
                    link={news.link}
                />
            ))}
        </div>
      
    </div>
  )
}
