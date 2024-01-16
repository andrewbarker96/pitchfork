'use client'

import Head from 'next/head'
import { Inter } from 'next/font/google'
import { Metadata } from 'next'
import { Navbar } from '../components/navigation/nav'
import Footer from '../components/navigation/footer'
import './globals.css'


const inter = Inter({ subsets: ['latin'] })

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