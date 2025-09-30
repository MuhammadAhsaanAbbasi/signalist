import React from 'react'

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