import { createBrowserRouter } from "react-router-dom";

import { commonRoute } from "./common.router";

// Layouts
import { DashboardLayout } from "../../components/Layout/Dashboard/DashboardLayout";

import { AllCoursesPage } from "../../screens/AllCourses";
import { CourseReservesPage } from "../../screens/CourseReserves";
import { DashboardPage } from "../../screens/Dashboard";
import { EditProfilePage } from "../../screens/EditProfile";
import { MyCoursesPage } from "../../screens/MyCourses";

export const authRoutes = createBrowserRouter([
  ...commonRoute,
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: "/dashboard/my-courses",
        element: <MyCoursesPage />,
      },
      {
        path: "/dashboard/all-courses",
        element: <AllCoursesPage />,
      },
      {
        path: "/dashboard/edit-Profile",
        element: <EditProfilePage />,
      },
      {
        path: "/dashboard/course-reserves",
        element: <CourseReservesPage />,
      },
    ],
  },
]);
