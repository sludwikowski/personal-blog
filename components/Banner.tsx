import React from 'react'

function Banner() {
  return (
    <div className="mb-10 flex flex-col justify-between px-10 py-5 font-bold lg:flex-row lg:space-x-5">
      <div>
        <h1 className="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Road to React</h1>
        <p className="mt-4 text-gray-500">
          Cześć, nazywam się{' '}
          <strong className="underline decoration-[#F7AB0A] decoration-4">Szymon Ludwikowski </strong>, <br /> a to jest{' '}
          <strong className="underline decoration-[#F7AB0A] decoration-4">Road To React</strong> - blog, na którym
          dzielę się wiedzą o ReactJS oraz JavaScript.
        </p>
      </div>
      <p className="mt-5 max-w-sm text-gray-400 md:mt-2">
        New product features | The latest in technology | The weekly debugging nightmares & More!
      </p>
    </div>
  )
}

export default Banner
