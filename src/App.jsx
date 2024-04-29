import { useEffect, useState } from 'react'
import { Fact } from './components/Fact'
import { Photo } from './components/Photo'
import { RefreshButton } from './components/RefreshButton'
import { CATASS_URL, getCatFact } from './services'
import { getFirstWord } from './utils/getFirstWord'
import './App.css'

function App() {

  const [fact, setFact] = useState('')
  const [photoUrl, setPhotoUrl] = useState('')

  const getCatFacts = () => {
    getCatFact()
      .then(data => setFact(data?.fact))
  }

  useEffect(getCatFacts, [])

  useEffect(() => {
    if (fact) {
      const firstWord = getFirstWord(fact)
      setPhotoUrl(CATASS_URL.concat(firstWord))
    }
  }, [fact])

  const handleRefresh = () => {
    getCatFacts()
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Photo 
        url={ photoUrl }
        alt={ fact } 
      />
      <Fact text={ fact || 'No Data' } />
      <RefreshButton title='Refresh' onClick={ handleRefresh } />
    </div>
  )
}

export default App
