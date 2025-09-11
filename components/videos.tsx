import { Suspense } from "react";
import MovieVideos from "./movie-videos";

export const Videos = ({ id }: { id: string }) => {
  return (
    <Suspense fallback={<h1>Loading movie videos</h1>}>
      <MovieVideos id={id} />
    </Suspense>
  );
};
