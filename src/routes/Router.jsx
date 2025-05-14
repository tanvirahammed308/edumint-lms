import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Blogs from "../pages/Blogs";
import About from "../pages/About";
import Instructor from "../pages/Instructor";
import Courses from "../pages/Courses";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,

    //   errorElement: <ErrorPage />,

      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/instructor",
          element: <Instructor/>,
        },
        {
          path: "/courses",
          element: <Courses/>,
        },
        {
          path: "/contact",
          element: <Contact/>,
        },
        {
          path: "/blogs",
          element: <Blogs/>,
        },
        {
          path: "/about",
          element: <About/>,
        },
      ],
    },
  ]);
  