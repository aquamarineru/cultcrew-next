import React from 'react'
import Image from 'next/image'
import { GoCheck } from "react-icons/go";
import Button from '../components/Button/Button';
import styles from './styles.module.scss'
import cl from 'classnames'

export default function About({className}) {
  return (
    <div className={cl(className, styles.about)}>
        <div className={cl(className, styles.aboutContent)}>
            <Image 
            src="/about.png"
            alt="About"
            width={500}
            height={500}
            className={cl(className, styles.aboutImage)}
            />
        <div className={cl(className, styles.aboutText)}>
            <h3 className={cl(className, styles.aboutTitle)}>Die Wahl von Cult Crew  Sicherheitsdiensten bietet zahlreiche Vorteile, darunter:</h3>
            <div className={cl(className, styles.aboutTextCheck)}>
                <GoCheck size={30} className='text-primary' />
                <p> <br/> <b>Zuverlässigkeit:</b>  Unser Service garantiert eine        durchgehende Sicherheitsüberwachung und schnelle Reaktionszeiten.</p>
            </div>
            <div className={cl(className, styles.aboutTextCheck)}>
                <GoCheck size={30} className='text-primary' />
                <p> <br/> <b>Zuverlässigkeit:</b>  Unser Service garantiert eine        durchgehende Sicherheitsüberwachung und schnelle Reaktionszeiten.</p>
            </div>
            <div className={cl(className, styles.aboutTextCheck)}>
                <GoCheck size={30} className='text-primary' />
                <p> <br/> <b>Zuverlässigkeit:</b>  Unser Service garantiert eine        durchgehende Sicherheitsüberwachung und schnelle Reaktionszeiten.</p>
            </div>
            <div className={cl(className, styles.aboutTextCheck)}>
                <GoCheck size={30} className='text-primary' />
                <p> <br/> <b>Zuverlässigkeit:</b>  Unser Service garantiert eine        durchgehende Sicherheitsüberwachung und schnelle Reaktionszeiten.</p>
            </div>
        </div>
    </div>
    <Button 
    href="/unternehmen" 
    btnLabel="Mehr erfahren"
    ariaLabel={About} /> 
    </div>

    
  )
}
