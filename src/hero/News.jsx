import React from 'react'
import styles from './styles.module.scss'
import cl from 'classnames'
import Title from '@/components/Title/Title'
import Button from '@/components/Button/Button'

const newsData = [
    {
        image: '/news1.jpg',
        title: 'Neue Sicherheitsstandards',
        text: 'Wir setzen neue Maßstäbe in der Sicherheitstechnik und bieten Ihnen innovative Lösungen für Ihre Sicherheit.',
        link: '/news1'
    },
    {
        image: '/news2.jpg',
        title: 'Sicherheits',
        text: 'Wir setzen neue Maßstäbe in der Sicherheitstechnik und bieten Ihnen innovative Lösungen für Ihre Sicherheit.',
        link: '/news2'
    },
    {
        image: '/news3.jpg',
        title: 'Neue Sicherheitsstandards',
        text: 'Wir setzen neue Maßstäbe in der Sicherheitstechnik und bieten Ihnen innovative Lösungen für Ihre Sicherheit.',
        link: '/news3'
    }
]

export default function News({className}) {
  return (
    <div className={cl(className, styles.news)}>
        <Title type="medium">Aktuelle News</Title>
        <p className={cl(className, styles.news, styles.newsText)}>Bleiben Sie auf dem Laufenden</p>
      
    </div>
  )
}
