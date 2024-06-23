import React from 'react'
import styles from './styles.module.scss'
import cl from 'classnames'
import Title from '@/components/Title/Title'
import Block from '@/components/blockContent/Block'
import Link from 'next/link'

export default function Job({title, description, className}) {
  console.log(description)

  return (
    <div className={cl(className, styles.job)}>
      <Title type="medium">{title}</Title>
      {/* <div className={cl(className, styles.jobContent)}>
          <Block blocks={description} />
        
      </div> */}
      <Block
      blocks={description}
      className={cl(className, styles.jobContent)}
      />
    </div>
  )
}
