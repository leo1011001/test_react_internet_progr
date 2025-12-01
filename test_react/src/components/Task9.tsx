import React from 'react'

export interface Task9Props {
  firstName: string
  lastName: string
  title?: string
  image?: string
}

export function Task9(props: Task9Props) {
  return (
    <header id="user">
      <h2>
        {props.firstName} {props.lastName}
      </h2>
      {props.image && (
        <img
          src={props.image}
          alt={`${props.firstName} ${props.lastName}`}
          style={{ maxWidth: '100%' }}
        />
      )}
      <p>{props.title}</p>
    </header>
  )
}
