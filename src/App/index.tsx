import { ThemeProvider } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

import { getItem } from "../core/services/common/storage.services";

import { persistor, store } from "../redux/store";

import { theme } from "../config";
import { authRoutes } from "../config/router/auth";
import { publicRoutes } from "../config/router/public.router";

import { CrispChat } from "../components/CrispChat";
import { ToastContainer } from "../components/common/ToastContainer";

import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const queryClient = new QueryClient();

  const isLoggedIn = getItem("token");

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={theme}>
            <RouterProvider router={isLoggedIn ? authRoutes : publicRoutes} />
            <ToastContainer rtl />
            <CrispChat />
          </ThemeProvider>
        </PersistGate>
      </Provider>
      {/* <ReactQueryDevtools buttonPosition="bottom-left" /> */}
    </QueryClientProvider>
  );
};

export { App };
