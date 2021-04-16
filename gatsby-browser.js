
import "./src/styles/global.scss"
import "prismjs/themes/prism-solarizedlight.css"
import React from "react"
import RootLayout from "./src/components/RooLayout"

export const wrapRootElement = ({ element }) => <RootLayout>{element}</RootLayout>
