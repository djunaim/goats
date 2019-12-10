import React from 'react';
import Goat from '../Goat/Goat';

class GoatCoral extends React.Component {
  render() {
    const myGoats = this.props.goats;
    // map loops over array and returns our results right away
    const goatCards = myGoats.map((goat) => <Goat key={goat.id} goat={goat}/>);
    return (
      <div className="goatCoral">
        {goatCards}
      </div>
    );
  }
}

export default GoatCoral;
