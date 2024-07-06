import ReactPaginate from "react-paginate";

import { useDarkModeSelector } from "../../../redux/darkMode";

import rightArrow from "../../../assets/images/Courses/Icons/arrow-right.svg";
import leftArrow from "../../../assets/images/Courses/Icons/arrow-left.svg";
import rightDarkArrow from "../../../assets/images/Courses/Icons/arrow-right-dark.svg";
import leftDarkArrow from "../../../assets/images/Courses/Icons/arrow-left-dark.svg";

interface PaginationProps {
  handlePageClick: (event: any) => void;
  pageCount: number;
}

const Pagination = ({ handlePageClick, pageCount }: PaginationProps) => {
  const darkMode = useDarkModeSelector();

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel={<img src={darkMode ? rightDarkArrow : rightArrow} />}
      previousLabel={<img src={darkMode ? leftDarkArrow : leftArrow} />}
      onPageChange={handlePageClick}
      pageRangeDisplayed={5}
      pageCount={pageCount}
      renderOnZeroPageCount={null}
      className="paginationWrapper"
      nextClassName="paginationNext"
      previousClassName="paginationPrevious"
      pageClassName="paginationPage"
      activeClassName="paginationActive"
    />
  );
};

export { Pagination };
