import { Analytics } from '@vercel/analytics/react'

import '../../styles/globals.css'

import Header from '@/components/Header'
export const metadata = {
  generator: 'Next.js',
  applicationName: 'roadToReact',
  referrer: 'origin-when-cross-origin',
  keywords: ['Next.js', 'React', 'JavaScript', 'Blog', 'Nauka Programowania', 'Junior'],
  authors: [{ name: 'sludwikowski', url: 'https://www.linkedin.com/in/sludwikowski/' }],
  creator: 'Szymon Ludwikowski',
  publisher: 'Szymon Ludwikowski',
  title: 'Road to React',
  description:
    'Cześć, ja jestem Szymon, a to jest: roadToReact - blog, na którym dzielę się wiedzą o ReactJS oraz JavaScript.',
  openGraph: {
    title: 'roadToReact',
    description:
      'Cześć, ja jestem Szymon, a to jest: roadToReact - blog, na którym dzielę się wiedzą o ReactJS oraz JavaScript.',
    url: 'https://roadtoreact.pl',
    siteName: 'Road To React',
    images: [
      {
        url: 'https://github.com/sludwikowski/zdjecia/blob/main/defaultOg.png',
        width: 800,
        height: 600,
      },
      {
        url: 'https://github.com/sludwikowski/zdjecia/blob/main/defaultOg.png',
        width: 1800,
        height: 1600,
        alt: 'roadToReact',
      },
    ],
    locale: 'pl-Pl',
    type: 'website',
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/road.png',
    shortcut: '/road.png',
    apple: '/road.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={'en'} className={'scroll-pt-20 overflow-auto scroll-smooth'}>
      <body className="min-h-screen bg-[#17181C] text-white transition-colors duration-1000 ease-in-out">
        <div className="flex min-h-screen flex-col items-center px-2 py-2">
          <Header />
          <main>{children}</main>
        </div>
        <Analytics />
      </body>
    </html>
  )
}
