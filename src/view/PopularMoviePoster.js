import React from "react";

const PopularMoviePoster = (props) => {
  const { poster_path, title, release_date } = props.movie;
  return (
    <div>
      <div className="movie-list my-3 p-1 mx-3">
        <div className="picture-bx ">
          <img
            src={`https://image.tmdb.org/t/p/original${poster_path}`}
            alt=""
            loading="lazy"
          />
        </div>
        <div className="discription-bx ">
          <div>
            <div className="mx-3 movieName">
              <h6>{title}</h6>
            </div>
            <div className="dateAndtype mt-2 ">
              <span>{release_date}</span>
              <span>Movie</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularMoviePoster;
