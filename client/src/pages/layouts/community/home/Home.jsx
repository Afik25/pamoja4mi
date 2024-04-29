import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./community-home.css";
import {
  GrHomeRounded,
  GrArticle,
  MdOutlineOndemandVideo,
  PiHandsClappingLight,
  FaRegEye,
  FaRegComments,
  BsShare,
} from "../../../../middlewares/icons";
import videoFrame from "../../../../assets/videos/notes__laptop.mp4";

const Home = () => {
  const [tab, setTab] = useState(0);
  return (
    <div className="community-home">
      <div className="search">
        <form>
          <input type="text" placeholder="Type your search keywords here..." />
          <button className="button">Search</button>
        </form>
      </div>
      <div className="head">
        <button
          className={tab === 0 ? "button active" : "button"}
          onClick={() => setTab(0)}
        >
          <GrHomeRounded className="icon" />
          <span>Home</span>
        </button>
        <button
          className={tab === 1 ? "button active" : "button"}
          onClick={() => setTab(1)}
        >
          <GrArticle className="icon" />
          <span>Popular</span>
        </button>
        <button
          className={tab === 2 ? "button active" : "button"}
          onClick={() => setTab(2)}
        >
          <MdOutlineOndemandVideo className="icon" />
          <span>Videos</span>
        </button>
      </div>
      <div className="body">
        <div className="banner-wrapper">
          <div className="banner">
            <div id="banner-1" className="banner-item">
              <img
                src={process.env.PUBLIC_URL + "/connexion.png"}
                alt="img-banner"
              />
              <div className="outer">content 1</div>
            </div>
            <div id="banner-2" className="banner-item">
              <img
                src={process.env.PUBLIC_URL + "/bouchent.jpg"}
                alt="img-banner"
              />
              <div className="outer">content 2</div>
            </div>
            <div id="banner-3" className="banner-item">
              <img
                src={process.env.PUBLIC_URL + "/femmes-heureuses.jpg"}
                alt="img-banner"
              />
              <div className="outer">content 3</div>
            </div>
          </div>
          <div className="banner-nav">
            <a href="#banner-1"></a>
            <a href="#banner-2"></a>
            <a href="#banner-3"></a>
          </div>
        </div>
        <section className="posts-wrapper">
          <Link to={"/community/reading"} className="post-item link">
            <div className="up">
              <div className="content">
                <div className="tags">
                  <span className="tag">Design</span>
                  <span className="tag">Knowledge</span>
                </div>
                <h3 className="title t-2">
                  My Creative Collection of 2021 Design. More collections are
                  coming soon.
                </h3>
                <div className="author">
                  <img
                    src={process.env.PUBLIC_URL + "/user.png"}
                    alt="img-banner"
                  />
                  <h3 className="title t-2">Community Admin.</h3>
                  <span>4 min.</span>
                  <span>12 Hours ago.</span>
                </div>
              </div>
              <img
                src={process.env.PUBLIC_URL + "/bouchent.jpg"}
                alt="img-banner"
                className="img"
              />
            </div>
            <div className="down">
              <div className="side">
                <div className="tag">
                  <PiHandsClappingLight className="icon" />
                  <span>125</span>
                </div>
                <div className="tag">
                  <FaRegEye className="icon" />
                  <span>125</span>
                </div>
                <div className="tag">
                  <FaRegComments className="icon" />
                  <span>125</span>
                </div>
              </div>
              <div className="side">
                <div className="tag">
                  <BsShare className="icon" />
                  <span>125</span>
                </div>
              </div>
            </div>
          </Link>
          <Link to={"/community/reading"} className="post-item link">
            <div className="up">
              <div className="content">
                <div className="tags">
                  <span className="tag">Design</span>
                  <span className="tag">Knowledge</span>
                </div>
                <h3 className="title t-2">
                  My Creative Collection of 2021 Design. More collections are
                  coming soon.
                </h3>
                <div className="author">
                  <img
                    src={process.env.PUBLIC_URL + "/user.png"}
                    alt="img-banner"
                  />
                  <h3 className="title t-2">Community Admin.</h3>
                  <span>4 min.</span>
                  <span>12 Hours ago.</span>
                </div>
              </div>
              {/* <video
                src={videoFrame}
                autoPlay
                muted
              /> */}
              <iframe src={videoFrame} title="Post title" frameBorder="0" allowFullScreen className="img"></iframe>
            </div>
            <div className="down">
              <div className="side">
                <div className="tag">
                  <PiHandsClappingLight className="icon" />
                  <span>125</span>
                </div>
                <div className="tag">
                  <FaRegEye className="icon" />
                  <span>125</span>
                </div>
                <div className="tag">
                  <FaRegComments className="icon" />
                  <span>125</span>
                </div>
              </div>
              <div className="side">
                <div className="tag">
                  <BsShare className="icon" />
                  <span>125</span>
                </div>
              </div>
            </div>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Home;
