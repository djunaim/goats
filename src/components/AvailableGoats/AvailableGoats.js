import React from 'react';
import PropTypes from 'prop-types';

import goatShape from '../../helpers/propz/goatShape';

class AvailableGoat extends React.Component {
  static propTypes = {
    goat: PropTypes.arrayOf(goatShape.goatShape),
  }

  numOfGoats = () => {
    const { goats } = this.props;
    // goats.forEach((goat) => {
    //   if (goat.isBusy === false) {
    //     const goatAvailability = goat.isBusy;
    //   }
    //   return goatAvailability;
    // });
    return goats.filter((x) => !x.isBusy).length;
  }

  render() {
    return (
    <p className="availableGoats">{this.numOfGoats()} goats available</p>
    );
  }
}

export default AvailableGoat;
