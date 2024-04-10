import Link from "next/link"

export default function Button({href, btnLabel, ariaLabel}) {
  return (
  <Link href={href} className='bg-primary text-white px-8 py-4 rounded-full transition duration-300 ease-in-out lg:text-xl hover:bg-button' aria-label={ariaLabel}>
        {btnLabel}
    </Link>
  )
}