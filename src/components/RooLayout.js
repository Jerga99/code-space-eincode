import React from "react"
import "../styles/global.scss"
import "prismjs/themes/prism-solarizedlight.css"

export default function RootLayout({children}) {

  return (
    <div className="theme-provider">
      {children}
    </div>
  )
}
