import React, { useEffect } from "react";
import "./App.css";
import mgamil from "./assets/mgamil.jpg";
import pswap from "./assets/pushswap.gif";
import minishell from "./assets/minishell.gif";
import Cub3d from "./assets/cub3d.mp4";
import "./styles.scss"
import "https://unpkg.com/scrollreveal@4.0.0/dist/scrollreveal.min.js"
import initScrollReveal from "./scripts/scrollReveal";
import ScrollReveal from "scrollreveal";

function App() {
  ScrollReveal().reveal('.headline') 
  return (
    <>
      <div className="App">
        <div>
          <title>Gamil Mohamed</title>
          <meta name="keywords" content="[username], [name], skill" />
          <meta name="description" content="[Your name here] | Developer" />
        </div>

          <div id="top"></div>
          <section id="hero" className="jumbotron">
            <div className="container">
              <h1 className="hero-title load-hidden">
                Hi, I'm <span className="text-color-main">Gamil Mohamed</span>
                <br />A 42 Student.
              </h1>
              <p>sadas</p>
              <p className="hero-cta load-hidden">
                <a
                  rel="noreferrer"
                  className="cta-btn cta-btn--hero"
                  href="#about"
                >
                  Know more
                </a>
              </p>
            </div>
          </section>

          <section id="about">
            <div className="container">
              <h2 className="section-title load-hidden">About me</h2>
              <div className="row about-wrapper">
                <div className="col-md-6 col-sm-12">
                  <div className="about-wrapper__image load-hidden">
                    <img
                      alt="Profile"
                      className="img-fluid"
                      height="auto"
                      width="300px"
                      src={mgamil}
                      // style="border-radius: 0px 40px 0px 40px; border: 0px solid rgb(22, 57, 93); box-shadow: 15px 10px 13px 0px rgb(22, 47, 77);"
                    />
                  </div>
                </div>
                <div className="col-md-6 col-sm-12">
                  <div className="about-wrapper__info load-hidden">
                    <p className="about-wrapper__info-text">
                      I'm Mohamed Gamil, 24 years old and student at 42 Paris.
                      I'm a passionate about programming and I'm always looking
                      for new challenges. I'm pretty good in C, C++ and
                      TypeScript.
                    </p>
                    <p className="about-wrapper__info-text">
                      I'm currently looking for an internship in Paris in
                      backend or embedded systems.
                      <br />
                    </p>
                    <span className="d-flex mt-3">
                      <a
                        rel="noreferrer"
                        target="_blank"
                        className="cta-btn cta-btn--resume"
                        href="assets/resume.pdf"
                      >
                        View Resume
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="contact">
            <div className="container">
              <h2 className="section-title">Languages</h2>
              <div className="contact-wrapper load-hidden"></div>
            </div>
          </section>

          <section id="projects">
            <div className="container">
              <div className="project-wrapper">
                <h2 className="section-title dark-blue-text">Projects</h2>

                <div className="row">
                  <div className="col-lg-4 col-sm-12">
                    <div className="project-wrapper__text load-hidden">
                      <h3 className="project-wrapper__text-title">Minishell</h3>
                      <div>
                        <p className="mb-4">
                          The objective of this project is for you to create a
                          simple shell. Learnt a lot about file descriptors,
                          process and bash. Coded in C.
                        </p>
                      </div>
                      <a
                        rel="noreferrer"
                        target="_blank"
                        className="cta-btn cta-btn--hero"
                        href="https://github.com/GamilMohamed/tempshell"
                      >
                        See Live
                      </a>
                      <a
                        rel="noreferrer"
                        target="_blank"
                        className="cta-btn text-color-main"
                        href="https://github.com/GamilMohamed/tempshell"
                      >
                        Source Code
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-8 col-sm-12">
                    <div className="project-wrapper__image load-hidden">
                      <a
                        rel="noreferrer"
                        href="https://github.com/GamilMohamed/tempshell"
                        target="_blank"
                      >
                        <div
                          data-tilt
                          data-tilt-max="4"
                          data-tilt-glare="true"
                          data-tilt-max-glare="0.5"
                          className="thumbnail rounded js-tilt"
                        >
                          <img
                            alt="Project"
                            className="img-fluid"
                            src={minishell}
                          />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-4 col-sm-12">
                    <div className="project-wrapper__text load-hidden">
                      <h3 className="project-wrapper__text-title">Cub3D</h3>
                      <div>
                        <p className="mb-4">
                          Interesting project where I learnt how raycasting
                          works and how to render a 3D environment with a 2D
                          map. Coded in C with the minilibx library."
                        </p>
                      </div>
                      <a
                        rel="noreferrer"
                        target="_blank"
                        className="cta-btn cta-btn--hero"
                        href="https://github.com/GamilMohamed/cub3d"
                      >
                        See Live
                      </a>
                      <a
                        rel="noreferrer"
                        target="_blank"
                        className="cta-btn text-color-main"
                        href="https://github.com/GamilMohamed/cub3d"
                      >
                        Source Code
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-8 col-sm-12">
                    <div className="project-wrapper__image load-hidden">
                      <a
                        rel="noreferrer"
                        href="https://github.com/GamilMohamed/cub3d"
                        target="_blank"
                      >
                        <div
                          data-tilt
                          data-tilt-max="4"
                          data-tilt-glare="true"
                          data-tilt-max-glare="0.5"
                          className="thumbnail rounded js-tilt"
                        >
                          <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="img-fluid"
                            src={Cub3d}
                          />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-4 col-sm-12">
                    <div className="project-wrapper__text load-hidden">
                      <h3 className="project-wrapper__text-title">Push Swap</h3>
                      <div>
                        <p className="mb-4">
                          A sorting algorithm that operates on two stacks with
                          limited operations with a visualizer to see how it
                          works. Coded in C with the Ncurse library.
                        </p>
                      </div>
                      <a
                        rel="noreferrer"
                        target="_blank"
                        className="cta-btn cta-btn--hero"
                        href="https://github.com/GamilMohamed/push_swap"
                      >
                        See Live
                      </a>
                      <a
                        rel="noreferrer"
                        target="_blank"
                        className="cta-btn text-color-main"
                        href="https://github.com/GamilMohamed/push_swap"
                      >
                        Source Code
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-8 col-sm-12">
                    <div className="project-wrapper__image load-hidden">
                      <a
                        rel="noreferrer"
                        href="https://github.com/GamilMohamed/push_swap"
                        target="_blank"
                      >
                        <div
                          data-tilt
                          data-tilt-max="4"
                          data-tilt-glare="true"
                          data-tilt-max-glare="0.5"
                          className="thumbnail rounded js-tilt"
                        >
                          <img
                            alt="Project"
                            className="img-fluid"
                            src={pswap}
                          />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <footer className="footer navbar-static-bottom">
            <div className="container">
              <a rel="noreferrer" href="#top" className="back-to-top">
                <i className="fa fa-angle-up fa-2x" aria-hidden="true"></i>
              </a>
              <div className="social-links">
                <a rel="noreferrer" href="#!" target="_blank">
                  <i className="fa fa-twitter fa-inverse"></i>
                </a>
                <a
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/mohamed-gamil-033466195/"
                  target="_blank"
                >
                  <i className="fa fa-linkedin fa-inverse"></i>
                </a>
                <a
                  rel="noreferrer"
                  href="https://github.com/GamilMohamed"
                  target="_blank"
                >
                  <i className="fa fa-github fa-inverse"></i>
                </a>
              </div>

              <hr />

              <p className="footer__text">
                © 2021 - Template developed by
                <a
                  rel="noreferrer"
                  href="https://github.com/cobiwave"
                  target="_blank"
                >
                  Jacobo Martínez
                </a>
              </p>
            </div>
          </footer>

          <script defer type="module" src="index.js"></script>
      </div>
    </>
  );
}

export default App;
