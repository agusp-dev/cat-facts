import { Fact } from './components/Fact'
import { Photo } from './components/Photo'
import { RefreshButton } from './components/RefreshButton'
import { useCatFact } from './hooks/useCatFact'
import { useCatPhoto } from './hooks/useCatPhoto'
import './App.css'

function App() {

  const { fact, refreshFact } = useCatFact()
  const { imgSrc } = useCatPhoto({ fact })

  const handleRefresh = () => {
    refreshFact()
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {console.log('rendering')}
      <Photo 
        url={ imgSrc }
        alt={ fact } 
      />
      <Fact text={ fact || 'No Data' } />
      <RefreshButton title='Refresh' onClick={ handleRefresh } />
    </div>
  )
}

export default App
