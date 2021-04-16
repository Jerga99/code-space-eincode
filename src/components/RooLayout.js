

import React from "react"


export default function RootLayout({children}) {

  return (
    <div className="theme-provider">
      {children}
    </div>
  )
}
