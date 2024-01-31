/**
 * useContext example
 */
import React from 'react'
import { createContext, useContext } from 'react'

export const LevelContext = createContext(0)

export function Section({ children }) {
  const level = useContext(LevelContext)
  return (
    <section className="section">
      <LevelContext.Provider value={level + 1}>
        {children}
      </LevelContext.Provider>
    </section>
  )
}

export function Heading({ children }) {
  const level = useContext(LevelContext)
  switch (level) {
    case 0:
      throw Error('Heading must be inside a Section!')
    case 1:
      return <h1>{children}</h1>
    case 2:
      return <h2>{children}</h2>
    case 3:
      return <h3>{children}</h3>
    case 4:
      return <h4>{children}</h4>
    case 5:
      return <h5>{children}</h5>
    case 6:
      return <h6>{children}</h6>
    default:
      throw Error('Unknown level: ' + level)
  }
}
