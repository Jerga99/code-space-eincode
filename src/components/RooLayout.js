import React from "react"
import { library, config } from "@fortawesome/fontawesome-svg-core"
import {
  faSun,
  faMoon
} from "@fortawesome/free-solid-svg-icons"

import "@fortawesome/fontawesome-svg-core/styles.css"
import "../styles/global.scss"
import "prismjs/themes/prism-solarizedlight.css"
import "react-toggle/style.css"

config.autoAddCss = false
library.add(faSun, faMoon)

export default function RootLayout({children}) {

  return (
    <div className="theme-provider">
      {children}
    </div>
  )
}
