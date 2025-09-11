// "use client"
import { Suspense, useState } from "react";
import MovieInfo, { getMovie } from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";
import Tab from "../../../../components/tab";
import Link from "next/link";
import SimilarMovies from "../../../../components/similar-movies";
import Credits from "../../../../components/credits";

interface IParams {
  params: Promise<{ id: string }>;
  // URLsearchParams: Promise<{ tab?: string }>;
}

const tabItems = ["credits", "videos", "similar"];

export async function generateMetadata({ params }: IParams) {
  // { searchParams }: { searchParams: { tab?: string } }
  const { id } = await params;
  // const selectedTab = tab === "videos" ? "videos" : tab === "similar" ? "similar" : "credits";
  const movie = await getMovie(id);
  return {
    title: movie.title,
  };
}

export default async function MovieDetail({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ tab?: string }>;
}) {
  const { id } = await params;
  const { tab } = await searchParams;
  // const [selectedTab, setSelectedTab] = useState(tabItems[0]); // 항상 첫 번째 탭이 활성화된 채로 켜지길 원한다면,,

  return (
    <div>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      {/* <Tab tabOptions={tabItems} selected="credits" id={id}></Tab> */}
      {/* <Suspense fallback={<h1>Loading movie videos</h1>}> */}
      {/* <MovieVideos id={id} /> */}
      {/* </Suspense> */}
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

      {/* <nav>
        <Link
          href={`/movies/${id}?tab=credits`}
          aria-current={tab === "info" ? "page" : undefined}
        >
          Info
        </Link>
        <Link
          href={`/movies/${id}?tab=videos`}
          aria-current={tab === "videos" ? "page" : undefined}
          >
          Videos
          </Link>
          </nav>  */}
    </div>
  );
}
