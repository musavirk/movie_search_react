import React, { useEffect, useState } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import axios from "axios";

const MovieInfo = (props) => {
  const [movieInfo, setMovieInfo] = useState();
  const { selectedMovie } = props;
  // Function for get data from API and Set it into array
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${selectedMovie}?api_key=${api_key}`
      )
      .then((response) => {
        setMovieInfo(response.data);
      });
  }, [selectedMovie]);
  // API key
  const api_key = "445628f0a7baaca5b781c81d47afb0f1";
  return (
    <Container>
      <Row>
        <Col className="col-xl-3 col-lg-4 mb-sm-3">
          <img
            src={`https://image.tmdb.org/t/p/original${movieInfo?.poster_path}`}
            alt=""
            loading="lazy"
            height={352}
          />
        </Col>
        <Col className="col-xl-9 col-lg-8 d-flex flex-column movie-info">
          <div className="d-inline">
            Movie Name:<span>{movieInfo?.title} </span>
          </div>
          <div className="d-inline">
            IMDB Rating:<span>{movieInfo?.vote_average} </span>
          </div>

          <div className="d-inline">
            Release date:<span>{movieInfo?.release_date}</span>
          </div>
          <div className="d-inline">
            About:
            <span>{movieInfo?.overview}</span>
          </div>
          <div>
            Genres:<span>{movieInfo?.genres[0].name}</span>
          </div>
        </Col>
        <div>
          <Button
            onClick={() => {
              props.onMovieSelect();
            }}
          >
            close
          </Button>
        </div>
      </Row>
    </Container>
  );
};

export default MovieInfo;
