import React, { useState } from "react";
import "./community-home.css";
import {
  GrHomeRounded,
  GrArticle,
  BsSignpost,
  BsSignpostSplit,
} from "../../../../middlewares/icons";

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
          className={tab == 0 ? "button active" : "button"}
          onClick={() => setTab(0)}
        >
          <GrHomeRounded className="icon" />
          <span>Home</span>
        </button>
        <button
          className={tab == 1 ? "button active" : "button"}
          onClick={() => setTab(1)}
        >
          <GrArticle className="icon" />
          <span>Articles</span>
        </button>
        <button
          className={tab == 2 ? "button active" : "button"}
          onClick={() => setTab(2)}
        >
          <BsSignpost className="icon" />
          <span>Posts</span>
        </button>
        <button
          className={tab == 3 ? "button active" : "button"}
          onClick={() => setTab(3)}
        >
          <BsSignpostSplit className="icon" />
          <span>Top posts</span>
        </button>
      </div>
    </div>
  );
};

export default Home;
