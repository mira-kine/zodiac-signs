import React from 'react'
import './ZodiacCard.css'

export default function ZodiacCard({ name, dates }) {
  return (
    <div className="zodiac-card">
      <img alt={name} src={`${process.env.PUBLIC_URL}/zodiacs/${name}.png`}></img>
      <div className="name">{name}</div>
      <div>{dates}</div>
    </div>
  )
}
