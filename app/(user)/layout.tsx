import '../../styles/globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={'en'}>
      <body className="bg-[#17181C] text-white">
        <div className="mx-auto flex min-h-screen max-w-7xl flex-col items-center  py-2">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
