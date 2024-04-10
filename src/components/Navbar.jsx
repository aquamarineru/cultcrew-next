import Link from 'next/link';

export default function Navigation() {

  return (
    <div className="flex justify-center items-center h-screen lg:h-auto">
      <nav className='flex flex-col lg:flex-row items-center gap-4 lg:gap-8 mb-5 lg:mb-0 lg:text-xl'>
        <Link href="/" passHref className='hover:text-primary'>Startseite</Link>
        <Link href="/services" passHref className='hover:text-primary'>Unsere Services</Link>
        <Link href="/unternehmen" passHref className='hover:text-primary'>Das Unternehmen</Link>
        <Link href="/news" passHref className='hover:text-primary'>News</Link>
        <Link href="/kontakt" passHref className='hover:text-primary'>Kontakt</Link>
      </nav>
    </div>
  )
}
