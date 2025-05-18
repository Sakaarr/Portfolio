import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/mani.png";
import projImg2 from "../assets/img/port.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/todo.png";
import projImg5 from "../assets/img/rps.png";
import projImg6 from "../assets/img/apis.png";
import projImg7 from "../assets/img/tic.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: "Money Minder",
      description: "Money Minder is an expense tracking app that helps users monitor their spending and savings. It features a smart recommendation system that advises when to curb expenses, promoting better financial habits and budgeting.",
      imgUrl: projImg1,
      techStack: ["React", "Python", "Django", "MySQL"],
      githubLink: "https://github.com/Sakaarr/moneyminder/money-minder",
      liveLink: "",
    },
    {
      title: "InsightfulLens",
      description: "InsightfulLens enables users to analyze e-commerce products before purchase by evaluating multiple factors. It also helps sellers understand customer feedback through aspect-based sentiment analysis powered by transformer models.",
      imgUrl: projImg2,
      techStack: ["Python", "PyTorch", "Transformers", "Django Rest Framework", "React","MySQL"],
      githubLink: "https://github.com/Sakaarr/InsightFullens-Backend----Major-Project-",
      liveLink: "",
    },
    {
      title: "Friend Forge",
      description: "FriendForge is the backend engine for a social media platform inspired by Facebook. It handles user authentication, posts, likes, comments, friend requests, and real-time interactions—built to replicate core social networking features with scalable backend logic.",
      imgUrl: projImg3,
      techStack: ["Python", "Django", "HTML", "CSS", "JavaScript", "PostgreSQL"],
      githubLink: "https://github.com/Sakaarr/FriendForge---Social-Media",
      liveLink: "",
    },
    {
      title: "RESTful APIs using DRF",
      description: "RESTful APIs using Django Rest Framework (DRF) is a project that demonstrates the creation of RESTful APIs for a web application. It includes user authentication, CRUD operations, and data serialization, showcasing the power of DRF in building robust APIs.",
      imgUrl: projImg6,
      techStack: ["Django", "DRF", "PostgreSQL", "JWT","Celery"],
      githubLink: "",
      liveLink: "",
    },
    {
      title: "TODO Web App",
      description: "A simple web application that allows users to create, manage, and delete tasks. Built with Django and React, it provides a user-friendly interface for task management.",
      imgUrl: projImg4,
      techStack: ["Django", "JavaScript", "HTML", "CSS","Bootstrap","SQLite"],
      githubLink: "https://github.com/Sakaarr/To-Do-Project",
      liveLink: "",
    },
    {
      title: "Rock Paper Scissors using JS",
      description: "A simple web application that allows users to play the classic game of Rock, Paper, Scissors against the computer. Built with JavaScript, HTML, and CSS, it provides a fun and interactive experience.",
      imgUrl: projImg5,
      techStack: ["JavaScript", "HTML", "CSS",],
      githubLink: "https://github.cohttps://github.com/Sakaarr/RockPaperScissorsm/yourusername/rock-paper-scissors",
      liveLink: "",
    },
    {
      title: "Tic Tac Toe using JS",
      description: "A simple web application that allows users to play the classic game of Tic Tac Toe against the computer. Built with JavaScript, HTML, and CSS, it provides a fun and interactive experience.",
      imgUrl: projImg7,
      techStack: ["JavaScript", "HTML", "CSS",],
      githubLink: "https://github.com/Sakaarr/Tictactoe",
      liveLink: "",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>
                    A selection of projects that showcase my skills in backend development, 
                    AI, and web technologies. Highlighted work demonstrating real-world 
                    applications of my expertise and creativity.
                  </p>
                  <Row className="project-container">
                    {projects.map((project, index) => {
                      return (
                        <ProjectCard
                          key={index}
                          {...project}
                        />
                      );
                    })}
                  </Row>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background" />
    </section>
  );
};