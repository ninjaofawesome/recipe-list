import React, { Component } from 'react';
import Card from '../card/card';

class List extends Component {

  render() {
    const cards = this.props.cardInfo;

    return (
      <div className="recipe-list__list">
        <div className="recipe-list__container">
          <h2 className="recipe-list__list-title">Reading List</h2>
          <p className="recipe-list__list-caption">Read better, cook better, eat better.</p>
          {cards.map((item, index) => {
            return(
              <Card
                data={item}
                key={`card-${index}`}
               />
            );
          })}
        </div>
      </div>
    );
  }
}

export default List;

