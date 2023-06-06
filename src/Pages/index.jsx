import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [mobileSideMenu, setMobileSideMenu] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });

  useEffect(() => {
    function handleResize() {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setMobileSideMenu(false);
  }, [screenWidth >= 991]);

  const togleSideMenu = () => {
    setMobileSideMenu(!mobileSideMenu);
  };

  useEffect(() => {
    const updateMousePosition = (ev) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  const transform = `translate(${mousePosition.x * 0.04}px, ${
    mousePosition.y * 0.04
  }px)`;

  useEffect(() => {
    removeClassToBody(["background"]);
    addClassToBody(["no-footer"]);
  }, []);

  return (
    <>
      <div
        className={`landing-page ${mobileSideMenu ? "show-mobile-menu" : ""}`}
      >
        <div className="mobile-menu">
          <Link className="logo-mobile c-pointer" to="/">
            <span />
          </Link>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="c-pointer" to="/">
                FEATURES
              </Link>
            </li>
            <li className="nav-item">
              <Link className="c-pointer" to="/">
                LAYOUTS
              </Link>
            </li>
            <li className="nav-item">
              <Link className="c-pointer" to="/">
                COMPONENTS
              </Link>
            </li>
            <li className="nav-item">
              <Link className="c-pointer" to="/">
                APPS
              </Link>
            </li>
            <li className="nav-item">
              <Link className="c-pointer" to="/">
                THEMES
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="c-pointer btn btn-outline-primary"
                to="/auth/login"
              >
                LOGIN
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="c-pointer btn btn-outline-primary"
                to="/auth/signup"
              >
                SIGN UP
              </Link>
            </li>
            <li className="nav-item">
              <div className="separator" />
            </li>
          </ul>
        </div>
        <div className="main-container">
          <div
            className="landing-page-nav headroom-wrapper"
            style={{ height: "80px" }}
          >
            <div
              className="headroom headroom--unfixed headroom-disable-animation"
              style={{
                background: "#922c88",
                position: "relative",
                top: "0px",
                left: "0px",
                right: "0px",
                zIndex: 1,
                transform: "translate3d(0px, 0px, 0px)",
              }}
            >
              <nav>
                <div className="container d-flex align-items-center justify-content-between">
                  <Link className="navbar-logo pull-left c-pointer" to="">
                    <span className="white" />
                    <span className="dark" />
                  </Link>
                  <ul className="navbar-nav d-none d-lg-flex flex-row">
                    <li className="nav-item">
                      <Link className="c-pointer" to="/">
                        FEATURES
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="c-pointer" to="/">
                        LAYOUTS
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="c-pointer" to="/">
                        COMPONENTS
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="c-pointer" to="/">
                        APPS
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="c-pointer" to="/">
                        THEMES
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="c-pointer btn btn-outline-semi-light"
                        to="/auth/login"
                      >
                        LOGIN
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="c-pointer btn btn-outline-semi-light"
                        to="/auth/signup"
                      >
                        SIGN UP
                      </Link>
                    </li>
                  </ul>
                  <span
                    onClick={() => {
                      togleSideMenu();
                    }}
                    className="mobile-menu-button"
                  >
                    <i className="simple-icon-menu" />
                  </span>
                </div>
              </nav>
            </div>
          </div>
          <div className="content-container" id="home">
            <div
              className="section home"
              style={{ backgroundPositionX: "-527.5px" }}
            >
              <div className="container">
                <div className="row home-row">
                  <div className="col-12 d-block d-md-none">
                    <Link className="active" to="/">
                      <img
                        alt="mobile hero"
                        className="mobile-hero"
                        src="./img/landing-page/home-hero-mobile.png"
                      />
                    </Link>
                  </div>
                  <div className="col-12 col-xl-4 col-lg-5 col-md-6">
                    <div className="home-text">
                      <div className="display-1">
                        MAGIC IS IN <br />
                        THE DETAILS
                      </div>
                      <p className="white mb-5">
                        Gogo is the combination of good design, quality code and
                        attention for details.
                        <br />
                        <br />
                        We used same design language for components, layouts,
                        apps and other parts of the template. <br />
                        <br />
                        Hope you enjoy it!
                      </p>
                      <Link
                        className="btn btn-light btn-xl mr-2 mb-2"
                        to="/auth/login"
                      >
                        VIEW NOW <i className="simple-icon-arrow-right" />
                      </Link>
                    </div>
                  </div>
                  <div className="col-12 col-xl-7 offset-xl-1 col-lg-7 col-md-6  d-none d-md-block">
                    <span>
                      <img
                        style={{
                          transform,
                          transition: "left 0.3s ease, top 0.3s ease",
                        }}
                        alt="hero"
                        src="./img/landing-page/home-hero.png"
                      />
                    </span>
                  </div>
                </div>
                {/* <div className="row">
                  <div className="col-12 p-0">
                    <div className="home-carousel">
                      <div>
                        <div className="glide glide--swipeable glide--ltr glide--carousel">
                          <div data-glide-el="track" className="glide__track">
                            <div
                              className="glide__slides"
                              style={{
                                transition:
                                  "transform 0ms cubic-bezier(0.165, 0.84, 0.44, 1) 0s",
                                width: "5143.33px",
                                transform: "translate3d(-1283.33px, 0px, 0px)",
                              }}
                            >
                              <div
                                className="card glide__slide--clone"
                                style={{
                                  width: "293.333px",
                                  marginRight: "15px",
                                }}
                              >
                                <div className="card-body text-center">
                                  <div>
                                    <i className="iconsminds-deer large-icon" />
                                    <h5 className="mb-3 font-weight-semibold">
                                      Icons Mind
                                    </h5>
                                  </div>
                                  <div>
                                    <p className="detail-text">
                                      1040 icons in 53 different categories,
                                      designed pixel perfect and ready for your
                                      project.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="card glide__slide--clone"
                                style={{
                                  width: "293.333px",
                                  marginLeft: "15px",
                                  marginRight: "15px",
                                }}
                              >
                                <div className="card-body text-center">
                                  <div>
                                    <i className="iconsminds-palette large-icon" />
                                    <h5 className="mb-3 font-weight-semibold">
                                      20 Color Schemes
                                    </h5>
                                  </div>
                                  <div>
                                    <p className="detail-text">
                                      Colors, icons and design harmony that
                                      creates excellent themes to cover entire
                                      project.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="card glide__slide--clone"
                                style={{
                                  width: "293.333px",
                                  marginLeft: "15px",
                                  marginRight: "15px",
                                }}
                              >
                                <div className="card-body text-center">
                                  <div>
                                    <i className="iconsminds-air-balloon-1 large-icon" />
                                    <h5 className="mb-3 font-weight-semibold">
                                      3 Applications
                                    </h5>
                                  </div>
                                  <div>
                                    <p className="detail-text">
                                      Applications that mostly made of
                                      components are the way to get started to
                                      create something similar.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="card glide__slide--clone"
                                style={{
                                  width: "293.333px",
                                  marginLeft: "15px",
                                  marginRight: "15px",
                                }}
                              >
                                <div className="card-body text-center">
                                  <div>
                                    <i className="iconsminds-resize large-icon" />
                                    <h5 className="mb-3 font-weight-semibold">
                                      Extra Responsive
                                    </h5>
                                  </div>
                                  <div>
                                    <p className="detail-text">
                                      Custom Bootstrap 4 xxs &amp; xxl classes
                                      delivers better experiences for smaller
                                      and larger screens.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="card glide__slide--active"
                                style={{
                                  width: "293.333px",
                                  marginLeft: "15px",
                                  marginRight: "15px",
                                }}
                              >
                                <div className="card-body text-center">
                                  <div>
                                    <i className="iconsminds-mouse-3 large-icon" />
                                    <h5 className="mb-3 font-weight-semibold">
                                      Right Click Menu
                                    </h5>
                                  </div>
                                  <div>
                                    <p className="detail-text">
                                      Increases overall usability of the project
                                      by providing additional actions menu.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="card"
                                style={{
                                  width: "293.333px",
                                  marginLeft: "15px",
                                  marginRight: "15px",
                                }}
                              >
                                <div className="card-body text-center">
                                  <div>
                                    <i className="iconsminds-electric-guitar large-icon" />
                                    <h5 className="mb-3 font-weight-semibold">
                                      Video Player
                                    </h5>
                                  </div>
                                  <div>
                                    <p className="detail-text">
                                      Carefully themed multimedia players
                                      powered by Video.js library with Youtube
                                      support.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="card"
                                style={{
                                  width: "293.333px",
                                  marginLeft: "15px",
                                  marginRight: "15px",
                                }}
                              >
                                <div className="card-body text-center">
                                  <div>
                                    <i className="iconsminds-keyboard large-icon" />
                                    <h5 className="mb-3 font-weight-semibold">
                                      Keyboard Shortcuts
                                    </h5>
                                  </div>
                                  <div>
                                    <p className="detail-text">
                                      Easily configurable keyboard shortcuts
                                      plugin that highly improves user
                                      experience.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="card"
                                style={{
                                  width: "293.333px",
                                  marginLeft: "15px",
                                  marginRight: "15px",
                                }}
                              >
                                <div className="card-body text-center">
                                  <div>
                                    <i className="iconsminds-three-arrow-fork  large-icon" />
                                    <h5 className="mb-3 font-weight-semibold">
                                      Two Panels Menu
                                    </h5>
                                  </div>
                                  <div>
                                    <p className="detail-text">
                                      Three states two panels icon menu that
                                      looks good, auto resizes and does the job
                                      well.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="card"
                                style={{
                                  width: "293.333px",
                                  marginLeft: "15px",
                                  marginRight: "15px",
                                }}
                              >
                                <div className="card-body text-center">
                                  <div>
                                    <i className="iconsminds-deer large-icon" />
                                    <h5 className="mb-3 font-weight-semibold">
                                      Icons Mind
                                    </h5>
                                  </div>
                                  <div>
                                    <p className="detail-text">
                                      1040 icons in 53 different categories,
                                      designed pixel perfect and ready for your
                                      project.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="card"
                                style={{
                                  width: "293.333px",
                                  marginLeft: "15px",
                                  marginRight: "15px",
                                }}
                              >
                                <div className="card-body text-center">
                                  <div>
                                    <i className="iconsminds-palette large-icon" />
                                    <h5 className="mb-3 font-weight-semibold">
                                      20 Color Schemes
                                    </h5>
                                  </div>
                                  <div>
                                    <p className="detail-text">
                                      Colors, icons and design harmony that
                                      creates excellent themes to cover entire
                                      project.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="card"
                                style={{
                                  width: "293.333px",
                                  marginLeft: "15px",
                                  marginRight: "15px",
                                }}
                              >
                                <div className="card-body text-center">
                                  <div>
                                    <i className="iconsminds-air-balloon-1 large-icon" />
                                    <h5 className="mb-3 font-weight-semibold">
                                      3 Applications
                                    </h5>
                                  </div>
                                  <div>
                                    <p className="detail-text">
                                      Applications that mostly made of
                                      components are the way to get started to
                                      create something similar.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="card"
                                style={{
                                  width: "293.333px",
                                  marginLeft: "15px",
                                  marginRight: "15px",
                                }}
                              >
                                <div className="card-body text-center">
                                  <div>
                                    <i className="iconsminds-resize large-icon" />
                                    <h5 className="mb-3 font-weight-semibold">
                                      Extra Responsive
                                    </h5>
                                  </div>
                                  <div>
                                    <p className="detail-text">
                                      Custom Bootstrap 4 xxs &amp; xxl classes
                                      delivers better experiences for smaller
                                      and larger screens.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="card glide__slide--clone"
                                style={{
                                  width: "293.333px",
                                  marginLeft: "15px",
                                  marginRight: "15px",
                                }}
                              >
                                <div className="card-body text-center">
                                  <div>
                                    <i className="iconsminds-mouse-3 large-icon" />
                                    <h5 className="mb-3 font-weight-semibold">
                                      Right Click Menu
                                    </h5>
                                  </div>
                                  <div>
                                    <p className="detail-text">
                                      Increases overall usability of the project
                                      by providing additional actions menu.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="card glide__slide--clone"
                                style={{
                                  width: "293.333px",
                                  marginLeft: "15px",
                                  marginRight: "15px",
                                }}
                              >
                                <div className="card-body text-center">
                                  <div>
                                    <i className="iconsminds-electric-guitar large-icon" />
                                    <h5 className="mb-3 font-weight-semibold">
                                      Video Player
                                    </h5>
                                  </div>
                                  <div>
                                    <p className="detail-text">
                                      Carefully themed multimedia players
                                      powered by Video.js library with Youtube
                                      support.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="card glide__slide--clone"
                                style={{
                                  width: "293.333px",
                                  marginLeft: "15px",
                                  marginRight: "15px",
                                }}
                              >
                                <div className="card-body text-center">
                                  <div>
                                    <i className="iconsminds-keyboard large-icon" />
                                    <h5 className="mb-3 font-weight-semibold">
                                      Keyboard Shortcuts
                                    </h5>
                                  </div>
                                  <div>
                                    <p className="detail-text">
                                      Easily configurable keyboard shortcuts
                                      plugin that highly improves user
                                      experience.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="card glide__slide--clone"
                                style={{
                                  width: "293.333px",
                                  marginLeft: "15px",
                                }}
                              >
                                <div className="card-body text-center">
                                  <div>
                                    <i className="iconsminds-three-arrow-fork  large-icon" />
                                    <h5 className="mb-3 font-weight-semibold">
                                      Two Panels Menu
                                    </h5>
                                  </div>
                                  <div>
                                    <p className="detail-text">
                                      Three states two panels icon menu that
                                      looks good, auto resizes and does the job
                                      well.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
                <div className="row">
                  <a
                    className="btn btn-circle btn-outline-semi-light hero-circle-button"
                    href="/#features"
                  >
                    <i className="simple-icon-arrow-down" />
                  </a>
                </div>
              </div>
            </div>
            <div className="section">
              <div className="container" id="features">
                <div className="row">
                  <div className="col-12 offset-0 col-lg-8 offset-lg-2 text-center">
                    <h1>Features At a Glance</h1>
                    <p>
                      We tried to create an admin theme that we would like to
                      use ourselves so we listed our priorities. We would like
                      to have a theme that is not over complicated to use, does
                      the job well, contains must have omponents and looks
                      really nice.
                    </p>
                  </div>
                </div>
                <div>
                  <div className="row feature-row">
                    <div className="col-12 col-md-6 col-lg-5 d-flex align-items-center">
                      <div className="feature-text-container">
                        <h2>Pleasant Design</h2>
                        <div>
                          As a web developer we enjoy to work on something looks
                          nice. It is not an absolute necessity but it really
                          motivates us that final product will look good for
                          user point of view. <br />
                          <br />
                          So we put a lot of work into colors, icons,
                          composition and design harmony. Themed components and
                          layouts with same design language. <br />
                          <br />
                          We kept user experience principles always at the heart
                          of the design process.
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 offset-lg-1 offset-md-0 position-relative">
                      <img
                        alt="Pleasant Design"
                        src="./img/landing-page/features/plesant-design.png"
                        className="feature-image-right feature-image-charts position-relative"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="row feature-row">
                    <div className="col-12 col-md-6 col-lg-6 order-2 order-md-1">
                      <img
                        alt="Extra Responsive"
                        src="./img/landing-page/features/extra-responsive.png"
                        className="feature-image-left feature-image-charts"
                      />
                    </div>
                    <div className="col-12 col-md-6 offset-md-0 col-lg-5 offset-lg-1 d-flex align-items-center order-1 order-md-2">
                      <div className="feature-text-container">
                        <h2>Extra Responsive</h2>
                        <div>
                          Xxs breakpoint is for smaller screens that has a
                          resolution lower than 420px. Xs works between 576px
                          and 420px. Xxl breakpoint is for larger screens that
                          has a resolution higher than 1440px. Xl works between
                          1200px and 1440px.
                          <br />
                          <br />
                          With this approach we were able to create better
                          experiences for smaller and larger screens.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="row feature-row">
                    <div className="col-12 col-md-6 col-lg-5 d-flex align-items-center">
                      <div className="feature-text-container">
                        <h2>Superfine Charts</h2>
                        <div>
                          Using charts is a good way to visualize data but they
                          often look ugly and break the rhythm of design. <br />
                          <br />
                          We concentrated on a single chart library and tried to
                          create charts that look good with color, opacity,
                          border and shadow. <br />
                          <br />
                          Used certain plugins and created some to make charts
                          even more useful and beautiful.
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 offset-lg-1 offset-md-0 position-relative">
                      <img
                        alt="Superfine Charts"
                        src="./img/landing-page/features/superfine-charts.png"
                        className="feature-image-right feature-image-charts position-relative"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="row feature-row">
                    <div className="col-12 col-md-6 col-lg-6 order-2 order-md-1">
                      <img
                        alt="Layouts for the Job"
                        src="./img/landing-page/features/layouts-for-the-job.png"
                        className="feature-image-left feature-image-charts"
                      />
                    </div>
                    <div className="col-12 col-md-6 offset-md-0 col-lg-5 offset-lg-1 d-flex align-items-center order-1 order-md-2">
                      <div className="feature-text-container">
                        <h2>Layouts for the Job</h2>
                        <div>
                          Layouts are the real thing, they need to be accurate
                          and right for the job. They should be functional for
                          both user and developer. <br />
                          <br />
                          We created lots of different layouts for different
                          jobs.
                          <br />
                          <br />
                          Listing pages with view mode changing capabilities,
                          shift select and select all functionality, application
                          layouts with an additional menu, authentication and
                          error layouts which has a different design than the
                          other pages were our main focus. We also created
                          details page with tabs that can hold many components.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="row feature-row">
                    <div className="col-12 col-md-6 col-lg-5 d-flex align-items-center">
                      <div className="feature-text-container">
                        <h2>Smart Menu</h2>
                        <div>
                          Instead of good old single panel menus with accordion
                          structure that looks over complicated, we created 2
                          panels and categorized pages accordingly.
                          <br />
                          <br />
                          The default menu auto hides sub panel when resolution
                          is under some breakpoint to open some space. You may
                          also hide menu completely or use only main panel open
                          only.
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 offset-lg-1 offset-md-0 position-relative">
                      <img
                        alt="Smart Menu"
                        src="./img/landing-page/features/smart-menu.png"
                        className="feature-image-right feature-image-charts position-relative"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="section background">
              <div className="container" id="layouts">
                <div className="row">
                  <div className="col-12 offset-0 col-lg-8 offset-lg-2 text-center">
                    <h1>Structures &amp; Layouts</h1>
                    <p>
                      We did our best to create layouts for various needs that
                      developers might have and best experience for users.
                      <br />
                      They are clean and slick. They function well and look good
                      at the same time.
                    </p>
                  </div>
                </div>
                <div className="row pt-5">
                  <div className="col-12 col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-5">
                    <img
                      className="img-fluid border-radius depth-2 mb-3 semi-rounded"
                      alt="Menu Default"
                      src="./img/landing-page/layouts/menu-default.jpg"
                    />
                    <h4 className="text-center">Menu Default</h4>
                  </div>
                  <div className="col-12 col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-5">
                    <img
                      className="img-fluid border-radius depth-2 mb-3 semi-rounded"
                      alt="Menu Subhidden"
                      src="./img/landing-page/layouts/menu-subhidden.jpg"
                    />
                    <h4 className="text-center">Menu Subhidden</h4>
                  </div>
                  <div className="col-12 col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-5">
                    <img
                      className="img-fluid border-radius depth-2 mb-3 semi-rounded"
                      alt="Menu Hidden"
                      src="./img/landing-page/layouts/menu-hidden.jpg"
                    />
                    <h4 className="text-center">Menu Hidden</h4>
                  </div>
                  <div className="col-12 col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-5">
                    <img
                      className="img-fluid border-radius depth-2 mb-3 semi-rounded"
                      alt="Image List"
                      src="./img/landing-page/layouts/image-list.jpg"
                    />
                    <h4 className="text-center">Image List</h4>
                  </div>
                  <div className="col-12 col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-5">
                    <img
                      className="img-fluid border-radius depth-2 mb-3 semi-rounded"
                      alt="Thumb List"
                      src="./img/landing-page/layouts/thumb-list.jpg"
                    />
                    <h4 className="text-center">Thumb List</h4>
                  </div>
                  <div className="col-12 col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-5">
                    <img
                      className="img-fluid border-radius depth-2 mb-3 semi-rounded"
                      alt="Data List"
                      src="./img/landing-page/layouts/data-list.jpg"
                    />
                    <h4 className="text-center">Data List</h4>
                  </div>
                  <div className="col-12 col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-5">
                    <img
                      className="img-fluid border-radius depth-2 mb-3 semi-rounded"
                      alt="Details"
                      src="./img/landing-page/layouts/details.jpg"
                    />
                    <h4 className="text-center">Details</h4>
                  </div>
                  <div className="col-12 col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-5">
                    <img
                      className="img-fluid border-radius depth-2 mb-3 semi-rounded"
                      alt="Authentication"
                      src="./img/landing-page/layouts/authentication.jpg"
                    />
                    <h4 className="text-center">Authentication</h4>
                  </div>
                  <div className="col-12 col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-5">
                    <img
                      className="img-fluid border-radius depth-2 mb-3 semi-rounded"
                      alt="Search Results"
                      src="./img/landing-page/layouts/search-result.jpg"
                    />
                    <h4 className="text-center">Search Results</h4>
                  </div>
                  <div className="col-12 col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-5">
                    <img
                      className="img-fluid border-radius depth-2 mb-3 semi-rounded"
                      alt="Single Page Application"
                      src="./img/landing-page/layouts/spa.jpg"
                    />
                    <h4 className="text-center">Single Page Application</h4>
                  </div>
                  <div className="col-12 col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-5">
                    <img
                      className="img-fluid border-radius depth-2 mb-3 semi-rounded"
                      alt="Data List App Menu Hidden"
                      src="./img/landing-page/layouts/data-list-app-menu-hidden.jpg"
                    />
                    <h4 className="text-center">Data List App Menu Hidden</h4>
                  </div>
                  <div className="col-12 col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-5">
                    <img
                      className="img-fluid border-radius depth-2 mb-3 semi-rounded"
                      alt="Tabs"
                      src="./img/landing-page/layouts/tabs.jpg"
                    />
                    <h4 className="text-center">Tabs</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="section mb-0">
              <div className="container" id="components">
                <div className="row mb-5">
                  <div className="col-12 offset-0 col-lg-8 offset-lg-2 text-center">
                    <h1>Components</h1>
                    <p>
                      We used most popular and well managed open source
                      components with bootstrap components. Combined them into
                      even more useful ones. Themed them with same design
                      principles and created a design harmony between components
                      and layouts.
                      <br />
                      <br />
                      From carousels to charts, switches to list we tried to
                      provide components that we like to use on our development
                      processes.
                    </p>
                  </div>
                </div>
              </div>
              <img
                className="components-image mb-5 pb-5"
                alt="Components"
                src="./img/landing-page/components.jpg"
              />
            </div>
            <div className="section background">
              <div className="container" id="apps">
                <div className="row">
                  <div className="col-12 offset-0 col-lg-8 offset-lg-2 text-center mb-4">
                    <h1>Applications</h1>
                    <p className="section-text">
                      With the help of components and layouts, we created four
                      different applications. They are a good way to get you
                      started if you want to build something similar.
                    </p>
                  </div>
                </div>
                <div className="row screenshots">
                  <div className="col-12 text-center mb-4">
                    <ul
                      className="nav nav-tabs justify-content-center mb-4"
                      role="tablist"
                    >
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          data-toggle="tab"
                          href="#survey"
                          role="tab"
                        >
                          <p>Survey</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          data-toggle="tab"
                          href="#chat"
                          role="tab"
                        >
                          <p>Chat</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          data-toggle="tab"
                          href="#todo"
                          role="tab"
                        >
                          <p>Todo</p>
                        </a>
                      </li>
                    </ul>
                    <div className="tab-content">
                      <div
                        className="tab-pane active"
                        id="survey"
                        role="tabpanel"
                      >
                        <Link to="/">
                          <img
                            alt="Survey"
                            src="./img/landing-page/applications/survey.jpg"
                            className="app-image"
                          />
                        </Link>
                      </div>
                      <div className="tab-pane" role="tabpanel" id="chat">
                        <Link to="/">
                          <img
                            alt="Chat"
                            src="./img/landing-page/applications/chat.jpg"
                            className="app-image"
                          />
                        </Link>
                      </div>
                      <div className="tab-pane" role="tabpanel" id="todo">
                        <Link to="/">
                          <img
                            alt="Todo"
                            src="./img/landing-page/applications/todo.jpg"
                            className="app-image"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="section mb-0">
              <div className="container" id="themes">
                <div className="row mb-5">
                  <div className="col-12 offset-0 col-lg-8 offset-lg-2 text-center">
                    <h1>Themes</h1>
                    <p>
                      We carefully choosed colors and created 10 different
                      themes with dark and light versions. You may also create
                      your own themes easily since all the theme related styling
                      is managed by Sass variables.
                    </p>
                  </div>
                </div>
                <div className="row mb-5">
                  <div className="col-12 text-center mb-3">
                    <h4 className="text-center">Navy Blue</h4>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4 offset-lg-2 mb-3">
                    <div className="depth-2 color-container">
                      <div className="bluenavy-light-1 color-left" />
                      <div className="bluenavy-light-2 color-center" />
                      <div className="bluenavy-light-3 color-right" />
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4 mb-3">
                    <div className="depth-2 color-container">
                      <div className="bluenavy-dark-1 color-left" />
                      <div className="bluenavy-dark-2 color-center" />
                      <div className="bluenavy-dark-3 color-right" />
                    </div>
                  </div>
                </div>
                <div className="row mb-5">
                  <div className="col-12 text-center mb-3">
                    <h4 className="text-center">Olympic Blue</h4>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4 offset-lg-2 mb-3">
                    <div className="depth-2 color-container">
                      <div className="blueolympic-light-1 color-left" />
                      <div className="blueolympic-light-2 color-center" />
                      <div className="blueolympic-light-3 color-right" />
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4 mb-3">
                    <div className="depth-2 color-container">
                      <div className="blueolympic-dark-1 color-left" />
                      <div className="blueolympic-dark-2 color-center" />
                      <div className="blueolympic-dark-3 color-right" />
                    </div>
                  </div>
                </div>
                <div className="row mb-5">
                  <div className="col-12 text-center mb-3">
                    <h4 className="text-center">Yale Blue</h4>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4 offset-lg-2 mb-3">
                    <div className="depth-2 color-container">
                      <div className="blueyale-light-1 color-left" />
                      <div className="blueyale-light-2 color-center" />
                      <div className="blueyale-light-3 color-right" />
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4 mb-3">
                    <div className="depth-2 color-container">
                      <div className="blueyale-dark-1 color-left" />
                      <div className="blueyale-dark-2 color-center" />
                      <div className="blueyale-dark-3 color-right" />
                    </div>
                  </div>
                </div>
                <div className="row mb-5">
                  <div className="col-12 text-center mb-3">
                    <h4 className="text-center">Moss Green</h4>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4 offset-lg-2 mb-3">
                    <div className="depth-2 color-container">
                      <div className="greenmoss-light-1 color-left" />
                      <div className="greenmoss-light-2 color-center" />
                      <div className="greenmoss-light-3 color-right" />
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4 mb-3">
                    <div className="depth-2 color-container">
                      <div className="greenmoss-dark-1 color-left" />
                      <div className="greenmoss-dark-2 color-center" />
                      <div className="greenmoss-dark-3 color-right" />
                    </div>
                  </div>
                </div>
                <div className="row mb-5">
                  <div className="col-12 text-center mb-3">
                    <h4 className="text-center">Lime Green</h4>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4 offset-lg-2 mb-3">
                    <div className="depth-2 color-container">
                      <div className="greenlime-light-1 color-left" />
                      <div className="greenlime-light-2 color-center" />
                      <div className="greenlime-light-3 color-right" />
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4 mb-3">
                    <div className="depth-2 color-container">
                      <div className="greenlime-dark-1 color-left" />
                      <div className="greenlime-dark-2 color-center" />
                      <div className="greenlime-dark-3 color-right" />
                    </div>
                  </div>
                </div>
                <div className="row mb-5">
                  <div className="col-12 text-center mb-3">
                    <h4 className="text-center">Carrot Orange</h4>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4 offset-lg-2 mb-3">
                    <div className="depth-2 color-container">
                      <div className="carrotorange-light-1 color-left" />
                      <div className="carrotorange-light-2 color-center" />
                      <div className="carrotorange-light-3 color-right" />
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4 mb-3">
                    <div className="depth-2 color-container">
                      <div className="carrotorange-dark-1 color-left" />
                      <div className="carrotorange-dark-2 color-center" />
                      <div className="carrotorange-dark-3 color-right" />
                    </div>
                  </div>
                </div>
                <div className="row mb-5">
                  <div className="col-12 text-center mb-3">
                    <h4 className="text-center">Ruby Red</h4>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4 offset-lg-2 mb-3">
                    <div className="depth-2 color-container">
                      <div className="rubyred-light-1 color-left" />
                      <div className="rubyred-light-2 color-center" />
                      <div className="rubyred-light-3 color-right" />
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4 mb-3">
                    <div className="depth-2 color-container">
                      <div className="rubyred-dark-1 color-left" />
                      <div className="rubyred-dark-2 color-center" />
                      <div className="rubyred-dark-3 color-right" />
                    </div>
                  </div>
                </div>
                <div className="row mb-5">
                  <div className="col-12 text-center mb-3">
                    <h4 className="text-center">Monster Purple</h4>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4 offset-lg-2 mb-3">
                    <div className="depth-2 color-container">
                      <div className="monsterpurple-light-1 color-left" />
                      <div className="monsterpurple-light-2 color-center" />
                      <div className="monsterpurple-light-3 color-right" />
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4 mb-3">
                    <div className="depth-2 color-container">
                      <div className="monsterpurple-dark-1 color-left" />
                      <div className="monsterpurple-dark-2 color-center" />
                      <div className="monsterpurple-dark-3 color-right" />
                    </div>
                  </div>
                </div>
                <div className="row mb-5">
                  <div className="col-12 text-center mb-3">
                    <h4 className="text-center">Steel Grey</h4>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4 offset-lg-2 mb-3">
                    <div className="depth-2 color-container">
                      <div className="steelgrey-light-1 color-left" />
                      <div className="steelgrey-light-2 color-center" />
                      <div className="steelgrey-light-3 color-right" />
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4 mb-3">
                    <div className="depth-2 color-container">
                      <div className="steelgrey-dark-1 color-left" />
                      <div className="steelgrey-dark-2 color-center" />
                      <div className="steelgrey-dark-3 color-right" />
                    </div>
                  </div>
                </div>
                <div className="row mb-5">
                  <div className="col-12 text-center mb-3">
                    <h4 className="text-center">Granola Yellow</h4>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4 offset-lg-2 mb-3">
                    <div className="depth-2 color-container">
                      <div className="granolayellow-light-1 color-left" />
                      <div className="granolayellow-light-2 color-center" />
                      <div className="granolayellow-light-3 color-right" />
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4 mb-3">
                    <div className="depth-2 color-container">
                      <div className="granolayellow-dark-1 color-left" />
                      <div className="granolayellow-dark-2 color-center" />
                      <div className="granolayellow-dark-3 color-right" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="section background background-no-bottom mb-0 pb-0">
              <div className="container">
                <div className="row">
                  <div className="col-12 offset-0 col-lg-8 offset-lg-2 text-center">
                    <h1>Enjoying so Far?</h1>
                    <p>
                      Purchase Gogo to get a fresh start with your new project.
                    </p>
                  </div>
                  <div className="col-12 offset-0 col-lg-6 offset-lg-3 newsletter-input-container">
                    <div className="text-center mb-3">
                      <Link
                        className="btn btn-secondary btn-xl"
                        // target="_blank"
                        rel="noopener noreferrer"
                        to="/auth/login"
                      >
                        GET START
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="section footer mb-0"
              style={{ backgroundPositionX: "-500.5px" }}
            >
              <div className="container">
                <div className="row footer-row">
                  <div className="col-12 text-right">
                    <a
                      className="btn btn-circle border border-light btn-primary footer-circle-button c-pointer"
                      href="#home"
                    >
                      <i className="simple-icon-arrow-up" />
                    </a>
                  </div>
                  <div className="col-12 text-center footer-content">
                    <Link className="c-pointer" to="/">
                      <img
                        className="footer-logo"
                        alt="footer logo"
                        src="./logos/white-full.svg"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className=" separator mt-5" />
              <div className="container copyright pt-5 pb-5">
                <div className="row">
                  <div className="col-12" />
                  <div className="col-12 text-center">
                    <p className="mb-0">2021 © ColoredStrategies</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
