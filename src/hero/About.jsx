import React from 'react'
import Image from 'next/image'
import { GoCheck } from "react-icons/go";
import Button from '../components/Button';

export default function About() {
  return (
    <div className="w-full py-24 flex flex-col items-center justify-center gap-4">
        <div className='flex flex-row items-start justify-between gap-10 w-[1000px] '>
        <Image 
        src="/about.png"
        alt="About"
        width={500}
        height={500}
        />
        <div className='flex flex-col justify-between items-start gap-4 w-[500px]'>
            <div>Die Wahl von Cult Crew  Sicherheitsdiensten bietet zahlreiche Vorteile, darunter:</div>
            <div className='flex flex-row items-center justify-center gap-2'>
                <GoCheck size={30} className='text-primary' />
                <p> <br/> <b>Zuverlässigkeit:</b>  Unser Service garantiert eine        durchgehende Sicherheitsüberwachung und schnelle Reaktionszeiten.</p>
            </div>
            <div className='flex flex-row items-center justify-center gap-2'>
                <GoCheck size={30} className='text-primary' />
                <p> <br/> <b>Zuverlässigkeit:</b>  Unser Service garantiert eine        durchgehende Sicherheitsüberwachung und schnelle Reaktionszeiten.</p>
            </div>
            <div className='flex flex-row items-center justify-center gap-2'>
                <GoCheck size={30} className='text-primary' />
                <p> <br/> <b>Zuverlässigkeit:</b>  Unser Service garantiert eine        durchgehende Sicherheitsüberwachung und schnelle Reaktionszeiten.</p>
            </div>
            <div className='flex flex-row items-center justify-center gap-2'>
                <GoCheck size={30} className='text-primary' />
                <p> <br/> <b>Zuverlässigkeit:</b>  Unser Service garantiert eine        durchgehende Sicherheitsüberwachung und schnelle Reaktionszeiten.</p>
            </div>
        </div>
       
      
    </div>
    <Button href="/unternehmen" btnLabel="Mehr erfahren" /> 
    </div>

    
  )
}
