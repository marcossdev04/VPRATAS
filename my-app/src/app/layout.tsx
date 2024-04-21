import type { Metadata } from 'next'
import { Silkscreen } from 'next/font/google'
import './globals.css'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

const silkscreen = Silkscreen({ subsets: ['latin'], weight: ['400'] })

export const metadata: Metadata = {
  title: 'VPRATAS',
  description: 'A melhor loja de pratas da ilha!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={silkscreen.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
