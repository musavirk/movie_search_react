import Main from "../layouts/Main";
import React, { useEffect, useState } from "react";
import { TopRatedMovies } from "./TopRatedMovies";
import MovieInfo from "./MovieInfo";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import SearchAnimation from "./SearchAnimation";
import { Container, Col, Row } from "react-bootstrap";

const TopRated = () => {
  //API Key
  const API_KEY = "445628f0a7baaca5b781c81d47afb0f1";

  //Api bae url
  const API_BASE_URL = "https://api.themoviedb.org/3";

  //Hooks for movie search
  const [movieList, setMovieList] = useState([]);
  const [selectedMovie, onMovieSelect] = useState();

  //Hooks for pagination
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  //hooks for genre setting
  const [genres, setGenres] = useState([""]);
  const [genreId, setGenreId] = useState("");

  // Fetch top rated movies details
  const getMovies = () => {
    fetch(
      `${API_BASE_URL}/movie/top_rated?api_key=${API_KEY}&page=${page}&sort_by=popularity.desc&with_genres=${genreId}`
    )
      .then((res) => res.json())
      .then((json) => setMovieList(json.results));
  };

  // Fetch number of pages
  const getPages = () => {
    fetch(`${API_BASE_URL}/movie/top_rated?api_key=${API_KEY}&page=${page}`)
      .then((res) => res.json())
      .then((json) => setTotalPages(json.total_pages));
  };

  const getGenres = () => {
    fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
    )
      .then((res) => res.json())
      .then((json) => setGenres(json.genres));
  };

  // Hook for execute getMovies function
  useEffect(() => {
    getMovies();
  }, [genreId, page]);

  //Hook for execute getPages function
  useEffect(() => {
    getPages();
  }, []);

  //set page number from data
  const handlePageChange = (event, page) => {
    setPage(page);
  };

  const handleGenreChange = (event) => {
    const value = event.target.value;
    setGenreId(value);
  };

  //Hook for execute getGenre function
  useEffect(() => {
    getGenres();
  }, []);

  return (
    <>
      <Main>
        {selectedMovie && (
          <MovieInfo
            selectedMovie={selectedMovie}
            onMovieSelect={onMovieSelect}
          />
        )}
        <Container>
          <Row>
            <button onClick={handleGenreChange} value={""} className="all-btn">
              ALL
            </button>
            {genres.map((genre) => (
              <Col className="filter">
                <button
                  key={genre.id}
                  onClick={handleGenreChange}
                  value={genre.id}
                >
                  {genre.name}
                </button>
              </Col>
            ))}
          </Row>
        </Container>

        <div fluid className="poster">
          {movieList?.length ? (
            movieList.map((movie, index) => (
              <TopRatedMovies
                key={index}
                movie={movie}
                setMovieList={setMovieList}
                onMovieSelect={onMovieSelect}
              />
            ))
          ) : (
            <SearchAnimation />
          )}
        </div>

        <div className="d-flex align-items-center justify-content-center pagination">
          <Stack spacing={2}>
            <Pagination
              count={totalPages}
              page={page}
              onChange={handlePageChange}
              color="primary"
            />
          </Stack>
        </div>
      </Main>
    </>
  );
};

export default TopRated;
