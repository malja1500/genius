import { useNavigate } from "react-router-dom";

import { useDarkModeSelector } from "../../../redux/darkMode";
import { useIsUserLogin } from "../../../redux/user-login";

import { useDeleteCourseLike } from "../../../core/services/api/course/useDeleteCourseLike";
import { useDislikeCourse } from "../../../core/services/api/course/useDislikeCourse";
import { useLikeCourse } from "../../../core/services/api/course/useLikeCourse";
import { useDeleteLikeNews } from "../../../core/services/api/news/useDeleteLikeNews";
import { useNewsDislike } from "../../../core/services/api/news/useNewsDislike";
import { useNewsLike } from "../../../core/services/api/news/useNewsLike";
import { handleScroll } from "../../../core/utils/scroll-helper.utils";
import { showErrorToast } from "../../../core/utils/toast.utils";

import disLikeDarkIcon from "../../../assets/images/CourseDetails/Icons/dislike-dark.svg";
import disLikeIcon from "../../../assets/images/CourseDetails/Icons/dislike.svg";
import likeDarkIcon from "../../../assets/images/CourseDetails/Icons/like-dark.svg";
import likeIcon from "../../../assets/images/CourseDetails/Icons/like.svg";

interface LikeDislikeProps {
  nameData: string;
  likeCount: number;
  disLikeCount: number;
  courseId?: string;
  newsId?: string;
  likeId: string;
  isLike: boolean;
  isDislike: boolean;
}

const LikeDislike = ({
  nameData,
  likeCount,
  disLikeCount,
  courseId,
  newsId,
  likeId,
  isLike,
  isDislike,
}: LikeDislikeProps) => {
  const navigate = useNavigate();

  const darkMode = useDarkModeSelector();
  const isUserLogin = useIsUserLogin();

  const likeNews = useNewsLike();
  const deleteNewsLike = useDeleteLikeNews(newsId!);
  const likeCourse = useLikeCourse();
  const deleteCourseLike = useDeleteCourseLike();
  const dislikeNews = useNewsDislike();
  const dislikeCourse = useDislikeCourse();

  const unAuthenticatedLikeDislikeAction = (data: string) => {
    showErrorToast(`برای ${data} کردن باید وارد سایت شوید ...`);

    handleScroll();
    navigate("/login");
  };

  const handleLike = () => {
    if (isUserLogin === true) {
      if (isLike)
        newsId
          ? deleteNewsLike.mutate(likeId)
          : deleteCourseLike.mutate(likeId);
      else newsId ? likeNews.mutate(newsId) : likeCourse.mutate(courseId!);
    } else unAuthenticatedLikeDislikeAction("لایک");
  };

  const handleDislike = async () => {
    if (isUserLogin === true) {
      if (isDislike)
        newsId
          ? deleteNewsLike.mutate(likeId)
          : deleteCourseLike.mutate(likeId);
      else
        newsId ? dislikeNews.mutate(newsId) : dislikeCourse.mutate(courseId!);
    } else {
      unAuthenticatedLikeDislikeAction("لایک");
    }
  };

  return (
    <div className="flex gap-4 items-center mt-2">
      <span className="font-[500] text-text2 dark:text-darkText">
        آیا از این {nameData} راضی بودید؟
      </span>
      <div className="flex gap-2">
        <button
          className={`likeDislikeButton ${
            isLike && "bg-green-400 dark:bg-green-900"
          }`}
          onClick={handleLike}
        >
          <img src={darkMode ? likeDarkIcon : likeIcon} />
          <span className="likeDislikeButtonText">{likeCount || 0}</span>
        </button>
        <button
          className={`likeDislikeButton ${isDislike == true && "bg-red/50"}`}
          onClick={handleDislike}
        >
          <img src={darkMode ? disLikeDarkIcon : disLikeIcon} />
          <span className="likeDislikeButtonText">{disLikeCount || 0}</span>
        </button>
      </div>
    </div>
  );
};

export { LikeDislike };
