export type CourseLessonInterface = {
  title: string;
  time: string;
  isOpen?: boolean;
  items: {
    title: string;
    time: string;
    downloadLink: string;
  }[];
};
