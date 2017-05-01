import React, { Component } from 'react';
import Poster from '../poster/poster';

class Card extends Component {
  render() {
    return (
      <div class="card">
        <h2> With A Card</h2>
        <Poster />
      </div>
    );
  }
}

export default Card;