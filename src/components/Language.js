import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Languages = () => {
  const programmingLanguages = [
    {
      name: "Python",
      proficiency: 90,
      color: "#4B8BBE"
    },
    {
      name: "JavaScript",
      proficiency: 85,
      color: "#F0DB4F"
    },
    {
      name: "C++",
      proficiency: 80,
      color: "#f89820"
    },
    {
      name: "C",
      proficiency: 75,
      color: "#00599C"
    },
    
    {
      name: "SQL",
      proficiency: 85,
      color: "#E48E00"
    },
    {
      name: "TypeScript",
      proficiency: 40,
      color: "#007acc"
    }
  ];

  const spokenLanguages = [
    {
      name: "Nepali",
      level: "Native",
      proficiency: 100
    },
    {
      name: "English",
      level: "Fluent",
      proficiency: 95
    },
    {
      name: "Hindi",
      level: "Fluent",
      proficiency: 90
    },
    {
      name: "Spanish",
      level: "Basic",
      proficiency: 20
    }
  ];

  return (
    <section className="languages" id="languages">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Languages</h2>
                  <p>My technical and linguistic skills that help me connect with code and people across the globe.</p>
                  
                  <Row className="language-container">
                    <Col lg={6} md={12}>
                      <div className="language-section">
                        <h3>Programming Languages</h3>
                        {programmingLanguages.map((lang, index) => (
                          <div className="language-item" key={index}>
                            <div className="language-info">
                              <span className="language-name">{lang.name}</span>
                              <span className="language-percentage">{lang.proficiency}%</span>
                            </div>
                            <div className="progress-bar-container">
                              <div 
                                className="progress-bar" 
                                style={{ 
                                  width: `${lang.proficiency}%`,
                                  backgroundColor: lang.color
                                }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </Col>
                    
                    <Col lg={6} md={12}>
                      <div className="language-section">
                        <h3>Spoken Languages</h3>
                        <div className="spoken-languages">
                          {spokenLanguages.map((lang, index) => (
                            <div className="spoken-language-item" key={index}>
                              <div className="language-chart">
                                <svg width="120" height="120" viewBox="0 0 120 120">
                                  <circle
                                    cx="60"
                                    cy="60"
                                    r="54"
                                    fill="none"
                                    stroke="#e6e6e6"
                                    strokeWidth="12"
                                  />
                                  <circle
                                    cx="60"
                                    cy="60"
                                    r="54"
                                    fill="none"
                                    stroke="url(#gradient)"
                                    strokeWidth="12"
                                    strokeDasharray={`${lang.proficiency * 3.39} 339`}
                                    strokeDashoffset="84.75"
                                    strokeLinecap="round"
                                  />
                                  <defs>
                                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                      <stop offset="0%" stopColor="#AA367C" />
                                      <stop offset="100%" stopColor="#4A2FBD" />
                                    </linearGradient>
                                  </defs>
                                </svg>
                                <div className="percent">
                                  <span>{lang.name}</span>
                                  <span className="level">{lang.level}</span>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};