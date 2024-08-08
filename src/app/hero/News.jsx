"use client";
import React from 'react';
import styles from './styles.module.scss';
import cl from 'classnames';
import Block from '../components/block/Block';
import NewsCard from '../components/newsCard/NewsCard';
import Button from '../components/button/Button';

export default function News({ className, title, subtitle, posts }) {
    return(
        <div className={cl(className, styles.news)}>
            <h2 className={cl(className, styles.servicesTitle)}>{title} </h2>
            <div className={cl(className, styles.servicesDescr)}>
          {subtitle && Array.isArray(subtitle) && subtitle.length > 0 ? (
            <Block value={subtitle} />
          ) : (
            <p></p>
          )}
        </div>
        <div className={cl(className, styles.newsCard)}>
            {posts && posts.map((item, index) => (
                <NewsCard 
                key={index}
                title={item.title} 
                subtitle={item.subtitle} 
                slug={`${item.slug.current}`}
                image={item.image}
                />
            ))}
        </div>
        <Button 
        href="/news" 
        btnLabel="Alle News anzeigen"
        ariaLabel={News}
        /> 
        </div>
    )
}