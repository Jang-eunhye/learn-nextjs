export type MovieInfoType = {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  overview: string;
  homepage: string;
};

export type MoviePreviewType = Pick<MovieInfoType, "id" | "title" | "poster_path">;

export type CastType = {
  id: number;
  credit_id: string;
  name: string;
  character: string;
  profile_path: string | null;
  order: number;
};

export type VideoType = {
  id: number;
  key: string;
  name: string;
  site: string;
  type: string;
};