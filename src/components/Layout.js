import React, { Component } from "react";
import Helmet from "react-helmet";
import PropTypes from "prop-types";

import "../assets/sass/main.scss";
//import Footer from './Footer';
//import SideBar from "./Slidebar";
import config from "../config";

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPreloaded: true,
    };
  }

  render() {
    const { children } = this.props;
    const { isPreloaded } = this.state;
    return (
      <>
        <Helmet
          title={config.siteTitle}
          meta={[
            {
              // Google meta data
              name: "description",
              content: "",
            },
            {
              name: "keywords",
              content: "site, web",
            },
            {
              // Facebook meta data GraphQl
              property: "og:title",
              content: "",
            },
            {
              property: "og:type",
              content: "",
            },
            {
              property: "og:url",
              content: "",
            },
            {
              property: "og:description",
              content: "",
            },
            {
              property: "og:site_name",
              content: "",
            },
            {
              // Twitter Meta Data
              property: "twitter:card",
              content: "summary",
            },
            {
              property: "twitter:site",
              content: "",
            },
            {
              property: "twitter:title",
              content: "",
            },
            {
              property: "twitter:description",
              content: "",
            },
            {
              property: "twitter:creator",
              content: "@",
            },
          ]}
          link={[
            {
              rel: "icon",
              type: "image/png",
            },
          ]}
        >
          {/* Global site tag (gtag.js) - Google Analytics  */}
          <script async src={`https://www.googletagmanager.com/gtag/js?id=`} />
          <script>
            {`
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '');
                `}
          </script>
          <html lang="en" />
        </Helmet>
        <div className={isPreloaded ? " main-body  is-preload" : " main-body"}>
          <div id="page-wrapper">
            {/* <SideBar fullMenu={fullMenu} />*/}
            {children}
          </div>
        </div>
      </>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
