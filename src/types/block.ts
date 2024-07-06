import { JSXElementConstructor, ReactElement, ReactNode } from "react";

import { CourseLessonInterface } from "./course-lesson";

export interface BlockInterface {
  type: string;
  data: {
    text:
      | string
      | number
      | boolean
      | ReactElement<any, string | JSXElementConstructor<any>>
      | Iterable<ReactNode>
      | null
      | undefined;
    level?: number;
    style?: string;
    items: string[];
    lessons: CourseLessonInterface[];
  };
}
