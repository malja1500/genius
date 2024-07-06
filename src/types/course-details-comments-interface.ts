export interface CommentItemsInterface {
  id: React.Key;
  image: string;
  title: string;
  createdAt: string;
  message: string;
  courseLikesCount: number | null;
  isChildren: boolean;
  children?: {
    id: React.Key;
    image: string;
    title: string;
    message: string;
    createdAt: string;
    courseLikesCount: number | null;
    isChildren: boolean;
  }[];
}
