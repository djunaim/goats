import PropTypes from 'prop-types';

// prop types gives structure to what object should look like
const goatShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  isBusy: PropTypes.bool.isRequired,
});

export default { goatShape };
