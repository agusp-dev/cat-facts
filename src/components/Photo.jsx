import PropTypes from 'prop-types'

const noPhotoStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '148px',
  height: '148px',
  borderRadius: '50%',
  backgroundColor: 'gray',
}

export const Photo = ({ url, alt }) => (
  url 
    ? <img style={{ borderRadius: '50%' }} width='172px' height='172px' src={ url } alt={ alt } />
    : <div style={ noPhotoStyle }>No Image</div> 
)

Photo.propTypes = {
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
}
