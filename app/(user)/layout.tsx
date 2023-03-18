import { Analytics } from '@vercel/analytics/react'

import SocialLinks from '@/components/Header'
import '../../styles/globals.css'

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
      <body className="min-h-screen bg-[#f1f1f1] text-black transition-colors duration-1000 ease-in-out">
        <div>
          <main>
            <SocialLinks />
            <section>{children}</section>
          </main>
        </div>
        <Analytics />
      </body>
    </html>
  )
}
