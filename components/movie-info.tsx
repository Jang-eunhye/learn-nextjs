import { API_URL } from "../app/constants";
import styles from "../styles/movie-info.module.css";

type Movie = {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  overview: string;
  homepage: string;
};

export async function getMovie(id: string): Promise<Movie> {
  console.log(`Fetching info: ${Date.now()}`);
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  return (
    <div className={styles.container}>
      <img
        src={movie.poster_path}
        className={styles.poster}
        alt={movie.title}
      />
      <div className={styles.info}>
        <h1 className={styles.title}>{movie.title}</h1>
        <h3>⭐{movie.vote_average.toFixed(1)}</h3>
        <p>{movie.overview}</p>
        <a href={movie.homepage} target={"_blank"}>
          Homepage &rarr;
        </a>
      </div>
    </div>
  );
}
