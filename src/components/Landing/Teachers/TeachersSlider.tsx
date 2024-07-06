import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Navigation, Pagination } from "swiper/modules";

import { useTeachers } from "../../../core/services/api/teacher/useTeachers";
import { showErrorToast } from "../../../core/utils/toast.utils";

import { TeacherItem } from "./TeacherItem";
import { TeacherSkeleton } from "./TeacherSkeleton";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const TeachersSlider = () => {
  const { data, isLoading, error } = useTeachers();

  if (error) showErrorToast("مشکلی در دریافت اساتید به وجود آمد !");

  const teachersSkeleton = [1, 2, 3, 4, 5];

  const teachers = data?.slice(0, 7);

  return (
    <Swiper
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="my-swiper lg:w-[1320px]"
      breakpoints={{
        768: {
          slidesPerView: 1,
        },
        1000: {
          slidesPerView: 4,
        },
      }}
    >
      {isLoading ? (
        <div className="flex gap-5">
          {teachersSkeleton.map((value) => (
            <SwiperSlide>
              <TeacherSkeleton key={value} />
            </SwiperSlide>
          ))}
        </div>
      ) : (
        teachers?.map((teacher) => (
          <SwiperSlide
            key={teacher.teacherId}
            className="even:mt-10 min-h-[200px]"
          >
            <TeacherItem teacher={teacher} />
          </SwiperSlide>
        ))
      )}
    </Swiper>
  );
};

export { TeachersSlider };
