import MainLayout from "../MainLayout";
import PersistLogin from "../state/context/hooks/PersistLogin";
import RequireAuth from "../state/context/hooks/RequireAuth";
// pages
import Home from "../pages/home/Home";
import SignIn from "../pages/authentication/SignIn";
import SignUp from "../pages/authentication/SignUp";
import CompleteSignUp from "../pages/authentication/CompleteSignUp";
import Community from "../pages/community/Community";
import Schedule from "../components/schedule/Schedule";
// layouts
import _Home from "../pages/layouts/community/home/Home";
import _Reading from "../pages/layouts/community/reading/Reading";
//
import Administration from "../pages/admin/Administration";
//
import Dashboard from "../pages/layouts/dashboard/Dashboard";
import Course from "../pages/layouts/course/Course";
import Reading from "../pages/layouts/course/Reading";
import Post from "../pages/layouts/posts/Post";
import School from "../pages/layouts/school/School";
import SchoolDetails from "../pages/layouts/school/SchoolDetails";
import User from "../pages/layouts/users/User";
import UserDetails from "../pages/layouts/users/UserDetails";
import Setting from "../pages/layouts/setting/Setting";

import NotFound from "../pages/others/404";
import Unauthorized from "../pages/others/Unauthorized";

// const ROLES = {
//   admin: "admin",
//   user: "user",
//   student: "student",
// };

export const routes = [
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/signin", element: <SignIn /> },
      { path: "/signup", element: <SignUp /> },
      { path: "/signup/complete", element: <CompleteSignUp /> },
      { path: "/schedule", element: <Schedule /> },
      {
        path: "/admin",
        element: <Administration />,
        children: [
          { path: "/admin", element: <Dashboard /> },
          { path: "courses", element: <Course /> },
          { path: "courses/reading/:course", element: <Reading /> },
          { path: "posts", element: <Post /> },
          { path: "school", element: <School /> },
          {
            path: "school/:school_code/details",
            element: <SchoolDetails />,
          },
          { path: "users", element: <User /> },
          { path: "users/details", element: <UserDetails /> },
          { path: "settings", element: <Setting /> },
        ],
      },
      {
        path: "/community",
        element: <Community />,
        children: [
          { path: "/community", element: <_Home /> },
          { path: "reading", element: <_Reading /> },
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
