import React, { useEffect, useState } from "react";
import Main from "../layouts/Main";
import PopularMovies from "./PopularMovies";
import SearchAnimation from "./SearchAnimation";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import PopularMoviePoster from "./PopularMoviePoster";

function Popular() {
  const [movieList, setMovieList] = useState([]);

  const getMovies = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=445628f0a7baaca5b781c81d47afb0f1&language=en-US`
    )
      .then((response) => response.json())
      .then((json) => setMovieList(json.results));
  };
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <Main>
        <Carousel
          showThumbs={false}
          autoPlay={true}
          transitionTime={3}
          infiniteLoop={true}
          showStatus={false}
        >
          {movieList?.length ? (
            movieList.map((movie, index) => (
              <PopularMovies
                key={index}
                movie={movie}
                setMovieList={setMovieList}
              />
            ))
          ) : (
            <SearchAnimation />
          )}
        </Carousel>
        <div fluid className="poster">
          {movieList?.length ? (
            movieList.map((movie, index) => (
              <PopularMoviePoster
                key={index}
                movie={movie}
                setMovieList={setMovieList}
              />
            ))
          ) : (
            <SearchAnimation />
          )}
        </div>
      </Main>
    </>
  );
}

export default Popular;
