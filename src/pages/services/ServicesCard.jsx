import React from 'react'
import styles from './styles.module.scss'
import cl from 'classnames'
import Link from 'next/link'
import Block from '@/components/blockContent/Block'
import Button from '@/components/Button/Button'

export default function ServicesCard({ className, title, text, slug}) {

  return (
    <div>
      <div className={cl(className, styles.services)}>
            <div  className={cl(className, styles.servicesCard)}>
                <h3 className={cl(className, styles.servicesTitle)}>{title}</h3>
                <Block blocks={text} className={cl(className, styles.servicesBlock)} />
                <div className={cl(className, styles.servicesButton)}>
                  <Link href={`/services/${encodeURIComponent(slug)}`} passHref>
                    <Button 
                    aria-label="Mehr erfahren"
                    btnLabel="Mehr erfahren"
                    type="button"
                    />
                  </Link>
                </div>
                
            </div>
    </div>
    </div>
  )
}
