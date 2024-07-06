export interface CourseComment {
  id: string;
  courseId: string;
  parentId: string;
  title: string;
  describe: string;
  author: string;
  userId: number;
  insertDate: string;
  accept: boolean;
  acceptReplysCount: number;
  disslikeCount: number;
  likeCount: number;
  currentUserEmotion: string;
  currentUserLikeId: string;
  pictureAddress: string | null;
}
