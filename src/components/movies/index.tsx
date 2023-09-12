import React from "react";
interface MovieProps {
  movie: any; // قد ترغب في تحديد نوع البيانات بناءً على هيكل البيانات الفعلي للفيلم
}
const Movies: React.FC<MovieProps> = ({ movie }) => {
  return (
    <>
      <div className="relative h-[350px] w-[280px] m-2 group">
        <div
          className="absolute top-0 left-0 w-full h-full bg-gray-400 bg-opacity-50 transition-opacity duration-300 opacity-0 group-hover:opacity-100 h-full w-full  flex justify-center items-center  "
          style={{ direction: "rtl" }}
        >
          <div>
            <h1 className="m-2">اسم الفيلم:{movie.original_title}</h1>
            <h1 className="m-2">تاريخ الاصدار :{movie.release_date}</h1>
            <h1 className="m-2">عدد المقيمين :{movie.vote_count}</h1>
            <h1 className="m-2">التقييم :{movie.vote_average}</h1>
          </div>
        </div>
        <div className="h-full w-full bg-blue-500">
          <img
            className="h-[100%] w-[100%]"
            src={`https://image.tmdb.org/t/p/w500/` + movie.poster_path}
          />
        </div>
      </div>
    </>
  );
};

export default Movies;
