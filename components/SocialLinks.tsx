import Link from 'next/link'
import GitHub from '@/components/GitHub'
import Linkedin from '@/components/Linkedin'
const menuClasses =
  'fixed text-sm z-30 inset-0 bottom-auto md:bottom-0 md:right-auto md:w-1/12 lg:w-1/16 flex items-center justify-center'
export const buttonClasses =
  'flex items-center justify-center p-1 w-7 h-7 md:w-10 md:h-10 text-blue-500 rounded-full bg-white hover:bg-blue-900 hover:text-white'

const Header = () => {
  return (
    <header className={menuClasses}>
      <div className="flex items-center justify-center border-l-2 border-r-2 border-blue-500 bg-blue-500 py-2 px-3 font-mono text-white md:w-full md:flex-col md:border-none md:py-8">
        <Link href="/" className="text-vertical flex items-center justify-center hover:bg-blue-900">
          roadToReact
        </Link>
        <div className="md:border-t-none mx-3 w-12 border-t border-white md:mx-0 md:my-4 md:h-16 md:w-auto md:border-l lg:h-24" />
        <div className="flex space-x-3 md:flex-col md:space-x-0 md:space-y-3">
          <Link href="https://www.linkedin.com/in/sludwikowski/" className={buttonClasses} aria-label="Linkedin">
            <Linkedin className={'w-full'} />
          </Link>
          <Link href="https://github.com/sludwikowski" className={buttonClasses} aria-label="sludwikowski on GitHub">
            <GitHub className={'w-full'} />
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
