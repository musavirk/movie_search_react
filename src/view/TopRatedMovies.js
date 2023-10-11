import React from "react";

export const TopRatedMovies = (props) => {
  const { poster_path, title, release_date, id, vote_average } = props.movie;
  return (
    <div
      className="movie-list my-3 p-1"
      onClick={() => {
        props.onMovieSelect(id);

        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
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
            <span>Rating:{vote_average}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
