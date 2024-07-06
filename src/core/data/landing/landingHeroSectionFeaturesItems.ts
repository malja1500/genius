import teacherIcon from "../../../assets/images/Landing/LandingFeatures/teacher.svg";
import coursesIcon from "../../../assets/images/Landing/LandingFeatures/courses.svg";
import peopleIcon from "../../../assets/images/Landing/LandingFeatures/people.svg";

interface landingHeroSectionFeaturesItemsInterface {
  number: number;
  label: string;
  icon: string;
}

export const landingHeroSectionFeaturesItems = (
  teacherCount: number,
  coursesCount: number,
  studentsCount: number
) => {
  const landingHeroSectionFeatures: landingHeroSectionFeaturesItemsInterface[] =
    [
      { number: teacherCount, label: "مدرس مجرب", icon: teacherIcon },
      { number: coursesCount, label: "دوره", icon: coursesIcon },
      { number: studentsCount, label: "نفر دانشجو", icon: peopleIcon },
    ];

  return landingHeroSectionFeatures;
};
