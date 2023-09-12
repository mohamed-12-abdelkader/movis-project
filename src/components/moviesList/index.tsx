import React from "react";
import Movies from "@/components/movies";
import PaginationComponent from "../pagination";
interface MoviesListProps {
  movies: any[]; // قد ترغب في تحديد نوع البيانات بناءً على هيكل البيانات الفعلي
  getPage: any;
  page: number;
}

const MoviesList: React.FC<MoviesListProps> = ({ movies, getPage, page }) => {
  return (
    <>
      <div className="mt-[100px] flex justify-center flex-wrap">
        {movies.map((movie, index) => (
          <Movies key={index} movie={movie} />
        ))}
      </div>
      <PaginationComponent getPage={getPage} page={page} />
    </>
  );
};

export default MoviesList;
