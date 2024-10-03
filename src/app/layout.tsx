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
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Teleport - Coming soon | Official website" />
        <meta property="og:description" content="Teleport is a logistics company offering freight forwarding services worldwide. This page is soon to be seen as the official webpage of the company." />
        <meta property="og:url" content="https://www.teleport.ua" />
        <meta property="og:site_name" content="Teleport" />
        <meta property="og:image" content="/teleport-og.png" />
        <meta property="og:image:secure_url" content="/teleport-og.png" />
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
