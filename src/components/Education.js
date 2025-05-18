import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Education = () => {
  const educationList = [
    {
      institution: "Small Heaven Model School",
      degree: "Secondary Education Examination (SEE)",
      duration: "2008 - 2018",
      location: "Chitwan, Nepal",
      description: "Small Heaven Model School is a reputed institution in Nepal known for its excellent SEE results and disciplined academic environment."
    },
    {
      institution: "Small Heaven Model School",
      degree: "School Leaving Certificate (SLC)",
      duration: "2018 - 2020",
      location: "Chitwan, Nepal",
      description: "Completed +2 in Science from Small Heaven Model School with a strong academic foundation in physics, chemistry, and mathematics."
    },
    {
      institution: "Sagarmatha Engineering College",
      degree: "Bachelor of Computer Engineering(BCT)",
      duration: "2020 - 2024",
      location: "Sanepa, Lalitpur",
      description: "Developed a strong foundation in programming, algorithms, system design, and artificial intelligence, with hands-on experience in building software solutions and exploring emerging technologies."
    },

    {
      institution: "Coding Bootcamp",
      degree: "Various Online Courses",
      duration: "2021 - Present",
      location: "Online",
      description: "Completed various online bootcamps focused on backend development, machine learning, and modern web technologies—enhancing practical skills through hands-on projects and real-world problem-solving."
    }
  ];

  return (
    <section className="education" id="education">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Education</h2>
                  <p>My academic journey has equipped me with a strong foundation in computer science and practical skills in software development.</p>
                  
                  <div className="education-timeline">
                    {educationList.map((edu, index) => (
                      <div className="education-item" key={index}>
                        <div className="education-content">
                          <div className="edu-year">{edu.duration}</div>
                          <h3>{edu.degree}</h3>
                          <h4>{edu.institution}</h4>
                          <div className="edu-location">{edu.location}</div>
                          <p>{edu.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};