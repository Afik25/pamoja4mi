import React from "react";
import "./administration.css";
import { NavLink } from "../../routes/NavLink";
import { Outlet } from "react-router-dom";
import {
  MdOutlineDashboard,
  BiEnvelope,
  IoNotificationsOutline,
  MdMenuBook,
  MdBookmarks,
  FaUsers,
  MdOutlineSettingsSuggest,MdSchool
} from "../../middlewares/icons";

const Administration = () => {
  return (
    <div className="administration">
      <div className="admin-header">
        <div className="admin-header-container">
          <img src={process.env.PUBLIC_URL + "/logo.png"} className="logo" />
          <div className="ad-navigations">
            <NavLink
              activeClassName="active-option"
              inactiveClassName="inactive-option"
              className="link"
              to="/admin"
              exact={true}
            >
              <MdOutlineDashboard className="option-icon" />
              <span>Dashboard</span>
            </NavLink>
            <NavLink
              activeClassName="active-option"
              inactiveClassName="inactive-option"
              className="link"
              to="/admin/courses"
            >
              <MdMenuBook className="option-icon" />
              <span>Courses</span>
            </NavLink>
            <NavLink
              activeClassName="active-option"
              inactiveClassName="inactive-option"
              className="link"
              to="/admin/posts"
            >
              <MdBookmarks className="option-icon" />
              <span>Posts</span>
            </NavLink>
            <NavLink
              activeClassName="active-option"
              inactiveClassName="inactive-option"
              className="link"
              to="/admin/school"
            >
              <MdSchool className="option-icon" />
              <span>School</span>
            </NavLink>
            <NavLink
              activeClassName="active-option"
              inactiveClassName="inactive-option"
              className="link"
              to="/admin/users"
            >
              <FaUsers className="option-icon" />
              <span>Users</span>
            </NavLink>
            <NavLink
              activeClassName="active-option"
              inactiveClassName="inactive-option"
              className="link"
              to="/admin/settings"
            >
              <MdOutlineSettingsSuggest className="option-icon" />
              <span>Settings</span>
            </NavLink>
          </div>
          <div className="options">
            <div className="option">
              <IoNotificationsOutline className="icon-element" />
              <span className="counter">2</span>
            </div>
            <div className="option">
              <BiEnvelope className="icon-element" />
              <span className="counter">100</span>
            </div>
            <div className="profile">
              <img
                src={process.env.PUBLIC_URL + "/user.png"}
                alt="user-profile"
              />
              <h3 className="title t-2">Username</h3>
            </div>
            <button className="button">Logout</button>
          </div>
        </div>
      </div>
      <div className="admin-body">
        <div className="admin-body-container">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Administration;
