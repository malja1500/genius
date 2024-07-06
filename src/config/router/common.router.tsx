// Layouts
import { LandingLayout } from "../../components/Layout/LandingLayout";
import { MainLayout } from "../../components/Layout/Layout";

import { CourseDetailsPage } from "../../screens/CourseDetails";
import { CoursesPage } from "../../screens/Courses";
import { LandingPage } from "../../screens/Landing";
import { NewsPage } from "../../screens/News";
import { NewsDetailsPage } from "../../screens/NewsDetails";
import { NotFoundPage } from "../../screens/NotFound";

export const commonRoute = [
  {
    path: "/",
    element: <LandingLayout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
    ],
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/courses",
        element: <CoursesPage />,
      },
      {
        path: "/courses/:courseId",
        element: <CourseDetailsPage />,
      },
      {
        path: "/news",
        element: <NewsPage />,
      },
      {
        path: "/news/:newsId",
        element: <NewsDetailsPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
];
