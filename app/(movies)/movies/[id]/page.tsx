// "use client"
import { Suspense, useState } from "react";
import MovieInfo, { getMovie } from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";
import Tab from "../../../../components/tab";
import SimilarMovies from "../../../../components/similar-movies";
import Credits from "../../../../components/credits";

type IParams = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ tab?: string }>
}

export async function generateMetadata({ params }: IParams) {
  const { id } = await params;
  const movie = await getMovie(id);
  return {
    title: movie.title,
  };
}

export default async function MovieDetail({
  params,
  searchParams,
}: IParams) {
  const { id } = await params;
  const { tab } = await searchParams;

  return (
    <div>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Tab id={id} active={tab} />

      {/* 아래 탭 영역만 변경 */}
      <Suspense key={tab} fallback={<h2>Loading...</h2>}>
        {tab === "similar" ? (
          <SimilarMovies id={id} />
        ) : tab === "videos" ? (
          <MovieVideos id={id} />
        ) : (
          <Credits id={id} />
        )}
      </Suspense>
    </div>
  );
}
