import React, { useState } from 'react'

export default function ToggleAll({ onToggleAll }) {
  const [allDone, setAllDone] = useState(false)
  const click = () => {
    onToggleAll(!allDone)
    setAllDone(!allDone)
  }
  return (
    <button type="button" onClick={click}>
      {allDone ? 'Mark All Undone' : 'Mark All Done'}
    </button>
  )
}
