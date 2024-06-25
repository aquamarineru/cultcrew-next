import React, { useState, useRef, useEffect } from 'react';
import styles from './styles.module.scss';
import cl from 'classnames';
import Link from 'next/link';
import Button from '@/components/Button/Button';

export default function Form({ className }) {
    const [popup, setPopup] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');
    const [isAgreed, setIsAgreed] = useState(false);

    function hidePopup() {
        setPopup(false);
    }

    const form = useRef();
    function sendEmail(e) {
        e.preventDefault();
        const { name, email, message } = e.target.elements;
        const templateParams = {
            from_name: name.value,
            from_email: email.value,
            message: message.value,
          };
        }


    return (
        <div className={cl(className, styles.contactForm)}>
            <form 
            ref={form} 
            onSubmit={sendEmail} 
            className={styles.contactFormFields}>
                <div className={cl(className, styles.contactFormFieldsWrapper)}>
                    <label>Vorname*</label>
                    <input 
                    type="text" 
                    name="Vorname" 
                    placeholder='Ihr Vorname' 
                    required 
                    className={cl(className, styles.contactFormFieldsInput)} />
                </div>
                <div className={cl(className, styles.contactFormFieldsWrapper)}>
                    <label>Nachname*</label>
                    <input 
                    type="text" 
                    name="Nachname" 
                    placeholder='Ihr Nachname' 
                    required 
                    className={cl(className, styles.contactFormFieldsInput)} />
                </div>
                <div className={cl(className, styles.contactFormFieldsWrapper)}>
                    <label>E-mail*</label>
                    <input 
                    type="email" 
                    name="email" 
                    placeholder='Ihre E-mail-Adresse' 
                    required 
                    className={cl(className, styles.contactFormFieldsInput)} />
                </div>
                <div className={cl(className, styles.contactFormFieldsWrapper)}>
                    <label>Telefon*</label>
                    <input 
                    type="phone" 
                    name="phone" 
                    placeholder='Ihre Telefonnummer' 
                    required 
                    className={cl(className, styles.contactFormFieldsInput)} />
                </div>
                <div className={cl(className, styles.contactFormFieldsWrapper)}>
                    <label>Nachricht*</label>
                    <textarea 
                    name='message' 
                    placeholder='Ihre Nachricht' 
                    required 
                    className={cl(className, styles.contactFormFieldsInput)}></textarea>
                    <div className={cl(className, styles.contactFormAgree)}>
                        <input
                            type="checkbox"
                            id="agree"
                            name="agree"
                            checked={isAgreed}
                            onChange={() => setIsAgreed(!isAgreed)}
                            className={cl(className, styles.contactFormAgreeCheckbox)} />
                        <label htmlFor="agree">
                            Mit dem Absenden des Formulars stimmen Sie unserer Handhabung Ihrer persönlichen Daten zu.
                        </label>
                        <Link
                            href="/datenschutz"
                            className={cl(className, styles.contactFormAgreeLink)}>
                            Hier finden Sie unsere Datenschutzerklärung.
                        </Link>
                    </div>
                </div>
                <Button 
                aria-label="Submit form" 
                btnLabel="Senden" 
                type="submit"
                disabled={!isAgreed}
                />
            </form>
            
        </div>
    );
}
