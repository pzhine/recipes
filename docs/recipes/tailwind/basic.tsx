import React from 'react'

export function HelloWorld() {
  return <h1 className="text-3xl font-bold underline">Hello world!</h1>
}

export function ActionButton() {
  return (
    <button className="bg-violet-500 hover:bg-violet-600 focus:outline-none focus:ring focus:ring-violet-300 active:bg-violet-700">
      Save changes
    </button>
  )
}

/**
 * Responsive breakpoints
 * For example, this will render a 3-column grid on mobile, a 4-column grid on medium-width screens, and a 6-column grid on large-width screens:
 **/
export function ResponsiveGrid({ children }) {
  return (
    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
      {children}
    </div>
  )
}
