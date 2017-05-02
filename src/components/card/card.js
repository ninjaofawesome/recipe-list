import React, { Component, PropTypes } from 'react';
import Poster from '../poster/poster';


class Card extends Component {

  render() {

    if (!this.props.data) {
      return null;
    }

    const {
      key,
      url,
      published_date,
      title,
      byline,
      multimedia,
      section } = this.props.data;

    if (section === false) {
      return null;
    }

    return (
      <div className="recipe-card__card" key={key}>
        <a href={url} className="recipe-card__card-link">
          <p>{published_date}</p>
          <h2>{title}</h2>
          <p>{byline}</p>
          {multimedia.map((photo, index) => {
            const photoData = {
              url: photo.url,
              alt: photo.caption,
              height: photo.height,
              width: photo.width
            }
            return (
              <Poster
                key={`poster-${index}`}
                image={photoData}
              />
            );
          })}
        </a>
      </div>
    );

  }
}

Card.propTypes = {
  data: PropTypes.shape({
    key: PropTypes.number,
    section: PropTypes.bool,
    title: PropTypes.string,
    byline: PropTypes.string,
    published_date: PropTypes.string,
    url: PropTypes.string,
    multimedia: PropTypes.shape({})
  })
}

export default Card;