import { useRoutes } from "react-router-dom";
import Home from "@/pages/home/Home";
import Layout from "@/pages/layout/Layout";
import Signup from "../pages/register/Sign-up";
import Signin from "../pages/register/Sign-in";
import Notfound from "../pages/not_found/Not-found";

const Router = () => {
  return useRoutes([
    {
      path: "",
      element: <Layout />,
      children: [{ path: "", element: <Home /> }],
    },
    {
      path: "signup",
      element: <Signup />,
    },
    {
      path: "signin",
      element: <Signin />,
    },
    {
      path: "*",
      element: <Notfound />,
    },
  ]);
};

export default Router;
