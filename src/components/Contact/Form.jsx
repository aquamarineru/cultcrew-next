import React, { useState, useRef, useEffect } from 'react';
import styles from './styles.module.scss';
import cl from 'classnames';
import emailjs from 'emailjs-com';
import Link from 'next/link';
import Button from '@/components/Button/Button';

export default function Form({ className }) {
  const [popup, setPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [isAgreed, setIsAgreed] = useState(false);
  const [formData, setFormData] = useState({
    Vorname: '',
    Nachname: '',
    from_email: '',
    phone: '',
    message: ''
  });

  const form = useRef();

  useEffect(() => {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_USER_ID);
  }, []);

  function hidePopup() {
    setPopup(false);
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  }

  function isFormValid() {
    return (
      formData.Vorname &&
      formData.Nachname &&
      formData.from_email &&
      formData.phone &&
      formData.message &&
      isAgreed
    );
  }

  function sendEmail(e) {
    e.preventDefault();
    
    emailjs.sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      form.current,
      process.env.NEXT_PUBLIC_EMAILJS_USER_ID
    ).then(
      (result) => {
        setPopupMessage('Nachricht erfolgreich gesendet!');
        setPopup(true);
        form.current.reset();
        setFormData({
          Vorname: '',
          Nachname: '',
          from_email: '',
          phone: '',
          message: ''
        });
        setIsAgreed(false);
      },
      (error) => {
        setPopupMessage('Es ist ein Fehler aufgetreten. Bitte, versuchen Sie es erneut.');
        setPopup(true);
        console.log(error.text);
      }
    );
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
            value={formData.Vorname}
            onChange={handleInputChange}
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
            value={formData.Nachname}
            onChange={handleInputChange}
            className={cl(className, styles.contactFormFieldsInput)}
          />
        </div>
        <div className={cl(className, styles.contactFormFieldsWrapper)}>
          <label>E-mail*</label>
          <input
            type="email"
            name="from_email"
            placeholder="Ihre E-mail-Adresse"
            required
            value={formData.from_email}
            onChange={handleInputChange}
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
            value={formData.phone}
            onChange={handleInputChange}
            className={cl(className, styles.contactFormFieldsInput)}
          />
        </div>
        <div className={cl(className, styles.contactFormFieldsWrapper)}>
          <label>Nachricht*</label>
          <textarea
            name="message"
            placeholder="Ihre Nachricht"
            required
            value={formData.message}
            onChange={handleInputChange}
            className={cl(className, styles.contactFormFieldsInput)}
          ></textarea>
          <div className={cl(className, styles.contactFormAgree)}>
            <input
              type="checkbox"
              id="agree"
              name="agree"
              checked={isAgreed}
              required  
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
          aria-label="Submit form" 
          btnLabel="Senden" 
          type="submit" 
          disabled={!isFormValid()} 
        />
      </form>
      {popup && (
        <div className={cl(className, styles.popup)}>
          <div className={cl(className, styles.popupContent)}>
            <p className={cl(className, styles.popupMessage)}>{popupMessage}</p>
            <button 
              onClick={hidePopup}
              aria-label="Close popup"
              btnLabel="Schließen"
              role="button"
              className={cl(className, styles.popupClose)}
              >Schließen</button>
          </div>
        </div>
      )}
    </div>
  );
}
