import { Heading } from "../common/Heading";
import { MainButton } from "../common/MainButton";
import { LandingCoursesMapped } from "./Courses/LandingCoursesMapped";

const LandingCourses = () => {
  return (
    <div className="mt-14">
      <Heading>دوره‌های اموزشی</Heading>
      <div className="hidden dark:flex justify-center relative">
        <div className="bg-[blue] opacity-25 blur-[120px] w-[200px] h-[200px] rounded-full absolute top-0" />
      </div>
      <div className="mt-5">
        <LandingCoursesMapped />
      </div>
      <div className="flex justify-center mt-8">
        <MainButton text="مشاهده همه" href="/courses" />
      </div>
    </div>
  );
};

export { LandingCourses };
