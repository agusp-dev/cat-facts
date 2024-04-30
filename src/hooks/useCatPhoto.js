import { useEffect, useState } from 'react'
import { getFirstWord } from '../utils/getFirstWord'
import { CATASS_URL } from '../services'

export const useCatPhoto = ({ fact }) => {

  const [urlPath, setUrlPath] = useState()

  useEffect(() => {
      const firstWord = getFirstWord(fact)
      setUrlPath(firstWord)
  }, [fact])

  return { imgSrc: urlPath ? CATASS_URL.concat(urlPath) : null }
}
