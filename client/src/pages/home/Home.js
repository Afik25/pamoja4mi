import React, { useState } from "react";
import "./_home.css";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Head from "../../components/head/Head";
import BannerIMG from "../../assets/images/etudiants.jpg";
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
} from "../../middlewares/icons";
import Modal from "../../components/modal/Modal";
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  const [open, setOpen] = useState(false);
  const onClose = () => setOpen(false);
  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <React.Fragment>
      <Helmet>
        <title>Home - Pamoja4MI</title>
        <meta
          name="description"
          content="Pamoja4AI is a community based in Democratic Republic of Congo thus the goal is expand and make accessible Artificial Intelligence to many fields."
        />
        <meta
          name="keywords"
          content="AI, Artificial Intelligence, Pamoja, Together"
        />
      </Helmet>
      <div className="home">
        <Head />
        <div className="banner">
          <img src={BannerIMG} alt="banner-img" className="inner" />
          <div className="outer">
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
              <button
                className="button link"
                data-aos="fade-right"
                data-aos-delay="300"
                data-aos-duration="600"
                onClick={() => setOpen(true)}
              >
                Join the Community
              </button>
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
        </div>
        <div className="about">
          <div className="container">
            <h3
              className="title t-2"
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-duration="600"
            >
              About the Community
            </h3>
            <p
              className="title t-3"
              data-aos="fade-up"
              data-aos-delay="800"
              data-aos-duration="600"
            >
              <span>Pamoja4MI</span> is a platform, a community where
              peoples(profesionals and scientifics) sharing knowledges and
              experiences based on the new technologies in their applications
              and best practices, beyond it aims to promote the science through
              the mathematics and artificial intelligence, as a support and
              tools that help in the development process of the society, thanks
              to career journey of peoples.
            </p>
            <div className="values">
              <div
                className="value-item"
                data-aos="zoom-out-right"
                data-aos-delay="1000"
                data-aos-duration="600"
              >
                <div className="value-title">
                  <FaCreativeCommonsShare className="icon" />
                  <span>Creativities</span>
                </div>
              </div>
              <div
                className="value-item"
                data-aos="zoom-out-left"
                data-aos-delay="1200"
                data-aos-duration="600"
              >
                <div className="value-title">
                  <GiGiftOfKnowledge className="icon" />
                  <span>knowledges</span>
                </div>
              </div>
              <div
                className="value-item"
                data-aos="zoom-out-right"
                data-aos-delay="1400"
                data-aos-duration="600"
              >
                <div className="value-title">
                  <FaBuromobelexperte className="icon" />
                  <span>Experiences</span>
                </div>
              </div>
              <div
                className="value-item"
                data-aos="zoom-out-left"
                data-aos-delay="1600"
                data-aos-duration="600"
              >
                <div className="value-title">
                  <MdDataExploration className="icon" />
                  <span>Best Practices</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about">
          <div className="container">
            <h3 className="title t-2">Our mission</h3>
            <p className="title t-3">
              <span>Pamoja4MI</span> has as mission, to promote inclusive
              science, to equip its members and anyone (professionals and
              non-professionals) wishing to reconvert their career in the field
              of data and artificial intelligence through its activities.
            </p>
          </div>
        </div>
        <div className="in-number">
          <div className="container">
            <h3 className="title t-2">Pamoja4MI in numbers</h3>
            <div className="numbers">
              <div className="number-item">
                <h3 className="title t-2">15K+</h3>
                <span>Active members</span>
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
            <h3 className="title t-2">Our Activities</h3>
            <div className="activities">
              <div
                className="activity-item"
                data-aos-delay="400"
                data-aos-duration="600"
                data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom"
              >
                <MdModelTraining className="icon" />
                <span>Training & Mentoring</span>
              </div>
              <div
                className="activity-item"
                data-aos-delay="600"
                data-aos-duration="600"
                data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom"
              >
                <GiVideoConference className="icon" />
                <span>Conferences</span>
              </div>
              <div
                className="activity-item"
                data-aos-delay="800"
                data-aos-duration="600"
                data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom"
              >
                <GrWorkshop className="icon" />
                <span>Workshops & Webinars</span>
              </div>
              <div
                className="activity-item"
                data-aos-delay="1000"
                data-aos-duration="600"
                data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom"
              >
                <MdSchool className="icon" />
                <span>Summer Schools</span>
              </div>
            </div>
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
      {open && (
        <Modal
          visibility={true}
          open={onClose}
          width={"90%"}
          height={"90%"}
          maxHeight={"100%"}
          title={"Pamoja4MI Sin Up: Joining the Community"}
          content={<p>Content</p>}
        />
      )}
    </React.Fragment>
  );
};

export default Home;
