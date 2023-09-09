import React from "react";

const Movies = () => {
  return (
    <>
      <div className="relative h-[350px] w-[280px] m-2 group">
        <div
          className="absolute top-0 left-0 w-full h-full bg-gray-400 bg-opacity-50 transition-opacity duration-300 opacity-0 group-hover:opacity-100 h-full w-full  flex justify-center items-center  "
          style={{ direction: "rtl" }}
        >
          <div>
            <h1 className="m-2">اسم الفيلم:</h1>
            <h1 className="m-2">تاريخ الاصدار :</h1>
            <h1 className="m-2">عدد المقيمين :</h1>
            <h1 className="m-2">التقييم :</h1>
          </div>
        </div>
        <div className="h-full w-full bg-blue-500">
          <h2 className="h-full w-full flex items-center justify-center">
            djfdjkg
          </h2>
        </div>
      </div>
    </>
  );
};

export default Movies;
