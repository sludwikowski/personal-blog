import Image from 'next/image'
import Link from 'next/link'
import SquigglyLines from '@/components/SquigglyLines'

export default function Header() {
  return (
    <header className="xs:flex-row mt-4 flex w-full max-w-7xl flex-col items-center gap-2 border-b border-gray-600 px-2 pb-5 sm:px-4">
      <Link href="/" className="mb-4 flex space-x-2 sm:mb-0">
        <Image alt="header text" src="/road.png" className="h-9 w-9 sm:h-8 sm:w-8" width={24} height={24} />
        <span className={'relative'}>
          <SquigglyLines />
          <h1 className="ml-2 text-xl font-bold tracking-tight sm:text-3xl">roadToReact</h1>
        </span>
      </Link>
    </header>
  )
}
