import React, { useState } from "react";
import { Link } from "react-router-dom";
import Head from "../../components/head/Head";
import "./sign-in-up.css";
import { BsEye, BsEyeSlash } from "../../middlewares/icons";
import BANNER from "../../assets/images/banner.png";

const SignUp = () => {

  return (
    <div className="sign-in-up">
      <Head />
      <div className="sign-body">
        <div className="left">
        <img src={BANNER} alt="sign-in-banner" />
        </div>
        <div className="right">
          <form>
            <h2 className="title t-2">Sing Up</h2>
            <p className="title t-3">
              With Pamoja4MI, let's help the community with the technology!
            </p>
            <div className="row row-space">
              <div className="input-div">
                <input
                  type="text"
                  className="input-form"
                  autoComplete="none"
                  placeholder=" "
                  // {...register("username")}
                />
                <label htmlFor="username" className="label-form">
                  Firstname
                </label>
                {/* {errors.username && (
                <span className="fade-in">{errors.username.message}</span>
              )} */}
              </div>
              <div className="input-div">
                <input
                  type="text"
                  className="input-form"
                  autoComplete="none"
                  placeholder=" "
                  // {...register("username")}
                />
                <label htmlFor="username" className="label-form">
                  Lastname
                </label>
                {/* {errors.username && (
                <span className="fade-in">{errors.username.message}</span>
              )} */}
              </div>
            </div>
            <div className="input-div">
              <input
                type="text"
                className="input-form"
                autoComplete="none"
                placeholder=" "
                // {...register("username")}
              />
              <label htmlFor="username" className="label-form">
                E-mail
              </label>
              {/* {errors.username && (
                <span className="fade-in">{errors.username.message}</span>
              )} */}
            </div>
            <button className="button normal">Sign Up</button>
            <div className="row row-2">
              <span>Do you have an account ?</span>{" "}
              <Link to={"/signin"} className="link">
                Sign In
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
