import React from 'react'

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Signalist",
  description: "Track real-time stock prices, get personalized alerts and explore detailed company insights.",
};


const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
        <div>
            {children}
        </div>
    </main>
  )
}

export default RootLayout