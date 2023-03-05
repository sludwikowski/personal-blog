import Link from 'next/link'
import SquigglyLines from './SquigglyLines'

function Banner() {
  return (
    <div className="mt-20 flex w-full flex-1 flex-col items-center px-4 pt-8 text-center sm:mt-20">
      <h1 className="font-display mx-auto max-w-4xl text-5xl font-bold tracking-normal text-gray-300 sm:text-7xl">
        Cześć, ja jestem{' '}
        <Link href="/">
          <span className="relative whitespace-nowrap text-blue-600">
            <span className="relative">Szymon</span>
          </span>
        </Link>
        , <br />a to jest:
        <Link href="/">
          <span className={'relative whitespace-nowrap'}>
            <SquigglyLines />
            <strong className="relative text-blue-600"> Road To React</strong>
          </span>
        </Link>
      </h1>
      <h2 className="mx-auto mt-6 max-w-xl text-lg leading-7  text-gray-500 sm:text-gray-400">
        - blog, na którym dzielę się wiedzą o{' '}
        <strong className="text-white underline decoration-[#2563eb] decoration-4">ReactJS</strong> oraz{' '}
        <strong className="text-white underline decoration-[#2563eb] decoration-4">JavaScript</strong>
      </h2>
    </div>
  )
}

export default Banner
