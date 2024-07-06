import { Close } from "@mui/icons-material";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Slide, { SlideProps } from "@mui/material/Slide";
import { Dispatch, SetStateAction, forwardRef } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import { CourseInterface } from "../../../types/course";

import { Link } from "../../common/Link";
import { SearchBox } from "../../common/SearchBox";

import blankThumbnail from "../../../assets/images/Courses/blank-thumbnail.jpg";

interface LandingSearchModalProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  setSearchValue: Dispatch<SetStateAction<string | undefined>>;
  handleClickOpen: () => void;
  searchValue: string | undefined;
  searchCourses: CourseInterface[] | undefined;
  fetchMoreData: () => void;
  hasMore: boolean;
}

const Transition = forwardRef<unknown, SlideProps>(function Transition(
  props,
  ref
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const LandingSearchModal = ({
  open,
  searchValue,
  searchCourses,
  fetchMoreData,
  setOpen,
  setSearchValue,
  handleClickOpen,
  hasMore,
}: LandingSearchModalProps) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
      maxWidth="xl"
      classes={{
        paper: "min-h-[400px] dark:bg-gray-900",
      }}
    >
      <DialogContent>
        <Close
          className="text-red absolute top-2 right-2 cursor-pointer"
          onClick={handleClose}
        />
        <div className="mt-5">
          <SearchBox
            placeholder="چی میخوای یاد بگیری ؟"
            display="flex justify-center items-center"
            inputClasses="lg:w-[800px] shadow-primaryShadow"
            isLanding={true}
            onKeyUp={handleClickOpen}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
          <h2 className="font-bold mt-5 dark:text-darkText">
            نتایج جستجوی شما : {searchCourses && searchCourses.length + " دوره"}
          </h2>
          <div className="flex flex-col gap-4">
            {searchCourses && (
              <InfiniteScroll
                dataLength={searchCourses.length}
                next={fetchMoreData}
                hasMore={hasMore}
                loader={undefined}
                endMessage={
                  <p style={{ textAlign: "center" }}>
                    <b>شما همه را دیده اید!</b>
                  </p>
                }
                refreshFunction={() => {}}
                pullDownToRefresh
                pullDownToRefreshThreshold={50}
                pullDownToRefreshContent={
                  <h3 style={{ textAlign: "center" }}>
                    &#8595; برای آپدیت،پایین بکشید
                  </h3>
                }
                releaseToRefreshContent={
                  <h3 style={{ textAlign: "center" }}>
                    &#8593; برای بازخوانی رها کنید
                  </h3>
                }
              >
                <div className="grid lg:grid-cols-2 gap-3 mt-5">
                  {searchCourses.map((course) => (
                    <div key={course.courseId} className="flex gap-3">
                      <Link to={`/courses/${course.courseId}`}>
                        <img
                          src={
                            !course.tumbImageAddress ||
                            course.tumbImageAddress === "Not-set" ||
                            course.tumbImageAddress === "<string>"
                              ? blankThumbnail
                              : course.tumbImageAddress
                          }
                          className="w-[100px] h-[70px] rounded-md"
                        />
                      </Link>
                      <div>
                        <Link to={`/courses/${course.courseId}`}>
                          <h4 className="font-bold dark:text-[#8f8e8e]">
                            {course.title}
                          </h4>
                        </Link>
                        <span className="dark:text-[#8f8e8e]">
                          <span className="mr-2">مدرس دوره :</span>{" "}
                          {course.teacherName}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </InfiniteScroll>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export { LandingSearchModal };
