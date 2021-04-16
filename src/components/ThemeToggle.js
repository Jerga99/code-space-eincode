

import React from "react"
import Toggle from "react-toggle"

export default function ThemeToggle({className}) {
  return (
    <Toggle className={`day-night-toggle ${className}`}/>
  )
}
