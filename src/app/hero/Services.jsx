"use client";
import React from 'react';
import styles from './styles.module.scss';
import cl from 'classnames';
import Block from '../components/block/Block';
import { SwiperSlide } from 'swiper/react';
import Slider from '../components/slider/Slider';
import ServiceCard from '../components/slider/ServiceCard';
import Button from '../components/button/Button';

const Services = ({ className, title, subtitle, cards }) => {
  return (
    <div className={cl(className, styles.services)}>
      <h2 className={cl(className, styles.servicesTitle)}>{title}</h2>
      <div className={cl(className, styles.servicesDescr)}>
        <Block value={subtitle} c />
      </div>
      <Slider className={cl(className, styles.servicesSlider)}>
        {cards && cards.map((item) => (
          <SwiperSlide key={item._id}>
            <ServiceCard 
              key={item._id}
              image={item.Image.asset.url} 
              title={item.title} 
              description={item.subtitle} 
              slug={item.slug.current} 
            />
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
  );
};

export default Services;
