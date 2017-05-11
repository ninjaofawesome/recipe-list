import React, { Component } from 'react';
import Nav from '../src/components/nav/nav';
import List from '../src/components/list/list';
import axios from 'axios';
import $ from 'jquery';
import moment from 'moment';

class App extends Component {

  constructor() {
    super();

    this.renderCardData = this.renderCardData.bind(this);
    this.arrangeCards = this.arrangeCards.bind(this);
    this.favoriteCards = this.favoriteCards.bind(this);
    this.favoriteList = this.favoriteList.bind(this);
    this.state = {
      recipeCard:[],
      favorites: []
    };
  }

  componentWillMount() {

    let url = "https://api.nytimes.com/svc/topstories/v2/food.json";
    url += '?' + $.param({
      'api-key': "4c0279d4d0ec494eb035ac5281200c59"
    });

    axios.get(url)
      .then(res => {
        const cards = res.data.results;
        this.setState({recipeCard: cards})
      });
  }

  renderCardData(cardState) {
    const cardData = this.state.recipeCard.map((item, index) => {
      const published = moment(item.published_date).format("dddd, MMMM Do YYYY");
      const image = item.multimedia.slice(2,3);

      if (image.length === 0) {
        image.push({
          "url" : "https://res.cloudinary.com/ninjaofawesome/image/upload/c_scale,h_127,w_190/v1493131754/hannah/projects/listicle/food-rainbow.jpg",
          "alt" : "Placeholder Food Image",
          "width": 190,
          "height": 127
        })
      }

      const cardObj = {
        key: index,
        title: item.title,
        byline: item.byline,
        published_date: published,
        url: item.url,
        multimedia: image
      }

      return cardObj;
    });

    return cardData;
  }

  arrangeCards(){
    const allCards = this.state.recipeCard;
    allCards.forEach(function(element) {
      const pubDate = element.published_date;
      const newDate = Date.parse(pubDate);
      element.parseDate = newDate;
    });

    allCards.sort(function(a, b){
      return a.parseDate - b.parseDate;
    }).reverse();

    this.setState({ recipeCards: allCards })
  }

  favoriteCards(item){
    const favoriteArr = this.state.favorites.slice();
    favoriteArr.push(item);

    this.setState({ favorites: favoriteArr });
  }

  favoriteList(){
    const favorites = this.state.favorites;
    const cards = this.state.recipeCard.map((item, index) => {
      const published = moment(item.published_date).format("dddd, MMMM Do YYYY");
      const image = item.multimedia.slice(2,3);

      if (image.length === 0) {
        image.push({
          "url" : "https://res.cloudinary.com/ninjaofawesome/image/upload/c_scale,h_127,w_190/v1493131754/hannah/projects/listicle/food-rainbow.jpg",
          "alt" : "Placeholder Food Image",
          "width": 190,
          "height": 127
        })
      }

      const cardObj = {
        key: index,
        title: item.title,
        byline: item.byline,
        published_date: published,
        url: item.url,
        multimedia: image
      }

      return cardObj;
    });

    const onlyInA = cards.filter(function(current){
        return favorites.filter(function(current_b){
            return current_b.key === current.key && current_b.title === current.title
        }).length === 0
    });

    const onlyInB = favorites.filter(function(current){
        return cards.filter(function(current_a){
            return current_a.key === current.key && current_a.title === current.title
        }).length === 0
    });

    const result = onlyInA.concat(onlyInB);
    const favoriteState = favorites.concat(result);
    console.log(favoriteState)
    this.setState({ recipeCard: favoriteState });
  }

  render() {
    const cardState = this.state.recipeCard;
    const cardUpdate = this.renderCardData(cardState);

    console.log(this.state.recipeCard)

    return (
      <div className="recipe-list">
        <Nav
          cardInfo={cardUpdate}
          arrangeCards={this.arrangeCards}
          favoriteCards={this.favoriteList}
        />
        <List
          cardInfo={cardUpdate}
          favoriteCards={this.favoriteCards}
        />
      </div>
    );
  }
}

export default App;
