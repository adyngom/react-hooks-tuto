import React, {
  useContext,
  Fragment,
  useEffect,
  useState
} from "react";

import Slider from "react-slick";

import { Movie } from "./Movie";
import { MoviesContext } from '../redux';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Movies = () => {
  const moviesContext = useContext(MoviesContext);
  const { loading, movies, getMovies } = moviesContext;
  const url = "https://image.tmdb.org/t/p/w500/";
  const [activeIndex, setActiveIndex] = useState(0);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 5,
    slidesToScroll: 5
  };

  useEffect(() => {
      getMovies();
  }, []);

  if (loading) {
    return <div>movies loading...</div>;
  } else {
    const MoviesMap = movies.map((movie, i) => {
      return (
        <Movie
          key={movie.id}
          image={url + movie.poster_path}
          active={activeIndex === i ? true : false}
        />
      );
    });

    return (
      <Fragment>
        <div id="slider">
          <Slider {...sliderSettings}>{MoviesMap}</Slider>
        </div>
      </Fragment>
    );
  }
};