import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
// import User, {loader as userLoader} from "./pages/User";
import User from "./pages/User";
import AppLayout from "./pages/AppLayout";
import { getAllUser } from "./services/ApiUsers";
import Error from "./components/Error";
import React from 'react';
import UserDetail, {loader as getUserDetail} from "./pages/UserDetail";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/user",
        element: <User />,
        loader: getAllUser,
      },
      {
        path: "/user/:id",
        element: <UserDetail />,
        loader: getUserDetail,
      },
    ],
  },
]);

function App () {
  return <RouterProvider router={router} />;
};

export default App;
