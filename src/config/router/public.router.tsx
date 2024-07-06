import { createBrowserRouter } from "react-router-dom";

import { commonRoute } from "./common.router";

// Layouts
import { MainLayout } from "../../components/Layout/Layout";

import { LoginPage } from "../../screens/Login";
import { RegisterPage } from "../../screens/Register";
import { ForgetPasswordPage } from "../../screens/ForgetPassword";
import { ResetPasswordPage } from "../../screens/ResetPassword";

export const publicRoutes = createBrowserRouter([
  ...commonRoute,
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/forget-password",
        element: <ForgetPasswordPage />,
      },
      {
        path: "/reset-password/:configValue?",
        element: <ResetPasswordPage />,
      },
    ],
  },
]);
