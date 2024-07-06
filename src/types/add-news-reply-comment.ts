export interface AddNewsReplyComment {
  newsId: string;
  userIpAddress?: string;
  title: string;
  describe: string;
  userId?: string;
  parentId: string;
}
