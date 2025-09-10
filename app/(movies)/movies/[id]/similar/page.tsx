import Movie from "../../../../../components/movie";
import { API_URL } from "../../../../constants";
import styles from "../../../../../styles/home.module.css";


export async function getMovie(id: string) {
  const response = await fetch(`${API_URL}/${id}/similar`);
  console.log(`Fetching similar movies: ${Date.now()}`);
  return response.json();
}

export default async function SimilarMoviesPage({ params: { id } }: { params: { id: string } }) {
  const movies = await getMovie(id);
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