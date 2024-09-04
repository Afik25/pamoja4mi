import React, { useState } from "react";
import "./reading.css";
import { useNavigate, useLocation } from "react-router-dom";
import {
  FaArrowLeft,
  FaArrowRight,
  GoVideo,
  FaRegQuestionCircle,
  MdPhotoLibrary,
  FaMicrophone,
  MdSend,
} from "../../../middlewares/icons";
import ASSETS from "../../../utils/Assets";
//
// katex
import "katex/dist/katex.min.css";
import Latex from "react-latex-next";
//

const Reading = () => {
  const [onNew, setOnNew] = useState(false);
  const [isShowingVideo, setIsShowingVideo] = useState(false);
  const [onQuestion, setOnQuestion] = useState(false);
  const [step, setStep] = useState(0);
  const [lessonSwitch, setLessonSwitch] = useState({
    isNewLesson: true,
    isNewSubtitle: true,
  });
  const [videoPreview, setVideoPreview] = useState("");
  const [latexContent, setLatexContent] = useState(
    "\\sum_{n=1}^{\\infty} 2^{-n} = 1"
  );
  //
  // $$\\sum_{n=1}^{\\infty} 2^{-n} = 1$$
  // \\int_0^\\infty x^2 dx
  // \sum_{n=1}^{\infty} 2^{-n} = 1 (un seul slash pour la saisie)

  const navigate = useNavigate();
  const location = useLocation();

  const onFilesLoading = (e) => {
    setVideoPreview(URL.createObjectURL(e.target.files[0]));
    // setValue("thumbnail", e.target.files[0]);
  };
  return (
    <div className="reading">
      <div className="r-inner">
        <div className="ri-left">
          <button className="button btn-back" onClick={() => navigate(-1)}>
            <FaArrowLeft className="icon" />
            <span>Back</span>
          </button>
          <h2 className="title t-2">{location.state.course}</h2>
          <div className="ri-left-actions">
            <button className="button">Desactivate Course</button>
            <button className="button" onClick={() => setOnNew(true)}>
              Add lesson
            </button>
            <button className="button">Desactivate Lesson</button>
          </div>
          <div className="ri-left-content">
            <div className="ri-left-item">
              <h3 className="title t-3">Introduction</h3>
              <div className="row active">
                <input type="checkbox" />
                <GoVideo className="icon" />
                <span>sub title Lesson 1</span>
              </div>
              <div className="row">
                <input type="checkbox" />
                <GoVideo className="icon" />
                <span>sub title Lesson 2</span>
              </div>
            </div>
            <div className="ri-left-item">
              <h3 className="title">Chapter 1</h3>
              <div className="row">
                <input type="checkbox" />
                <GoVideo className="icon" />
                <span>sub title Lesson 1</span>
              </div>
              <div className="row">
                <input type="checkbox" />
                <GoVideo className="icon" />
                <span>sub title Lesson 2</span>
              </div>
            </div>
          </div>
        </div>
        <div className="ri-right">
          <div className="ri-right-inner">
            <div className="ri-right-content">
              {isShowingVideo ? (
                <iframe
                  src={ASSETS.video}
                  title="Post title"
                  frameBorder="0"
                  allowFullScreen
                  className="img"
                ></iframe>
              ) : (
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Aliquam vitae totam placeat, tempore quas amet sint aliquid
                  recusandae. Tempora rem ad natus unde hic dolores quos
                  molestias ipsum voluptatem ipsam!
                </p>
              )}
            </div>
            <div className="ri-right-actions">
              <button className="button">
                <FaArrowLeft className="icon" />
                <span>Previous</span>
              </button>
              <button
                className="button"
                onClick={() => setIsShowingVideo(!isShowingVideo)}
              >
                <GoVideo className="icon" />
                <span>{isShowingVideo ? "Text" : "Video"}</span>
              </button>
              <button className="button" onClick={() => setOnQuestion(true)}>
                <FaRegQuestionCircle className="icon" />
                <span>Questions</span>
              </button>
              <button className="button">
                <span>Next</span>
                <FaArrowRight className="icon" />
              </button>
            </div>
          </div>
          {onQuestion && (
            <div className="ri-right-outer">
              <div className="ri-right-outer-wrapper">
                <div className="question-head">
                  <h3 className="title t-3">Questions & Answers</h3>
                  <span
                    className="btn-close"
                    onClick={() => setOnQuestion(false)}
                  >
                    &times;
                  </span>
                </div>
                <div className="question-body">
                  <div className="question-body-wrapper">
                    <div className="message-item margin-right">
                      <div className="message-user">
                        <img
                          src={process.env.PUBLIC_URL + "/user.png"}
                          alt="user"
                        />
                        <span>Username</span>
                      </div>
                      <div className="message-content mc-right">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Aliquam, sed, ipsa magni accusantium,
                          dignissimos cum animi earum reiciendis minus
                          necessitatibus et officia ducimus fugiat facere
                          placeat odit eos accusamus eum!
                        </p>
                        <span>Today 7:01 am</span>
                      </div>
                    </div>
                    <div className="message-item margin-left">
                      <div className="message-content mc-left">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Aliquam, sed, ipsa magni accusantium,
                          dignissimos cum animi earum reiciendis minus
                          necessitatibus et officia ducimus fugiat facere
                          placeat odit eos accusamus eum!
                        </p>
                        <span>Today 7:01 am</span>
                      </div>
                      <div className="message-user">
                        <img
                          src={process.env.PUBLIC_URL + "/user.png"}
                          alt="user"
                        />
                        <span>Username</span>
                      </div>
                    </div>
                    <div className="message-item margin-right">
                      <div className="message-user">
                        <img
                          src={process.env.PUBLIC_URL + "/user.png"}
                          alt="user"
                        />
                        <span>Username</span>
                      </div>
                      <div className="message-content mc-right">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Aliquam, sed, ipsa magni accusantium,
                          dignissimos cum animi earum reiciendis minus
                          necessitatibus et officia ducimus fugiat facere
                          placeat odit eos accusamus eum!
                        </p>
                        <span>Today 7:01 am</span>
                      </div>
                    </div>
                    <div className="message-item margin-left">
                      <div className="message-content mc-left">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Aliquam, sed, ipsa magni accusantium,
                          dignissimos cum animi earum reiciendis minus
                          necessitatibus et officia ducimus fugiat facere
                          placeat odit eos accusamus eum!
                        </p>
                        <span>Today 7:01 am</span>
                      </div>
                      <div className="message-user">
                        <img
                          src={process.env.PUBLIC_URL + "/user.png"}
                          alt="user"
                        />
                        <span>Username</span>
                      </div>
                    </div>
                    <div className="message-item margin-right">
                      <div className="message-user">
                        <img
                          src={process.env.PUBLIC_URL + "/user.png"}
                          alt="user"
                        />
                        <span>Username</span>
                      </div>
                      <div className="message-content mc-right">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Aliquam, sed, ipsa magni accusantium,
                          dignissimos cum animi earum reiciendis minus
                          necessitatibus et officia ducimus fugiat facere
                          placeat odit eos accusamus eum!
                        </p>
                        <span>Today 7:01 am</span>
                      </div>
                    </div>
                    <div className="message-item margin-left">
                      <div className="message-content mc-left">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Aliquam, sed, ipsa magni accusantium,
                          dignissimos cum animi earum reiciendis minus
                          necessitatibus et officia ducimus fugiat facere
                          placeat odit eos accusamus eum!
                        </p>
                        <span>Today 7:01 am</span>
                      </div>
                      <div className="message-user">
                        <img
                          src={process.env.PUBLIC_URL + "/user.png"}
                          alt="user"
                        />
                        <span>Username</span>
                      </div>
                    </div>
                    <div className="message-item margin-right">
                      <div className="message-user">
                        <img
                          src={process.env.PUBLIC_URL + "/user.png"}
                          alt="user"
                        />
                        <span>Username</span>
                      </div>
                      <div className="message-content mc-right">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Aliquam, sed, ipsa magni accusantium,
                          dignissimos cum animi earum reiciendis minus
                          necessitatibus et officia ducimus fugiat facere
                          placeat odit eos accusamus eum!
                        </p>
                        <span>Today 7:01 am</span>
                      </div>
                    </div>
                    <div className="message-item margin-left">
                      <div className="message-content mc-left">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Aliquam, sed, ipsa magni accusantium,
                          dignissimos cum animi earum reiciendis minus
                          necessitatibus et officia ducimus fugiat facere
                          placeat odit eos accusamus eum!
                        </p>
                        <span>Today 7:01 am</span>
                      </div>
                      <div className="message-user">
                        <img
                          src={process.env.PUBLIC_URL + "/user.png"}
                          alt="user"
                        />
                        <span>Username</span>
                      </div>
                    </div>
                    <div className="message-item margin-right">
                      <div className="message-user">
                        <img
                          src={process.env.PUBLIC_URL + "/user.png"}
                          alt="user"
                        />
                        <span>Username</span>
                      </div>
                      <div className="message-content mc-right">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Aliquam, sed, ipsa magni accusantium,
                          dignissimos cum animi earum reiciendis minus
                          necessitatibus et officia ducimus fugiat facere
                          placeat odit eos accusamus eum!
                        </p>
                        <span>Today 7:01 am</span>
                      </div>
                    </div>
                    <div className="message-item margin-left">
                      <div className="message-content mc-left">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Aliquam, sed, ipsa magni accusantium,
                          dignissimos cum animi earum reiciendis minus
                          necessitatibus et officia ducimus fugiat facere
                          placeat odit eos accusamus eum!
                        </p>
                        <span>Today 7:01 am</span>
                      </div>
                      <div className="message-user">
                        <img
                          src={process.env.PUBLIC_URL + "/user.png"}
                          alt="user"
                        />
                        <span>Username</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="question-foot">
                  <form>
                    <button>
                      <MdPhotoLibrary className="icon" />
                    </button>
                    <textarea></textarea>
                    <button>
                      <FaMicrophone className="icon" />
                    </button>
                    <button>
                      <MdSend className="icon" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {onNew && (
        <div className="r-outer">
          <div className="r-outer-wrapper">
            <div className="r-outer-head">
              <h2 className="title t-2">Adding new lesson</h2>
              <span onClick={() => setOnNew(false)}>&times;</span>
            </div>
            <form className="r-outer-form">
              {step === 0 ? (
                <div className="form-step step-one">
                  <div className="step-one-left">
                    <div className="content-option">
                      <button
                        type="button"
                        className={
                          lessonSwitch.isNewLesson
                            ? "button selected"
                            : "button"
                        }
                        onClick={() =>
                          setLessonSwitch({
                            isNewLesson: true,
                            isNewSubtitle: lessonSwitch?.isNewSubtitle,
                          })
                        }
                      >
                        It is a new lesson
                      </button>
                      <button
                        type="button"
                        className={
                          !lessonSwitch.isNewLesson
                            ? "button selected"
                            : "button"
                        }
                        onClick={() =>
                          setLessonSwitch({
                            isNewLesson: false,
                            isNewSubtitle: lessonSwitch?.isNewSubtitle,
                          })
                        }
                      >
                        Complete a lesson
                      </button>
                    </div>
                    {lessonSwitch.isNewLesson ? (
                      <div className="input-div">
                        <input
                          type="text"
                          className="input-form"
                          autoComplete="none"
                          placeholder=" "
                          // {...register("lesson_title")}
                        />
                        <label htmlFor="lesson_title" className="label-form">
                          Lesson's title
                        </label>
                        {/* {errors.lesson_title && (
                        <span className="fade-in">{errors.lesson_title.message}</span>
                      )} */}
                      </div>
                    ) : (
                      <div className="input-div">
                        <select className="input-select">
                          <option defaultValue={""}>
                            Select lesson's title to complete
                          </option>
                        </select>
                        {/* {errors.lesson_title && (
                        <span className="fade-in">{errors.lesson_title.message}</span>
                      )} */}
                      </div>
                    )}
                    <div className="content-option">
                      <button
                        type="button"
                        className={
                          lessonSwitch.isNewSubtitle
                            ? "button selected"
                            : "button"
                        }
                        onClick={() =>
                          setLessonSwitch({
                            isNewLesson: lessonSwitch?.isNewLesson,
                            isNewSubtitle: true,
                          })
                        }
                      >
                        It is a new sub-lesson
                      </button>
                      <button
                        type="button"
                        className={
                          !lessonSwitch.isNewSubtitle
                            ? "button selected"
                            : "button"
                        }
                        onClick={() =>
                          setLessonSwitch({
                            isNewLesson: lessonSwitch?.isNewLesson,
                            isNewSubtitle: false,
                          })
                        }
                      >
                        Complete a sub-lesson
                      </button>
                    </div>
                    {lessonSwitch.isNewSubtitle ? (
                      <div className="input-div">
                        <input
                          type="text"
                          className="input-form"
                          autoComplete="none"
                          placeholder=" "
                          // {...register("lesson_title")}
                        />
                        <label htmlFor="lesson_title" className="label-form">
                          Sub-lesson's title
                        </label>
                        {/* {errors.lesson_title && (
                        <span className="fade-in">{errors.lesson_title.message}</span>
                      )} */}
                      </div>
                    ) : (
                      <div className="input-div">
                        <select className="input-select">
                          <option defaultValue={""}>
                            Select sub-lesson's title to complete
                          </option>
                        </select>
                        {/* {errors.lesson_title && (
                        <span className="fade-in">{errors.lesson_title.message}</span>
                      )} */}
                      </div>
                    )}
                    <div className="input-div">
                      <input
                        type="number"
                        className="input-form"
                        autoComplete="none"
                        placeholder=" "
                        // {...register("lesson_timing")}
                      />
                      <label htmlFor="lesson_timing" className="label-form">
                        Lesson's timing (minutes)
                      </label>
                      {/* {errors.lesson_timing && (
                        <span className="fade-in">{errors.lesson_timing.message}</span>
                      )} */}
                    </div>
                    <div className="input-div">
                      <select className="input-select">
                        <option defaultValue={""}>
                          Select Lesson's accessibility type
                        </option>
                        <option value={"freemium"}>Freemium</option>
                        <option value={"premium"}>Premium</option>
                      </select>
                      {/* {errors.lesson_title && (
                        <span className="fade-in">{errors.lesson_title.message}</span>
                      )} */}
                    </div>
                    <div className="input-div">
                      <input
                        type="file"
                        className="input-form"
                        autoComplete="none"
                        placeholder=" "
                        onChange={onFilesLoading}
                        // {...register("lesson_thumbnail")}
                      />
                      <label htmlFor="lesson_timing" className="label-form">
                        Lesson's associated asset
                      </label>
                      {/* {errors.lesson_thumbnail && (
                        <span className="fade-in">{errors.lesson_thumbnail.message}</span>
                      )} */}
                    </div>
                    <button
                      type="button"
                      className="button"
                      onClick={() => setStep(1)}
                    >
                      Next
                    </button>
                  </div>
                  <div className="step-one-right">
                    {videoPreview ? (
                      <iframe
                        src={videoPreview}
                        title="Post title"
                        frameBorder="0"
                        allowFullScreen
                        className="img"
                      ></iframe>
                    ) : (
                      <div>
                        <p>File Video Preview</p>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="form-step step-two">
                  <div className="step-two-head">
                    <button
                      type="button"
                      className="button"
                      onClick={() => setStep(0)}
                    >
                      Previous
                    </button>
                    <button type="button" className="button">
                      Validate and Save
                    </button>
                  </div>
                  <div className="step-two-content">
                    <div className="input-div">
                      <textarea
                        className="input-textarea"
                        // {...register("thumbnail", {
                        //   onChange: (e) => setLatexContent(e.target.value),
                        // })}
                      ></textarea>
                    </div>
                    <div className="preview">
                      <Latex strict>{"$$" + latexContent.toString() + "$$"}</Latex>
                    </div>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Reading;
