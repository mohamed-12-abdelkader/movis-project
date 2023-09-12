import React, { useEffect, useState } from "react";
import axios from "axios";
import MoviesList from "@/components/moviesList";
import NavigationBar from "@/components/navbar";

interface Movie {
  id: number;
  title: string;
  // يمكنك إضافة المزيد من الخصائص هنا وفقًا لبيانات الأفلام الفعلية
}

export default function Home() {
  const [originalMovies, setOriginalMovies] = useState<Movie[]>([]);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [searchWord, setSearchWord] = useState<string>(""); // تعريف searchWord هنا
  const [page, setpage] = useState(0);

  const getAllMovies = async () => {
    try {
      const res = await axios.get(
        "https://api.themoviedb.org/3/movie/popular?api_key=281ad68f27571f7c4aeef0d17d4bad0e&language=en-US&page=1"
      );
      setOriginalMovies(res.data.results);
      setpage(res.data.total_pages);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  // Details

  //git page

  const getPage = async (page: number) => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=281ad68f27571f7c4aeef0d17d4bad0e&language=en-US&page=${page}`
      );
      setOriginalMovies(res.data.results);
      setpage(res.data.total_pages);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    getAllMovies();
  }, []);

  useEffect(() => {
    if (searchWord) {
      const fetchData = async () => {
        try {
          const res = await axios.get(
            `https://api.themoviedb.org/3/search/movie?api_key=281ad68f27571f7c4aeef0d17d4bad0e&query=${searchWord}&language=ar`
          );
          setMovies(res.data.results);
          setpage(res.data.total_pages);
        } catch (error) {
          console.error("Error fetching movies:", error);
        }
      };
      fetchData();
    } else {
      setMovies(originalMovies);
    }
  }, [searchWord, originalMovies]);

  return (
    <>
      <NavigationBar onSearch={setSearchWord} />{" "}
      <MoviesList movies={movies} getPage={getPage} page={page} />
    </>
  );
}
