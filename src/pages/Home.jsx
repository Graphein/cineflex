import { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { getMovies } from "../services/api";

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies()
      .then((response) => setMovies(response.data))
      .catch((error) => alert("Erro ao carregar filmes."));
  }, []);

  return (
    <Container>
      <h2>Em Cartaz</h2>
      <MoviesGrid>
        {movies.map((movie) => (
          <Link to={`/sessoes/${movie.id}`} key={movie.id}>
            <MovieCard>
              <img src={movie.posterURL} alt={movie.title} />
            </MovieCard>
          </Link>
        ))}
      </MoviesGrid>
    </Container>
  );
}

const Container = styled.div`
  padding: 80px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MoviesGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

const MovieCard = styled.div`
  width: 150px;
  height: 220px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 8px;
  }
`;
