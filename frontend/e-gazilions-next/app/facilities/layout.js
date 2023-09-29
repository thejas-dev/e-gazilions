"use client"

import Header from "@/components/Header"


export default function RootLayout({ children }) {
  return (
    <html lang="en">    
        <main className="w-full min-h-[100vh] bg-gray-100" >
        <Header />
        
        {children}
        </main>
    </html>
  )
}
