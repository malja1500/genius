import { useState } from "react";

import { useCourses } from "../../core/services/api/course/useCourses";
import { showErrorToast } from "../../core/utils/toast.utils";

import { CoursesHeroSection } from "../Courses/CoursesHeroSection";
import { PaginatedCourses } from "./CourseItems/PaginatedCourses";
import { Filters } from "./CoursesFilter/Filters";
import { FilterTitleTrash } from "./CoursesFilter/FilterTitleTrash";
import { CoursesTopSection } from "./CoursesTopSection";

const Courses = () => {
  const [coursesStyle, setCoursesStyle] = useState(1);
  const [query, setQuery] = useState<string>();
  const [currentPage, setCurrentPage] = useState(0);
  const [sortingCol, setSortingCol] = useState<string>();
  const [listTechState, setListTechState] = useState<string[]>([]);
  const [teacherId, setTeacherId] = useState<number>();
  const [courseLevel, setCourseLevel] = useState<number>();
  const [courseTypeId, setCourseTypeId] = useState<number>();
  const [costDown, setCostDown] = useState<number>();
  const [costUp, setCostUp] = useState<number>();
  const [sortType, setSortType] = useState<string>();

  const { data, error, isLoading } = useCourses(
    currentPage,
    9,
    sortingCol,
    sortType,
    query ? query : undefined,
    costDown,
    costUp,
    listTechState.length > 0 ? 1 : undefined,
    listTechState.length > 0 ? listTechState.toString() : undefined,
    courseLevel,
    courseTypeId,
    undefined,
    undefined,
    teacherId
  );

  if (error) showErrorToast("مشکلی در دریافت دوره ها به وجود آمد !");

  return (
    <>
      <CoursesHeroSection />
      <div className="coursesMainSection">
        <div className="coursesFilterSectionWrapper">
          <div className="px-2">
            <FilterTitleTrash
              setSortingCol={setSortingCol}
              setListTechState={setListTechState}
              setTeacherId={setTeacherId}
              setCourseLevel={setCourseLevel}
              setCourseTypeId={setCourseTypeId}
              setCostDown={setCostDown}
              setCostUp={setCostUp}
              setSortType={setSortType}
            />
          </div>
          <div className="mt-4">
            <Filters
              setListTechState={setListTechState}
              setTeacherId={setTeacherId}
              setQuery={setQuery}
              setCourseLevel={setCourseLevel}
              setCourseTypeId={setCourseTypeId}
              setCostDown={setCostDown}
              setCostUp={setCostUp}
              setSortType={setSortType}
            />
          </div>
        </div>
        <div className="lg:w-[957px] mt-3">
          <CoursesTopSection
            coursesStyle={coursesStyle}
            setCoursesStyle={setCoursesStyle}
            setQuery={setQuery}
            setSortingCol={setSortingCol}
            setCurrentPage={setCurrentPage}
          />
          <PaginatedCourses
            courses={data?.courseFilterDtos || []}
            totalCount={data?.totalCount || 0}
            isLoading={isLoading}
            itemsPerPage={9}
            coursesStyle={coursesStyle}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </>
  );
};

export { Courses };
