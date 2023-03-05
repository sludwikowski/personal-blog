import '../../styles/globals.css'

import Head from '@/app/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={'en'}>
      <Head />
      <body className="bg-[#17181C] text-white">
        <div className="px-auto mx-auto flex min-h-screen max-w-7xl flex-col items-center py-2">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
