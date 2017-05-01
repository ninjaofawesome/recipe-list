import React, { Component } from 'react';
import Nav from '../src/components/nav/nav';
import List from '../src/components/list/list';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <List />
      </div>
    );
  }
}

export default App;
