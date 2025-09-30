import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: "Signalist - Auth",
    description: "Track real-time stock prices, get personalized alerts and explore detailed company insights.",
  };
  

const AuthLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
        {children}
    </main>
  )
}

export default AuthLayout