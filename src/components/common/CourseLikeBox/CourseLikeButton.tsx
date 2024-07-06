import { RiHeart3Fill, RiHeart3Line } from "react-icons/ri";

import { useAddCourseFavorite } from "../../../core/services/api/course/useAddCourseFavorite";
import { useDeleteFavoriteCourse } from "../../../core/services/api/course/useDeleteFavoriteCourse";

interface CourseLikeButtonProps {
  classes?: string;
  isCourseFavorite: boolean;
  courseFavoriteCourseId: string;
  courseId: string;
}

const CourseLikeButton = ({
  classes,
  courseFavoriteCourseId,
  courseId,
  isCourseFavorite,
}: CourseLikeButtonProps) => {
  const addCourseFavorite = useAddCourseFavorite();
  const deleteFavoriteCourse = useDeleteFavoriteCourse();

  const handleCourseLikeBox = () => {
    isCourseFavorite
      ? deleteFavoriteCourse.mutate(courseFavoriteCourseId)
      : addCourseFavorite.mutate(courseId);
  };

  return (
    <div className={`courseLikeBox ${classes}`} onClick={handleCourseLikeBox}>
      {isCourseFavorite ? <RiHeart3Fill /> : <RiHeart3Line />}
    </div>
  );
};

export { CourseLikeButton };
