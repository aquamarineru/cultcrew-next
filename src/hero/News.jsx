import React from 'react'
import styles from './styles.module.scss'
import cl from 'classnames'
import Title from '@/components/Title/Title'
import Button from '@/components/Button/Button'
import Card from '@/components/Card/Card'
import Block from '@/components/blockContent/Block'


export default function News({className, title, subtitle, posts}) {

  return (
    <div className={cl(className, styles.news)}>
      <Title type="medium">{title}</Title>
      <div className={cl(className, styles.coverText)}>
          {subtitle && Array.isArray(subtitle) && subtitle.length > 0 ? (
            <Block blocks={subtitle} />
          ) : (
            <p></p>
          )}
        </div>
      <div className={cl(className, styles.newsCard)}>
         {posts.map((post, index) => {
          return (
            <Card
              key={index}
              className={styles.newsCard}
              image={post.image}
              title={post.title}
              subtitle={post.subtitle}
              link={post.slug.current}
            />
          )
        })} 
      </div>
      <Button 
      href="/news" 
      btnLabel="Alle News anzeigen"
      ariaLabel={News}
      /> 
    </div>
  )
}
