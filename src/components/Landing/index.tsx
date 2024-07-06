import { LandingCategories } from "./LandingCategories";
import { LandingCourses } from "./LandingCourses";
import { LandingHeroSection } from "./LandingHeroSection";
import { LandingNews } from "./LandingNews";
import { LandingServices } from "./LandingServices";
import { LandingTeachers } from "./LandingTeachers";

const Landing = () => {
  return (
    <>
      <LandingHeroSection />
      <LandingServices />
      <LandingCourses />
      <LandingCategories />
      <LandingTeachers />
      <LandingNews />
    </>
  );
};

export { Landing };
