export interface NewsComment {
  id: string;
  newsId: string;
  parentId: string;
  currentUserLikeId: string;
  inserDate: string;
  title: string;
  describe: string;
  likeCount: string;
  dissLikeCount: string;
  replyCount: string;
  currentUserIsLike: boolean;
  currentUserIsDissLike: boolean;
  autor: string;
  pictureAddress: string | null;
}
