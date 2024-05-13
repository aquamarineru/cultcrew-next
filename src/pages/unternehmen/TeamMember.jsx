import React from 'react'
import styles from './styles.module.scss'
import cl from 'classnames'
import { urlFor } from '../../../lib/client';
import Image from 'next/image'


export default function TeamMember({className, name, position, image, email, phone}) {
  return (
    <div className={cl(className, styles.team)}>
      <Image 
      src={urlFor(image).url()} 
      alt={name} 
      width={200}
      height={200}
      />
      <h3>{name}</h3>
      <p>{position}</p>
      <a href={`mailto:${email}`}>{email}</a>
      <a href={`tel:${phone}`}>{phone}</a>
    </div>
  )
}
