import React, { Component, PropTypes } from 'react';
import Poster from '../poster/poster';

class Card extends Component {

  render() {
    const {
      key,
      section,
      title,
      byline,
      published_date,
      url,
      multimedia
    } = this.props.data;

    if (section === false) {
      console.log('this is false', section);
    }

    return (
      <div className="recipe-card__card" key={key}>
        <a href={url} className="recipe-card__card-link">
          <p>{published_date}</p>
          <h2>{title}</h2>
          <p>{byline}</p>
          <Poster image={multimedia} />
        </a>
      </div>
    );
  }
}

Card.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.number,
    section: PropTypes.bool,
    title: PropTypes.string,
    byline: PropTypes.string,
    published_date: PropTypes.string,
    url: PropTypes.string,
    multimedia: PropTypes.array
  }))
}

export default Card;