import React from "react";
import Slider1 from '../../images/slider-1.jpg'

function Slider() {
  return (
    <div className="slide-sec">
  <div id="myCarousel" className="carousel slide" data-ride="carousel">

    <div className="carousel-inner">
      <div className="item active">
        <img src={Slider1} alt="Los Angeles" />
      </div>

      <div className="item">
        <img src={Slider1} alt="Chicago"  />
      </div>
    
      <div className="item">
        <img src={Slider1} alt="New york" />
      </div>
    </div>
    <a className="left carousel-control" href="#myCarousel" data-slide="prev">
      <span className="glyphicon glyphicon-chevron-left"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="right carousel-control" href="#myCarousel" data-slide="next">
      <span className="glyphicon glyphicon-chevron-right"></span>
      <span className="sr-only">Next</span>
    </a>
  </div>
</div>

  );
}

export default Slider;
