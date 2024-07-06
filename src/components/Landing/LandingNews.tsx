import { Heading } from "../common/Heading";
import { MainButton } from "../common/MainButton";
import { LandingNewsItemsMapped } from "./News/LandingNewsItemsMapped";

const LandingNews = () => {
  return (
    <div className="mt-14 lg:w-[1240px] mx-auto">
      <Heading>اخبار و مقالات</Heading>
      <div className="lg:w-[1300px] mx-auto">
        <LandingNewsItemsMapped />
      </div>
      <div className="flex justify-center items-center mt-12">
        <MainButton text="مشاهده همه" href="/news" />
      </div>
    </div>
  );
};

export { LandingNews };
