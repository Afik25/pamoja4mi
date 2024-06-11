import MainLayout from "../MainLayout";
import PersistLogin from "../state/context/hooks/PersistLogin";
import RequireAuth from "../state/context/hooks/RequireAuth";
// pages
import Home from "../pages/home/Home";
import Community from "../pages/community/Community";
import Schedule from "../components/schedule/Schedule";
// layouts
import _Home from "../pages/layouts/community/home/Home";
import _Reading from "../pages/layouts/community/reading/Reading";
import Favorite from "../pages/layouts/community/favorite/Favorite";
import Library from "../pages/layouts/community/library/Library";

import NotFound from "../pages/others/404";
import Unauthorized from "../pages/others/Unauthorized";

const ROLES = {
  admin: "admin",
  user: "user",
  student: "student",
};

export const routes = [
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/schedule", element: <Schedule /> },
      {
        path: "/community",
        element: <Community />,
        children: [
          { path: "/community", element: <_Home/> },
          { path: "reading", element: <_Reading/> },
          { path: "favorite", element: <Favorite/> },
          { path: "library", element: <Library/> },
          // {
          //   path: "courses",
          //   element: <Course />,
          //   children: [
          //     { index: true, element: <Content/> },
          //     { path: "reading", element: <Reading/> },
          //   ],
          // },
        ],
      },
      { path: "*", element: <NotFound /> },
      { path: "/unauthorized", element: <Unauthorized /> },
    ],
  },
];
