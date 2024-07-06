export interface CourseInterface {
  teacherName: string;
  classRoomName: string;
  typeName: string;
  statusName: string;
  levelName: string;
  cost: string;
  dissLikeCount: number;
  likeCount: number;
  commandCount: number;
  userIsLiked: boolean;
  userIsDissLiked: boolean;
  isCourseReseve: boolean;
  userFavorite: boolean;
  courseReseveId: string;
  userFavoriteId: string;
  userLikeId: string;
  currentUserSetRate: boolean;
  currentUserRateNumber: number;
  courseRate: number;
  title: string;
  describe: string;
  tumbImageAddress: string;
  lastUpdate: string;
  courseId: string;
  isUserFavorite: boolean;
}
