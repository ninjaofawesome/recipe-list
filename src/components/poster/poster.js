import React, { Component, PropTypes } from 'react';

class Poster extends Component {
  render() {
    return (
      <h2>Poster!</h2>
    );
  }
}

Poster.propTypes = {
  image: PropTypes.arrayOf(PropTypes.shape({}))
}

export default Poster;