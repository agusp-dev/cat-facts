import axios from 'axios'

const CATFACT_URL = 'https://catfact.ninja/fact'
export const CATASS_URL = 'https://cataas.com/cat/says/'

export const getCatFact = () => {
  return axios.get(CATFACT_URL)
    .then(response => {
      if (response?.status !== 200) 
        throw new Error(`Unknow Error - ${response?.status}`)
      return response?.data
    })
    .catch(err => { throw err})
}
