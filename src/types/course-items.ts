import { CourseLessonInterface } from "./course-lesson";

export interface CourseItemsInterface {
  slice?: any;
  length?: number;
  id: React.Key;
  image: string;
  title: string;
  description?: string;
  lessonsCount: number;
  hour: number;
  createdAt: string;
  teacherName: string;
  teacherJob?: string;
  teacherImage?: string;
  studentsCount: number;
  price: number;
  courseStatus?: string;
  courseEndTime?: string;
  courseLessons?: CourseLessonInterface[];
}
