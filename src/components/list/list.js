import React, { Component } from 'react';
import $ from 'jquery';
import moment from 'moment';
import Card from '../card/card';
// import WelcomeCardState from './welcome_card.json';

class List extends Component {

  constructor(props) {
    super(props);
    this.recipeCardList = this.recipeCardList.bind(this);
    this.state = {recipeCard:[]};
  }

  componentDidMount() {
    this.recipeCardList();
  }

  recipeCardList() {
    let url = "https://api.nytimes.com/svc/topstories/v2/food.json";
    url += '?' + $.param({
      'api-key': "4c0279d4d0ec494eb035ac5281200c59"
    });
    $.ajax({
      url: url,
      method: 'GET',
    }).done(function(result) {
      this.setState({ recipeCard: result.results});
    }.bind(this)).fail(function(err) {
      throw err;
    });
  }

  render() {
    const cardData = this.state.recipeCard.map((item, index) => {
      const foodSection = item.section === 'Food';
      const published = moment(item.published_date).format("dddd, MMMM Do YYYY");
      const cardObj = {
        key: index,
        section: foodSection,
        title: item.title,
        byline: item.byline,
        published_date: published,
        url: item.url,
        multimedia: item.multimedia
      }
      return cardObj;
    });

    return (
      <div className="recipe-list__list">
        <h2> Yo List</h2>
        {cardData.map((cardInfo, index) => {
          return (
            <Card
              key={`card-${index}`}
              data={cardInfo}
            />
          );
        })}
      </div>
    );
  }
}

export default List;

