import React from 'react';
class MovieItem extends React.Component {
  public render() {
  const image = 'http://127.0.0.1:3000/static/images/cartoon-simple-pic.png';
  return (
      <div className="item">
        <img src={image} alt="Owl Image" className="cartoon-image" />
        <div className="cartoon-title">
          کارتون جذاب گوریل انگوری
        </div>
        <div className="rates">
          <div className="stars">
            <img src="http://127.0.0.1:3000/static/images/star-off.png" />
            <img src="http://127.0.0.1:3000/static/images/star-off.png" />
            <img src="http://127.0.0.1:3000/static/images/star-off.png" />
            <img src="http://127.0.0.1:3000/static/images/star-off.png" />
            <img src="http://127.0.0.1:3000/static/images/star-off.png" />
          </div>
          25 رای
        </div>
        <div className="like">
          309 نفر
        </div>
        <div className="views">
          8000 نفر
        </div>
        <div className="clear" />
      </div>);
  }
}

export default MovieItem;
