import React, { Component } from 'react';
import Nav from '../src/components/nav/nav';
import List from '../src/components/list/list';
import $ from 'jquery';
import moment from 'moment';

class App extends Component {

  constructor() {
    super();
    this.state = {recipeCard:[]};
  }

  componentDidMount() {

    function getData(callback) {
      let url = "https://api.nytimes.com/svc/topstories/v2/food.json";
      url += '?' + $.param({
        'api-key': "4c0279d4d0ec494eb035ac5281200c59"
      });
      return $.ajax({
        url: url,
        method: 'GET',
      }).done(function(result) {
        const data = result.results;
        callback(data);
      }).fail(function(err) {
        throw err;
      });
    }

    const returnData = getData(function(data) {
      //Y you no return data??!
      return data;
    });

    this.setState({ recipeCard: returnData })
  }


  render() {

    console.log(this.state)

    const cardData = this.state.recipeCard.map((item, index) => {
      const foodSection = item.section === 'Food';
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
        section: foodSection,
        title: item.title,
        byline: item.byline,
        published_date: published,
        url: item.url,
        multimedia: image
      }
      return cardObj;
    });


    return (
      <div className="recipe-list">
        <Nav cardInfo={cardData} />
        <List cardInfo={cardData} />
      </div>
    );
  }
}

export default App;
