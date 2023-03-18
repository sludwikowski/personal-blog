import Link from 'next/link'

import SquigglyLines from '@/components/SquigglyLines'
export default function Banner() {
  return (
    <header className="mt-6 flex w-full flex-1 flex-col ">
      <h1 className="font-display max-w-4xl text-5xl font-bold tracking-normal text-black md:text-7xl">
        Cześć, ja jestem{' '}
        <Link href="https://www.linkedin.com/in/sludwikowski/" target={'_blank'}>
          <span className="relative whitespace-nowrap text-blue-600">
            <span className="relative">Szymon</span>
          </span>
        </Link>
        , <br />a to jest:
        <Link href="https://beta.reactjs.org/" target={'_blank'}>
          <span className={'relative whitespace-nowrap'}>
            <SquigglyLines />
            <strong className="relative text-blue-600"> roadToReact</strong>
          </span>
        </Link>
      </h1>
      <h2 className="mt-6 max-w-xl text-lg leading-7  text-gray-900">
        - blog, na którym dzielę się wiedzą o{' '}
        <strong className="underline decoration-[#2563eb] decoration-4">ReactJS</strong> oraz{' '}
        <strong className="underline decoration-[#2563eb] decoration-4">JavaScript</strong>.
      </h2>
    </header>
  )
}
