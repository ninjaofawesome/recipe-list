import React, { Component } from 'react';
import Card from '../card/card';

class List extends Component {
  render() {
    return (
      <div className="recipe-list">
        <h2> Yo List</h2>
        <Card />
      </div>
    );
  }
}

export default List;