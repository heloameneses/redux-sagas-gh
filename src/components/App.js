import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Redux Sagas</h1>
        <div>
          {/*{this.props.starWars.people.map(person => <h4>{person.name}</h4>)}*/}
        </div>
        <button onClick={this.props.fetchStarWarsRequest}>Load More</button>
      </div>
    );
  }
}

export default App;