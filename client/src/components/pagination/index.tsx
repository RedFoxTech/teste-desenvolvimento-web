import ReactPaginate from "react-paginate";
import { IPagination } from "./interfaces";

export const Pagination = ({ switchPage, pageCount }: IPagination) => {
  return (
    <ReactPaginate
      previousLabel={"<"}
      nextLabel={">"}
      pageCount={pageCount}
      onPageChange={switchPage}
      containerClassName={"paginationUl"}
      previousLinkClassName={"previousBttn"}
      nextLinkClassName={"nextBttn"}
      disabledClassName={"paginationDisabled"}
      activeClassName={"paginationActive"}
      pageClassName={"paginationPages"}
    />
  );
};
