import { useState, useEffect } from 'react'
import { getCatFact } from '../services'

export const useCatFact = () => {
  const [fact, setFact] = useState('')
  const [factError, setFactError] = useState(null)

  const handleNewFact = (fact) => {
    setFact(fact)
    setFactError(null)
  }

  const handleNewError = (err) => {
    setFactError(err)
    setFact('')
  }

  const refreshFact = () => {
    getCatFact()
      .then(data => handleNewFact(data?.fact))
      .catch(err => handleNewError(err?.message))
  }
  useEffect(refreshFact, [])

  return { fact, factError, refreshFact }
}
