import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from './theme-provider'

import Head from 'next/head'

const inter = Inter({ 
  weight: ['100', '200', '300', '600', '400', '700', '900'],
  subsets: ['latin'] 
})

export const metadata = {
  title: "Teleport - Comming soon | Official wesite",
  description: 'Teleport is a logistics company offering freight forwarding services worldwide. This page is soon to be seen as the official webpage of the company.',
  openGraph: {
    locale: 'en_US',
    type: 'website',
    title: "Teleport - Coming soon | Official website",
    description: 'Teleport is a logistics company offering freight forwarding services worldwide. This page is soon to be seen as the official webpage of the company.',
    url: 'https://www.teleport.ua',
    siteName: 'Teleport',
    images: [
      {
        url: '/teleport-og.png', 
        width: 1200,
        height: 630,
        alt: 'Teleport - Coming soon | Official website',
      }
    ],
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="./favicon.ico" />   
      </Head>
      <body className={ `${inter.className} bg-white	min-h-screen dark:bg-[#0d1117] `}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem={true}>
          <main className='main'>{children}</main>
        </ThemeProvider>          
      </body>
    </html>
  )
}
