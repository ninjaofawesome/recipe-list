import React, { Component, PropTypes } from 'react';
import { get } from 'lodash';

class Poster extends Component {

  render() {

    const image = get(this.props, 'image.url');
    const alt = get(this.props, 'image.alt');

    return (
      <div className="recipe-card__image-container">
        <img className="recipe-card__image" src={image} alt={alt} />
      </div>
    );
  }
}

Poster.propTypes = {
  image: PropTypes.shape({})
}

export default Poster;