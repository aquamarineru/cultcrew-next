import React from 'react'
import styles from './styles.module.scss'
import cl from 'classnames'
import { urlFor } from '../../../lib/client';
import Image from 'next/image'
import {  IoMail, IoCallSharp  } from "react-icons/io5";


export default function TeamMember({className, name, position, image, email, phone}) {
  return (
    <div className={cl(className, styles.teamMember)}>
      <Image 
      src={urlFor(image?.asset).url()} 
      alt={name} 
      width={200}
      height={200}
      className={styles.teamMemberImage}
      />
      <h3 className={cl(className, styles.teamMemberName)}>{name}</h3>
      <p className={cl(className, styles.teamMemberPosition)}>{position}</p>
      <div className={cl(className, styles.teamMemberContact)}>
        <a 
        href={`mailto:${email}`}
        className={cl(className, styles.teamMemberContactData)}>
          <IoMail className={styles.teamMemberIcon} />
          {email}</a>
        <a 
        href={`tel:${phone}`}
        className={cl(className, styles.teamMemberContactData)}>
          <IoCallSharp className={styles.teamMemberIcon} />
          {phone}</a>
      </div>
      
    </div>
  )
}
