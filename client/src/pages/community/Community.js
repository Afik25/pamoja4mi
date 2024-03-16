import React from "react";
import "./community.css";
import Head from "../../components/head/Head";
import { NavLink } from "../../routes/NavLink";
import { Outlet } from "react-router-dom";
import {
  GrFavorite,
  IoLibraryOutline,
  GiArtificialIntelligence,
  IoSettingsOutline,
  IoHelp,
  FcAbout,TiArrowShuffle
} from "../../middlewares/icons";

const Community = () => {
  return (
    <div className="community">
      <Head />
      <div className="body">
        <div className="container">
          <div className="left">
            <div className="left-top">
              <div className="profile">
                <img
                  src={process.env.PUBLIC_URL + "/user.png"}
                  alt="user-profile"
                />
                <h2 className="title t-2">Username</h2>
                <p className="title t-3">Account type</p>
                <p className="title t-3">
                  Last connexion, Sat 16 Mar 2024 at 5:53 PM
                </p>
              </div>
              <NavLink
                activeClassName="active-option"
                inactiveClassName="inactive-option"
                className="item"
                to="/community/favorite"
              >
                <GrFavorite className="icon" />
                <span>Favorite</span>
              </NavLink>
              <NavLink
                activeClassName="active-option"
                inactiveClassName="inactive-option"
                className="item"
                to="/community/library"
              >
                <IoLibraryOutline className="icon" />
                <span>Library</span>
              </NavLink>
            </div>
            <div className="left-middle">
              <h2 className="title t-2">Content</h2>
              <hr />
              <NavLink
                activeClassName="active-option"
                inactiveClassName="inactive-option"
                className="item"
                to="/community/ml"
              >
                <GiArtificialIntelligence className="icon" />
                <span>Machine Learning</span>
              </NavLink>
              <NavLink
                activeClassName="active-option"
                inactiveClassName="inactive-option"
                className="item"
                to="/community/dl"
              >
                <GiArtificialIntelligence className="icon" />
                <span>Deep Learning</span>
              </NavLink>
              <NavLink
                activeClassName="active-option"
                inactiveClassName="inactive-option"
                className="item"
                to="/community/cv"
              >
                <GiArtificialIntelligence className="icon" />
                <span>Computer Vision</span>
              </NavLink>
              <NavLink
                activeClassName="active-option"
                inactiveClassName="inactive-option"
                className="item"
                to="/community/nlp"
              >
                <GiArtificialIntelligence className="icon" />
                <span>
                  <span>Natural Language Processing</span>
                </span>
              </NavLink>
              <NavLink
                activeClassName="active-option"
                inactiveClassName="inactive-option"
                className="item"
                to="/community/rl"
              >
                <GiArtificialIntelligence className="icon" />
                <span>Reinforcement Learning</span>
              </NavLink>
            </div>
            <div className="left-bottom">
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
          <div className="right"></div>
        </div>
      </div>
    </div>
  );
};

export default Community;
