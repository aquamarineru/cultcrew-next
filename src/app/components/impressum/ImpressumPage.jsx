"use client";
import React from 'react';
import cl from 'classnames';
import Cover from '../cover/Cover';
import Block from '../block/Block';
import styles from './styles.module.scss';

export default function ImpressumPage({ data, className }) {
  return (
    <div>
      <Cover
         title={data[0].title}
         subtitle={data[0].subtitle}
         image={data[0].Image}
      />
      <div className={cl(className, styles.data)}>
        {data[0].text.map((block, index) => (
          <Block key={index} value={block} /> 
        ))}
      </div>
    </div>
  );
}
