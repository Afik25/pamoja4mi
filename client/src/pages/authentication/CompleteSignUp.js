import React from "react";
import "./complete.css";
import { Link } from "react-router-dom";
import countries from "../../middlewares/countries.json";

const CompleteSignUp = () => {
  return (
    <div className="sign-up-complete">
      <div className="wrapper">
        <h1 className="title t-1">Complete your registration</h1>
        <p className="title t-3">
          This step is more relevant for you to complete all needed informations
          about you in order to confirm the registration.
        </p>
        <h1 className="title t-2">...and Join the Community!</h1>
        <form>
          <div className="row row-space">
            <div className="input-div">
              <input
                type="text"
                className="input-form"
                autoComplete="none"
                placeholder=" "
                disabled
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
                disabled
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
          <div className="row row-space">
            <div className="input-div">
              <select className="input-select">
                <option defaultValue={""}>Gender</option>
                <option value={"female"}>Female</option>
                <option value={"male"}>Male</option>
              </select>
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
                disabled
                // {...register("username")}
              />
              <label htmlFor="username" className="label-form">
                E-mail
              </label>
              {/* {errors.username && (
                <span className="fade-in">{errors.username.message}</span>
              )} */}
            </div>
          </div>
          <div className="row row-space">
            <div className="input-div">
              <input
                type="date"
                className="input-form"
                autoComplete="none"
                placeholder=" "
                // {...register("username")}
              />
              <label htmlFor="username" className="label-form">
                Date of Birth
              </label>
              {/* {errors.username && (
                <span className="fade-in">{errors.username.message}</span>
              )} */}
            </div>
            <div className="input-div">
              <select className="input-select">
                <option defaultValue={""}>Location of Birth</option>
                {countries?.map((item, _) => {
                  return (
                    <option value={item?.name?.official}>
                      {item?.name?.official}
                    </option>
                  );
                })}
              </select>
              {/* {errors.username && (
                <span className="fade-in">{errors.username.message}</span>
              )} */}
            </div>
          </div>
          <div className="row row-space">
            <div className="input-div">
              <select className="input-select">
                <option defaultValue={""}>Country of Origin</option>
                {countries?.map((item, _) => {
                  return (
                    <option value={item?.name?.official}>
                      {item?.name?.official}
                    </option>
                  );
                })}
              </select>
              {/* {errors.username && (
                <span className="fade-in">{errors.username.message}</span>
              )} */}
            </div>
            <div className="input-div">
              <select className="input-select">
                <option defaultValue={""}>Profession</option>
                <option value={"student"}>Student</option>
                <option value={"employee"}>Employee</option>
                <option value={"jobless"}>Jobless</option>
                <option value={"researcher"}>Researcher</option>
              </select>
              {/* {errors.username && (
                <span className="fade-in">{errors.username.message}</span>
              )} */}
            </div>
          </div>
          <div className="row row-space">
            <div className="input-div">
              <select className="input-select">
                <option defaultValue={""}>School</option>
                <option value={""}>School of Data</option>
                <option value={""}>
                  School of Mathematics, Statistics and Physics
                </option>
                <option value={""}>Unemployee</option>
                <option value={""}>Researcher</option>
              </select>
              {/* {errors.username && (
                <span className="fade-in">{errors.username.message}</span>
              )} */}
            </div>
            <div className="input-div">
              <select className="input-select">
                <option defaultValue={""}>Class</option>
                <option value={""}>Data Engineering</option>
                <option value={""}>Data Analytics</option>
                <option value={""}>Mathematics</option>
                <option value={""}>Statistics</option>
                <option value={""}>Physics</option>
              </select>
              {/* {errors.username && (
                <span className="fade-in">{errors.username.message}</span>
              )} */}
            </div>
          </div>
          <div className="input-div">
            <textarea
              type="text"
              className="input-textarea"
              autoComplete="none"
              placeholder=" "
              rows={6}
              // {...register("username")}
            />
            <label htmlFor="username" className="label-form">
              What are your expectations ?
            </label>
            {/* {errors.username && (
                <span className="fade-in">{errors.username.message}</span>
              )} */}
          </div>
          <div className="agreement">
            <input type="checkbox" />
            <span>
              Agree to the <Link to={""}>Terms and Conditions</Link> of using
              the platform.
            </span>
          </div>
          <button type="button" className="button">
            Complete registration
          </button>
        </form>
      </div>
    </div>
  );
};

export default CompleteSignUp;
