import axios from 'axios'

const CATFACT_URL = 'https://catfact.ninja/fact'
export const CATASS_URL = 'https://cataas.com/cat/says/'

export const getCatFact = () => {
  return axios.get(CATFACT_URL)
    .then(response => response?.data)
    .catch(err => console.log('getCatFact Err', err))
}
