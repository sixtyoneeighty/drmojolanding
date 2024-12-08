import "@/styles/globals.css"
import { Inter } from 'next/font/google'
import type { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Dr. Mojo - AI Radiologist",
  description: "Fast and detailed analysis of your medical images using AI",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

