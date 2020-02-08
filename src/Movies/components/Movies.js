import React, {
  useContext,
  Fragment,
  useEffect,
  useState
} from "react";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Movies = () => {
  const url = "https://image.tmdb.org/t/p/w500/";

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 5,
    slidesToScroll: 5
  };

    return (
      <Fragment>
        <div id="slider">
            <h2>movies work</h2>
        </div>
      </Fragment>
    );
};