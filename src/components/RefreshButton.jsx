import PropTypes from 'prop-types'

export const RefreshButton = ({ title, onClick }) => (
  <button
    style={{ width: '12rem', height: '2rem', cursor: 'pointer' }} 
    onClick={ onClick }
  >
    { title }
  </button>
)

RefreshButton.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}
