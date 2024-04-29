export const getFirstWord = (phrase = '') => {

  if (!phrase) return ''
  if (!phrase?.includes(' ')) return phrase

  return phrase?.substring(0, phrase?.indexOf(' '))
}
