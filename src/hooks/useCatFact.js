import { useState, useEffect } from 'react'
import { getCatFact } from '../services'

export const useCatFact = () => {
  const [fact, setFact] = useState('')

  const refreshFact = () => {
    getCatFact()
      .then(data => setFact(data?.fact))
  }
  useEffect(refreshFact, [])
  
  return { fact, refreshFact }
}
