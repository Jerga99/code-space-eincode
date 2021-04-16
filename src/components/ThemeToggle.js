

import React from "react"
import Toggle from "react-toggle"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function ThemeToggle({className}) {
  return (
    <Toggle
      className={`day-night-toggle ${className}`}
      icons={{
        checked: <FontAwesomeIcon inverse icon="sun" />,
        unchecked: <FontAwesomeIcon inverse icon="moon" />
      }}
    />
  )
}
