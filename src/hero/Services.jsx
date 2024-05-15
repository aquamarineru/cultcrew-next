import React from 'react';
import styles from './styles.module.scss'
import cl from 'classnames'
import { SwiperSlide } from 'swiper/react';

import Title from '@/components/Title/Title'
import Slider from '../components/Slider/Slider'
import Cards from '../components/Slider/Cards'
import Button from '../components/Button/Button'

const Services = ({ className, title, subtitle, cards=[] }) => {
    console.log(cards)
  return (
    <div className={cl(className, styles.services)}>
        <Title type="medium">{title}</Title>
        <h3 className={cl(className, styles.servicesDescr)}>
                {subtitle}
        </h3>  
        <Slider>
            {cards && cards.map((item) => (
                <SwiperSlide key={item._id}>
                    <Cards 
                    image={item.Image.asset.url} 
                    title={item.title} 
                    description={item.subtitle}
                    slug={item.slug.current} />
                </SwiperSlide>
            ))}
        </Slider>
        <div className={cl(className, styles.servicesBtn)}>
            <Button 
            href="/services" 
            btnLabel="Unsere Services"
            ariaLabel="Unsere Services anzeigen"
            />
        </div>
        
      
    </div>
  )
}
export default Services


