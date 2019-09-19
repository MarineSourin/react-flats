import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFlat: flats[0],
      flats
    };
  }

  render() {
    return (
      <div>
        <div className="flat-list">
          <p> Hello </p>
        </div>
        <div className="map-container">
          <p> World </p>
        </div>
      </div>
    );
  }
}

export default App;
