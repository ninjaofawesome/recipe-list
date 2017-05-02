import React, { Component, PropTypes } from 'react';

class Poster extends Component {

  render() {

    const image = this.props.image.url;
    const alt = this.props.image.alt;

    return (
      <div className="recipe-box__image-container">
        <img src={image} alt={alt} />
      </div>
    );
  }
}

Poster.propTypes = {
  key: PropTypes.string,
  image: PropTypes.shape({})
}

export default Poster;