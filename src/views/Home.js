import React from "react";
// Components
import Layout from "../components/Layout";

// Components
import Navbar from "../components/Navbar";
const Home = () => (
  <Layout>
    <Navbar />
    <h1 className="align-center">Hello Pixy App</h1>
    <p className="align-right">Text complete</p>
  </Layout>
);

export default Home;
