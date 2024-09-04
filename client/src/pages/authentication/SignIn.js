import React, { useState } from "react";
import { Link } from "react-router-dom";
import Head from "../../components/head/Head";
import "./sign-in-up.css";
import BANNER from "../../assets/images/banner.png";

const SignIn = () => {
  const [step, setStep] = useState(0);

  return (
    <div className="sign-in-up">
      <Head />
      <div className="sign-body">
        <div className="left">
          <img src={BANNER} alt="sign-in-banner" />
        </div>
        <div className="right">
          <form>
            <h2 className="title t-2">Sing In</h2>
            <p className="title t-3">Pamoja4MI, the community near of you!</p>
            {step === 0 ? (
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
            ) : (
              <div className="input-div">
                <input
                  type="text"
                  className="input-form"
                  autoComplete="none"
                  placeholder=" "
                  // {...register("username")}
                />
                <label htmlFor="username" className="label-form">
                  Connexion's Code
                </label>
                {/* {errors.username && (
                <span className="fade-in">{errors.username.message}</span>
              )} */}
              </div>
            )}
            <button className="button normal">Sign In</button>
            <div className="row row-2">
              <span>Don't have an account ?</span>{" "}
              <Link to={"/signup"} className="link">
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
