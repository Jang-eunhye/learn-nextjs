import Movie from "./movie";
import { API_URL } from "../app/constants";
import styles from "../styles/home.module.css";

type SimilarMovie = {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  overview: string;
};

async function getSimilarMovies(id: string): Promise<SimilarMovie[]> {
  const response = await fetch(`${API_URL}/${id}/similar`);
  console.log(`Fetching similar movies: ${Date.now()}`);
  return response.json();
}

export default async function SimilarMovies({ id }: { id: string }) {
  const movies = await getSimilarMovies(id);

  return (
    <div className={styles.container}>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          poster_path={movie.poster_path}
          title={movie.title}
        />
      ))}
    </div>
  );
}
