import React from 'react'
import './Main.css'
import { zodiac } from '../../data'
import ZodiacCard from '../Zodiacs/ZodiacCard'

export default function Main() {
  return (
    <main className="zodiac-signs">
      {zodiac.map((item) => (
        <ZodiacCard key={item.name} {...item} />
      ))}
    </main>
  )
}
