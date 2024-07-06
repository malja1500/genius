import { Dispatch, SetStateAction } from "react";

import { CourseInterface } from "../../../types/course";

import { CourseItem } from "../../common/CourseItem";
import { CourseItemSkeleton } from "../../common/CourseItemSkeleton";
import { CourseItemSkeletonStyleTwo } from "../../common/CourseItemSkeletonStyleTwo";
import { CourseItemStyleTwo } from "../../common/CourseItemStyleTwo";
import { Pagination } from "../../common/Pagination";

interface PaginatedCoursesProps {
  courses: CourseInterface[];
  totalCount: number;
  isLoading: boolean;
  itemsPerPage: number;
  coursesStyle: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

const PaginatedCourses = ({
  courses,
  totalCount,
  isLoading,
  itemsPerPage,
  coursesStyle,
  setCurrentPage,
}: PaginatedCoursesProps) => {
  const pageCount = Math.ceil(totalCount / itemsPerPage);

  const handlePageClick = (event: { selected: number }) => {
    setCurrentPage(event.selected);
  };

  return (
    <div className="paginatedCoursesWrapper">
      <div className="paginatedCourses">
        {isLoading ? (
          coursesStyle === 1 ? (
            <>
              <CourseItemSkeleton />
              <CourseItemSkeleton />
              <CourseItemSkeleton />
              <CourseItemSkeleton />
              <CourseItemSkeleton />
              <CourseItemSkeleton />
            </>
          ) : (
            <div className="courseItemSkeletonStyleTwoWrapper">
              <CourseItemSkeletonStyleTwo />
              <CourseItemSkeletonStyleTwo />
              <CourseItemSkeletonStyleTwo />
              <CourseItemSkeletonStyleTwo />
              <CourseItemSkeletonStyleTwo />
              <CourseItemSkeletonStyleTwo />
            </div>
          )
        ) : (
          courses.map((course) =>
            coursesStyle === 1 ? (
              <CourseItem key={course.courseId} course={course} />
            ) : (
              <CourseItemStyleTwo key={course.courseId} course={course} />
            )
          )
        )}
      </div>
      <Pagination handlePageClick={handlePageClick} pageCount={pageCount} />
    </div>
  );
};

export { PaginatedCourses };
