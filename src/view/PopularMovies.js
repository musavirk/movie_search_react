import React from "react";
import { Row, Container } from "react-bootstrap";
import { StarFill } from "react-bootstrap-icons";
const PopularMovies = (props) => {
  const { backdrop_path, title, overview, vote_average, release_date } =
    props.movie;
  return (
    <div className="popular">
      <div className="posterImage">
        <img
          src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
          alt=""
        />
      </div>
      <div className="posterImage__overlay">
        <div className="posterImage__title">{title}</div>
        <div className="posterImage__runtime d-inline">
          {release_date}
          <span className="posterImage__rating ">
            {vote_average}
            <StarFill />{" "}
          </span>
        </div>
        <div className="posterImage__description">{overview}</div>
      </div>
    </div>
  );
};

export default PopularMovies;
