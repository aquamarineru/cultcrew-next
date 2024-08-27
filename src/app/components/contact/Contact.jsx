"use client";
import React from 'react'
import cl from 'classnames'
import styles from './styles.module.scss'
import Image from 'next/legacy/image';
import { urlFor } from '../../lib/client';
import { IoLocationSharp, IoMail, IoCallSharp  } from "react-icons/io5";

export default function Contact({ className, title, subtitle, image, logo, address, phone, email }) {
  return (
    <div className={cl(className, styles.contact)}>
      <div className={cl(className, styles.contactLeft)}>
        <h3 className={cl(className, styles.contactLeftTitle)}>{title}</h3>
        <p className={cl(className, styles.contactLeftText)}> {subtitle}</p>
        {image && image.asset && (
          <Image
            src={urlFor(image).url()}
            alt={title}
            width={500}
            height={500}
            className={cl(className, styles.contactRightImage)}
          />
        )}
      </div>
      <div className={cl(className, styles.contactRight)}>
        <div className={cl(className, styles.contactRightLogo)}>
        {logo && logo.asset && (
          <div className={cl(className, styles.contactRightLogo)}>
            <Image
              src={urlFor(logo).url()}
              alt="logo"
              width={140}
              height={70}
            />
          </div>
        )}
        </div>
            <div className={cl(className, styles.contactRightData)}>
                <div className={cl(className, styles.contactRightDataText)}>
                    <IoLocationSharp size={30} />
                    {address} 
                    </div>
                <a
                  href={`tel:${phone}`}
                 className={cl(className, styles.contactRightDataText)}>
                    <IoCallSharp />
                    {phone}
                    </a>
                <a
                href={`mailto:${email}`}
                 className={cl(className, styles.contactRightDataText)}>
                    <IoMail />
                    {email}
                </a>
            </div>
        </div>
    </div>
  )
}
