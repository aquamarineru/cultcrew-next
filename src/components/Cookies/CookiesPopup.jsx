import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import cl from 'classnames';
import styles from './styles.module.scss';
import { LiaCookieBiteSolid } from "react-icons/lia";
import Title from '@/components/Title/Title';
import Link from 'next/link';

export default function CookiesPopup({ className }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = Cookies.get('cookie_consent');
    console.log('Cookie Consent:', consent);
    if (!consent) {
      setIsVisible(true);
    } 
  }, []);

  const handleAccept = () => {
    Cookies.set('cookie_consent', 'accepted', { expires: 365 });
    setIsVisible(false);
  };

  const handleDecline = () => {
    Cookies.set('cookie_consent', 'declined', { expires: 365 });
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }
  return (
    <div className={cl(className, styles.cookies)}>
      <div className={cl(className, styles.cookiesHeader)}>
        <LiaCookieBiteSolid className={cl(className, styles.cookiesHeaderIcon)} />
        <Title type="medium" className={cl(className, styles.cookiesHeaderTitle)}>Cookies Einstellungen</Title>
      </div>
      <div className={cl(className, styles.cookiesData)}>
        <p className={cl(className, styles.cookiesDataContent)}>
        Unsere Website verwendet Cookies, um Ihr Nutzererlebnis zu verbessern. Durch die Nutzung unserer Website stimmen Sie der Verwendung von Cookies zu. Weitere Informationen finden Sie in unserer Datenschutzerklärung. <br />
          <Link href="/datenschutz" className={cl(className, styles.cookiesDataLink)}>Mehr erfahren</Link>
        </p>
      </div>
      <div className={cl(className, styles.cookiesDataButtons)}>
        <button
          className={cl(className, styles.cookiesDataButtonsBtn)}
          onClick={handleAccept}>Akzeptieren</button>
        <button
          className={cl(className, styles.cookiesDataButtonsDecline)}
          onClick={handleDecline}>Ablehnen</button>
      </div>
    </div>
  )
}
