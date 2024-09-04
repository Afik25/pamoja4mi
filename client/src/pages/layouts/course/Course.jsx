import React, { useState, useEffect } from "react";
import "./course.css";
import { useNavigate } from "react-router-dom";
import {
  FaPlus,
  BsSearch,
  BsFilter,
  GoPlay,
  MdMenuBook,
  GoVideo,
  GoClock,
  BiChevronDown,
  BiChevronUp,
} from "../../../middlewares/icons";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import MessageBox from "../../../components/msgBox/MessageBox";

const Course = () => {
  const [onDisplay, setOnDisplay] = useState({ open: false, component: "" });
  const [currentAccordion, setCurrentAccordion] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSending, setIsSending] = useState(false);
  const [isShowingMessage, setIsShowingMessage] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();
    const signal = controller.signal;

    return () => {
      isMounted = false;
      isMounted && controller.abort();
    };
  }, []);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    mode: "all",
    resolver: yupResolver(),
    defaultValues: {
      id: "",
    },
  });

  const onSubmit = async (data) => {};

  return (
    <div className="courses">
      <div className="inner">
        <div className="actions">
          <div className="left">
            <div className="inputs-form">
              <BsSearch className="icon" />
              <input type="text" placeholder="Recherche" />
            </div>
            <button className="button btn-validate">
              <BsFilter className="icon" /> Filtrer
            </button>
          </div>
          <div className="right">
            <button
              className="button btn-new"
              onClick={() => setOnDisplay({ open: true, component: "new" })}
            >
              <FaPlus className="icon" /> Nouveau
            </button>
          </div>
        </div>
        <div className="content">
          <div
            className="course-item"
            onClick={() => setOnDisplay({ open: true, component: "read" })}
          >
            <img src={process.env.PUBLIC_URL + "/board.jpg"} />
            <div className="ci-outer">
              <h3 className="title t-2">Machine Learning</h3>
              <div className="ci-details">
                <span>15 lessons</span>
                <span>&</span>
                <span>15 Videos</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {onDisplay.open && (
        <div className="outer">
          <div className="wrapper">
            <div className="d-head">
              <h3 className="title t-2">
                {onDisplay.component === "new"
                  ? "New Course"
                  : "Course's title"}
              </h3>
              <span
                onClick={() => {
                  setOnDisplay({ open: false, component: "" });
                  reset();
                }}
              >
                &times;
              </span>
            </div>
            <hr />
            {onDisplay.component === "new" ? (
              <form onSubmit={handleSubmit(onSubmit)}>
                {isShowingMessage && (
                  <MessageBox type={message.type} text={message.text} />
                )}
                <div className="input-div">
                  <input
                    type="text"
                    className="input-form"
                    autoComplete="none"
                    placeholder=" "
                    {...register("title")}
                  />
                  <label htmlFor="title" className="label-form">
                    Course's title
                  </label>
                  {errors.title && (
                    <span className="fade-in">{errors.title.message}</span>
                  )}
                </div>
                <div className="input-div">
                  <textarea
                    type="text"
                    className="input-textarea"
                    autoComplete="none"
                    placeholder=" "
                    rows={10}
                    {...register("description")}
                  />
                  <label htmlFor="description" className="label-form">
                    Course's Description
                  </label>
                  {errors.description && (
                    <span className="fade-in">
                      {errors.description.message}
                    </span>
                  )}
                </div>
                <button type="submit" className="button">
                  {isSending ? "Saving..." : "Save"}
                </button>
              </form>
            ) : (
              <div className="course-display">
                <div
                  className="course-display-read"
                  onClick={() =>
                    navigate(`reading/${"machine learning"}`, {
                      state: { course: "machine learning" },
                    })
                  }
                >
                  <img src={process.env.PUBLIC_URL + "/board.jpg"} />
                  <div className="course-display-read-action">
                    <GoPlay className="icon" />
                    <span>Start Learning</span>
                  </div>
                </div>
                <div className="course-display-ruban">
                  <MdMenuBook className="icon" />
                  <span>15 lessons</span>
                  <GoVideo className="icon" />
                  <span>15 Videos</span>
                  <GoClock className="icon" />
                  <span>2 hours</span>
                </div>
                <p className="title t-3">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi
                  illum in asperiores ratione aut sit nemo atque aliquam
                  quibusdam ullam nulla, error hic eveniet eius libero autem
                  quis repellendus fugiat. Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit. Nisi illum in asperiores ratione
                  aut sit nemo atque aliquam quibusdam ullam nulla, error hic
                  eveniet eius libero autem quis repellendus fugiat. Lorem ipsum
                  dolor sit amet, consectetur adipisicing elit. Nisi illum in
                  asperiores ratione aut sit nemo atque aliquam quibusdam ullam
                  nulla, error hic eveniet eius libero autem quis repellendus
                  fugiat.
                </p>
                <h2 className="title t-2">Coure's content</h2>
                <div className="course-display-content">
                  <div
                    className={
                      currentAccordion === 0 ? "cdc-item open" : "cdc-item"
                    }
                    onClick={() =>
                      setCurrentAccordion(currentAccordion === null ? 0 : null)
                    }
                  >
                    {currentAccordion === 0 ? (
                      <BiChevronUp className="icon" />
                    ) : (
                      <BiChevronDown className="icon" />
                    )}
                    <h2 className="title t-2">Introduction</h2>
                    <h3 className="title t-3">Historic</h3>
                    <h3 className="title t-3">For Who ?</h3>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Course;
