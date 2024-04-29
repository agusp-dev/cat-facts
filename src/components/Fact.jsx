import PropTypes from 'prop-types'

export const Fact = ({ text = '' }) => {
  return (
    // eslint-disable-next-line react/no-unescaped-entities
    <h3 style={{ maxWidth: '500px' }}>"{ text }"</h3>
  )   
}

Fact.propTypes = {
  text: PropTypes.string.isRequired,
}
