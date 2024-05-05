import React from 'react'
import styles from './styles.module.scss'
import cl from 'classnames'
import Title from '@/components/Title/Title'
import Button from '@/components/Button/Button'
import Card from '@/components/Card/Card'


export default function News({className, title, subtitle, newsData}) {
  return (
    <div className={cl(className, styles.news)}>
         <Title type="medium">{title}</Title>
        <p className={cl(className, styles.news, styles.newsText)}>{subtitle}</p>
        <div className={cl(className, styles.newsCard)}>
            {newsData.map((news, index) => {
                return (
                <Card
                    key={index}
                    className={styles.newsCard}
                    image={news.Image.asset.url}
                    title={news.title}
                    subtitle={news.subtitle}
                    link={news.slug.current}
                />
            )})}
        </div>
        <Button 
            href="/news" 
            btnLabel="Alle News anzeigen"
            ariaLabel={News}
            /> 
      
    </div>
  )
}
