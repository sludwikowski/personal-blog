import '../../styles/globals.css'

import Head from '@/app/head'
import Header from '@/components/Header'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={'en'} className={'scroll-pt-20 overflow-auto scroll-smooth'}>
      <Head />
      <body className="min-h-screen bg-[#17181C] text-white transition-colors duration-1000 ease-in-out">
        <div className="flex min-h-screen flex-col items-center px-2 py-2">
          <Header />
          <main>{children}</main>
        </div>
      </body>
    </html>
  )
}
