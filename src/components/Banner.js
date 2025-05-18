import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";
import headerImg from "../assets/img/profile.png";
import { HashLink } from 'react-router-hash-link';


export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const toRotate = ["Sakar Bhandari", "Backend Developer", "AI Enthusiast"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    {`Hi! I'm `}
                    <span className="txt-rotate" data-period="1000">
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>
                    A backend developer specializing in Python, with a strong focus on web technologies and artificial intelligence.
                    I design and develop efficient, scalable APIs using Django and Django REST Framework, and actively explore deep learning, 
                    natural language processing, and data-driven systems. Passionate about building impactful, real-world applications, 
                    I bring a solution-oriented mindset and a drive for continuous innovation.
                  </p>
                  <button onClick={() => console.log("connect")}>
                    Let's Connect <ArrowRightCircle size={25} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <div className="profile-img-wrapper">
              <img src={headerImg} alt="Header Img" className="profile-img animate__animated animate__zoomIn" />
              <div className="glow-effect"></div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
