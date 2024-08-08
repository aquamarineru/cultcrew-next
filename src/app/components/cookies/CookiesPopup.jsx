"use client";
import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import cl from 'classnames';
import styles from './styles.module.scss';
import { LiaCookieBiteSolid } from "react-icons/lia";
import Link from 'next/link';

export default function CookiesPopup({ className = '' }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = Cookies.get('cookie_consent');
    if (!consent) {
      setIsVisible(true);
    }

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        if (!Cookies.get('cookie_consent')) {
          setIsVisible(true);
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  const handleAccept = () => {
    Cookies.set('cookie_consent', 'accepted', { expires: 365, sameSite: 'Lax', secure: true });
    setIsVisible(false);
  };

  const handleDecline = () => {
    Cookies.set('cookie_consent', 'declined', { expires: 365, sameSite: 'Lax', secure: true });
    Cookies.remove('sanitySession');
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className={cl(className, styles.cookies)}>
      <div className={cl(styles.cookiesHeader)}>
        <LiaCookieBiteSolid className={cl(styles.cookiesHeaderIcon)} />
        <h2 type="medium" className={cl(styles.cookiesHeaderTitle)}>Cookies Einstellungen</h2>
      </div>
      <div className={cl(styles.cookiesData)}>
        <p className={cl(styles.cookiesDataContent)}>
          Unsere Website verwendet Cookies, um Ihr Nutzererlebnis zu verbessern. Durch die Nutzung unserer Website stimmen Sie der Verwendung von Cookies zu. Weitere Informationen finden Sie in unserer Datenschutzerklärung. <br />
          <Link href="/datenschutz" className={cl(styles.cookiesDataLink)}>Mehr erfahren</Link>
        </p>
      </div>
      <div className={cl(styles.cookiesDataButtons)}>
        <button
          className={cl(styles.cookiesDataButtonsBtn)}
          onClick={handleAccept}>Akzeptieren</button>
        <button
          className={cl(styles.cookiesDataButtonsDecline)}
          onClick={handleDecline}>Ablehnen</button>
      </div>
    </div>
  );
}
