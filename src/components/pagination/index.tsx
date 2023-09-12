import React from "react";
import ReactPaginate from "react-paginate";

interface PaginationProps {
  getPage: any;
  page: number;
}
const PaginationComponent: React.FC<PaginationProps> = ({ getPage, page }) => {
  const handlePageClick = (data: any) => {
    console.log(data);
    getPage(data.selected + 1);
  };

  return (
    <>
      <ReactPaginate
        breakLabel="..."
        nextLabel="التالى"
        onPageChange={handlePageClick}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        pageCount={page}
        previousLabel=" السابق"
        containerClassName={"pagination"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item next"}
        nextClassName={"page-item next "}
        breakClassName={"page-item"}
        activeClassName={"activ"}
      />
    </>
  );
};

export default PaginationComponent;
