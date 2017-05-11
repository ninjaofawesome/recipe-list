import moment from 'moment';

export function cardFormat(data){
  console.log('card format!', data);

  const cardData = data.map((item, index) => {
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