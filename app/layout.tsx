'use client'

import Head from 'next/head'
import { Navbar } from './components/navigation/nav'
import Footer from './components/navigation/footer'
import './globals.css'

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <Head>
        <title>Pitchfork Eatery</title>
        <meta name="description" content="Newest Local Eatery serving up your favorite Country Style dishes!" />
      </Head>
      <Navbar />
      <main className="main">{children}</main>
      <Footer />
    </>
  )
}