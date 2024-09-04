import React, { useState } from "react";
import "./_home.css";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Head from "../../components/head/Head";
import {
  FaCreativeCommonsShare,
  GiGiftOfKnowledge,
  FaBuromobelexperte,
  MdDataExploration,
  MdModelTraining,
  GiVideoConference,
  GrWorkshop,
  MdSchool,
  MdEmail,
  MdCall,
  FaFacebookF,
  BsTwitterX,
  BsYoutube,
  PiDatabaseDuotone,
  SiJirasoftware,
  TbMathFunction,
  GiArtificialIntelligence,
  GoLaw,
  MdBusinessCenter,
} from "../../middlewares/icons";
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";
import ASSETS from "../../utils/Assets";

const Home = () => {
  const [currentBanner, setCurrentBanner] = useState(0);
  React.useEffect(() => {
    AOS.init();
  }, []);
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentBanner(currentBanner === 0 ? 1 : 0);
    }, 5000);
    return () => clearTimeout(timer);
  }, [currentBanner]);
  return (
    <React.Fragment>
      <Helmet>
        <title>Home - Pamoja4MI</title>
        <meta
          name="description"
          content="Pamoja4MI is a community based in Democratic Republic of Congo thus the goal is expand and make accessible Artificial Intelligence to many fields."
        />
        <meta
          name="keywords"
          content="AI, Artificial Intelligence, Machine Learning, Deep Learning, Pamoja, Together, Mathematics, Statistics, Physics"
        />
      </Helmet>
      <div className="home">
        <Head />
        <div className="banner">
          <div className="side-1">
            <h2
              className="title t-1"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="600"
            >
              Your Net<span>work</span> is your Net <span>Worth</span>.
            </h2>
            <p className="title t-3" data-aos="fade-up">
              The place where knowledge and experience are neither feminine, nor
              masculine, nor less or/and more aged.
            </p>
            <div className="more">
              <Link
                to={"/signin"}
                className="button link"
                data-aos="fade-right"
                data-aos-delay="300"
                data-aos-duration="600"
              >
                Join the Community
              </Link>
              <Link
                to={"/community"}
                className="link"
                data-aos="fade-left"
                data-aos-delay="300"
                data-aos-duration="600"
              >
                Explore the Community
              </Link>
            </div>
          </div>
          <div className="side-2">
            <div className="side-2-box box-1"></div>
            <div className="side-2-box box-2"></div>
            <div
              className="side-2-box box-3"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="600"
            >
              <img
                src={
                  currentBanner === 0 ? ASSETS.bannerWoman : ASSETS.bannerMan
                }
                alt="banner"
              />
            </div>
          </div>
        </div>
        <div className="about">
          <div className="container">
            <h3 className="title t-2">
              <span>Empower</span> learning journey, <span>Discover</span>{" "}
              knowledge and shape the <span>Future</span>
            </h3>
            <p className="title t-3">
              <span>Pamoja4MI</span> is a Virtual University, a Platform, a
              Community where peoples(profesionals and scientifics) learning,
              sharing knowledges and experiences based on the new technologies
              in their applications and best practices, beyond it aims to
              promote the science through the mathematics and artificial
              intelligence, as a support and tools that help in the development
              process of the society, thanks to career journey of peoples.
            </p>
            <div className="values">
              <div className="value-item">
                <div className="value-title">
                  <FaCreativeCommonsShare className="icon" />
                  <span>Creativities</span>
                </div>
              </div>
              <div className="value-item">
                <div className="value-title">
                  <GiGiftOfKnowledge className="icon" />
                  <span>knowledges</span>
                </div>
              </div>
              <div className="value-item">
                <div className="value-title">
                  <FaBuromobelexperte className="icon" />
                  <span>Experiences</span>
                </div>
              </div>
              <div className="value-item">
                <div className="value-title">
                  <MdDataExploration className="icon" />
                  <span>Best Practices</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mission">
          <div className="container">
            <div className="mc-left">
              <h3 className="title t-2">
                From <span>Pamoja4MI</span> University and Community in all over
                country, the network is worth.
              </h3>
              <p className="title t-3">
                <span>Pamoja4MI</span> has as mission, to promote inclusive
                science, inclusive university education, to equip anyone
                (professionals and non-professionals, students, researchers)
                wishing to reconvert their career in the field of data,
                artificial intelligence and technology through content and
                approaches that help to deal with the real world problems.
              </p>
            </div>
            <img src={ASSETS.network1} alt="network" />
          </div>
        </div>
        <div className="faculty">
          <div className="faculty-head">
            <h2 className="title t-2">Education for a life well-lived</h2>
            <p className="title t-3">
              Prepare people theorically without put them in real challenges,
              Education should do more than that. Pamoja4MI providing a content
              system that lead to real world project which is based on
              technology as core particle in every fields followinf the schools
              presented.
            </p>
          </div>
          <div className="faculty-container">
            <div className="fc-item">
              <PiDatabaseDuotone className="icon" />
              <h2 className="title t-2">
                School of Data (Engineering and Analytics)
              </h2>
              <p className="title t-3">
                Le lorem ipsum est, en imprimerie, une suite de mots sans
                signification utilisée à titre provisoire pour calibrer une mise
                en page, le texte définitif venant remplacer le faux-texte dès
                qu'il est prêt ou que la mise en page est achevée. Généralement,
                on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.
              </p>
            </div>
            <div className="fc-item">
              <SiJirasoftware className="icon" />
              <h2 className="title t-2">
                School of Software development (Mobile and Web)
              </h2>
              <p className="title t-3">
                Le lorem ipsum est, en imprimerie, une suite de mots sans
                signification utilisée à titre provisoire pour calibrer une mise
                en page, le texte définitif venant remplacer le faux-texte dès
                qu'il est prêt ou que la mise en page est achevée. Généralement,
                on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.
              </p>
            </div>
            <div className="fc-item">
              <TbMathFunction className="icon" />
              <h2 className="title t-2">
                School of Mathematics, Statistics and Physics
              </h2>
              <p className="title t-3">
                Le lorem ipsum est, en imprimerie, une suite de mots sans
                signification utilisée à titre provisoire pour calibrer une mise
                en page, le texte définitif venant remplacer le faux-texte dès
                qu'il est prêt ou que la mise en page est achevée. Généralement,
                on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.
              </p>
            </div>
            <div className="fc-item">
              <GiArtificialIntelligence className="icon" />
              <h2 className="title t-2">
                School of Artificial Intelligence(Machine & deep Learning)
              </h2>
              <p className="title t-3">
                Le lorem ipsum est, en imprimerie, une suite de mots sans
                signification utilisée à titre provisoire pour calibrer une mise
                en page, le texte définitif venant remplacer le faux-texte dès
                qu'il est prêt ou que la mise en page est achevée. Généralement,
                on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.
              </p>
            </div>
            <div className="fc-item">
              <GoLaw className="icon" />
              <h2 className="title t-2">School of Law</h2>
              <p className="title t-3">
                Le lorem ipsum est, en imprimerie, une suite de mots sans
                signification utilisée à titre provisoire pour calibrer une mise
                en page, le texte définitif venant remplacer le faux-texte dès
                qu'il est prêt ou que la mise en page est achevée. Généralement,
                on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.
              </p>
            </div>
            <div className="fc-item">
              <MdBusinessCenter className="icon" />
              <h2 className="title t-2">
                School of Business Administration and Economics
              </h2>
              <p className="title t-3">
                Le lorem ipsum est, en imprimerie, une suite de mots sans
                signification utilisée à titre provisoire pour calibrer une mise
                en page, le texte définitif venant remplacer le faux-texte dès
                qu'il est prêt ou que la mise en page est achevée. Généralement,
                on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.
              </p>
            </div>
          </div>
        </div>
        <div className="offers">
          <div className="header">
            <img src={ASSETS.infinite} alt="infinite" />
            <h3 className="title t-2">
              <span>Realistic</span> learning journey, by <span>doing</span>
            </h3>
          </div>
          <div className="container">
            <div className="offer-item">
              <div className="inner">
                <video src={ASSETS.digital_lab} autoPlay loop muted />
              </div>
              <div className="outer">
                <span>Digital Laboratory</span>
              </div>
            </div>
            <div className="offer-item">
              <div className="inner">
                <video src={ASSETS.assessment} autoPlay loop muted />
              </div>
              <div className="outer">
                <span>Assessment Quiz</span>
              </div>
            </div>
            <div className="offer-item">
              <div className="inner">
                <video src={ASSETS.final_project} autoPlay loop muted />
              </div>
              <div className="outer">
                <span>Final Project</span>
              </div>
            </div>
            <div className="offer-item">
              <div className="inner">
                <video src={ASSETS.forum_community} autoPlay loop muted />
              </div>
              <div className="outer">
                <span>Digital Forum and Community</span>
              </div>
            </div>
          </div>
        </div>
        <div className="in-number">
          <div className="container">
            <h3 className="title t-2">Pamoja4MI in numbers</h3>
            <div className="numbers">
              <div className="number-item">
                <h3 className="title t-2">15K+</h3>
                <span>Active Students</span>
              </div>
              <div className="number-item">
                <h3 className="title t-2">70+</h3>
                <span>Meetups & Events</span>
              </div>
              <div className="number-item">
                <h3 className="title t-2">1.5K+</h3>
                <span>Learning materials</span>
              </div>
            </div>
          </div>
        </div>
        <div className="activity">
          <div className="container">
            <h3 className="title t-2">
              Through our face-to-face <span>Activities</span>, we are committed
              to sharing real-life experience.
            </h3>
            <div className="activities">
              <div className="activity-item">
                <MdModelTraining className="icon" />
                <span>Training & Mentoring</span>
              </div>
              <div className="activity-item">
                <GiVideoConference className="icon" />
                <span>Conferences</span>
              </div>
              <div className="activity-item">
                <GrWorkshop className="icon" />
                <span>Workshops & Webinars</span>
              </div>
              <div className="activity-item">
                <MdSchool className="icon" />
                <span>Summer Schools</span>
              </div>
            </div>
          </div>
        </div>
        <div className="newsletter">
          <img
            src={process.env.PUBLIC_URL + "/background.jpg"}
            alt="newsletter-img"
            className="inner"
          />
          <div className="outer">
            <p className="title t-3">
              You need more news, you need to get on date.
            </p>
            <form>
              <input type="text" placeholder="Enter your email address" />
              <button type="submit" className="button">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="footer">
          <div className="container">
            <div className="up">
              <div className="side side-1">
                <Link to="/community">
                  <img
                    src={process.env.PUBLIC_URL + "/logo.png"}
                    alt="logo"
                    className="logo"
                  />
                </Link>
                <p className="title t-3">Learn in-needed in my pocket.</p>
              </div>
              <div className="side side-2">
                <div className="row">
                  <MdEmail className="icon" />
                  <span>contact@pamoja4mi.io</span>
                </div>
                <div className="row">
                  <MdCall className="icon" />
                  <span>+243 816194942</span>
                </div>
                <div className="row">
                  <Link to={""} className="link social">
                    <FaFacebookF className="icon" />
                  </Link>
                  <Link to={""} className="link social">
                    <BsTwitterX className="icon" />
                  </Link>
                  <Link to={""} className="link social">
                    <BsYoutube className="icon" />
                  </Link>
                </div>
              </div>
              <div className="side side-3">
                <Link to={""} className="link social">
                  <img
                    src={process.env.PUBLIC_URL + "/app-ios.jpeg"}
                    alt="ios"
                    className="mobile"
                  />
                </Link>
                <Link to={""} className="link social">
                  <img
                    src={process.env.PUBLIC_URL + "/app-android.jpeg"}
                    alt="android"
                    className="mobile"
                  />
                </Link>
              </div>
            </div>
            <hr />
            <div className="middle">
              <div className="side side-1">
                <h3 className="title t-2">Community</h3>
                <Link to={""} className="link">
                  Blog
                </Link>
                <Link to={""} className="link">
                  Courses
                </Link>
                <Link to={""} className="link">
                  Webinars
                </Link>
                <Link to={""} className="link">
                  Laboratory
                </Link>
              </div>
              <div className="side side-2">
                <h3 className="title t-2">About Us</h3>
                <Link to={""} className="link">
                  Team
                </Link>
                <Link to={""} className="link">
                  Careers
                </Link>
                <Link to={""} className="link">
                  Contact us
                </Link>
              </div>
              <div className="side side-3">
                <h3 className="title t-2">Legal</h3>
                <Link to={""} className="link">
                  Cookie Policy
                </Link>
                <Link to={""} className="link">
                  Privacy Policy
                </Link>
                <Link to={""} className="link">
                  Terms of Service
                </Link>
                <Link to={""} className="link">
                  Data Processing Agreement
                </Link>
              </div>
              <div className="side side-4">
                <h3 className="title t-2">Contribute</h3>
                <Link to={""} className="link">
                  Become an Author
                </Link>
                <Link to={""} className="link">
                  Become an Affiliate
                </Link>
              </div>
            </div>
            <hr />
            <div className="bottom">
              <div className="side side-1">
                <span>Powered by </span>
                <Link to={"https://afoundation.tech"} target="_blank">
                  Afik Foundation
                </Link>
              </div>
              <div className="side side-2">
                <span>
                  Copyright &copy; {new Date().getFullYear()} Pamoja4MI. All
                  rights reserved.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
