import React, { useState } from "react";
import "./community.css";
import Head from "../../components/head/Head";
import { NavLink } from "../../routes/NavLink";
import { Link, Outlet } from "react-router-dom";
import {
  GoHome,
  GrFavorite,
  IoLibraryOutline,
  GiArtificialIntelligence,
  IoSettingsOutline,
  IoHelp,
  FcAbout,
  TiArrowShuffle,
  MdOutlineLocationOn,
} from "../../middlewares/icons";
import Modal from "../../components/modal/Modal.jsx";

const Community = () => {
  return (
    <div className="community">
      <Head />
      <div className="body">
        <div className="container">
          <div className="left">
            <div className="left-container">
              <h2 className="title t-2">More actions</h2>
              <hr />
              <NavLink
                activeClassName="active-option"
                inactiveClassName="inactive-option"
                className="item"
                to="/community/setting"
              >
                <IoSettingsOutline className="icon" />
                <span>Setting</span>
              </NavLink>
              <NavLink
                activeClassName="active-option"
                inactiveClassName="inactive-option"
                className="item"
                to="/community/help"
              >
                <IoHelp className="icon" />
                <span>Help</span>
              </NavLink>
              <NavLink
                activeClassName="active-option"
                inactiveClassName="inactive-option"
                className="item"
                to="/community/about"
              >
                <FcAbout className="icon" />
                <span>About</span>
              </NavLink>

              <NavLink
                activeClassName="active-option"
                inactiveClassName="inactive-option"
                className="item"
                to="/community/code_of_conduct"
              >
                <TiArrowShuffle className="icon" />
                <span>Code of conduct</span>
              </NavLink>
              <NavLink
                activeClassName="active-option"
                inactiveClassName="inactive-option"
                className="item"
                to="/community/privacy_policy"
              >
                <TiArrowShuffle className="icon" />
                <span>Privacy policy</span>
              </NavLink>
              <NavLink
                activeClassName="active-option"
                inactiveClassName="inactive-option"
                className="item"
                to="/community/terms_of_use"
              >
                <TiArrowShuffle className="icon" />
                <span>Terms of use</span>
              </NavLink>
              <NavLink
                activeClassName="active-option"
                inactiveClassName="inactive-option"
                className="item"
                to="/community/how_to_contibute"
              >
                <TiArrowShuffle className="icon" />
                <span>How to contribute ?</span>
              </NavLink>
            </div>
            <p className="title t-3">v1.0.0 (beta)</p>
          </div>
          <div className="middle">
            <Outlet />
          </div>
          <div className="right">
            <div className="right-head">
              <h3 className="title t-2">Trending events</h3>
            </div>
            <div className="right-body">
              <Link to={""} className="rb-item link">
                <div className="side-left">
                  <span>29</span>
                  <span>April</span>
                  <span>2024</span>
                </div>
                <div className="side-right">
                  <h3 className="title t-2">The future of innovation</h3>
                  <p className="title t-3">
                    <MdOutlineLocationOn className="icon" />
                    <span>Conference room</span>
                  </p>
                  <p className="title t-3">From 08:00 AM to 06:00 PM</p>
                </div>
              </Link>
              <Link to={""} className="rb-item link">
                <div className="side-left">
                  <span>29</span>
                  <span>April</span>
                  <span>2024</span>
                </div>
                <div className="side-right">
                  <h3 className="title t-2">The future of innovation</h3>
                  <p className="title t-3">
                    <MdOutlineLocationOn className="icon" />
                    <span>Conference room</span>
                  </p>
                  <p className="title t-3">From 08:00 AM to 06:00 PM</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
