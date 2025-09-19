"use client";
import Link from "next/link";
import styles from "../styles/movie.module.css";
import { useRouter } from "next/navigation";
import { MoviePreviewType } from "../type/movie";

export default function Movie({ title, id, poster_path }: MoviePreviewType) {
  const router = useRouter();
  const onClick = () => {
    router.push(`/movies/${id}?tab=credits`);
  };
  return (
    <div className={styles.movie}>
      <img src={poster_path} alt={title} onClick={onClick} />
      <Link prefetch href={`/movies/${id}?tab=credits`}>
        {title}
      </Link>
    </div>
  );
}
