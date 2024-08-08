"use client";
import React from 'react'
import styles from './styles.module.scss'
import cl from 'classnames'
import Block from '../block/Block'

export default function Job({title, description, className}) {


  return (
    <div className={cl(className, styles.job)}>
      <h2 type="medium">{title}</h2>
      <Block
      value={description}
      className={cl(className, styles.jobContent)}
      />
    </div>
  )
}
