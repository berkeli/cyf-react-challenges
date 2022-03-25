import React from 'react'
import SingleScore from './SingleScore'

export default function Country({name, scores}) {
  return (
    <>
      <h3>HIGH SCORES: {name}</h3>
      <ul>
        {scores.map((score,id) => <SingleScore key={id} score={score} />)}
      </ul>
    </>
  )
}
