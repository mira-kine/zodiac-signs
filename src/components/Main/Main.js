import React from 'react'
import './Main.css'
import { zodiac } from '../../data'
import ZodiacCard from '../Zodiacs/ZodiacCard'
import background from '../../background.png'

export default function Main() {
  return (
    <main className="background" style={{ backgroundImage: `url(${background})` }}>
      {zodiac.map((item) => (
        <ZodiacCard key={item.name} {...item} />
      ))}
    </main>
  )
}
