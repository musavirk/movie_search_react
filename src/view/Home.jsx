import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Main from "../layouts/Main";
import axios from "axios";
import MovieList from "./MovieList";

import MovieInfo from "./MovieInfo";

const Home = () => {
  const [query, setQuery] = useState();
  const [timeOutId, setTimeOutId] = useState();
  const [movieList, setMovieList] = useState([]);
  const [selectedMovie, onMovieSelect] = useState();
  const [currentPage, setCurrentPage] = useState(1);

  const fetchData = async (searchString) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchString}`
    );

    setMovieList(response.data.results);
  };
  const apiKey = "445628f0a7baaca5b781c81d47afb0f1";
  const onTextChange = (event) => {
    clearTimeout(timeOutId);
    setQuery(event.target.value);
    const timeout = setTimeout(() => fetchData(event.target.value), 500);
    setTimeOutId(timeout);
  };

  return (
    <>
      <Main>
        <Container>
          <div
            fluid
            className="search d-flex align-items-center justify-content-center "
          >
            <input
              type="text"
              placeholder="Search for movies . . ."
              className=" my-3 p-1 mx-2"
              value={query}
              onChange={onTextChange}
            />
          </div>
        </Container>
        {selectedMovie && (
          <MovieInfo
            selectedMovie={selectedMovie}
            onMovieSelect={onMovieSelect}
          />
        )}
        <div className="poster">
          {movieList?.length ? (
            movieList.map((movie, index) => (
              <MovieList
                key={index}
                movie={movie}
                onMovieSelect={onMovieSelect}
              />
            ))
          ) : (
            <h3 className="mt-3 transparent"></h3>
          )}
        </div>
      </Main>
    </>
  );
};

export default Home;
