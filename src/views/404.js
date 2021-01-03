import React from "react";

import Layout from "../components/Layout";
import { Link } from "react-router-dom";

/*
 * Assets
 */
import logo from "../assets/images/logo.svg";
const Page404 = ({ location }) => (
  <Layout fullMenu>
    <section id="wrapper">
      <header>
        <div className="inner">
          <img src={logo} className="image center "/>
          <h2>Page not found 404</h2>
          <p>Not a valid URL {location.pathname}</p>
          <Link to="/" className="button primary large">
            GO TO HOME
          </Link>
        </div>
      </header>
    </section>
  </Layout>
);

export default Page404;
