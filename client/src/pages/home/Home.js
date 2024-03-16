import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Header from "../../components/header/Header"

const Home = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Home - PmojaAI</title>
        <meta
          name="description"
          content="Pamoja-AI is a community based in Democratic Republic of Congo thus the goal is expand and make accessible Artificial Intelligence to many fields."
        />
        <meta
          name="keywords"
          content="AI, Artificial Intelligence, Pamoja, Together"
        />
      </Helmet>
      <div className="home">
        <Header/>
      </div>
    </React.Fragment>
  );
};

export default Home;
