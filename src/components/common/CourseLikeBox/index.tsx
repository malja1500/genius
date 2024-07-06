import { CourseLikeButton } from "./CourseLikeButton";

interface CourseLikeBoxProps {
  courseId: string;
  isUserFavorite: boolean;
  courseFavoriteCourseId?: string;
  classes?: string;
}

const CourseLikeBox = ({
  courseId,
  isUserFavorite,
  courseFavoriteCourseId,
  classes,
}: CourseLikeBoxProps) => {
  return (
    <CourseLikeButton
      classes={classes}
      isCourseFavorite={isUserFavorite!}
      courseFavoriteCourseId={courseFavoriteCourseId!}
      courseId={courseId}
    />
  );
};
export { CourseLikeBox };
