import React, { useState, useRef } from 'react';
import styles from './styles.module.scss';
import cl from 'classnames';
import Link from 'next/link';
import Button from '@/components/Button/Button';

export default function Form({ className }) {
  const [popup, setPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [isAgreed, setIsAgreed] = useState(false);
  const form = useRef();

/*   const sendEmail = async (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const data = Object.fromEntries(formData.entries());

    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (response.ok) {
      setPopupMessage('Email sent successfully!');
    } else {
      setPopupMessage(`Error: ${result.message}`);
    }
    setPopup(true);
  }; */

  const sendEmail = () => {
    setLoading(true)
    fetch('/api/emails',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      /* body: JSON.stringify({
        name: form.current[0].value,
        surname: form.current[1].value,
        email: form.current[2].value,
        phone: form.current[3].value,
        message: form.current[4].value,
      }), */
    })
    .then(response => response.json())
    .then(data => setResult(data))
    .catch(error => setResult(error))
    .finally(() => setLoading(false))
  }
  return (
    <div className={cl(className, styles.contactForm)}>
      <form ref={form} onSubmit={sendEmail} className={styles.contactFormFields}>
        <div className={cl(className, styles.contactFormFieldsWrapper)}>
          <label>Vorname*</label>
          <input
            type="text"
            name="Vorname"
            placeholder="Ihr Vorname"
            required
            className={cl(className, styles.contactFormFieldsInput)}
          />
        </div>
        <div className={cl(className, styles.contactFormFieldsWrapper)}>
          <label>Nachname*</label>
          <input
            type="text"
            name="Nachname"
            placeholder="Ihr Nachname"
            required
            className={cl(className, styles.contactFormFieldsInput)}
          />
        </div>
        <div className={cl(className, styles.contactFormFieldsWrapper)}>
          <label>E-mail*</label>
          <input
            type="email"
            name="email"
            placeholder="Ihre E-mail-Adresse"
            required
            className={cl(className, styles.contactFormFieldsInput)}
          />
        </div>
        <div className={cl(className, styles.contactFormFieldsWrapper)}>
          <label>Telefon*</label>
          <input
            type="phone"
            name="phone"
            placeholder="Ihre Telefonnummer"
            required
            className={cl(className, styles.contactFormFieldsInput)}
          />
        </div>
        <div className={cl(className, styles.contactFormFieldsWrapper)}>
          <label>Nachricht*</label>
          <textarea
            name="message"
            placeholder="Ihre Nachricht"
            required
            className={cl(className, styles.contactFormFieldsInput)}
          ></textarea>
          <div className={cl(className, styles.contactFormAgree)}>
            <input
              type="checkbox"
              id="agree"
              name="agree"
              checked={isAgreed}
              onChange={() => setIsAgreed(!isAgreed)}
              className={cl(className, styles.contactFormAgreeCheckbox)}
            />
            <label htmlFor="agree">
              Mit dem Absenden des Formulars stimmen Sie unserer Handhabung Ihrer persönlichen Daten zu.
            </label>
            <Link href="/datenschutz" className={cl(className, styles.contactFormAgreeLink)}>
              Hier finden Sie unsere Datenschutzerklärung.
            </Link>
          </div>
        </div>
        <Button 
        onClick={sendEmail}
        aria-label="Submit form" 
        btnLabel="Senden" 
        type="submit" 
        disabled={!isAgreed} />
      </form>
      {popup && (
        <div className={styles.popup}>
          <p>{popupMessage}</p>
          <button onClick={() => setPopup(false)}>Close</button>
        </div>
      )}
    </div>
  );
}
