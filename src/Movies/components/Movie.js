import React from "react";
import PropTypes from "prop-types";

export const Movie = props => {
  let classNames;
  if (!!props.active) {
    classNames = "card card-active";
  } else {
    classNames = "card";
  }
  return (
    <div className={classNames}>
      <div className="card-content">
        <img src={props.image} alt="" />
      </div>
    </div>
  );
};

Movie.propTypes = {
  image: PropTypes.string
};
