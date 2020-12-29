import React from "react";

// Components
import Layout from "../components/Layout";

// Config
import config from "../config.js";

const IndexPage = () => (
  <Layout>
    <section id="home">
      <div className="inner">
        <div className="logo"></div>
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
