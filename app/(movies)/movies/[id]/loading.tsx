"use client"
import { useParams } from "next/navigation";

export default function Loading() {
  const { id } = useParams();
  return <h2>Loading a movie :{id}</h2>;
}