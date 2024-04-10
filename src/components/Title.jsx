import React from 'react'
import Button from './Button'

export default function Title() {
  return (
    <div className='absolute right-10 top-1/3'>
        <div className="w-[500px] text-text-light ">
          <h1 className="text-4xl bold font-bold mb-8 z-10">
            Lösungen für Ihre Sicherheit - <br />Mit Expertise und Erfahrung
          </h1>
          <p className="w-[450px] lg:text-xl mb-16">Unser Team aus Fachleuten bringt jahrelange Erfahrung in jeder Situation mit. Für nahezu jede Herausforderung finden wir eine Lösung – diskret, professionell und zuverlässig.</p>
          <Button href="/kontakt" btnLabel="Kontaktieren Sie uns" />
        </div>
      
    </div>
  )
}
