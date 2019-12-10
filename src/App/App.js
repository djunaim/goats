import React from 'react';
import './App.scss';

import goatData from '../helpers/data/goatData';

import GoatCoral from '../components/GoatCoral/GoatCoral';

// classes have more abilities than regular functions, which only does 1 single action
// state lives in App.js; only have 1 state. Other compoenents haave props (take from state and given to child components)
// props are read-only. It references to state
// render is our printToDOM
class App extends React.Component {
  state = {
    goats: [],
  }

  componentDidMount() {
    const goats = goatData.getGoats();
    this.setState({ goats });
  }

  freeGoat = (goatId) => {
    goatData.freeAGoat(goatId);
    const goats = goatData.getGoats();
    this.setState({ goats });
  }

  render() {
    return (
    <div className="App">
        <button className="btn btn-danger">Sucks</button>
        <GoatCoral goats={this.state.goats} freeGoat={this.freeGoat} />
    </div>
    );
  }
}

export default App;
