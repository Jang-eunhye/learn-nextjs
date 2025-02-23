import { API_URL } from "../app/(home)/page";

async function getMovie(id: string) {
  console.log(`fetching movies: ${Date.now()}`);
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

export default async function MovieInfo({id}:{id:string}){
  const movie = await getMovie(id)
  return <h1>{JSON.stringify(movie)}</h1>
}