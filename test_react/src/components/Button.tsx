import React from 'react'

export interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
}

export default function Button(props: ButtonProps) {
  function clickHandler() {
    console.log(`${props.children} was clicked!`)
    if (props.onClick) {
      props.onClick()
    }
  }

  return (
    <li>
      <button onClick={clickHandler}>{props.children}</button>
    </li>
  )
}