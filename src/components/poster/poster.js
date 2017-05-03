import React, { Component, PropTypes } from 'react';

class Poster extends Component {

  render() {

    const image = this.props.image.url;
    const alt = this.props.image.alt;

    return (
      <div className="recipe-card__image-container">
        <img className="recipe-card__image" src={image} alt={alt} />
      </div>
    );
  }
}

Poster.propTypes = {
  key: PropTypes.string,
  image: PropTypes.shape({})
}

export default Poster;