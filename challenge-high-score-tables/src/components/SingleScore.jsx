import React from 'react'

export default function SingleScore({score}) {
  return (
    <div className="score">
        <p>{score.n}</p>
        <p>{score.s}</p>
    </div>
  )
}
