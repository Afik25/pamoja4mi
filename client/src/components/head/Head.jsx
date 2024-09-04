import React from "react";
import "./head.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ControlLanguage from "../languages/ControlLanguage";

const Head = () => {
  const { t } = useTranslation();
  return (
    <div className="head">
      <div className="container">
        <Link to="/">
          <img src={process.env.PUBLIC_URL + "/logo.png"} className="logo" />
        </Link>
        <div className="navigation">
          <Link to="/signin" className="button sign-in">
            {t("header.text-5")}
          </Link>
          <Link to="/signup" className="button sign-up">
            {t("header.text-6")}
          </Link>
          <ControlLanguage />
        </div>
      </div>
    </div>
  );
};

export default Head;
